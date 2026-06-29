import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './db.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
 res.json({ mensagem: 'API Studio Ambar rodando!' });
});

// ========== CLIENTES ==========
app.get('/api/clientes', async (req, res) => {
 try {
 const [clientes] = await pool.query('SELECT * FROM clientes ORDER BY id DESC');
 res.json(clientes);
 } catch (error) {
 console.error(error);
 res.status(500).json({ erro: 'Erro ao buscar clientes' });
 }
});

app.post('/api/clientes', async (req, res) => {
 try {
 const { nome_pessoa, nome_empresa, telefone, email, cnpj, cep } = req.body;
 if (!nome_pessoa || !nome_pessoa.trim()) {
 return res.status(400).json({ erro: 'Nome da pessoa obrigatório' });
 }
 const [result] = await pool.execute(
 'INSERT INTO clientes (nome_pessoa, nome_empresa, telefone, email, cnpj, cep) VALUES (?, ?, ?, ?, ?, ?)',
 [nome_pessoa, nome_empresa || null, telefone || null, email || null, cnpj || null, cep || null]
 );
 res.status(201).json({ id: result.insertId, nome_pessoa, nome_empresa, telefone, email, cnpj, cep });
 } catch (error) {
 console.error(error);
 res.status(500).json({ erro: 'Erro ao criar cliente' });
 }
});

app.put('/api/clientes/:id', async (req, res) => {
 try {
 const { id } = req.params;
 const { nome_pessoa, nome_empresa, telefone, email, cnpj, cep } = req.body;
 if (!nome_pessoa || !nome_pessoa.trim()) {
 return res.status(400).json({ erro: 'Nome da pessoa obrigatório' });
 }
 const [result] = await pool.execute(
 'UPDATE clientes SET nome_pessoa = ?, nome_empresa = ?, telefone = ?, email = ?, cnpj = ?, cep = ? WHERE id = ?',
 [nome_pessoa, nome_empresa || null, telefone || null, email || null, cnpj || null, cep || null, id]
 );
 if (result.affectedRows === 0) {
 return res.status(404).json({ erro: 'Cliente não encontrado' });
 }
 res.json({ mensagem: 'Cliente atualizado com sucesso' });
 } catch (error) {
 console.error(error);
 res.status(500).json({ erro: 'Erro ao atualizar cliente' });
 }
});

app.delete('/api/clientes/:id', async (req, res) => {
 try {
 const { id } = req.params;
 const [result] = await pool.execute('DELETE FROM clientes WHERE id = ?', [id]);
 if (result.affectedRows === 0) {
 return res.status(404).json({ erro: 'Cliente não encontrado' });
 }
 res.json({ mensagem: 'Cliente deletado com sucesso' });
 } catch (error) {
 console.error(error);
 res.status(500).json({ erro: 'Erro ao deletar cliente' });
 }
});

// ========== SERVIÇOS ==========
app.get('/api/servicos', async (req, res) => {
 try {
 const [servicos] = await pool.query('SELECT * FROM servicos ORDER BY id DESC');
 res.json(servicos);
 } catch (error) {
 console.error(error);
 res.status(500).json({ erro: 'Erro ao buscar serviços' });
 }
});

app.post('/api/servicos', async (req, res) => {
 try {
 const { tipo_servico, valor, prazo } = req.body;
 if (!tipo_servico || !tipo_servico.trim() || !valor) {
 return res.status(400).json({ erro: 'Tipo de serviço e valor são obrigatórios' });
 }
 const [result] = await pool.execute(
 'INSERT INTO servicos (tipo_servico, valor, prazo) VALUES (?, ?, ?)',
 [tipo_servico, valor, prazo || null]
 );
 res.status(201).json({ id: result.insertId, tipo_servico, valor, prazo });
 } catch (error) {
 console.error(error);
 res.status(500).json({ erro: 'Erro ao criar serviço' });
 }
});

app.put('/api/servicos/:id', async (req, res) => {
 try {
 const { id } = req.params;
 const { tipo_servico, valor, prazo } = req.body;
 if (!tipo_servico || !tipo_servico.trim() || !valor) {
 return res.status(400).json({ erro: 'Tipo de serviço e valor são obrigatórios' });
 }
 const [result] = await pool.execute(
 'UPDATE servicos SET tipo_servico = ?, valor = ?, prazo = ? WHERE id = ?',
 [tipo_servico, valor, prazo || null, id]
 );
 if (result.affectedRows === 0) {
 return res.status(404).json({ erro: 'Serviço não encontrado' });
 }
 res.json({ mensagem: 'Serviço atualizado com sucesso' });
 } catch (error) {
 console.error(error);
 res.status(500).json({ erro: 'Erro ao atualizar serviço' });
 }
});

app.delete('/api/servicos/:id', async (req, res) => {
 try {
 const { id } = req.params;
 const [result] = await pool.execute('DELETE FROM servicos WHERE id = ?', [id]);
 if (result.affectedRows === 0) {
 return res.status(404).json({ erro: 'Serviço não encontrado' });
 }
 res.json({ mensagem: 'Serviço deletado com sucesso' });
 } catch (error) {
 console.error(error);
 res.status(500).json({ erro: 'Erro ao deletar serviço' });
 }
});

