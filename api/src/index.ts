import express from "express";
import helmet from 'helmet';
import cors from 'cors';
import { json } from 'body-parser';
import { createConnection } from 'typeorm';
import routes from "./routes";
import dateParser from './utils';

createConnection(process.env.NODE_ENV).then(() => {
  const app = express();
  const port = 8080;

  app.use(cors());
  app.use(helmet());
  app.use(json({ reviver: dateParser }))

  app.use('/api', routes);

  app.listen(port, () => {
    console.log(`Server started on port ${port}!`);
  });
})
.catch(error => console.log(error));