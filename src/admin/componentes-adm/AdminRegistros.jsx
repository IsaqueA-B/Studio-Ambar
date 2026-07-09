import React, { useState, useEffect } from 'react';
import { useClientes } from '../hooks/useClientes';
import { useServicos } from '../hooks/useServicos';
import { usePortfolio } from '../hooks/usePortfolio';
import { useProjetos } from '../hooks/useProjetos';
import TabelaRegistros from './TabelaRegistros';

function AdminRegistros() {
    const { obterClientes } = useClientes();
    const { obterServicos } = useServicos();
    const { obterPortfolio } = usePortfolio();
    const { obterProjetos } = useProjetos();

    // Controle do modal
    const [modalAberto, setModalAberto] = useState(null);
    const [dadosModal, setDadosModal] = useState([]);
    const [loadingModal, setLoadingModal] = useState(false);
    const [colunasModal, setColunasModal] = useState([]);
    const [tabelaNomeModal, setTabelaNomeModal] = useState('');

    useEffect(() => {
        if (modalAberto) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [modalAberto]);

    const abrirModal = async (tabela) => {
        setModalAberto(tabela);
        setLoadingModal(true);

        try {
            let resultado = [];
            switch (tabela) {
                case 'clientes':
                    setColunasModal(colunasClientes);
                    setTabelaNomeModal('clientes');
                    resultado = await obterClientes();
                    break;
                case 'servicos':
                    setColunasModal(colunasServicos);
                    setTabelaNomeModal('serviços');
                    resultado = await obterServicos();
                    break;
                case 'projetos':
                    setColunasModal(colunasProjetos);
                    setTabelaNomeModal('projetos');
                    resultado = await obterProjetos();
                    break;
                case 'portfolio':
                    setColunasModal(colunasPortfolio);
                    setTabelaNomeModal('portfólio');
                    resultado = await obterPortfolio();
                    break;
                default:
                    break;
            }
            setDadosModal(resultado || []);
        } catch (error) {
            console.error(error);
            alert(`Erro ao carregar ${tabela}.`);
            setModalAberto(null);
        } finally {
            setLoadingModal(false);
        }
    };

    const fecharModal = () => {
        setModalAberto(null);
        setDadosModal([]);
    };

    // Colunas (inalteradas)
    const colunasClientes = [
        { key: 'id', label: 'ID' },
        { key: 'nome_pessoa', label: 'Pessoa' },
        { key: 'nome_empresa', label: 'Empresa' },
        { key: 'telefone', label: 'Telefone' },
        { key: 'email', label: 'Email' },
        { key: 'cnpj', label: 'CNPJ' },
        { key: 'cep', label: 'CEP' },
    ];
    const colunasServicos = [
        { key: 'id', label: 'ID' },
        { key: 'tipo_servico', label: 'Tipo' },
        { key: 'valor', label: 'Valor', format: (v) => `R$ ${Number(v).toFixed(2)}` },
        { key: 'descricao', label: 'Descrição' },
    ];
    const colunasProjetos = [
        { key: 'id', label: 'ID' },
        { key: 'id_cliente', label: 'Cliente ID' },
        { key: 'id_servico', label: 'Serviço ID' },
        { key: 'data_inicioProjeto', label: 'Início', format: (v) => v?.split('T')[0] },
        { key: 'data_finalProjeto', label: 'Fim', format: (v) => v?.split('T')[0] || '-' },
    ];
    const colunasPortfolio = [
        { key: 'id', label: 'ID' },
        { key: 'id_projeto', label: 'Projeto ID' },
        { key: 'titulo', label: 'Título' },
        { key: 'descricao', label: 'Descrição' },
        { key: 'datacriacao', label: 'Data Criação', format: (v) => v?.split('T')[0] },
    ];

    return (
        <>
            <section className="home-section home-secao3">
                <div className="home-align-center">
                    <h2 className="h2-central sem-linha">Registros</h2>
                    <div className="grid-4x4">
                        {/* Card Clientes */}
                        <div className="home-card-portfolio card SF grid-border-right">
                            <h3 className="home-card-titulo centralizado">Clientes</h3>
                            <p className="centralizado">Veja os clientes cadastrados.</p>
                            <button className="btn btn-outline" onClick={() => abrirModal('clientes')}>
                                Ver Registros
                            </button>
                        </div>
                        {/* Card Serviços */}
                        <div className="home-card-portfolio card SF grid-border-right">
                            <h3 className="home-card-titulo centralizado">Serviços</h3>
                            <p className="centralizado">Consulte os serviços disponíveis.</p>
                            <button className="btn btn-outline" onClick={() => abrirModal('servicos')}>
                                Ver Registros
                            </button>
                        </div>
                        {/* Card Projetos */}
                        <div className="home-card-portfolio card SF grid-border-right">
                            <h3 className="home-card-titulo centralizado">Projetos</h3>
                            <p className="centralizado">Visualize os projetos existentes.</p>
                            <button className="btn btn-outline" onClick={() => abrirModal('projetos')}>
                                Ver Registros
                            </button>
                        </div>
                        {/* Card Portfólio */}
                        <div className="home-card-portfolio card SF">
                            <h3 className="home-card-titulo centralizado">Portfólio</h3>
                            <p className="centralizado">Itens publicados no portfólio.</p>
                            <button className="btn btn-outline" onClick={() => abrirModal('portfolio')}>
                                Ver Registros
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal Pop-up */}
            {modalAberto && (
                <div className="modal-overlay" onClick={fecharModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2 className='sem-linha'>Registros de {tabelaNomeModal}</h2>
                            <button className="modal-close" onClick={fecharModal}>
                                &times;
                            </button>
                        </div>
                        <div className="modal-body">
                            {loadingModal ? (
                                <p>Carregando...</p>
                            ) : (
                                <TabelaRegistros
                                    colunas={colunasModal}
                                    dados={dadosModal}
                                />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default AdminRegistros;