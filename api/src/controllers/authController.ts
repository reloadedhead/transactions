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
    if (!req.params.email || !req.params.password) {
      res.status(400).send();
    }
    try {
      const user: User = await userRepository
        .createQueryBuilder('user')
        .where("user.email = :email", { email: req.params.email })
        .getOneOrFail();
      if (user.password !== req.params.password) {
        res.status(401).send();
      } else {
        res.status(200).json('token');
      }
    } catch (error) {
      res.status(401).send();
    }
  };
}
