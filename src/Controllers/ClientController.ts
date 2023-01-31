import { Request, Response } from 'express';
import { ClientService } from '../Services/ClientService';

export class ClientController {
	private clientService = new ClientService();

	async create(req: Request, res: Response) {
		const {
			name,
			cpf,
			birthday,
		}: { name: string; cpf: string; birthday: string } = req.body;

		await this.clientService.createClient(name, cpf, birthday);

		return res.status(201).send({ name, cpf, birthday });
	}

	async getClientByCPF(req: Request, res: Response) {
		const { cpf }: { cpf: string } = req.body;

		const client = await this.clientService.getClient(cpf);

		return res.status(201).send(client);
	}

	async getAllClients(req: Request, res: Response) {
		const { page = 1, limit = 10 } = req.query;

		const clients = await this.clientService.getAllClients(
			Number(page),
			Number(limit)
		);

		return res.status(201).send(clients);
	}
}
