import { validate, ValidationError } from "class-validator";
import { ParamsDictionary, Response, Request } from 'express-serve-static-core';
import UserValidator from "../validators/userValidator";
import { getRepository } from "typeorm";
import User from "../entities/user";
import Transaction from "../entities/transaction";
import TransactionValidator from "../validators/transactionValidator";

export interface PostUserParams extends ParamsDictionary {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatedPassword: string;
}

interface PostTransactionParams extends ParamsDictionary {
  userId: string;
  amount: string;
  description: string
  type: string;
}

export default class UserController {
  static postUser = async (
    req: Request<
      PostUserParams, 
      string | ValidationError[],
      Omit<User, 'id' | 'transactions'>
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
    (newTransaction as Transaction).user = req.params.userId;
    try {
      res.status(200).send((await transactionRepository.save(newTransaction)).id.toString())
    } catch (error) {
      res.status(500).send(error)
    }
  };
}