import React from 'react';
import { Link } from 'react-router-dom';

function AdminCadastros() {
    return (
        <section className="home-section home-secao3">
            <div className="home-align-center">
                <h2 className="h2-central sem-linha">Cadastros</h2>
                <div className="grid-4x4">
                    <div className="home-card-portfolio card SF grid-border-right">
                        <h3 className="home-card-titulo centralizado">Clientes</h3>
                        <p className="centralizado">
                            Cadastre novos clientes com nome, empresa, telefone, e-mail, CNPJ e CEP.
                            Esses dados são usados para vincular projetos.
                        </p>
                        <Link to="/cadastroCliente" className="btn btn-outline">
                            Cadastrar Cliente
                        </Link>
                    </div>
                    <div className="home-card-portfolio card SF grid-border-right">
                        <h3 className="home-card-titulo centralizado">Serviços</h3>
                        <p className="centralizado">
                            Adicione os tipos de serviço oferecidos, com valor e descrição. Serviços são a base dos
                            projetos.
                        </p>
                        <Link to="/cadastroServico" className="btn btn-outline">
                            Cadastrar Serviço
                        </Link>
                    </div>
                    <div className="home-card-portfolio card SF grid-border-right">
                        <h3 className="home-card-titulo centralizado">Projetos</h3>
                        <p className="centralizado">
                            Vincule um cliente a um serviço e defina as datas de início e fim. Cada projeto pode ser
                            exibido no portfólio.
                        </p>
                        <Link to="/cadastroProjeto" className="btn btn-outline">
                            Cadastrar Projeto
                        </Link>
                    </div>
                    <div className="home-card-portfolio card SF ">
                        <h3 className="home-card-titulo centralizado">Portfólio</h3>
                        <p className="centralizado">
                            Publique projetos finalizados com título e descrição. Eles aparecerão na seção pública do
                            site.
                        </p>
                        <Link to="/cadastroPortfolio" className="btn btn-outline">
                            Cadastrar Portfólio
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AdminCadastros;