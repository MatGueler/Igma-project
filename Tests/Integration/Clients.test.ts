import supertest from 'supertest';
import prisma from '../../src/Database/prisma';
import server from '../../src/Index';
import dotenv from 'dotenv';
import { deleteFactory } from '../Factories/Delete';
import { ClientFactory } from '../Factories/Client';

dotenv.config();

beforeEach(async () => {
	await deleteFactory.deleteAllData();
});

afterAll(async () => {
	// await deleteFactory.deleteAllData();

	prisma.$disconnect();
});

const agent = supertest(server);

describe('GET /client', () => {
	const clientFactory = new ClientFactory();
	it('Get clients by page using default values', async () => {
		for (let i = 0; i < 15; i++) {
			const body = clientFactory.createClient();
			await agent.post(`/client`).send(body);
		}
		const result = await agent.get(`/clients`).send();
		expect(result.status).toBe(200);
		expect(result.body).toHaveLength(10);
	});

	it('Get clients in second page using default limit value', async () => {
		for (let i = 0; i < 15; i++) {
			const body = clientFactory.createClient();
			await agent.post(`/client`).send(body);
		}
		const result = await agent.get(`/clients?page=2`).send();
		expect(result.status).toBe(200);
		expect(result.body).toHaveLength(5);
	});

	it('Get clients by first page with limit equals to 3', async () => {
		for (let i = 0; i < 15; i++) {
			const body = clientFactory.createClient();
			await agent.post(`/client`).send(body);
		}
		const result = await agent.get(`/clients?page=1&&limit=3`).send();
		expect(result.status).toBe(200);
		expect(result.body).toHaveLength(3);
	});

	it('Get clients using invalid values to page and limit', async () => {
		for (let i = 0; i < 15; i++) {
			const body = clientFactory.createClient();
			await agent.post(`/client`).send(body);
		}
		const result = await agent.get(`/clients?page=-1&&limit=-3`).send();
		expect(result.status).toBe(422);
	});
});

describe('GET /client', () => {
	const clientFactory = new ClientFactory();
	it('Get client by cpf', async () => {
		const body = clientFactory.createClient();

		await agent.post(`/client`).send(body);

		const result = await agent.get('/client').send({ cpf: body.cpf });

		expect(result.status).toBe(200);
	});

	it('Get client by cpf when cpf was not registered', async () => {
		const body = clientFactory.createClient();

		const result = await agent.get('/client').send({ cpf: body.cpf });

		expect(result.status).toBe(404);
	});
});

describe('POST /client', () => {
	const clientFactory = new ClientFactory();
	it('Create new client', async () => {
		const body = clientFactory.createClient();

		const result = await agent.post(`/client`).send(body);
		expect(result.status).toBe(201);
	});

	it('Try create new client with same informations', async () => {
		const body = clientFactory.createClient();

		await agent.post(`/client`).send(body);

		const result = await agent.post(`/client`).send(body);
		expect(result.status).toBe(409);
	});

	it('Try create new client with invalid cpf with all of numbers equals', async () => {
		const body = clientFactory.createClient();

		const result = await agent
			.post(`/client`)
			.send({ ...body, cpf: '11111111111' });
		expect(result.status).toBe(422);
	});

	it('Try create new client with invalid cpf with length less than 11', async () => {
		const body = clientFactory.createClient();

		const result = await agent.post(`/client`).send({ ...body, cpf: '111111' });
		expect(result.status).toBe(422);
	});
});
