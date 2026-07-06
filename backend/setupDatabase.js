import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const envFile = path.resolve(__dirname, '../.env');

dotenv.config({ path: envFile });

const requiredEnv = ['DB_HOST', 'DB_USER', 'DB_PASSWORD', 'DB_NAME'];
const missingEnv = requiredEnv.filter((key) => !process.env[key]);
if (missingEnv.length) {
 throw new Error(`Missing required environment variables: ${missingEnv.join(', ')}`);
}

async function setupDatabase() {
 try {
 const connection = await mysql.createConnection({
 host: process.env.DB_HOST,
 user: process.env.DB_USER,
 password: process.env.DB_PASSWORD,
 port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
 multipleStatements: true,
 });
 await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\``);
 await connection.query(`USE \`${process.env.DB_NAME}\``);

 const tableQueries = [
 `CREATE TABLE IF NOT EXISTS clientes (
    id              INT AUTO_INCREMENT PRIMARY KEY,
    nome_pessoa     VARCHAR(150) NOT NULL,
    nome_empresa    VARCHAR(150),
    telefone        BIGINT(11),
    email           VARCHAR(255),
    cnpj            BIGINT(18) UNIQUE,
    cep             BIGINT(9)
 );`,
 `CREATE TABLE IF NOT EXISTS servicos (
    id              INT AUTO_INCREMENT PRIMARY KEY,
    tipo_servico    VARCHAR(100) NOT NULL,
    valor           DECIMAL(10,2) NOT NULL,
    prazo           INT(8)
 );`,
 `CREATE TABLE IF NOT EXISTS projetos (
    id                  INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente          INT NOT NULL,
    id_servico          INT NOT NULL,
    data_inicioProjeto  DATE NOT NULL,
    data_finalProjeto   DATE,
    CONSTRAINT fk_projetos_cliente
        FOREIGN KEY (id_cliente) REFERENCES clientes(id)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT fk_projetos_servico
        FOREIGN KEY (id_servico) REFERENCES servicos(id)
        ON UPDATE CASCADE ON DELETE RESTRICT
 );`,
 `CREATE TABLE IF NOT EXISTS portfolio (
    id              INT AUTO_INCREMENT PRIMARY KEY,
    id_projeto      INT NOT NULL,
    titulo          VARCHAR(150) NOT NULL,
    descricao       TEXT,
    datacriacao     TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_portfolio_projeto
        FOREIGN KEY (id_projeto) REFERENCES projetos(id)
        ON UPDATE CASCADE ON DELETE CASCADE
 );`,

 `CREATE TABLE IF NOT EXISTS contatos (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    nome        VARCHAR(150) NOT NULL,
    telefone    BIGINT(11),
    email       VARCHAR(150)
 );`,
 `CREATE TABLE IF NOT EXISTS usuarios (
    id              INT AUTO_INCREMENT PRIMARY KEY,
    nome            VARCHAR(150) NOT NULL,
    email           VARCHAR(150) NOT NULL UNIQUE,
    senha           VARCHAR(255) NOT NULL,
    nivel_acesso    ENUM('admin', 'editor', 'visualizador') NOT NULL DEFAULT 'visualizador',
    cpf             BIGINT(14) UNIQUE
 );`,
 ];

 for (const query of tableQueries) {
 await connection.query(query);
 }

 const [clientesColumn] = await connection.query("SHOW COLUMNS FROM clientes LIKE 'gmail'");
 if (clientesColumn.length > 0) {
   await connection.query("ALTER TABLE clientes CHANGE COLUMN gmail email VARCHAR(255)");
 }

 const [usuariosColumn] = await connection.query("SHOW COLUMNS FROM usuarios LIKE 'gmail'");
 if (usuariosColumn.length > 0) {
   await connection.query("ALTER TABLE usuarios CHANGE COLUMN gmail email VARCHAR(150) NOT NULL UNIQUE");
 }

 console.log('Banco e tabela criados com sucesso!');
 await connection.end();
 } catch (error) {
 console.error('Erro ao configurar o banco:', error);
 }
}

setupDatabase();
