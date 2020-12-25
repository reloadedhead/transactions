import { ParamsDictionary, Request, Response } from "express-serve-static-core";
import Transaction from "../entities/transaction";
import { getRepository } from "typeorm";

export default class TransactionController {
  static getTransactionById = async (
    req: Request<ParamsDictionary>,
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
}