import { Router } from 'express';
import clientRouter from './Client';

const routes = Router();

routes.use(clientRouter);

export default routes;
