import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import routes from './Routes/Index';
import { errorHandlerMiddleware } from './Middlewares/ErrorHandler';

const server = express();
server.use(express.json());
server.use(cors());

server.use(routes);
server.use(errorHandlerMiddleware);

export default server;
