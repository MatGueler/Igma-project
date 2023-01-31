import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import routes from './Routes/Index';

const server = express();
server.use(express.json());
server.use(cors());

server.use(routes);

export default server;
