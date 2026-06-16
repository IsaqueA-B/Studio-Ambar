import { jsPDF } from 'jspdf';

export function gerarPDFExemplo() {
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
        const aviso = 'Este é um documento de exemplo. Não possui validade legal.';
        doc.text(aviso, margemEsq, alturaPagina - 15);
        if (totalPaginas !== null) {
            doc.setFont('helvetica', 'bold');
            doc.text(`Página ${paginaAtual} de ${totalPaginas}`, 180, alturaPagina - 6);
        }
        doc.setFont('helvetica', 'normal');
        doc.text('Documento gerado pelo Template Base', margemEsq, alturaPagina - 6);
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
    doc.text('Relatório de Exemplo', margemEsq, 30);
    y = 70;

    // Dados fictícios
    doc.setFontSize(10);
    doc.setTextColor(127, 140, 141);
    doc.text('DADOS DE DEMONSTRAÇÃO', margemEsq, y);
    y += 6;
    doc.setDrawColor(230, 233, 237);
    doc.line(margemEsq, y, 190, y);
    y += 8;
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(44, 62, 80);
    doc.text('Projeto:', margemEsq, y);
    doc.setFont('helvetica', 'normal');
    doc.text('Template Base React', margemEsq + 25, y);
    doc.text('Data:', 110, y);
    doc.text(new Date().toLocaleDateString('pt-BR'), 125, y);
    y += 6;
    doc.text('Autor:', 110, y);
    doc.text('Usuário Demo', 125, y);
    y += 10;

    // Seção Principal
    verificarEspaco(25);
    doc.setFillColor(41, 128, 185);
    doc.roundedRect(margemEsq, y, larguraUtil, 20, 2, 2, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(10);
    doc.text('VISÃO GERAL', margemEsq + 5, y + 7);
    doc.setFontSize(13);
    doc.text('Documento de exemplo para validação do layout', margemEsq + 5, y + 15);
    y += 30;
    doc.setFontSize(10);
    doc.setTextColor(44, 62, 80);
    const descLinhas = doc.splitTextToSize(
        'Este arquivo demonstra como o gerador de PDF pode ser utilizado em qualquer projeto. O layout é limpo, com seções bem definidas e elementos visuais como bordas arredondadas, blocos coloridos e rodapé institucional.',
        larguraUtil
    );
    doc.text(descLinhas, margemEsq, y, { lineHeightFactor: 1.5 });
    y += descLinhas.length * 7 + 8;

    // Lista de funcionalidades (como recomendações)
    const funcionalidades = [
        'Cabeçalho personalizável',
        'Seções com títulos coloridos',
        'Rodapé automático com numeração',
        'Controle de quebra de página',
        'Exportação para PDF diretamente do front-end',
        'Layout responsivo e adaptável',
    ];
    verificarEspaco(15);
    doc.setFontSize(11);
    doc.setTextColor(41, 128, 185);
    doc.text('FUNCIONALIDADES DISPONÍVEIS', margemEsq, y);
    y += 8;
    funcionalidades.forEach((func) => {
        verificarEspaco(7);
        doc.setFontSize(9);
        doc.setTextColor(44, 62, 80);
        doc.text(`• ${func}`, margemEsq + 5, y);
        y += 6;
    });
    y += 4;

    // Bloco colorido (exemplo de destaque)
    verificarEspaco(15);
    doc.setFillColor(235, 245, 251);
    doc.roundedRect(margemEsq, y, larguraUtil, 18, 2, 2, 'F');
    doc.setFontSize(10);
    doc.setTextColor(41, 128, 185);
    doc.text('Dica: Use este modelo como base para criar relatórios dinâmicos.', margemEsq + 5, y + 11);
    y += 25;

    // Rodapé final
    desenharRodape(paginaAtual);
    doc.save('relatorio_exemplo.pdf');
}