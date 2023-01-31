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

		await this.clientService.verifyCpf(name, cpf, birthday);
		return res.status(201).send({ name, cpf, birthday });
	}
}
