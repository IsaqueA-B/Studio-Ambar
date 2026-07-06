# Studio Âmbar

O Studio Âmbar é um projeto de site institucional e painel administrativo para uma agência de branding, design e comunicação visual. A aplicação combina frontend em React com backend em Node.js/Express e banco de dados MySQL para exibir e armazenar conteúdos relacionados a serviços, clientes, contatos e portfólio.

## Visão geral

O sistema foi estruturado para oferecer:
- uma interface pública com páginas como Home, Sobre, Serviços, Portfólio, Blog e Contato;
- um fluxo de cadastro e login para usuários;
- integração com um backend para persistir contatos, clientes, serviços, projetos, usuários e itens de portfólio;
- um painel administrativo para visualizar mensagens recebidas.

## Equipe
- Isaque E. A. Bastos
- Emanuel A. S. Hubner
- Cássio R. Schultz
- Leonardo A. Hemmilla
- Guilherme Z. Thomas

## Tecnologias utilizadas
- React
- Vite
- JavaScript
- React Router
- Node.js
- Express
- MySQL
- mysql2
- dotenv
- CORS

## Estrutura do projeto

- src/pages: páginas públicas e administrativas
- src/hooks: integração com a API
- src/services/api.js: funções de comunicação com o backend
- src/componentes: componentes reutilizáveis e contexto de usuário
- backend/: servidor Express e scripts de banco de dados

## Requisitos
- Node.js 18 ou superior
- npm
- MySQL em execução

## Instalação

1. Clone o repositório.
2. Entre na pasta do projeto.
3. Instale as dependências:

```bash
npm install
```

## Variáveis de ambiente

Crie um arquivo .env na raiz do projeto com base no arquivo .env.example.

Exemplo:

```env
DB_HOST=localhost
DB_PORT=3306
DB_NAME=studio_ambar
DB_USER=root
DB_PASSWORD=sua_senha
PORT=3000
VITE_API_BASE=http://localhost:3000/api
```

## Configuração do banco de dados

Antes de iniciar o backend, crie o banco e as tabelas:

```bash
npm run setup-db
```

## Como executar

### Frontend e backend juntos

```bash
npm run dev:all
```

Isso inicia:
- o backend em http://localhost:3000
- o frontend em http://localhost:5173

### Executar separadamente

```bash
npm run server
```

```bash
npm run dev
```

## Entidades principais

- Clientes: dados de clientes e empresas
- Serviços: catálogo de serviços com valor e prazo
- Projetos: relacionamento entre cliente e serviço
- Portfólio: itens públicos exibidos na página de portfólio
- Contatos: mensagens enviadas pelo formulário de contato
- Usuários: contas para acesso administrativo e autenticação

## Rotas da API

### Clientes
- GET /api/clientes
- POST /api/clientes
- PUT /api/clientes/:id
- DELETE /api/clientes/:id

### Serviços
- GET /api/servicos
- POST /api/servicos
- PUT /api/servicos/:id
- DELETE /api/servicos/:id

### Projetos
- GET /api/projetos
- POST /api/projetos
- PUT /api/projetos/:id
- DELETE /api/projetos/:id

### Portfólio
- GET /api/portfolio
- POST /api/portfolio
- PUT /api/portfolio/:id
- DELETE /api/portfolio/:id

### Contatos
- GET /api/contatos
- POST /api/contatos
- PUT /api/contatos/:id
- DELETE /api/contatos/:id

### Usuários
- GET /api/usuarios
- POST /api/usuarios
- PUT /api/usuarios/:id
- DELETE /api/usuarios/:id

## Observações importantes

- As páginas públicas agora buscam dados do backend quando disponíveis.
- O formulário de contato envia mensagens para o banco.
- A área administrativa exibe os contatos recebidos.
- O fluxo de login e cadastro foi integrado ao contexto de usuário e à tabela de usuários do banco.

## Status do projeto

A estrutura principal do projeto já está consolidada, com navegação, páginas, integração com backend e persistência em banco de dados. O próximo passo natural é aprimorar a identidade visual e expandir os recursos administrativos.
