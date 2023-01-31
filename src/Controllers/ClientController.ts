import { Request, Response } from 'express';

export class ClientController {
	private ClientServer;
	constructor() {}

	create(req: Request, res: Response) {
		const {
			name,
			cpf,
			birthday,
		}: { name: string; cpf: string; birthday: string } = req.body;
		let firstSum = 0;
		let secondSum = 0;

		const numberCPF: string = cpf.replace(/[. -]/g, '');

		const firstCheckerCPFNumber = Number(numberCPF[numberCPF.length - 2]);
		const secondCheckerCPFNumber = Number(numberCPF[numberCPF.length - 1]);

		let isEveryEquals: boolean = true;

		for (let i = numberCPF.length; i > 0; i--) {
			const currentNumber = numberCPF[i];
			if (currentNumber !== numberCPF[0]) isEveryEquals = false;
		}

		for (let i = numberCPF.length; i > 0; i--) {
			firstSum += Number(numberCPF[numberCPF.length - i]) * (i - 1);
		}

		for (let i = numberCPF.length; i > 2; i--) {
			firstSum += Number(numberCPF[numberCPF.length - i]) * (i - 1);
		}
		for (let i = numberCPF.length; i >= 2; i--) {
			secondSum += Number(numberCPF[numberCPF.length - i]) * i;
		}
		let firstChecker = 11 - (firstSum % 11);
		let secondChecker = 11 - (secondSum % 11);

		// Primeira verificação de número
		if (firstChecker >= 10) {
			// Para valor maior ou igual que 10, o verificador deve ser zero
			if (firstCheckerCPFNumber !== 0) {
				return res.status(422).send('CPF invalido');
			}
		} else {
			if (firstCheckerCPFNumber !== firstChecker) {
				return res.status(422).send('CPF invalido');
			}
		}
		// Segunda verificação de numero
		if (secondChecker >= 10) {
			if (secondCheckerCPFNumber !== 0) {
				return res.status(422).send('CPF invalido');
			}
		} else {
			if (secondCheckerCPFNumber !== secondChecker) {
				return res.status(422).send('CPF invalido');
			}
		}

		if (numberCPF.length < 11 || numberCPF.length > 11 || !isEveryEquals) {
			return res.status(422).send('CPF invalido');
		}

		return res.status(201).send({ name, cpf, birthday });
	}
}