// ========== PROJETOS ==========
app.get('/api/projetos', async (req, res) => {
 try {
 const [projetos] = await pool.query('SELECT * FROM projetos ORDER BY id DESC');
 res.json(projetos);
 } catch (error) {
 console.error(error);
 res.status(500).json({ erro: 'Erro ao buscar projetos' });
 }
});

app.post('/api/projetos', async (req, res) => {
 try {
 const { id_cliente, id_servico, data_inicioProjeto, data_finalProjeto } = req.body;
 if (!id_cliente || !id_servico || !data_inicioProjeto) {
 return res.status(400).json({ erro: 'Cliente, serviço e data de início são obrigatórios' });
 }
 const [result] = await pool.execute(
 'INSERT INTO projetos (id_cliente, id_servico, data_inicioProjeto, data_finalProjeto) VALUES (?, ?, ?, ?)',
 [id_cliente, id_servico, data_inicioProjeto, data_finalProjeto || null]
 );
 res.status(201).json({ id: result.insertId, id_cliente, id_servico, data_inicioProjeto, data_finalProjeto });
 } catch (error) {
 console.error(error);
 res.status(500).json({ erro: 'Erro ao criar projeto' });
 }
});

app.put('/api/projetos/:id', async (req, res) => {
 try {
 const { id } = req.params;
 const { id_cliente, id_servico, data_inicioProjeto, data_finalProjeto } = req.body;
 if (!id_cliente || !id_servico || !data_inicioProjeto) {
 return res.status(400).json({ erro: 'Cliente, serviço e data de início são obrigatórios' });
 }
 const [result] = await pool.execute(
 'UPDATE projetos SET id_cliente = ?, id_servico = ?, data_inicioProjeto = ?, data_finalProjeto = ? WHERE id = ?',
 [id_cliente, id_servico, data_inicioProjeto, data_finalProjeto || null, id]
 );
 if (result.affectedRows === 0) {
 return res.status(404).json({ erro: 'Projeto não encontrado' });
 }
 res.json({ mensagem: 'Projeto atualizado com sucesso' });
 } catch (error) {
 console.error(error);
 res.status(500).json({ erro: 'Erro ao atualizar projeto' });
 }
});

app.delete('/api/projetos/:id', async (req, res) => {
 try {
 const { id } = req.params;
 const [result] = await pool.execute('DELETE FROM projetos WHERE id = ?', [id]);
 if (result.affectedRows === 0) {
 return res.status(404).json({ erro: 'Projeto não encontrado' });
 }
 res.json({ mensagem: 'Projeto deletado com sucesso' });
 } catch (error) {
 console.error(error);
 res.status(500).json({ erro: 'Erro ao deletar projeto' });
 }
});

// ========== PORTFOLIO ==========
app.get('/api/portfolio', async (req, res) => {
 try {
 const [portfolio] = await pool.query('SELECT * FROM portfolio ORDER BY datacriacao DESC');
 res.json(portfolio);
 } catch (error) {
 console.error(error);
 res.status(500).json({ erro: 'Erro ao buscar portfólio' });
 }
});

app.post('/api/portfolio', async (req, res) => {
 try {
 const { id_projeto, titulo, descricao } = req.body;
 if (!id_projeto || !titulo || !titulo.trim()) {
 return res.status(400).json({ erro: 'Projeto e título são obrigatórios' });
 }
 const [result] = await pool.execute(
 'INSERT INTO portfolio (id_projeto, titulo, descricao) VALUES (?, ?, ?)',
 [id_projeto, titulo, descricao || null]
 );
 res.status(201).json({ id: result.insertId, id_projeto, titulo, descricao });
 } catch (error) {
 console.error(error);
 res.status(500).json({ erro: 'Erro ao criar portfólio' });
 }
});

app.put('/api/portfolio/:id', async (req, res) => {
 try {
 const { id } = req.params;
 const { id_projeto, titulo, descricao } = req.body;
 if (!id_projeto || !titulo || !titulo.trim()) {
 return res.status(400).json({ erro: 'Projeto e título são obrigatórios' });
 }
 const [result] = await pool.execute(
 'UPDATE portfolio SET id_projeto = ?, titulo = ?, descricao = ? WHERE id = ?',
 [id_projeto, titulo, descricao || null, id]
 );
 if (result.affectedRows === 0) {
 return res.status(404).json({ erro: 'Portfólio não encontrado' });
 }
 res.json({ mensagem: 'Portfólio atualizado com sucesso' });
 } catch (error) {
 console.error(error);
 res.status(500).json({ erro: 'Erro ao atualizar portfólio' });
 }
});

app.delete('/api/portfolio/:id', async (req, res) => {
 try {
 const { id } = req.params;
 const [result] = await pool.execute('DELETE FROM portfolio WHERE id = ?', [id]);
 if (result.affectedRows === 0) {
 return res.status(404).json({ erro: 'Portfólio não encontrado' });
 }
 res.json({ mensagem: 'Portfólio deletado com sucesso' });
 } catch (error) {
 console.error(error);
 res.status(500).json({ erro: 'Erro ao deletar portfólio' });
 }
});

