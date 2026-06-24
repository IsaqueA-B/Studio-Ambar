import React from 'react';

const servicosEstaticos = [
   { nome: 'Identidade Visual', desc: 'Criação de logo, paleta de cores e tipografia.', valor: 'R$ 800' },
    { nome: 'Social Media', desc: 'Posts, stories e identidade para redes sociais.', valor: 'R$ 400/mês' },
    { nome: 'Papelaria Corporativa', desc: 'Cartão de visita, papel timbrado, assinatura de e-mail.', valor: 'R$ 350' },
    { nome: 'Criação de Sites', desc: 'Sites institucionais, landing pages e páginas personalizadas.', valor: 'R$ 1.500' },
    { nome: 'Website Institucional', desc: 'Design e desenvolvimento de sites profissionais para empresas e marcas.', valor: 'R$ 1.500' },
    { nome: 'Branding Completo', desc: 'Pesquisa, estratégia, identidade visual e manual completo da marca.', valor: 'R$ 2.500' },
    { nome: 'Seção de Perguntas Frequentes', desc: 'Acordeon ou lista com dúvidas comuns sobre serviços e contratação.', valor: 'R$ 300' },
    { nome: 'Apresentações Profissionais', desc: 'Slides comerciais, apresentações de projetos e pitch.', valor: 'R$ 250' },
    { nome: 'Manual da Marca', desc: 'Documento completo com regras de uso da identidade visual.', valor: 'R$ 900' },
    { nome: 'Criação de Banners', desc: 'Banners digitais para sites, campanhas e anúncios.', valor: 'R$ 150' },
    { nome: 'Consultoria de Branding', desc: 'Estratégias para fortalecer posicionamento e presença da marca.', valor: 'R$ 700' },

];

function Servicos() {
    return (
        <main className="p-20 animacao-entrada">
            <section className="text-center mb-20">
                <h1>Nossos Serviços</h1>
                <p>Soluções criativas para sua marca.</p>
            </section>

            <div className="grid-3x3 mb-20">
                {servicosEstaticos.map((servico, i) => (
                    <div className="card" key={i}>
                        <h3>{servico.nome}</h3>
                        <p>{servico.desc}</p>
                        <h3><strong>A partir de {servico.valor}</strong></h3>
                    </div>
                ))}
            </div>

            <div className="text-center">
                <p><em>Seção de FAQ opcional no futuro.</em></p>
            </div>
        </main>
    );
}

export default Servicos;