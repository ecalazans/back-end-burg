# 🍔 Casa do Hambúrguer

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=20&pause=1000&color=F59E0B&center=true&vCenter=true&width=435&lines=API+REST+para+hamburgueria;Node.js+%7C+TypeScript;Express+%7C+Prisma+%7C+PostgreSQL" alt="Texto animado">

</div>

---

## 📌 Sobre o projeto

API REST desenvolvida para uma aplicação de hamburgueria, com funcionalidades de autenticação de usuários, gerenciamento de produtos e controle de carrinho de compras.

O projeto foi desenvolvido utilizando Node.js, Express, TypeScript, Prisma ORM e PostgreSQL, aplicando conceitos de desenvolvimento back-end, integração com banco de dados, autenticação e organização de rotas e controllers.

## 🛠️ Tecnologias

<div align="center">

[![Tecnologias](https://skillicons.dev/icons?i=nodejs,ts,express,postgres,prisma&perline=5)](https://skillicons.dev)

</div>

## 📋 Funcionalidades

### 👤 Usuários e autenticação

- Cadastro de usuários.
- Login com e-mail e senha.
- Criptografia de senhas utilizando Bcrypt.
- Autenticação utilizando JWT.
- Verificação de sessão do usuário.
- Logout.

### 🍔 Produtos

- Listagem de produtos cadastrados.
- Exclusão de produtos.
- Controle de acesso administrativo para exclusão.

### 🛒 Carrinho de compras

- Listagem dos itens do carrinho.
- Adição de produtos ao carrinho.
- Associação dos itens ao usuário autenticado.
- Controle de quantidade dos produtos.
- Incremento da quantidade quando o produto já existe no carrinho.

## 🔐 Autenticação

A aplicação utiliza JWT para autenticação dos usuários.

As rotas protegidas utilizam middleware para validar a autenticação e identificar o usuário responsável pela requisição.

O sistema também possui controle de acesso administrativo para operações específicas, como a exclusão de produtos.

## 📡 Endpoints

### Usuários

| Método | Endpoint    | Descrição                     |
| ------ | ----------- | ----------------------------- |
| POST   | `/register` | Cadastro de usuário           |
| POST   | `/login`    | Autenticação                  |
| GET    | `/me`       | Consultar usuário autenticado |
| POST   | `/logout`   | Encerrar sessão               |

### Produtos

| Método | Endpoint              | Descrição       |
| ------ | --------------------- | --------------- |
| GET    | `/get-products`       | Listar produtos |
| DELETE | `/delete-product/:id` | Excluir produto |

### Carrinho

| Método | Endpoint            | Descrição                     |
| ------ | ------------------- | ----------------------------- |
| GET    | `/get-cart-items`   | Listar itens do carrinho      |
| POST   | `/create-cart-item` | Adicionar produto ao carrinho |

## ⚙️ Como executar o projeto

### Pré-requisitos

- Node.js
- PostgreSQL
- npm

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

Crie um arquivo `.env` na raiz do projeto e configure:

```env
DATABASE_URL="sua_url_do_postgresql"
JWT_SECRET="sua_chave_secreta"
```

Utilize suas próprias credenciais e mantenha o arquivo `.env` fora do repositório.

### 5. Execute o servidor

```bash
npm run dev
```

O servidor será iniciado utilizando o script de desenvolvimento configurado no projeto.

## 🗄️ Banco de dados

O projeto utiliza PostgreSQL para armazenamento dos dados e Prisma ORM para comunicação com o banco.

A estrutura possui os seguintes modelos:

- **User:** informações dos usuários e autenticação.
- **Product:** informações dos produtos.
- **CartItem:** relacionamento entre usuários, produtos e quantidades no carrinho.

## 📚 Aprendizados

Durante o desenvolvimento, foram praticados conceitos de:

- Desenvolvimento de APIs REST.
- TypeScript no back-end.
- Organização de controllers e rotas.
- Autenticação e autorização.
- Criptografia de senhas.
- Relacionamentos entre tabelas.
- Prisma ORM e PostgreSQL.
- Middleware de autenticação.
- Manipulação de requisições HTTP.

## 👨‍💻 Desenvolvedor

**Erick Calazans**

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github)](https://github.com/ecalazans)
