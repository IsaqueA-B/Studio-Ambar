import { useState, useEffect } from 'react';
import { useContatos } from '../hooks/useContatos';

function Admin() {
    const { obterContatos } = useContatos();
    const [contatos, setContatos] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        const buscar = async () => {
            try {
                setCarregando(true);
                const dados = await obterContatos();
                setContatos(dados);
            } catch (err) {
                console.error(err);
                setErro('Erro ao carregar contatos');
            } finally {
                setCarregando(false);
            }
        };
        buscar();
    }, [obterContatos]);

    if (carregando) return <main className="p-20"><p>Carregando...</p></main>;
    if (erro) return <main className="p-20"><p>{erro}</p></main>;

    return (
        <main className="p-20 animacao-entrada">
            <section className="text-center mb-20">
                <h1>ADMIN</h1>
                <p style={{ maxWidth: '600px', margin: '0 auto' }}>
                    Área administrativa - Contatos recebidos
                </p>
            </section>

            <section style={{ maxWidth: '800px', margin: '0 auto' }}>
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
            </section>
        </main>
    );
}

export default Admin;
