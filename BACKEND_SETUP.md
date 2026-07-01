# Setup do Backend - Studio Ambar

## 1. Configure o .env

Copie o arquivo `.env.example` para `.env`:

```bash
cp .env.example .env
```

Edite o `.env` com suas credenciais MySQL:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=studio_ambar
DB_PORT=3306
PORT=3000
```

## 2. Configure o Banco de Dados

Execute:

```bash
npm run setup-db
```

Isso cria as tabelas automaticamente no MySQL.

## 3. Inicie o Backend e Frontend

```bash
npm run dev:all
```

Isso inicia:
- Backend na porta 3000
- Frontend com Vite na porta 5173

## 4. Testando

- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

### Se o Backend Falhar

Os contatos são salvos automaticamente no **localStorage** do navegador (menu Admin visualiza).

Quando o backend voltar online, os dados continuarão sincronizando normalmente.

## Estrutura de Pastas

```
backend/
  ├── server.js         # Servidor Express
  ├── db.js             # Pool de conexão MySQL
  └── setupDatabase.js  # Script para criar tabelas
```

## Rotas da API

### Contatos
- `GET /api/contatos` - Lista todos
- `POST /api/contatos` - Cria novo

### Formato esperado
```json
{
  "nome": "João",
  "email": "joao@email.com",
  "telefone": "5599999999"
}
```
