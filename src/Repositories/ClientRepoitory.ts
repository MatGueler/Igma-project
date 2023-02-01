import prisma from '../Database/prisma';

export class ClientRepository {
	async create(name: string, cpf: string, birthday: string) {
		const bithdateFormat = new Date(
			new Date(birthday).toLocaleDateString('pt-BR')
		);
		return await prisma.clients.create({
			data: { name, cpf, birthday: bithdateFormat },
		});
	}

	async getClientBy(cpf: string) {
		return await prisma.clients.findFirst({
			where: { cpf },
		});
	}

	async getClients(initial: number, limit: number) {
		return prisma.clients.findMany({
			skip: initial,
			take: limit,
		});
	}
}
