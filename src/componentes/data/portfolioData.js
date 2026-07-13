/* imagens exemplo (depois que pegar a imagem edita o caminho para "/portfolio/Doce1.png*/
import Doce1 from "../../assets/images/blog/blog1.png";
import Logotipo from "../../assets/images/PortifolioCases/logotipo_doce_sabor.jpg";
import Mockup_Embalagem from "../../assets/images/PortifolioCases/mockup_embalagem_doce_sabor.jpg";
import Paleta_de_cores from "../../assets/images/PortifolioCases/paleta_de_cores_doce_sabor.jpg";
import Tech1 from "../../assets/images/PortifolioCases/logotipo_TechStart.jpg";
import Tech2 from "../../assets/images/PortifolioCases/Mockup_TechStart.jpg";
import Tech3 from "../../assets/images/PortifolioCases/paleta_de_cores_techstart.jpg";
import Cafe1 from "../../assets/images/PortifolioCases/logotipo_cafe_do_ze.jpg";
import Cafe2 from "../../assets/images/PortifolioCases/mockup_embalagem_cafe_do_ze.jpg";
import Cafe3 from "../../assets/images/PortifolioCases/Avental_e_cardapio_cafe_do_ze.jpg";
import Oficina1 from "../../assets/images/PortifolioCases/logotipo_oficina_rota_certa.jpg";
import Oficina2 from "../../assets/images/PortifolioCases/Mockup_oficina_rota_certa.jpg";
import Oficina3 from "../../assets/images/PortifolioCases/Camiseta_oficina_rota_certa.jpg";
import Sabor1 from "../../assets/images/PortifolioCases/logotipo_sabor_raiz.jpg";
import Sabor2 from "../../assets/images/PortifolioCases/Mockup_sabor_raiz.jpg";
import Sabor3 from "../../assets/images/PortifolioCases/produtos_sabor_raiz.jpg";
import Casa1 from "../../assets/images/PortifolioCases/logotipo_casa_em_dia.jpg";
import Casa2 from "../../assets/images/PortifolioCases/mockup_casa_em_dia.jpg";
import Casa3 from "../../assets/images/PortifolioCases/guiadigital_casa_em_dia.jpg";
import Ilumina1 from "../../assets/images/PortifolioCases/logotipo_ilumina_decora.jpg";
import Ilumina2 from "../../assets/images/PortifolioCases/mockup_ilumina_decora.jpg";
import Ilumina3 from "../../assets/images/PortifolioCases/catalogo_ilumina_decora.jpg";
import Bio1 from "../../assets/images/PortifolioCases/biotecno_logotipo.jpg";
import Bio2 from "../../assets/images/PortifolioCases/Mockup_biotecno.jpg";
import Bio3 from "../../assets/images/PortifolioCases/Ambiente_biotecno.jpg";
import Coop1 from "../../assets/images/PortifolioCases/logotipo_coopermil.jpg";
import Coop2 from "../../assets/images/PortifolioCases/mockup_coopermil.jpg";
import Coop3 from "../../assets/images/PortifolioCases/Atendimento_coopermil.jpg";

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
      { src: Paleta_de_cores, alt: 'Paleta de cores e texturas' }
    ]
},  
{
    id: '2',
    nome: 'TechStart',
    categoria: 'Branding & Web',
    chamada: 'Inovação e usabilidade para o futuro digital',
    desc: 'Projeto completo de branding e design de interface (UI/UX) para uma startup de tecnologia, com foco em inovação, agilidade e performance web.',
    contexto: 'A TechStart é uma empresa emergente que desenvolve soluções de software e precisava se destacar em um mercado altamente competitivo. A equipe buscava uma marca que passasse credibilidade corporativa, mas sem perder a essência ágil e moderna de uma startup.',
    desafio: 'O maior desafio foi criar uma identidade visual que fugisse dos clichês de empresas de TI, além de projetar o layout de uma plataforma web que fosse extremamente intuitiva, garantindo uma ótima experiência de usuário e facilitando a navegação fluida.',
    solucao: 'Desenvolvemos um logotipo minimalista com tipografia forte e uma paleta focada em azul elétrico e tons escuros para o "Dark Mode". Para a parte web, entregamos protótipos de alta fidelidade e um design system focado em componentes reutilizáveis, prontos para serem codificados.',
    // Campos existentes atualizados:
    destaque: 'A criação de um "Design System" completo padronizou todos os botões, cards e tipografia, facilitando a vida dos desenvolvedores na hora de programar o front-end.',
    conceito: 'Visual limpo, tipografia sans-serif moderna e elementos geométricos que transmitem segurança e tecnologia.',
    elementos: 'Logotipo, manual da marca, protótipos de interface (UI) e layout responsivo para o site.',
    foco: 'Posicionar a startup como inovadora, confiável e acessível para usuários modernos e empresas tech.',
    imagens: [
    { src: Tech1, alt: 'Apresentação do Logotipo TechStart' },
    { src: Tech2, alt: 'Mockup do site responsivo no notebook e celular' },
    { src: Tech3, alt: 'Design System e paleta de cores da interface' }
    ]
  },
{
    id: '3',
    nome: 'Café do Zé',
    categoria: 'Embalagem & Identidade',
    chamada: 'O aconchego do café de bairro com uma nova cara',
    desc: 'Projeto visual para cafeteria local, com foco em rótulos, copos e sinalização de loja.',
    contexto: 'O Café do Zé é um ponto de encontro clássico da cidade, famoso pelo atendimento caloroso e pelo autêntico café coado. Eles precisavam modernizar a marca para atrair um público mais jovem e expandir o serviço de "coffee to go" (café para viagem), mas tinham muito medo de perder a essência tradicional e a clientela mais antiga.',
    desafio: 'O grande desafio foi encontrar o equilíbrio perfeito entre o rústico e o contemporâneo. A nova identidade precisava ser nostálgica e acolhedora, mas ao mesmo tempo limpa e versátil o suficiente para funcionar bem no Instagram e nas embalagens descartáveis.',
    solucao: 'Criamos um logotipo usando uma tipografia customizada que lembra os letreiros clássicos pintados à mão. A paleta de cores foca em tons terrosos — marrom café, terracota e um off-white que imita papel envelhecido. Também desenvolvemos um sistema de carimbos e adesivos para personalizar copos e sacolas kraft de forma econômica e charmosa.',
    // Campos existentes mantidos:
    destaque: 'Os novos copos de viagem se tornaram um sucesso instantâneo, com um design tão charmoso que os próprios clientes começaram a postar fotos nas redes sociais, gerando mídia espontânea.',
    conceito: 'Tons terrosos, textura rústica e tipografia artesanal que transmitem aconchego e autenticidade.',
    elementos: 'Rótulos, copos, sacolas, cardápio e sinalização com atmosfera artesanal.',
    foco: 'Criar identidade acolhedora que convida o público a viver a experiência da cafeteria.',
    imagens: [
     { src: Cafe1, alt: 'Logotipo do Café do Zé aplicado em madeira' },
     { src: Cafe2, alt: 'Copos de café para viagem e embalagens kraft' },
     { src: Cafe3, alt: 'Avental do barista e cardápio da cafeteria' }
    ]
  },
{
    id: '4',
    nome: 'Oficina Rota Certa',
    categoria: 'Identidade Visual',
    chamada: 'Segurança e transparência para você seguir em frente',
    desc: 'Marca para oficina mecânica com foco em confiança, movimento e conexão local.',
    contexto: 'A Oficina Rota Certa atua no setor de manutenção e revisão automotiva. Apesar de oferecerem um serviço de extrema qualidade, a antiga comunicação visual não refletia o nível de profissionalismo, tecnologia e organização do espaço e da equipe.',
    desafio: 'O mercado de oficinas mecânicas muitas vezes sofre com a desconfiança do público. O grande desafio era construir uma identidade de marca forte que quebrasse esse estigma, transmitindo transparência, limpeza e segurança, sem perder a força e a energia do setor automotivo.',
    solucao: 'Desenvolvemos uma marca com tipografia robusta e ligeiramente inclinada, sugerindo movimento e agilidade. A paleta de cores uniu tons escuros e industriais (que passam estabilidade) com detalhes vibrantes para trazer energia. O projeto se estendeu para uma repaginada completa nos uniformes, sinalização interna de segurança e a nova fachada da oficina.',
    destaque: 'A padronização visual completa mudou a percepção do público, posicionando a oficina quase como uma "boutique automotiva" e atraindo clientes que buscam serviços premium.',
    conceito: 'Tipografia robusta, ícones mecânicos e cores industriais para transmitir segurança.',
    elementos: 'Logo, fachada, adesivos e sinalização para veículos e ambiente da oficina.',
    foco: 'Transmitir credibilidade e dinamismo para serviços automotivos e manutenção.',
    imagens: [
     { src: Oficina1, alt: 'Logotipo e tipografia da Oficina Rota Certa' },
     { src: Oficina2, alt: 'Mockup da nova fachada e placas de sinalização' },
     { src: Oficina3, alt: 'Uniformes da equipe mecânica' }
    ]
  },
{
    id: '5',
    nome: 'Sabor Raiz',
    categoria: 'Branding & Embalagem',
    chamada: 'O verdadeiro sabor que vem da terra',
    desc: 'Identidade para produtos alimentícios artesanais com pegada orgânica e tradicional.',
    contexto: 'A Sabor Raiz é uma marca que nasceu do desejo de levar alimentos frescos, sem conservantes e produzidos de forma sustentável diretamente para a mesa das famílias. O público-alvo são pessoas preocupadas com a saúde e que valorizam a origem e o processo de produção dos alimentos.',
    desafio: 'O desafio foi comunicar o frescor e a simplicidade do campo em um produto processado para venda em gôndola. A identidade precisava destacar-se pelo contraste com a aparência industrial das grandes marcas, transmitindo confiança imediata na procedência dos ingredientes.',
    solucao: 'Optamos por uma direção de arte baseada em texturas de papel natural, fotografias macro dos ingredientes frescos e uma tipografia manual que reforça a ideia de produto "feito à mão". A paleta explora tons terrosos, verdes musgo e o dourado do sol, criando uma conexão emocional direta com a natureza.',
    destaque: 'O design das embalagens priorizou a transparência, permitindo que o cliente veja a qualidade real dos ingredientes antes mesmo de comprar, o que aumentou significativamente a taxa de conversão nas prateleiras.',
    conceito: 'Tons naturais, texturas de papel e grafismos simples que remetem à origem do alimento.',
    elementos: 'Rótulos, embalagens sustentáveis, tags informativas e materiais promocionais.',
    foco: 'Reforçar a origem caseira e as qualidades autênticas dos alimentos naturais.',
    imagens: [
    { src: Sabor1, alt: 'Identidade visual e logotipo Sabor Raiz' },
    { src: Sabor2, alt: 'Embalagens sustentáveis e rótulos artesanais' },
    { src: Sabor3, alt: 'Fotografia de produto e composição orgânica' }
    ]
  },
{
    id: '6',
    nome: 'Casa em Dia',
    categoria: 'Interior & Social',
    chamada: 'Transformando espaços em verdadeiros lares',
    desc: 'Identidade visual e estratégia de comunicação para serviços de organização profissional e decoração residencial.',
    contexto: 'A Casa em Dia atua ajudando famílias e indivíduos a recuperarem a funcionalidade e a harmonia de seus lares através da organização profissional (personal organizer) e consultoria de decoração. O negócio precisava de uma marca que passasse tanto a sensação de método e ordem quanto o sentimento de conforto e acolhimento.',
    desafio: 'O maior desafio era distanciar a marca de um aspecto puramente "funcional ou frio", comum em serviços de limpeza ou logística. Era preciso criar um universo visual que envolvesse o cliente, transmitindo a ideia de que, ao organizar a casa, estamos também organizando a vida e criando um espaço para momentos especiais.',
    solucao: 'Desenvolvemos uma identidade pautada na leveza, usando uma tipografia manuscrita elegante para os títulos e uma paleta de cores suaves (tons de areia, verde sálvia e azul acinzentado). A comunicação focou no "antes e depois" como ferramenta de prova social, destacando o bem-estar proporcionado pela ordem.',
    destaque: 'A criação de um guia de estilo para as redes sociais humanizou o serviço, mostrando não apenas armários organizados, mas o resultado final: famílias desfrutando de um ambiente leve e acolhedor.',
    conceito: 'Leveza, harmonia, funcionalidade e o calor de um ambiente bem vivido.',
    elementos: 'Logotipo minimalista, cartões de visita, guias digitais de organização e identidade para redes sociais.',
    foco: 'Transmitir tranquilidade e bem-estar através da organização e decoração funcional.',
    imagens: [
    { src: Casa1, alt: 'Logotipo Casa em Dia aplicado em papelaria' },
    { src: Casa2, alt: 'Ambiente organizado com estilo decorativo' },
    { src: Casa3, alt: 'Guia digital e feed de redes sociais da marca' }
    ]
  },
{
    id: '7',
    nome: 'Ilumina Decora',
    categoria: 'Design de Marca',
    chamada: 'Sofisticação que ilumina seus melhores momentos',
    desc: 'Branding completo para escritório de decoração com foco em estilo elegante e ambientação sofisticada.',
    contexto: 'O Ilumina Decora é um escritório de arquitetura de interiores especializado em projetos residenciais de alto padrão. O foco principal é capturar a personalidade dos clientes e traduzi-la em espaços que equilibram funcionalidade, luxo e uma iluminação cênica impecável.',
    desafio: 'O desafio central foi criar uma identidade visual que conseguisse transparecer a "assinatura" do escritório: algo que fosse moderno, mas que mantivesse uma atemporalidade clássica. Era preciso que a marca conversasse com um público exigente, que valoriza cada detalhe e busca ambientes que sejam, ao mesmo tempo, cenários de design e espaços de puro conforto.',
    solucao: 'Desenvolvemos uma marca baseada na sutileza e no luxo silencioso. Utilizamos uma tipografia serifada de alto contraste, linhas finas e uma paleta de cores sóbria, focada em tons metálicos (dourado e bronze) sobre bases neutras de cinza profundo e off-white. A comunicação visual foi desenhada para ser limpa, dando o protagonismo total às fotografias dos projetos realizados.',
    destaque: 'O design da identidade foi pensado para funcionar como uma "moldura" para os projetos, garantindo que o logo e as peças de comunicação nunca ofusquem a beleza da decoração, mas a complementem com elegância.',
    conceito: 'Luxo atemporal, harmonia estética, elegância sutil e atenção impecável aos detalhes.',
    elementos: 'Logotipo minimalista, cartões em papel especial com verniz localizado, portfólio impresso de luxo e presença digital curada.',
    foco: 'Posicionar o escritório como referência em design de interiores sofisticado e curadoria de ambientes.',
    imagens: [
    { src: Ilumina1, alt: 'Logotipo Ilumina Decora em papelaria premium' },
    { src: Ilumina2, alt: 'Ambiente decorado com foco em iluminação' },
    { src: Ilumina3, alt: 'Catálogo de projetos de alto padrão' }
    ]
  },
{
    id: '8',
    nome: 'BioTECNO',
    categoria: 'Refrigeração Médica',
    chamada: 'Tecnologia de precisão para salvar vidas',
    desc: 'Soluções avançadas em refrigeração para ambientes hospitalares e laboratórios de alta complexidade.',
    contexto: 'A BioTECNO é uma empresa especializada no desenvolvimento de sistemas de refrigeração para armazenar insumos médicos, vacinas e amostras biológicas que exigem controle térmico rigoroso. Em um mercado onde qualquer variação de temperatura pode comprometer um tratamento, a marca precisava de uma identidade que transparecesse excelência técnica absoluta.',
    desafio: 'O desafio foi criar uma marca que unisse a frieza necessária da engenharia e refrigeração com a empatia e o cuidado da área médica. A identidade não poderia ser apenas "industrial", ela precisava transmitir a ideia de "proteção da vida através da ciência".',
    solucao: 'A identidade visual foi construída com linhas geométricas precisas, ângulos retos e uma tipografia técnica, reforçando o rigor científico. A paleta utiliza azuis profundos (que remetem a estabilidade e medicina) combinados com toques de laranja vibrante (que trazem energia e alerta para a tecnologia). A comunicação visual foca em transmitir a confiabilidade dos sistemas de monitoramento e a segurança térmica constante.',
    destaque: 'A marca foi aplicada em painéis de controle dos equipamentos e manuais técnicos, garantindo que a mesma linguagem visual de alta confiabilidade fosse sentida pelo médico ou técnico que opera a máquina diariamente.',
    conceito: 'Precisão absoluta, rigor científico, estabilidade e proteção térmica.',
    elementos: 'Logotipo técnico, manuais de operação, adesivagem de equipamentos de grande porte e interface de painéis de controle.',
    foco: 'Posicionar a BioTECNO como sinônimo de segurança e tecnologia de ponta na refrigeração médica.',
    imagens: [
    { src: Bio1, alt: 'Logotipo BioTECNO em equipamento de refrigeração' },
    { src: Bio2, alt: 'Painel de controle tecnológico de um freezer médico' },
    { src: Bio3, alt: 'Ambiente laboratorial utilizando a marca BioTECNO' }
    ]
  },
{
    id: '9',
    nome: 'Coopermil',
    categoria: 'Cooperativa Agropecuária',
    chamada: 'Crescendo juntos com a força do campo',
    desc: 'Identidade e estratégia de marca para uma cooperativa com ampla atuação em supermercados, postos e lojas agropecuárias.',
    contexto: 'A Coopermil é uma cooperativa consolidada que serve como um pilar essencial para o desenvolvimento regional. Com um ecossistema que engloba o abastecimento alimentar, combustível e insumos para o produtor rural, a marca precisava unificar sob uma única voz todas essas frentes de negócio, mantendo a proximidade com o cooperado.',
    desafio: 'O desafio foi criar uma identidade que conectasse mundos distintos: o varejo urbano (supermercados e postos) e a lida técnica do campo (lojas agropecuárias). A marca deveria ser robusta o suficiente para transitar entre a conveniência do consumidor final e a autoridade técnica exigida pelo produtor rural.',
    solucao: 'Desenvolvemos uma identidade visual que resgata o valor do cooperativismo — a união e o crescimento mútuo. Utilizamos uma paleta baseada em tons de azul e verde, que remetem à confiança e à natureza, com uma tipografia sólida e legível. A estratégia visual foi aplicada em diferentes escalas, desde a fachada dos postos e sinalização dos supermercados até a comunicação técnica dos produtos agrícolas.',
    destaque: 'O projeto de branding unificou a experiência do cliente, fazendo com que o cooperado sinta que, seja no supermercado ou na loja agropecuária, ele está sempre em um ambiente de confiança e valorização do seu trabalho.',
    conceito: 'Solidez, comunidade, diversidade de atuação e compromisso com o progresso.',
    elementos: 'Identidade visual unificada, sinalização para pontos de venda, adesivagem de frotas e campanhas de comunicação institucional.',
    foco: 'Posicionar a Coopermil como o parceiro essencial do produtor e da comunidade, do campo à cidade.',
    imagens: [
    { src: Coop1, alt: 'Identidade visual Coopermil aplicada em supermercado' },
    { src: Coop2, alt: 'Fachada e comunicação de posto de combustíveis Coopermil' },
    { src: Coop3, alt: 'Atendimento e sinalização em loja agropecuária' }
    ]
  },
]
