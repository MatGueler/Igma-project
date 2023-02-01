import fakerbr from 'faker-br';

export class ClientFactory {
	createClient() {
		const body = {
			name: 'Mateus',
			cpf: fakerbr.br.cpf(),
			birthday: '05/11/1998',
		};

		return body;
	}
}
