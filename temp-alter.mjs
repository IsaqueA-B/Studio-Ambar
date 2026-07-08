import dotenv from 'dotenv';
dotenv.config();
import mysql from 'mysql2/promise';
const conn = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
});
const [cols] = await conn.query('SHOW COLUMNS FROM servicos LIKE ?', ['prazo']);
if (cols.length > 0) {
  await conn.query('ALTER TABLE servicos CHANGE COLUMN prazo descricao TEXT');
  console.log('Coluna prazo alterada para descricao!');
} else {
  const [cols2] = await conn.query('SHOW COLUMNS FROM servicos LIKE ?', ['descricao']);
  if (cols2.length === 0) {
    await conn.query('ALTER TABLE servicos ADD COLUMN descricao TEXT');
    console.log('Coluna descricao adicionada!');
  } else {
    console.log('Coluna descricao já existe!');
  }
}
await conn.end();
