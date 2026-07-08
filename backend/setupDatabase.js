import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envFile = path.resolve(__dirname, '../.env');

dotenv.config({ path: envFile });

const databaseName = process.env.DB_NAME || 'studio_ambar';

async function ensureColumn(connection, table, column, definition) {
  const [columns] = await connection.query(`SHOW COLUMNS FROM \`${table}\` LIKE ?`, [column]);

  if (columns.length === 0) {
    await connection.query(`ALTER TABLE \`${table}\` ADD COLUMN ${definition}`);
    return;
  }

  await connection.query(`ALTER TABLE \`${table}\` MODIFY COLUMN ${column} ${definition}`);
}

export async function setupDatabase() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
    multipleStatements: true,
    charset: 'utf8mb4',
  });

  try {
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${databaseName}\``);
    await connection.query(`USE \`${databaseName}\``);

    const tableQueries = [
      `CREATE TABLE IF NOT EXISTS clientes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome_pessoa VARCHAR(150) NOT NULL,
        nome_empresa VARCHAR(150),
        telefone VARCHAR(20),
        email VARCHAR(255),
        cnpj VARCHAR(30),
        cep VARCHAR(20)
      )`,
      `CREATE TABLE IF NOT EXISTS servicos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        tipo_servico VARCHAR(100) NOT NULL,
        valor DECIMAL(10,2) NOT NULL,
        prazo INT
      )`,
      `CREATE TABLE IF NOT EXISTS projetos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        id_cliente INT NOT NULL,
        id_servico INT NOT NULL,
        data_inicioProjeto DATE NOT NULL,
        data_finalProjeto DATE,
        CONSTRAINT fk_projetos_cliente FOREIGN KEY (id_cliente) REFERENCES clientes(id)
          ON UPDATE CASCADE ON DELETE RESTRICT,
        CONSTRAINT fk_projetos_servico FOREIGN KEY (id_servico) REFERENCES servicos(id)
          ON UPDATE CASCADE ON DELETE RESTRICT
      )`,
      `CREATE TABLE IF NOT EXISTS portfolio (
        id INT AUTO_INCREMENT PRIMARY KEY,
        id_projeto INT NOT NULL,
        titulo VARCHAR(150) NOT NULL,
        descricao TEXT,
        datacriacao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT fk_portfolio_projeto FOREIGN KEY (id_projeto) REFERENCES projetos(id)
          ON UPDATE CASCADE ON DELETE CASCADE
      )`,
      `CREATE TABLE IF NOT EXISTS contatos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(150) NOT NULL,
        telefone VARCHAR(20),
        email VARCHAR(255)
      )`,
      `CREATE TABLE IF NOT EXISTS usuarios (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(150) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        senha VARCHAR(255) NOT NULL,
        nivel_acesso ENUM('admin', 'editor', 'visualizador') NOT NULL DEFAULT 'visualizador',
        cpf VARCHAR(20) NULL UNIQUE
      )`
    ];

    for (const query of tableQueries) {
      await connection.query(query);
    }

    await ensureColumn(connection, 'clientes', 'telefone', 'VARCHAR(20) NULL DEFAULT NULL');
    await ensureColumn(connection, 'clientes', 'email', 'VARCHAR(255) NULL DEFAULT NULL');
    await ensureColumn(connection, 'clientes', 'cnpj', 'VARCHAR(30) NULL DEFAULT NULL');
    await ensureColumn(connection, 'clientes', 'cep', 'VARCHAR(20) NULL DEFAULT NULL');
    await ensureColumn(connection, 'contatos', 'telefone', 'VARCHAR(20) NULL DEFAULT NULL');
    await ensureColumn(connection, 'usuarios', 'email', 'VARCHAR(255) NOT NULL');
    await ensureColumn(connection, 'usuarios', 'cpf', 'VARCHAR(20) NULL DEFAULT NULL');

    const [clientesExistentes] = await connection.query('SELECT id FROM clientes LIMIT 1');
    if (clientesExistentes.length === 0) {
      await connection.query(
        'INSERT INTO clientes (nome_pessoa, nome_empresa, telefone, email, cnpj, cep) VALUES (?, ?, ?, ?, ?, ?)',
        ['Cliente padrão', 'Studio Âmbar', '(55) 99999-9999', 'contato@studio.ambar', null, null]
      );
    }

    const [servicosExistentes] = await connection.query('SELECT id FROM servicos LIMIT 1');
    if (servicosExistentes.length === 0) {
      await connection.query(
        'INSERT INTO servicos (tipo_servico, valor, prazo) VALUES (?, ?, ?)',
        ['Serviço padrão', 0, 30]
      );
    }

    const [projetosExistentes] = await connection.query('SELECT id FROM projetos LIMIT 1');
    if (projetosExistentes.length === 0) {
      const [clientePadrao] = await connection.query('SELECT id FROM clientes ORDER BY id LIMIT 1');
      const [servicoPadrao] = await connection.query('SELECT id FROM servicos ORDER BY id LIMIT 1');
      if (clientePadrao.length > 0 && servicoPadrao.length > 0) {
        await connection.query(
          'INSERT INTO projetos (id_cliente, id_servico, data_inicioProjeto, data_finalProjeto) VALUES (?, ?, ?, ?)',
          [clientePadrao[0].id, servicoPadrao[0].id, '2024-01-01', '2024-01-15']
        );
      }
    }

    return { success: true, message: 'Banco e tabelas prontos para uso!' };
  } catch (error) {
    throw new Error(`Erro ao configurar o banco: ${error.message}`);
  } finally {
    await connection.end();
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  setupDatabase()
    .then((resultado) => {
      console.log(resultado.message);
      process.exit(0);
    })
    .catch((error) => {
      console.error(error.message);
      process.exit(1);
    });
}
