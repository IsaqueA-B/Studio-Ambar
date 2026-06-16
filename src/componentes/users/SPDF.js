import { jsPDF } from 'jspdf';

export function gerarPDF(dados) {
    const { paciente, triagem } = dados;
    const doc = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
    });

    const margemEsq = 20;
    const larguraUtil = 170;
    const pageHeight = doc.internal.pageSize.height;
    const footerHeight = 30;
    const safeYEnd = pageHeight - footerHeight - 5;

    let y = 20;
    let paginaAtual = 1;

    const desenharRodape = (totalPaginas = null) => {
        const alturaPagina = doc.internal.pageSize.height;
        doc.setFillColor(248, 249, 250);
        doc.rect(0, alturaPagina - footerHeight, 210, footerHeight, 'F');
        doc.setFontSize(7);
        doc.setTextColor(127, 140, 141);
        const aviso =
            'AVISO LEGAL: Este documento é uma triagem emocional preliminar. Não substitui avaliação profissional.';
        doc.text(aviso, margemEsq, alturaPagina - 15);
        if (totalPaginas !== null) {
            doc.setFont('helvetica', 'bold');
            doc.text(`Página ${paginaAtual} de ${totalPaginas}`, 180, alturaPagina - 6);
        }
        doc.setFont('helvetica', 'normal');
        doc.text('Documento gerado por Mooshy', margemEsq, alturaPagina - 6);
    };

    const verificarEspaco = (alturaNecessaria) => {
        if (y + alturaNecessaria > safeYEnd) {
            desenharRodape(null);
            doc.addPage();
            paginaAtual++;
            y = 25;
        }
    };

    // Cabeçalho
    doc.setFillColor(248, 249, 250);
    doc.roundedRect(15, 15, 180, 30, 2, 2, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.setTextColor(41, 128, 185);
    doc.text('Relatório Mooshy - Triagem Emocional', margemEsq, 30);
    y = 70;

    // Dados do paciente
    doc.setFontSize(10);
    doc.setTextColor(127, 140, 141);
    doc.text('DADOS DO PACIENTE', margemEsq, y);
    y += 6;
    doc.setDrawColor(230, 233, 237);
    doc.line(margemEsq, y, 190, y);
    y += 8;
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(44, 62, 80);
    doc.text('Nome:', margemEsq, y);
    doc.setFont('helvetica', 'normal');
    doc.text(paciente.nome || '—', margemEsq + 15, y);
    doc.text('CPF:', 110, y);
    doc.text(paciente.cpf || '—', 125, y);
    y += 6;
    doc.text('Idade:', 110, y);
    doc.text(`${paciente.idade || '—'} anos`, 125, y);
    y += 10;

    // Resultado principal
    verificarEspaco(25);
    doc.setFillColor(41, 128, 185);
    doc.roundedRect(margemEsq, y, larguraUtil, 20, 2, 2, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(10);
    doc.text('PERFIL IDENTIFICADO', margemEsq + 5, y + 7);
    doc.setFontSize(13);
    doc.text(triagem.tituloResultado || '—', margemEsq + 5, y + 15);
    y += 30;
    doc.setFontSize(10);
    doc.setTextColor(44, 62, 80);
    const descLinhas = doc.splitTextToSize(triagem.descricao || '', larguraUtil);
    doc.text(descLinhas, margemEsq, y, { lineHeightFactor: 1.5 });
    y += descLinhas.length * 7 + 8;

    // Recomendações
    if (triagem.recomendacoes && triagem.recomendacoes.length > 0) {
        verificarEspaco(15);
        doc.setFontSize(11);
        doc.setTextColor(41, 128, 185);
        doc.text('RECOMENDAÇÕES', margemEsq, y);
        y += 8;
        triagem.recomendacoes.forEach((rec) => {
            verificarEspaco(7);
            doc.setFontSize(9);
            doc.setTextColor(44, 62, 80);
            doc.text(`• ${rec}`, margemEsq + 5, y);
            y += 6;
        });
        y += 4;
    }

    // Indicação do Slime
    if (triagem.cor) {
        verificarEspaco(15);
        doc.setFontSize(11);
        doc.setTextColor(41, 128, 185);
        doc.text('SLIME SUGERIDO', margemEsq, y);
        y += 8;
        doc.setFillColor(triagem.cor);
        doc.rect(margemEsq, y, 10, 10, 'F');
        doc.setFontSize(9);
        doc.setTextColor(44, 62, 80);
        doc.text(triagem.justificativaCor || '', margemEsq + 15, y + 6);
        y += 14;
    }

    // Alerta profissional
    if (triagem.alertaProfissional) {
        verificarEspaco(20);
        doc.setFillColor(255, 243, 205);
        doc.roundedRect(margemEsq, y, larguraUtil, 20, 2, 2, 'F');
        doc.setFontSize(10);
        doc.setTextColor(133, 100, 4);
        doc.text('⚠️ ATENÇÃO: Busque apoio profissional. CVV: 188', margemEsq + 5, y + 12);
        y += 25;
    }

    // Análise detalhada (texto)
    if (triagem.analiseDetalhada) {
        verificarEspaco(20);
        doc.setFontSize(11);
        doc.setTextColor(41, 128, 185);
        doc.text('ANÁLISE DETALHADA', margemEsq, y);
        y += 8;
        doc.setFontSize(9);
        doc.setTextColor(44, 62, 80);
        const analiseLinhas = doc.splitTextToSize(triagem.analiseDetalhada, larguraUtil);
        doc.text(analiseLinhas, margemEsq, y, { lineHeightFactor: 1.4 });
        y += analiseLinhas.length * 5 + 10;
    }

    // Rodapé final
    desenharRodape(paginaAtual);
    const nomeArquivo = `Triagem_${(paciente.nome || 'paciente').replace(/\s/g, '_')}.pdf`;
    doc.save(nomeArquivo);
}