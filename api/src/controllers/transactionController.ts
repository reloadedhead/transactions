import { ParamsDictionary, Request, Response } from "express-serve-static-core";
import Transaction from "../entities/transaction";
import { getRepository } from "typeorm";
import { validate, ValidationError } from "class-validator";
import { UpdateTransactionValidator } from "../validators/transactionValidator";

export interface TransactionParams extends ParamsDictionary {
  transactionId: string;
}
export default class TransactionController {
  static getTransactionById = async (
    req: Request<TransactionParams>,
    res: Response<string | Transaction>
  ) => {
    const transactionId = req.params.transactionId;
    const transactionRepository = getRepository(Transaction, process.env.NODE_ENV);
    try {
      res.status(200).json(await transactionRepository.findOneOrFail(transactionId))
    } catch (error) {
      res.status(400).send(error);
    }
  };

  static updateTransactionById = async (
    req: Request<
    TransactionParams,
      string | ValidationError[],
      Partial<Omit<Transaction, 'id' | 'user'>>
    >,
    res: Response<string | ValidationError[]>
  ) => {
    const transactionRepository = getRepository(Transaction, process.env.NODE_ENV);
    let transaction;
    try {
      transaction = await transactionRepository.findOneOrFail(req.params.transactionId);
    } catch (error) {
      res.status(404).send('Transaction not found');
      return;
    }

    let updatedTransaction = Object.assign(new UpdateTransactionValidator, req.body);
    const errors = await validate(updatedTransaction, {
      whitelist: true,
      forbidNonWhitelisted: true
    });
    if (errors.length > 0) {
      res.status(400).json(errors);
      return;
    }
    updatedTransaction = transactionRepository.merge(transaction, updatedTransaction);
    try {
      res.status(201).json((await transactionRepository.save(updatedTransaction)).id.toString());
    } catch (error) {
      res.status(500).send(errors);
    }
  };
}