import { Router } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import TransactionController from "../controllers/transactionController";

const transactionRoutes = Router();

transactionRoutes.get<ParamsDictionary>('/:transactionId([0-9]+)', [], TransactionController.getTransactionById);

export default transactionRoutes;
