import { Router } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import AuthController from "../controllers/authController";

const authRoutes = Router();

// Login
authRoutes.get<ParamsDictionary>('/login', [], AuthController.login);

export default authRoutes;
