# <p align = "center"> Igma - project </p>

## :clipboard: Descrição

Essa aplicação serve para gerenciar o banco de dados com os clientes cadastrados, nessa aplicação é possível:

1.  Criar novos cadastros;
2.  Buscar um usuário cadastrado pelo cpf;
3.  Buscar páginas contendo os usuários cadastrados;

## :computer: Tecnologias e Conceitos

- REST APIs
- Express
- Node.js (v16.17.0)
- Typescript
- Jest

---

## :rocket: Rotas

```yml
POST '/client'
- Rota para criar um novo cliente;
- headers: { }
- body: {
    name: "Nome do cliente",
    cpf: "xxx.xxx.xxx-xx ou xxxxxxxxxxx",
    birthdate: "DD/MM/AAAA",
}
```

```yml
GET '/client'
- Rota para buscar um cliente pelo cpf cadastrado
- headers: { }
- body: {
    cpf: "xxx.xxx.xxx-xx ou xxxxxxxxxxx"
}
```

```yml
GET '/clients' ou '/clients?page=1&&limit'
- Rota para buscar os clientes cadastrados com paginação
- queryParams: {
    page: 'numero' ou '',
    limit: 'numero' ou ''
  }
- headers: { }
- body: { }
```

- **OBS: O USUÁRIO PODE ESCOLHER A PÁGINA E O NÚMERO DE RESULTDOS QUE APARECERÃO NA PÁGINA POR MEIO DE QUERY PARAMS.**
  <br/>VALOR PADRÃO:
  page = 1 e limit = 10

---

## 🏁 Rodando a aplicação

- ### Rodar localmente

O projeto possui algumas dependências essenciais que requerem a última versão estável de [Node.js](https://nodejs.org/en/download/) e [npm](https://www.npmjs.com/). Portanto, certifique-se de que sua versão em execução local seja compatível.

Primeiro, clone este repositório em sua máquina:

```
git clone git@github.com:MatGueler/Igma-project.git
```

Em seguida, dentro da pasta criada, execute o seguinte comando para instalar as dependências.

```
npm install
```

- ### Arquivo **.env**

Crie e preencha o arquivo **.env** da sua aplicação. Basta copiar os dados do **.env.exemple**.

Terminado o processo, basta iniciar a aplicação:

```
npm run start
```

- ### Banco de dados

O banco de dado utilizado foi o [postgres](https://www.postgresql.org/) com a ORM do [prisma](https://www.prisma.io/), então, verifique se possui o postgres está instalado na sua máquina.

Ao rodar o comando de inicialização do servidor, o banco será criado. Porém, caso queira construí-lo manualmente, rode o comando abaixo:

```
npx prisma migrate dev
```

- ### Docker

Para inicializar a aplicação utilizando Docker, é necessário que o [Docker](https://docs.docker.com/) esteja instalado na sua máquina. Para utilizar nesse projeto, basta inicializar o comando abaixo, sempre lembrando de alterar o arquivo **.env** corretamente:

```
docker:start
```

---

## :hammer: Testando a aplicação

- ### Testes manuais

Para testar a aplicação, criamos uma collection, o arquivo json está na pasta de Tests. Assim, basta utilizar esse arquivo para testar em programas como **Thunder Client** ou **Insomnia**.

- ### Testes automáticos

Os testes automátizados foram criados utilizando o jest, o primeiro passo para testar a aplicação é criar e preencher um arquivo **.env.test** com as variaveis de ambiente presentes na pasta **.env.exemple**.

- **OBS:**
  Lembre de utilizar a boa prática nos testes, utilize bancos diferentes para a produção e os testes. Um padrão de nomeclatura pode ser o sufixo '\_test' após o nome do banco. Ex: nomeDoBanco_test

Para iniciar os testes, basta inserir o comando abaixo na linha de comando:

```
npm test
```
