import { useState, useEffect } from 'react';
import { useContatos } from '../hooks/useContatos';

function Admin() {
    const { obterContatos } = useContatos();
    const [contatos, setContatos] = useState([]);
    const [servicos, setServicos] = useState([]);
    const [portfolio, setPortfolio] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);
    const [status, setStatus] = useState('');

    const carregarDados = async () => {
        try {
            setCarregando(true);
            const [contatosData, servicosData, portfolioData, usuariosData] = await Promise.all([
                obterContatos(),
                fetch('http://localhost:3000/api/servicos').then((res) => res.json()),
                fetch('http://localhost:3000/api/portfolio').then((res) => res.json()),
                fetch('http://localhost:3000/api/usuarios').then((res) => res.json())
            ]);
            setContatos(Array.isArray(contatosData) ? contatosData : []);
            setServicos(Array.isArray(servicosData) ? servicosData : []);
            setPortfolio(Array.isArray(portfolioData) ? portfolioData : []);
            setUsuarios(Array.isArray(usuariosData) ? usuariosData : []);
        } catch (err) {
            console.error(err);
            setErro('Erro ao carregar dados do admin');
        } finally {
            setCarregando(false);
        }
    };

    useEffect(() => {
        carregarDados();
    }, [obterContatos]);

    const criarBanco = async () => {
        try {
            setStatus('Criando estrutura no banco...');
            const resposta = await fetch('http://localhost:3000/api/setup-database', { method: 'POST' });
            const dados = await resposta.json();
            if (!resposta.ok) {
                throw new Error(dados.erro || 'Erro ao criar banco');
            }
            setStatus(dados.message || 'Banco criado com sucesso');
            await carregarDados();
        } catch (err) {
            console.error(err);
            setStatus(err.message || 'Erro ao criar banco');
        }
    };

    if (carregando) return <main className="p-20"><p>Carregando...</p></main>;
    if (erro) return <main className="p-20"><p>{erro}</p></main>;

    return (
        <main className="p-20 animacao-entrada">
            <section className="text-center mb-20">
                <h1>ADMIN</h1>
                <p style={{ maxWidth: '600px', margin: '0 auto' }}>
                    Área administrativa - dados vindos do banco
                </p>
            </section>

            <section style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <div style={{ marginBottom: '20px' }}>
                    <button className="btn btn-outline" type="button" onClick={criarBanco}>
                        Cadastrar banco de dados
                    </button>
                    {status ? <p style={{ marginTop: '10px' }}>{status}</p> : null}
                </div>

                <div style={{ display: 'grid', gap: '24px' }}>
                    <div>
                        <h2>Contatos ({contatos.length})</h2>
                        {contatos.length === 0 ? (
                            <p>Nenhum contato recebido.</p>
                        ) : (
                            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
                                <thead>
                                    <tr style={{ borderBottom: '2px solid #ccc' }}>
                                        <th style={{ textAlign: 'left', padding: '10px' }}>Nome</th>
                                        <th style={{ textAlign: 'left', padding: '10px' }}>Email</th>
                                        <th style={{ textAlign: 'left', padding: '10px' }}>Telefone</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {contatos.map((contato) => (
                                        <tr key={contato.id} style={{ borderBottom: '1px solid #eee' }}>
                                            <td style={{ padding: '10px' }}>{contato.nome}</td>
                                            <td style={{ padding: '10px' }}>{contato.email}</td>
                                            <td style={{ padding: '10px' }}>{contato.telefone || '-'}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>

                    <div>
                        <h2>Serviços ({servicos.length})</h2>
                        {servicos.length === 0 ? (
                            <p>Nenhum serviço cadastrado.</p>
                        ) : (
                            <ul>
                                {servicos.map((servico) => (
                                    <li key={servico.id} style={{ marginBottom: '10px' }}>
                                        <strong>{servico.tipo_servico}</strong> — R$ {servico.valor} — Prazo: {servico.prazo || 'a combinar'}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div>
                        <h2>Portfólio ({portfolio.length})</h2>
                        {portfolio.length === 0 ? (
                            <p>Nenhum item de portfólio cadastrado.</p>
                        ) : (
                            <ul>
                                {portfolio.map((item) => (
                                    <li key={item.id} style={{ marginBottom: '10px' }}>
                                        <strong>{item.titulo}</strong> — {item.descricao || 'Sem descrição'}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div>
                        <h2>Usuários ({usuarios.length})</h2>
                        {usuarios.length === 0 ? (
                            <p>Nenhum usuário cadastrado.</p>
                        ) : (
                            <ul>
                                {usuarios.map((usuario) => (
                                    <li key={usuario.id} style={{ marginBottom: '10px' }}>
                                        <strong>{usuario.nome}</strong> — {usuario.email} — {usuario.nivel_acesso}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Admin;
