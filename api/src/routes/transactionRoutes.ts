import { Router } from "express";
import TransactionController, { TransactionParams } from "../controllers/transactionController";

const transactionRoutes = Router();

transactionRoutes.get<TransactionParams>('/:transactionId([0-9]+)', [], TransactionController.getTransactionById);
transactionRoutes.put<TransactionParams>(
  '/:transactionId([0-9]+)',
  [],
  TransactionController.updateTransactionById
);
transactionRoutes.delete<TransactionParams>(
  '/:transactionId([0-9]+)',
  [],
  TransactionController.deleteTransactionById
);

export default transactionRoutes;
