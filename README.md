# 🍔 Casa do Hambúrguer — Backend

API REST desenvolvida para uma aplicação de hamburgueria, com funcionalidades de autenticação de usuários, gerenciamento de produtos e controle de carrinho de compras.

O projeto foi desenvolvido utilizando **Node.js, Express, TypeScript, Prisma ORM e PostgreSQL**, aplicando conceitos de desenvolvimento backend, integração com banco de dados, autenticação e organização de rotas e controllers.

## 🚀 Tecnologias utilizadas

- **Node.js** — Ambiente de execução JavaScript.
- **Express 5** — Framework para construção da API REST.
- **TypeScript** — Tipagem estática e organização do código.
- **PostgreSQL** — Banco de dados relacional.
- **Prisma ORM** — Modelagem e comunicação com o banco de dados.
- **JWT (JSON Web Token)** — Autenticação de usuários.
- **Bcrypt** — Criptografia de senhas.
- **Cookie Parser** — Leitura de cookies enviados nas requisições.
- **CORS** — Configuração de comunicação entre aplicações.

## 📋 Funcionalidades

### Usuários e autenticação

- Cadastro de usuários.
- Login com e-mail e senha.
- Criptografia de senhas utilizando Bcrypt.
- Autenticação utilizando JWT.
- Gerenciamento de sessão através de cookies.
- Consulta dos dados do usuário autenticado.
- Logout.

### Produtos

- Consulta dos produtos cadastrados.
- Exclusão de produtos.
- Verificação de autenticação e autorização para operações administrativas.

### Carrinho de compras

- Consulta dos itens do carrinho do usuário autenticado.
- Adição de produtos ao carrinho.
- Incremento automático da quantidade quando o produto já existe no carrinho.
- Relacionamento entre usuários, produtos e itens do carrinho.

## 🗂️ Estrutura do projeto

```text
back-end-burg/
├── generated/
├── prisma/
│   ├── migrations/
│   └── schema.prisma
├── src/
│   ├── controller/
│   │   ├── cartItem-controller.ts
│   │   ├── product-controller.ts
│   │   └── user-controller.ts
│   ├── middlewares/
│   │   └── auth.ts
│   ├── db.ts
│   └── routes.ts
├── .env
├── .gitignore
├── index.ts
├── package.json
├── prisma.config.ts
└── tsconfig.json
```

## 🛠️ Instalação e execução

### Pré-requisitos

Antes de começar, você precisará ter instalado:

- Node.js
- npm
- PostgreSQL

### 1. Clone o repositório

```bash
git clone https://github.com/ecalazans/back-end-burg.git
```

### 2. Acesse a pasta do projeto

```bash
cd back-end-burg
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto.

```env
DATABASE_URL="postgresql://USUARIO:SENHA@localhost:5432/NOME_DO_BANCO?schema=public"

JWT_SECRET="SUA_CHAVE_SECRETA"
```

Substitua os valores pelas configurações do seu ambiente PostgreSQL.

**Importante:** Não compartilhe suas credenciais ou publique o arquivo `.env` no GitHub.

### 5. Configure o banco de dados

Execute as migrations do Prisma:

```bash
npx prisma migrate dev
```

### 6. Inicie a aplicação

```bash
npm run dev
```

A API estará disponível na porta configurada no projeto.

## 🔗 Rotas da API

As rotas abaixo foram identificadas no arquivo `routes.ts`.

| Método | Endpoint              | Descrição                       |
| ------ | --------------------- | ------------------------------- |
| POST   | `/login`              | Autenticação do usuário         |
| POST   | `/register`           | Cadastro de usuário             |
| GET    | `/me`                 | Consulta do usuário autenticado |
| POST   | `/logout`             | Encerramento da sessão          |
| GET    | `/get-products`       | Consulta dos produtos           |
| DELETE | `/delete-product/:id` | Exclusão de produto             |
| GET    | `/get-cart-items`     | Consulta do carrinho            |
| POST   | `/create-cart-item`   | Adição de produto ao carrinho   |

As rotas protegidas exigem autenticação através do middleware responsável pela validação do usuário.

## 🗄️ Modelagem do banco de dados

O projeto utiliza PostgreSQL com Prisma ORM para gerenciamento dos dados.

### User

Armazena os dados dos usuários cadastrados.

Principais campos:

- `id`
- `name`
- `email`
- `password`
- `cep`
- `admin`

### Product

Armazena os produtos disponíveis na aplicação.

Principais campos:

- `id`
- `name`
- `description`
- `price`
- `category`
- `img`
- `createdAt`

### CartItem

Representa os produtos adicionados ao carrinho de cada usuário.

Principais campos:

- `id`
- `quantity`
- `productId`
- `userId`

### Relacionamentos

- Um usuário pode possuir vários itens no carrinho.
- Um produto pode estar associado a vários itens de carrinho.
- Cada item do carrinho está relacionado a um usuário e a um produto.

## 🔐 Autenticação

A autenticação utiliza JWT para identificar usuários e proteger rotas.

Durante o login, as credenciais são verificadas e a senha é comparada com o hash armazenado no banco de dados.

Após a autenticação, o token é enviado através de um cookie, utilizado pelo middleware para identificar o usuário nas requisições protegidas.

O sistema também possui verificação de permissões administrativas para determinadas operações.

## 📚 Aprendizados

Este projeto faz parte dos meus estudos em desenvolvimento web Full Stack e tem como objetivo consolidar conhecimentos em:

- Desenvolvimento de APIs REST.
- Node.js e Express.
- TypeScript.
- Integração com PostgreSQL.
- Modelagem de dados com Prisma ORM.
- Autenticação e autorização.
- Relacionamentos entre entidades.
- Organização de controllers, rotas e middlewares.
- Integração entre backend e frontend.

## 👨‍💻 Autor

**Erick D. Calazans**

Desenvolvedor Web em formação, estudando tecnologias frontend e backend para construção de aplicações Full Stack.

[GitHub](https://github.com/ecalazans)

---

Projeto desenvolvido para fins de estudo e aprendizado.
