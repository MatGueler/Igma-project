import { ClientRepository } from '../Repositories/ClientRepoitory';
import { conflictError, notFoundError } from '../Utils/ErrorUtils';
import { CPFValidator } from './CPFService';

export class ClientService extends CPFValidator {
	private clientRepository = new ClientRepository();

	async createClient(name: string, cpf: string, birthdate: string) {
		// Remove all chars equals to "-" and "."
		this.numberCPF = cpf.replace(/[. -]/g, '');

		this.veriffyCPFValidate();
		this.verifyCpfExist();

		return await this.clientRepository.create(name, this.numberCPF, birthdate);
	}

	async getClient(cpf: string) {
		// Remove all chars equals to "-" and "."
		this.numberCPF = cpf.replace(/[. -]/g, '');

		// Verify cpf format
		this.veriffyCPFValidate();

		// Verify user exist on database
		await this.verifyCpfNotExist();

		return this.clientRepository.getClientBy(this.numberCPF);
	}

	async verifyCpfExist() {
		const clientByCPF = await this.clientRepository.getClientBy(this.numberCPF);
		if (clientByCPF) {
			throw conflictError('This CPF already has been registered');
		}
	}

	async verifyCpfNotExist() {
		const clientByCPF = await this.clientRepository.getClientBy(this.numberCPF);
		if (!clientByCPF) {
			throw notFoundError('This CPF was not found');
		}
	}
}
