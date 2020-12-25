import { Router } from 'express';
import { ValidationError } from 'class-validator';
import User from '../entities/user';
import UserController from '../controllers/userController';
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
  ParamsDictionary,
  ValidationError[] | string,
  Omit<Transaction, 'id' | 'user'>
>('/:userId([0-9]+)/transaction', UserController.postTransaction);

export default userRoutes;
