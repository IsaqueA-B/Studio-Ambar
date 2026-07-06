import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import WordMark from '../assets/images/Especificos/WordMark.png';
import { useServicos } from '../hooks/useServicos';

function Home() {
    const { obterServicos } = useServicos();
    const [servicos, setServicos] = useState([]);
    const [erroServicos, setErroServicos] = useState('');

    useEffect(() => {
        const buscarServicos = async () => {
            try {
                const dados = await obterServicos();
                setServicos(dados || []);
            } catch (error) {
                console.error(error);
                setErroServicos('Não foi possível carregar os serviços no momento.');
            }
        };

        buscarServicos();
    }, []);

    return (
        <div>
            <div style={{ marginTop: '80px' }}>
                <img src={WordMark} alt="WordMark" className="WordMark" />
            </div>

            <main className="p-20 animacao-entrada">

                {/* SEÇÃO 1: QUEM SOMOS + SERVIÇOS EM DESTAQUE (dividida por linha) */}
                <section className="home-secao1">
                    <div className="home-lado home-esquerda">
                        <span className="sobre-tag">Quem Somos</span>
                        <h2 className="home-titulo-esquerda">Criatividade que conecta</h2>
                        <p>
                            Transformamos ideias em marcas autênticas. Combinamos estratégia,
                            estética e propósito para dar vida a negócios que se destacam no digital.
                            Tudo para ficar do jeito que você imaginou, com a nossa assinatura de qualidade.
                        </p>
                        <Link to="/sobre" className="btn btn-outline">Saiba mais</Link>
                    </div>

                    {/* Linha divisória vertical */}
                    <div className="home-linha"></div>

                    <div className="home-lado home-direita">
                        <span className="sobre-tag">Serviços em Destaque</span>
                        <h2 className="home-titulo-direita">O que fazemos de diferente</h2>
                        <p>
                            Identidade Visual <br></br>
                            Social Media <br></br>
                            Branding Completo <br></br>
                            Estilização personalizada
                        </p>
                        <Link to="/servicos" className="btn btn-outline">Ver todos os serviços</Link>
                        {erroServicos ? (
                            <p style={{ marginTop: '10px' }}>{erroServicos}</p>
                        ) : servicos.length > 0 ? (
                            <div style={{ marginTop: '10px' }}>
                                <strong>Serviços vindos do banco:</strong>
                                <ul style={{ marginTop: '8px', paddingLeft: '20px' }}>
                                    {servicos.slice(0, 3).map((servico) => (
                                        <li key={servico.id}>
                                            {servico.tipo_servico || 'Serviço'} {servico.valor ? `- ${servico.valor}` : ''}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : null}
                    </div>
                </section>

            </main>
        </div>
    );
}

export default Home;