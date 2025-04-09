# Jobs API (Sequelize)

API RESTful para cadastro e gerenciamento de empresas, vagas de emprego e candidatos. Desenvolvida com **Node.js**, **Express**, **TypeScript** e **Sequelize**, conectando-se a um banco **PostgreSQL**.

---

## ✨ Funcionalidades

- Cadastro de **empresas**
- Criação, edição e remoção de **vagas de emprego**
- Cadastro de **candidatos** e associação a vagas

---

## 📁 Estrutura do Projeto

```
src/
├── app.ts                 # Inicialização da aplicação
├── routes.ts              # Definição das rotas da API
│
├── controllers/           # Lógica dos endpoints (CRUD)
│   ├── candidates-controller.ts
│   ├── companies-controller.ts
│   └── jobs-controller.ts
│
├── database/              # Configuração do banco via Sequelize
│   ├── index.ts
│   ├── migrations/        # Estrutura das tabelas
│   └── seeders/           # Dados iniciais
│
└── models/                # Definição dos models Sequelize
    ├── candidate.ts
    ├── company.ts
    ├── job.ts
    └── index.ts

config/sequelize-cli.js    # Configuração do Sequelize CLI
.sequelizerc               # Caminhos customizados do Sequelize
.env                       # Variáveis de ambiente
tsconfig.json              # Configuração do TypeScript
```

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sequelize](https://sequelize.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [dotenv](https://github.com/motdotla/dotenv)

---

## 📆 Instalação e Uso

1. **Clone o repositório**

```bash
git clone https://github.com/Gaabriel22/jobs-api
cd jobs-api-sequelize
```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure o `.env`**

```env
DATABASE_URL=postgres://usuario:senha@localhost:5432/onebitjobs_development
```

4. **Rode as migrations e seeders**

```bash
npx sequelize db:migrate
npx sequelize db:seed:all
```

5. **Inicie o servidor em modo desenvolvimento**

```bash
npm run dev
```

---

## 🔗 Rotas da API

### Candidatos

| Verbo  | Rota              | Ação                   |
| ------ | ----------------- | ---------------------- |
| GET    | `/candidates`     | Listar candidatos      |
| GET    | `/candidates/:id` | Obter candidato por ID |
| POST   | `/candidates`     | Criar novo candidato   |
| PUT    | `/candidates/:id` | Atualizar candidato    |
| DELETE | `/candidates/:id` | Remover candidato      |

### Empresas

| Verbo  | Rota             | Ação                 |
| ------ | ---------------- | -------------------- |
| GET    | `/companies`     | Listar empresas      |
| GET    | `/companies/:id` | Obter empresa por ID |
| POST   | `/companies`     | Criar nova empresa   |
| PUT    | `/companies/:id` | Atualizar empresa    |
| DELETE | `/companies/:id` | Remover empresa      |

### Vagas

| Verbo  | Rota                        | Ação                          |
| ------ | --------------------------- | ----------------------------- |
| GET    | `/jobs`                     | Listar vagas                  |
| GET    | `/jobs/:id`                 | Obter vaga por ID             |
| POST   | `/jobs`                     | Criar nova vaga               |
| PUT    | `/jobs/:id`                 | Atualizar vaga                |
| DELETE | `/jobs/:id`                 | Remover vaga                  |
| POST   | `/jobs/:id/addCandidate`    | Associar candidato a uma vaga |
| POST   | `/jobs/:id/removeCandidate` | Remover candidato da vaga     |

---

## ⚖️ Scripts Disponíveis

| Script     | Comando                     | Descrição                          |
| ---------- | --------------------------- | ---------------------------------- |
| Dev        | `npm run dev`               | Executa com `ts-node-dev`          |
| Migrations | `npx sequelize db:migrate`  | Aplica todas as migrations         |
| Seeders    | `npx sequelize db:seed:all` | Popula o banco com dados fictícios |

---

## 👤 Autor

Desenvolvido por Gabriel - [Gaabriel22](https://github.com/Gaabriel22)
