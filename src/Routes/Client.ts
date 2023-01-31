import { Router } from 'express';
import { ClientController } from '../Controllers/ClientController';

const clientRouter = Router();

const client = new ClientController();

clientRouter.post('/client', (req, res) => client.create(req, res));
// clientRouter.get('/client', GetAllClients);

export default clientRouter;
