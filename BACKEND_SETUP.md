# Setup do Backend - Studio Ambar

## 1. Configure o arquivo .env

Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

```env
DB_HOST=localhost
DB_PORT=3306
DB_NAME=studio_ambar
DB_USER=root
DB_PASSWORD=sua_senha
PORT=3000
VITE_API_BASE=http://localhost:3000/api
```

Você também pode usar o arquivo .env.example como referência.

## 2. Crie o banco de dados no MySQL

Antes de rodar a aplicação, certifique-se de que o MySQL esteja ativo e que o banco exista.

Exemplo:

```sql
CREATE DATABASE studio_ambar;
```

## 3. Crie as tabelas automaticamente

Execute:

```bash
npm run setup-db
```

Esse comando roda o script de criação das tabelas no banco configurado.

## 4. Inicie a aplicação

Para subir frontend e backend ao mesmo tempo:

```bash
npm run dev:all
```

As portas padrão são:
- Frontend: http://localhost:5173
- Backend: http://localhost:3000

## 5. Estrutura do backend

```text
backend/
  ├── server.js         # servidor Express com as rotas da API
  ├── db.js             # conexão com o MySQL
  └── setupDatabase.js  # script de criação das tabelas
```

## 6. Rotas principais

### Contatos
- GET /api/contatos
- POST /api/contatos
- PUT /api/contatos/:id
- DELETE /api/contatos/:id

### Serviços
- GET /api/servicos
- POST /api/servicos
- PUT /api/servicos/:id
- DELETE /api/servicos/:id

### Clientes
- GET /api/clientes
- POST /api/clientes
- PUT /api/clientes/:id
- DELETE /api/clientes/:id

### Portfólio
- GET /api/portfolio
- POST /api/portfolio
- PUT /api/portfolio/:id
- DELETE /api/portfolio/:id

## 7. Observações

- O frontend usa a variável VITE_API_BASE para encontrar o backend.
- O formulário de contato e a área administrativa já estão preparados para trabalhar com essa API.
- Se o backend não estiver disponível, as páginas podem exibir estados de fallback, mas o fluxo principal é via banco de dados.
