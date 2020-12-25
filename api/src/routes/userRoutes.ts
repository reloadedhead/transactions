import { Router } from 'express';
import { ValidationError } from 'class-validator';
import User from '../entities/user';
import UserController from '../controllers/userController';
import { ParamsDictionary } from 'express-serve-static-core';

const userRoutes = Router();

// Post new user
userRoutes.post<
  ParamsDictionary, 
  ValidationError[] | string, 
  Omit<User, 'id' | 'transactions'>
>('/', [], UserController.postUser);

export default userRoutes;