// ========== CONTATOS ==========
app.get('/api/contatos', async (req, res) => {
 try {
 const [contatos] = await pool.query('SELECT * FROM contatos ORDER BY id DESC');
 res.json(contatos);
 } catch (error) {
 console.error(error);
 res.status(500).json({ erro: 'Erro ao buscar contatos' });
 }
});

app.post('/api/contatos', async (req, res) => {
 try {
 const { nome, telefone, email } = req.body;
 if (!nome || !nome.trim()) {
 return res.status(400).json({ erro: 'Nome obrigatório' });
 }
 const [result] = await pool.execute(
 'INSERT INTO contatos (nome, telefone, email) VALUES (?, ?, ?)',
 [nome, telefone || null, email || null]
 );
 res.status(201).json({ id: result.insertId, nome, telefone, email });
 } catch (error) {
 console.error(error);
 res.status(500).json({ erro: 'Erro ao criar contato' });
 }
});

app.put('/api/contatos/:id', async (req, res) => {
 try {
 const { id } = req.params;
 const { nome, telefone, email } = req.body;
 if (!nome || !nome.trim()) {
 return res.status(400).json({ erro: 'Nome obrigatório' });
 }
 const [result] = await pool.execute(
 'UPDATE contatos SET nome = ?, telefone = ?, email = ? WHERE id = ?',
 [nome, telefone || null, email || null, id]
 );
 if (result.affectedRows === 0) {
 return res.status(404).json({ erro: 'Contato não encontrado' });
 }
 res.json({ mensagem: 'Contato atualizado com sucesso' });
 } catch (error) {
 console.error(error);
 res.status(500).json({ erro: 'Erro ao atualizar contato' });
 }
});

app.delete('/api/contatos/:id', async (req, res) => {
 try {
 const { id } = req.params;
 const [result] = await pool.execute('DELETE FROM contatos WHERE id = ?', [id]);
 if (result.affectedRows === 0) {
 return res.status(404).json({ erro: 'Contato não encontrado' });
 }
 res.json({ mensagem: 'Contato deletado com sucesso' });
 } catch (error) {
 console.error(error);
 res.status(500).json({ erro: 'Erro ao deletar contato' });
 }
});

// ========== USUÁRIOS ==========
app.get('/api/usuarios', async (req, res) => {
 try {
 const [usuarios] = await pool.query('SELECT id, nome, gmail, nivel_acesso, cpf FROM usuarios ORDER BY id DESC');
 res.json(usuarios);
 } catch (error) {
 console.error(error);
 res.status(500).json({ erro: 'Erro ao buscar usuários' });
 }
});

app.post('/api/usuarios', async (req, res) => {
 try {
 const { nome, gmail, senha, nivel_acesso, cpf } = req.body;
 if (!nome || !gmail || !senha) {
 return res.status(400).json({ erro: 'Nome, email e senha são obrigatórios' });
 }
 const [result] = await pool.execute(
 'INSERT INTO usuarios (nome, gmail, senha, nivel_acesso, cpf) VALUES (?, ?, ?, ?, ?)',
 [nome, gmail, senha, nivel_acesso || 'visualizador', cpf || null]
 );
 res.status(201).json({ id: result.insertId, nome, gmail, nivel_acesso: nivel_acesso || 'visualizador', cpf });
 } catch (error) {
 console.error(error);
 res.status(500).json({ erro: 'Erro ao criar usuário' });
 }
});

app.put('/api/usuarios/:id', async (req, res) => {
 try {
 const { id } = req.params;
 const { nome, gmail, senha, nivel_acesso, cpf } = req.body;
 if (!nome || !gmail || !senha) {
 return res.status(400).json({ erro: 'Nome, email e senha são obrigatórios' });
 }
 const [result] = await pool.execute(
 'UPDATE usuarios SET nome = ?, gmail = ?, senha = ?, nivel_acesso = ?, cpf = ? WHERE id = ?',
 [nome, gmail, senha, nivel_acesso || 'visualizador', cpf || null, id]
 );
 if (result.affectedRows === 0) {
 return res.status(404).json({ erro: 'Usuário não encontrado' });
 }
 res.json({ mensagem: 'Usuário atualizado com sucesso' });
 } catch (error) {
 console.error(error);
 res.status(500).json({ erro: 'Erro ao atualizar usuário' });
 }
});

app.delete('/api/usuarios/:id', async (req, res) => {
 try {
 const { id } = req.params;
 const [result] = await pool.execute('DELETE FROM usuarios WHERE id = ?', [id]);
 if (result.affectedRows === 0) {
 return res.status(404).json({ erro: 'Usuário não encontrado' });
 }
 res.json({ mensagem: 'Usuário deletado com sucesso' });
 } catch (error) {
 console.error(error);
 res.status(500).json({ erro: 'Erro ao deletar usuário' });
 }
});

app.listen(PORT, () => {
 console.log(`Servidor rodando na porta ${PORT}`);
});
