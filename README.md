# <p align = "center"> Igma - project </p>

## :clipboard: Descrição

O projeto **supermercash** é baseado no problema onde um usuário tem vários mercados próximos a sua residência, e fica na dúvida de qual dos mercados sua **lista de compras** sairia mais barata?

O aplicativo propõe que o usuário monte sua lista de compras com os itens desejados, em seguida serão apresentados os preços de sua compra em cada um dos mercados, disponibilizados em ordem, para que o usuário possa facilmente escolher o melhor **custo-benefício** .

Além de perceber o melhor valor para a compra, o usuário pode realizar a compra pelo próprio aplicativo, utilizando as informações do **cartão do usuário**.

## :computer: Tecnologias e Conceitos

- REST APIs
- Express
- Node.js (v16.17.0)
- Typescript

---

## :rocket: Rotas

```yml
POST '/client'
- Rota para criar um novo cliente;
- headers: { }
- body: {
    name: "User Name",
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
GET '/clients' ou '/clients?page=1&&limit=5'
- Route start for the user to choose the next step in the application
- headers: { }
- body: { }
```

- **OBS: O USUÁRIO PODE ESCOLHER A PÁGINA E O NÚMERO DE RESULTDOS QUE APARECERÃO NA PÁGINA POR MEIO DE QUERY PARAMS.**
  <br/>VALOR PADRÃO:
  PAGE = 1 e LIMIT = 10

---

## 🏁 Rodando a aplicação

- Arquivo **.env**

Crie e preencha o arquivo **.env** da sua aplicação. Basta copiar os dados do **.env.exemple**.

- Banco de dados

O banco de dado utilizado foi o [postgres](https://www.postgresql.org/) com a ORM do [prisma](https://www.prisma.io/), então, verifique se possui o postgres instalado na sua máquina.

Ao rodar o comando de inicialização do servidor, o banco será criado. Porém, caso queira construí-lo manualmente, rode o comando abaixo:

```
napx prisma migrate dev
```

- Local

O projeto possui algumas dependências essenciais que requerem a última versão estável de [Node.js](https://nodejs.org/en/download/) e [npm](https://www.npmjs.com/). Portanto, certifique-se de que sua versão em execução local seja compatível.

Primeiro, clone este repositório em sua máquina:

```
git clone git@github.com:MatGueler/Igma-project.git
```

Em seguida, dentro da pasta, execute o seguinte comando para instalar as dependências.

```
npm install
```

Terminado o processo, basta iniciar a aplicação:

```
npm run start
```

- Docker

Para inicializar a aplicação utilizando Docker, é necessário que o docker esteja instalado na sua máquina. Para utilizar nesse projeto, basta inicializar o comando abaixo, sempre lembrando de alterar o arquivo **.env** corretamente:

```
docker:start
```

---

## :hammer: Testando a aplicação

- Testes manuais

Para testar a aplicação, criamos uma collection, o arquivo json está na pasta de Tests.

- Testes automáticos

Os testes automátizados foram criados utilizando o jest, o primeiro passo para testar a aplicação é criar e preencher um arquivo **.env.test** com as variaveis de ambiente presentes na pasta **.env.exemple**.

- **OBS:**
  Lembre de utilizar a boa prática nos testes, utilize bancos diferentes para a produção e os testes. Um padrão de nomeclatura pode ser o sufixo '\_test' após o nome do banco. Ex: nomeDoBanco_test

Para iniciar os testes, basta inserir o comando abaixo na linha de comando:

```
npm test
```
