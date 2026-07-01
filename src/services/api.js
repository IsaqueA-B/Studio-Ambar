const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3000/api';

// ========== CLIENTES ==========
export async function buscarClientes() {
 const resposta = await fetch(`${API_BASE}/clientes`);
 return await resposta.json();
}


export async function criarCliente(nome_pessoa, nome_empresa, telefone, email, cnpj, cep) {
 const resposta = await fetch(`${API_BASE}/clientes`, {
 method: 'POST',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify({ nome_pessoa, nome_empresa, telefone, email, cnpj, cep })
 });
 return await resposta.json();
}

export async function atualizarCliente(id, nome_pessoa, nome_empresa, telefone, email, cnpj, cep) {
 const resposta = await fetch(`${API_BASE}/clientes/${id}`, {
 method: 'PUT',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify({ nome_pessoa, nome_empresa, telefone, email, cnpj, cep })
 });
 return await resposta.json();
}

export async function deletarCliente(id) {
 const resposta = await fetch(`${API_BASE}/clientes/${id}`, {
 method: 'DELETE'
 });
 return await resposta.json();
}

// ========== SERVIÇOS ==========
export async function buscarServicos() {
 const resposta = await fetch(`${API_BASE}/servicos`);
 const data = await resposta.json();
 if (!resposta.ok) {
  throw new Error(data.erro || 'Erro ao buscar serviços');
 }
 return data;
}

export async function criarServico(tipo_servico, valor, prazo) {
 const resposta = await fetch(`${API_BASE}/servicos`, {
 method: 'POST',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify({ tipo_servico, valor, prazo })
 });
 return await resposta.json();
}

export async function atualizarServico(id, tipo_servico, valor, prazo) {
 const resposta = await fetch(`${API_BASE}/servicos/${id}`, {
 method: 'PUT',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify({ tipo_servico, valor, prazo })
 });
 return await resposta.json();
}

export async function deletarServico(id) {
 const resposta = await fetch(`${API_BASE}/servicos/${id}`, {
 method: 'DELETE'
 });
 return await resposta.json();
}

// ========== PROJETOS ==========
export async function buscarProjetos() {
 const resposta = await fetch(`${API_BASE}/projetos`);
 return await resposta.json();
}

export async function criarProjeto(id_cliente, id_servico, data_inicioProjeto, data_finalProjeto) {
 const resposta = await fetch(`${API_BASE}/projetos`, {
 method: 'POST',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify({ id_cliente, id_servico, data_inicioProjeto, data_finalProjeto })
 });
 return await resposta.json();
}

export async function atualizarProjeto(id, id_cliente, id_servico, data_inicioProjeto, data_finalProjeto) {
 const resposta = await fetch(`${API_BASE}/projetos/${id}`, {
 method: 'PUT',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify({ id_cliente, id_servico, data_inicioProjeto, data_finalProjeto })
 });
 return await resposta.json();
}

export async function deletarProjeto(id) {
 const resposta = await fetch(`${API_BASE}/projetos/${id}`, {
 method: 'DELETE'
 });
 return await resposta.json();
}

// ========== PORTFOLIO ==========
export async function buscarPortfolio() {
 const resposta = await fetch(`${API_BASE}/portfolio`);
 const data = await resposta.json();
 if (!resposta.ok) {
  throw new Error(data.erro || 'Erro ao buscar portfólio');
 }
 return data;
}

export async function criarPortfolio(id_projeto, titulo, descricao) {
 const resposta = await fetch(`${API_BASE}/portfolio`, {
 method: 'POST',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify({ id_projeto, titulo, descricao })
 });
 return await resposta.json();
}

export async function atualizarPortfolio(id, id_projeto, titulo, descricao) {
 const resposta = await fetch(`${API_BASE}/portfolio/${id}`, {
 method: 'PUT',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify({ id_projeto, titulo, descricao })
 });
 return await resposta.json();
}

export async function deletarPortfolio(id) {
 const resposta = await fetch(`${API_BASE}/portfolio/${id}`, {
 method: 'DELETE'
 });
 return await resposta.json();
}

// ========== CONTATOS ==========
export async function buscarContatos() {
 const resposta = await fetch(`${API_BASE}/contatos`);
 return await resposta.json();
}

export async function criarContato(nome, telefone, email) {
 console.log('📡 API: Enviando para', `${API_BASE}/contatos`);
 const resposta = await fetch(`${API_BASE}/contatos`, {
 method: 'POST',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify({ nome, telefone, email })
 });
 const data = await resposta.json();
 console.log('📡 API: Status', resposta.status, 'Dados:', data);
 if (!resposta.ok) {
 throw new Error(data.erro || 'Erro ao enviar contato');
 }
 return data;
}

export async function atualizarContato(id, nome, telefone, email) {
 const resposta = await fetch(`${API_BASE}/contatos/${id}`, {
 method: 'PUT',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify({ nome, telefone, email })
 });
 return await resposta.json();
}

export async function deletarContato(id) {
 const resposta = await fetch(`${API_BASE}/contatos/${id}`, {
 method: 'DELETE'
 });
 return await resposta.json();
}

// ========== USUÁRIOS ==========
export async function buscarUsuarios() {
 const resposta = await fetch(`${API_BASE}/usuarios`);
 return await resposta.json();
}

export async function criarUsuario(nome, email, senha, nivel_acesso, cpf) {
 const resposta = await fetch(`${API_BASE}/usuarios`, {
 method: 'POST',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify({ nome, email, senha, nivel_acesso, cpf })
 });
 return await resposta.json();
}

export async function atualizarUsuario(id, nome, email, senha, nivel_acesso, cpf) {
 const resposta = await fetch(`${API_BASE}/usuarios/${id}`, {
 method: 'PUT',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify({ nome, email, senha, nivel_acesso, cpf })
 });
 return await resposta.json();
}

export async function deletarUsuario(id) {
 const resposta = await fetch(`${API_BASE}/usuarios/${id}`, {
 method: 'DELETE'
 });
 return await resposta.json();
}