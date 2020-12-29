import express from "express";
import helmet from 'helmet';
import cors from 'cors';
import { createConnection } from 'typeorm';

createConnection(process.env.NODE_ENV).then(() => {
  const app = express();
  const port = 8080;

  app.use(cors());
  app.use(helmet());

  app.listen(port, () => {
    console.log(`Server started on port ${port}!`);
  });
})
.catch(error => console.log(error));