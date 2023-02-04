import { Router } from 'express';
import { ClientController } from '../Controllers/ClientController';

const clientRouter = Router();

const client = new ClientController();

clientRouter.post('/client', (req, res) => client.create(req, res));
clientRouter.get('/client', (req, res) => client.getClientByCPF(req, res));
clientRouter.get('/clients/all', (req, res) => client.getAllClients(req, res));

export default clientRouter;
