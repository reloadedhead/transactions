import { Router } from 'express';
import { ValidationError } from 'class-validator';
import User from '../entities/user';
import UserController, { PostTransactionParams } from '../controllers/userController';
import { ParamsDictionary } from 'express-serve-static-core';
import Transaction from '../entities/transaction';

const userRoutes = Router();

// Post new user
userRoutes.post<
  ParamsDictionary, 
  ValidationError[] | string, 
  Omit<User, 'id' | 'transactions'>
>('/', [], UserController.postUser);

userRoutes.post<
  PostTransactionParams,
  ValidationError[] | string,
  Omit<Transaction, 'id' | 'idUser'>
>('/:userId([0-9]+)/transaction', UserController.postTransaction);

userRoutes.get<
  PostTransactionParams,
  ValidationError[] | string
>('/:userId([0-9]+)/transaction', UserController.getAllTransactions);

export default userRoutes;
