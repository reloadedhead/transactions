import { validate, ValidationError } from "class-validator";
import { ParamsDictionary, Response, Request } from 'express-serve-static-core';
import UserValidator from "../validators/userValidator";
import { getRepository } from "typeorm";
import User from "../entities/user";

export interface PostUserParams extends ParamsDictionary {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatedPassword: string;
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
}