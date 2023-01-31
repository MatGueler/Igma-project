import { Request, Response } from 'express';
import { ClientService } from '../Services/ClientService';

export class ClientController {
	private clientService = new ClientService();
	constructor() {}

	create(req: Request, res: Response) {
		const {
			name,
			cpf,
			birthday,
		}: { name: string; cpf: string; birthday: string } = req.body;

		const verifyCPF: boolean = this.clientService.verifyCpf(cpf);

		if (!verifyCPF) {
			return res.status(422).send('CPF invalido');
		}

		return res.status(201).send({ name, cpf, birthday });
	}
}
