import { ParamsDictionary, Response, Request } from "express-serve-static-core";
import User from "../entities/user";
import { getRepository } from "typeorm";

interface AuthParams extends ParamsDictionary {
  email: string;
  password: string;
}

export default class AuthController {
  static login = async (
    req: Request<AuthParams>,
    res: Response<string>
  ) => {
    const userRepository = getRepository(User, process.env.NODE_ENV);
    if (!req.query.email || !req.query.password) {
      res.status(400).send("no email or password");
      return;
    }
    try {
      const user: User = await userRepository
        .createQueryBuilder('user')
        .where("user.email = :email", { email: req.query.email })
        .getOneOrFail();
      if (user.password !== req.query.password) {
        res.status(401).send('invalid password');
      } else {
        res.status(200).json('token');
      }
    } catch (error) {
      res.status(401).send();
    }
  };
}
