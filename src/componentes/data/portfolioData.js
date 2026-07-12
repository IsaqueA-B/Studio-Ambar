/* imagens exemplo (depois que pegar a imagem edita o caminho para "/portfolio/Doce1.png*/
import Doce1 from "../../assets/images/blog/blog1.png";
import Logotipo from "../../assets/images/PortifolioCases/logotipo_doce_sabor.jpg";
import Mockup_Embalagem from "../../assets/images/PortifolioCases/mockup_embalagem_doce_sabor.jpg";


export const projetos = [
{
  id: '1',
  nome: 'Doce Sabor Confeitaria',
  categoria: 'Identidade Visual',
  chamada: 'Uma marca que tem gosto de carinho',
  desc: 'Projeto completo de identidade visual para confeitaria artesanal, com foco em embalagens afetivas e comunicação doce e acolhedora.',
  contexto: 'A Doce Sabor é uma confeitaria familiar especializada em bolos caseiros e doces para festas. Os proprietários queriam uma marca que transmitisse a mesma sensação de “comida de avó” que seus produtos carregavam.',
  desafio: 'O desafio era criar uma identidade que fugisse do lugar-comum das confeitarias e transmitisse afeto, tradição e qualidade artesanal, atraindo um público que valoriza experiências memoráveis.',
  solucao: 'Criamos uma paleta com tons de baunilha, caramelo e rosa antigo, combinando tipografia serifada delicada com elementos em aquarela e texturas de papel kraft. O logotipo foi desenhado à mão para reforçar a autenticidade.',
  // Campos existentes mantidos:
  destaque: 'A identidade visual se desdobrou em embalagens para doces, caixas de presente e modelos para redes sociais, criando um universo visual completo.',
  conceito: 'Cores cremosas, formas arredondadas e textura delicada para transmitir sabor e carinho.',
  elementos: 'Marca, embalagens, padrões e peças promocionais com presença acolhedora.',
  foco: 'Comunicação visual doce e convidativa que desperta apetite e simpatia.',
imagens: [
      { src: Logotipo, alt: 'Logotipo principal' },
      { src: Mockup_Embalagem, alt: 'Mockup de embalagem' },
      // { src: Doce3, alt: 'Paleta de cores e texturas' }
    ]
},  
    {
        id: '2',
        nome: 'TechStart',
        categoria: 'Branding & Web',
        desc: 'Marca moderna para startup de tecnologia com foco em inovação e usabilidade.',
        destaque: 'Use as caixas abaixo para trocar pelos seus arquivos de imagem, mockups ou moodboard.',
        conceito: 'Visual limpo, tipografia sans-serif e elementos geométricos que passam confiança.',
        elementos: 'Logo, paleta de cores, layout de site e interface intuitiva para produtos digitais.',
        foco: 'Posicionar a startup como inovadora, confiável e acessível para usuários modernos.',
    },
    {
        id: '3',
        nome: "Café do Zé",
        categoria: 'Embalagem & Identidade',
        desc: 'Projeto visual para cafeteria local, com foco em rótulos, copos e sinalização de loja.',
        destaque: 'Substitua esses espaços por fotos do rótulo, embalagens, cardápio e layout da loja.',
        conceito: 'Tons terrosos, textura rústica e tipografia artesanal que transmitem aconchego e autenticidade.',
        elementos: 'Rótulos, copos, sacolas, cardápio e sinalização com atmosfera artesanal.',
        foco: 'Criar identidade acolhedora que convida o público a viver a experiência da cafeteria.',
    },
    {
        id: '4',
        nome: 'Oficina Rota Certa',
        categoria: 'Identidade Visual',
        desc: 'Marca para oficina mecânica com foco em confiança, movimento e conexão local.',
        destaque: 'Use estes espaços para mostrar a nova identidade, sinalização e aplicações em veículos.',
        conceito: 'Tipografia robusta, ícones mecânicos e cores industriais para transmitir segurança.',
        elementos: 'Logo, fachada, adesivos e sinalização para veículos e ambiente da oficina.',
        foco: 'Transmitir credibilidade e dinamismo para serviços automotivos e manutenção.',
    },
    {
        id: '5',
        nome: 'Sabor Raiz',
        categoria: 'Branding & Embalagem',
        desc: 'Identidade para produtos alimentícios artesanais com pegada orgânica e tradicional.',
        destaque: 'Adicione imagens de rótulos, embalagens e composições que valorizem o sabor caseiro.',
        conceito: 'Tons naturais, texturas de papel e grafismos simples que remetem à origem do alimento.',
        elementos: 'Rótulos, embalagens, tags e materiais com estética artesanal e natural.',
        foco: 'Reforçar a origem caseira e as qualidades autênticas dos alimentos.',
    },
    {
        id: '6',
        nome: 'Casa em Dia',
        categoria: 'Interior & Social',
        desc: 'Comunicação para serviço de organização e decoração residencial, com clima acolhedor.',
        destaque: 'Inclua aqui fotos de ambientes, moodboards e peças de comunicação para clientes.',
        conceito: 'Paleta suave, layout organizado e elementos leves para transmitir bem-estar.',
        elementos: 'Identidade visual, posts, catálogos e propostas que celebram ambientes organizados.',
        foco: 'Transmitir leveza, harmonia e confiança para clientes de decoração residencial.',
    },
    {
        id: '7',
        nome: 'Ilumina Decora',
        categoria: 'Design de Marca',
        desc: 'Branding para escritório de decoração com estilo elegante e ambientação sofisticada.',
        destaque: 'Mostre o logo, aplicações de papelaria e conceitos visuais para projetos de interiores.',
        conceito: 'Cores sofisticadas, tipografia moderna e detalhes refinados para inspirar confiança.',
        elementos: 'Marca, papelaria, mockups de espaço e materiais de apresentação premium.',
        foco: 'Posicionar o escritório como referência em decoração sofisticada e inspiradora.',
    },
    {
        id: '8',
        nome: 'BioTECNO',
        categoria: 'Refrigeração Médica',
        desc: 'Soluções de refrigeração para equipamentos médicos e armazenamento sensível.',
        destaque: 'Imagens de equipamentos, embalagens isotérmicas, certificados e manuais técnicos.',
        conceito: 'Paleta burgundy com acentos laranja; tipografia robusta para transmitir confiança e tecnologia.',
        elementos: 'Equipamentos, embalagens isolantes, selos de qualidade e interface de monitoramento.',
        foco: 'Garantir percepção de segurança, precisão e conformidade para o setor médico.',
    },
    {
        id: '9',
        nome: 'Coopermil',
        categoria: 'Cooperativa Agropecuária',
        desc: 'Cooperativa com atuação em supermercados, postos de combustível e lojas agropecuárias.',
        destaque: 'Mostre aplicações em embalagens, sinalização de supermercados, postos e material para revenda.',
        conceito: 'Azul institucional, tipografia sólida e aplicações que comunicam confiança e tradição no campo.',
        elementos: 'Marca, sinalização para pontos de venda, embalagens, adesivos para caminhões e postos.',
        foco: 'Fortalecer vínculo com produtores e consumidores através de identidade clara e presença em pontos de venda.',
    },
]
