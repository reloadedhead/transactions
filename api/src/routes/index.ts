import { Router } from "express";
import userRoutes from "./userRoutes";
import authRoutes from "./authRoutes";
import transactionRoutes from "./transactionRoutes";

const routes = Router();

routes.use('/user', userRoutes);
routes.use('/', authRoutes);
routes.use('/transaction', transactionRoutes);

export default routes;
