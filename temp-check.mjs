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
const [rows] = await conn.query('SHOW TABLES');
console.log(JSON.stringify(rows));
for (const row of rows) {
  const table = row[Object.keys(row)[0]];
  const [cols] = await conn.query(`DESCRIBE \`${table}\``);
  console.log('TABLE', table);
  console.log(JSON.stringify(cols));
}
await conn.end();
