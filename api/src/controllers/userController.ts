import { validate, ValidationError } from "class-validator";
import { ParamsDictionary, Response, Request } from 'express-serve-static-core';
import UserValidator from "../validators/userValidator";
import { getRepository } from "typeorm";
import User from "../entities/user";
import Transaction from "../entities/transaction";
import { TransactionValidator } from "../validators/transactionValidator";

export interface PostUserBody extends User {
  repeatedPassword: string;
}

export interface PostTransactionParams extends ParamsDictionary {
  userId: string;
}

export default class UserController {
  static postUser = async (
    req: Request<
      ParamsDictionary, 
      string | ValidationError[],
      Omit<PostUserBody, 'id' | 'transactions'>
    >,
    res: Response<string | ValidationError[]>
  ) => {
    const userRepository = getRepository(User, process.env.NODE_ENV);
    const { repeatedPassword, ...body} = req.body;
    const user = Object.assign(new UserValidator(), body);
    const errors = await validate(user, {
      whitelist: true,
      forbidNonWhitelisted: true
    });
    if (errors.length > 0) {
      res.status(400).json(errors);
      return;
    } else if (body.password !== repeatedPassword) {
      res.status(400).json('passwords do not match');
    } else {
      try {
        res.status(200).json((await userRepository.save(user)).id.toString())
      } catch (error) {
        res.status(500).json(error);
      }
    }
  };

  static postTransaction = async (
    req: Request<
      PostTransactionParams,
      ValidationError[] | string,
      Omit<Transaction, 'id' | 'idUser'>
    >,
    res: Response<ValidationError[] | string>
  ) => {
    const newTransaction = Object.assign(new TransactionValidator, req.body);
    const errors = await validate(newTransaction, {
      whitelist: true,
      forbidNonWhitelisted: true
    });
    if (errors.length > 0) {
      res.status(400).send(errors);
      return;
    }

    const userRepository = getRepository(User, process.env.NODE_ENV);
    try {
      await userRepository.findOneOrFail(req.params.userId)
    } catch (error) {
      res.status(400).send('user does not exist');
      return;
    }

    const transactionRepository = getRepository(Transaction, process.env.NODE_ENV);
    (newTransaction as Transaction).idUser = parseInt(req.params.userId);
    try {
      res.status(200).send((await transactionRepository.save(newTransaction)).id.toString())
    } catch (error) {
      res.status(500).send(error)
    }
  };

  static getAllTransactions = async (
    req: Request<
      PostTransactionParams,
      ValidationError[] | string
    >,
    res: Response<ValidationError[] | string | Transaction[]>
  ) => {
    try {
      const transactionRepository = getRepository(Transaction, process.env.NODE_ENV);
      const transactions = await transactionRepository.find({ where: { 'idUser': req.params.userId } })
      res.status(200).json(transactions);
      return;
    } catch (error) {
      res.status(400).send("invalid user");
      return;
    }
  };
}