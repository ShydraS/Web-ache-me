/* ======================================================
   CONFIGURAÇÕES GERAIS
====================================================== */
const CHAVE_ADM = "123";

/* ======================================================
   BANCO DE DADOS (75 PRODUTOS)
====================================================== */
const produtos = [
    // MERCEARIA (15)
    { id: 1, nome: "Arroz Agulhinha 5kg", setor: "Mercearia", valor: "29,90", corredor: "M-01", visivel: true, codigo: "MER001", imagem: "https://cdn-icons-png.flaticon.com/512/5029/5029236.png", descricao: "Arroz tipo 1, grãos selecionados e polidos." },
    { id: 2, nome: "Feijão Carioca 1kg", setor: "Mercearia", valor: "8,50", corredor: "M-01", visivel: true, codigo: "MER002", imagem: "https://cdn-icons-png.flaticon.com/512/8153/8153839.png", descricao: "Feijão novo de cozimento rápido e caldo grosso." },
    { id: 3, nome: "Macarrão Espaguete", setor: "Mercearia", valor: "4,20", corredor: "M-02", visivel: true, codigo: "MER003", imagem: "https://cdn-icons-png.flaticon.com/512/2718/2718224.png", descricao: "Massa de sêmola com ovos, ideal para almoços em família." },
    { id: 4, nome: "Óleo de Soja 900ml", setor: "Mercearia", valor: "6,90", corredor: "M-03", visivel: true, codigo: "MER004", imagem: "https://cdn-icons-png.flaticon.com/512/1206/1206103.png", descricao: "Óleo vegetal refinado de alta qualidade." },
    { id: 5, nome: "Açúcar Refinado 1kg", setor: "Mercearia", valor: "4,80", corredor: "M-04", visivel: true, codigo: "MER005", imagem: "https://cdn-icons-png.flaticon.com/512/5029/5029280.png", descricao: "Açúcar branco extra fino de alta pureza." },
    { id: 6, nome: "Café Torrado 500g", setor: "Mercearia", valor: "18,90", corredor: "M-05", visivel: true, codigo: "MER006", imagem: "https://cdn-icons-png.flaticon.com/512/924/924514.png", descricao: "Café extra forte moído com aroma intenso." },
    { id: 7, nome: "Sal Refinado 1kg", setor: "Mercearia", valor: "2,50", corredor: "M-04", visivel: true, codigo: "MER007", imagem: "https://cdn-icons-png.flaticon.com/512/5029/5029278.png", descricao: "Sal iodado tipo 1 essencial para cozinha." },
    { id: 8, nome: "Extrato de Tomate", setor: "Mercearia", valor: "3,75", corredor: "M-02", visivel: true, codigo: "MER008", imagem: "https://cdn-icons-png.flaticon.com/512/5029/5029264.png", descricao: "Concentrado de tomate puro sem conservantes." },
    { id: 9, nome: "Farinha de Trigo 1kg", setor: "Mercearia", valor: "5,40", corredor: "M-04", visivel: true, codigo: "MER009", imagem: "https://cdn-icons-png.flaticon.com/512/5029/5029275.png", descricao: "Farinha tipo 1 enriquecida com ferro." },
    { id: 10, nome: "Maionese 500g", setor: "Mercearia", valor: "7,20", corredor: "M-03", visivel: true, codigo: "MER010", imagem: "https://cdn-icons-png.flaticon.com/512/5029/5029253.png", descricao: "Maionese cremosa com ovos de galinha caipira." },
    { id: 11, nome: "Biscoito Recheado", setor: "Mercearia", valor: "3,50", corredor: "M-06", visivel: true, codigo: "MER011", imagem: "https://cdn-icons-png.flaticon.com/512/5029/5029240.png", descricao: "Sabor chocolate com recheio generoso de baunilha." },
    { id: 12, nome: "Achocolatado Pó 400g", setor: "Mercearia", valor: "9,90", corredor: "M-05", visivel: true, codigo: "MER012", imagem: "https://cdn-icons-png.flaticon.com/512/5029/5029245.png", descricao: "Mistura para leite sabor chocolate com vitaminas." },
    { id: 13, nome: "Milho para Pipoca", setor: "Mercearia", valor: "5,80", corredor: "M-06", visivel: true, codigo: "MER013", imagem: "https://cdn-icons-png.flaticon.com/512/5029/5029255.png", descricao: "Milho premium selecionado, estoura fácil." },
    { id: 14, nome: "Sardinha em Lata", setor: "Mercearia", valor: "4,95", corredor: "M-02", visivel: true, codigo: "MER014", imagem: "https://cdn-icons-png.flaticon.com/512/5029/5029267.png", descricao: "Sardinha conservada ao óleo comestível." },
    { id: 15, nome: "Fubá Mimoso 1kg", setor: "Mercearia", valor: "4,10", corredor: "M-04", visivel: true, codigo: "MER015", imagem: "https://cdn-icons-png.flaticon.com/512/5029/5029285.png", descricao: "Farinha de milho fina ideal para bolos e polenta." },

    // HORTIFRUTI (15)
    { id: 16, nome: "Banana Prata (Kg)", setor: "Hortifruti", valor: "6,50", corredor: "H-01", visivel: true, codigo: "HOR001", imagem: "https://cdn-icons-png.flaticon.com/512/2909/2909808.png", descricao: "Banana madura e doce, colhida diretamente do produtor." },
    { id: 17, nome: "Maçã Gala (Kg)", setor: "Hortifruti", valor: "9,80", corredor: "H-01", visivel: true, codigo: "HOR002", imagem: "https://cdn-icons-png.flaticon.com/512/415/415733.png", descricao: "Maçã vermelha, suculenta e muito crocante." },
    { id: 18, nome: "Tomate Italiano", setor: "Hortifruti", valor: "7,40", corredor: "H-02", visivel: true, codigo: "HOR003", imagem: "https://cdn-icons-png.flaticon.com/512/1202/1202125.png", descricao: "Ideal para molhos caseiros e saladas frescas." },
    { id: 19, nome: "Cebola Branca (Kg)", setor: "Hortifruti", valor: "4,90", corredor: "H-02", visivel: true, codigo: "HOR004", imagem: "https://cdn-icons-png.flaticon.com/512/7230/7230868.png", descricao: "Cebola de casca firme e sabor marcante." },
    { id: 20, nome: "Batata Inglesa (Kg)", setor: "Hortifruti", valor: "5,20", corredor: "H-02", visivel: true, codigo: "HOR005", imagem: "https://cdn-icons-png.flaticon.com/512/1135/1135543.png", descricao: "Batata lavada tipo especial para fritura ou purê." },
    { id: 21, nome: "Alface Crespa (Un)", setor: "Hortifruti", valor: "3,50", corredor: "H-03", visivel: true, codigo: "HOR006", imagem: "https://cdn-icons-png.flaticon.com/512/2346/2346930.png", descricao: "Folhas verdes, frescas e ricas em fibras." },
    { id: 22, nome: "Cenoura (Kg)", setor: "Hortifruti", valor: "4,30", corredor: "H-02", visivel: true, codigo: "HOR007", imagem: "https://cdn-icons-png.flaticon.com/512/1041/1041355.png", descricao: "Cenoura fresca rica em betacaroteno." },
    { id: 23, nome: "Laranja Pera (Kg)", setor: "Hortifruti", valor: "4,50", corredor: "H-01", visivel: true, codigo: "HOR008", imagem: "https://cdn-icons-png.flaticon.com/512/129/129391.png", descricao: "Laranja doce, ideal para sucos naturais." },
    { id: 24, nome: "Uva Sem Semente", setor: "Hortifruti", valor: "12,90", corredor: "H-01", visivel: true, codigo: "HOR009", imagem: "https://cdn-icons-png.flaticon.com/512/1041/1041349.png", descricao: "Uva Thompson doce, fresca e sem caroço." },
    { id: 25, nome: "Abóbora Cabotiá", setor: "Hortifruti", valor: "3,80", corredor: "H-02", visivel: true, codigo: "HOR010", imagem: "https://cdn-icons-png.flaticon.com/512/2909/2909880.png", descricao: "Abóbora de polpa firme e saborosa." },
    { id: 26, nome: "Pimentão Verde", setor: "Hortifruti", valor: "6,90", corredor: "H-02", visivel: true, codigo: "HOR011", imagem: "https://cdn-icons-png.flaticon.com/512/3034/3034871.png", descricao: "Pimentão de cultivo selecionado." },
    { id: 27, nome: "Brócolis Ninja", setor: "Hortifruti", valor: "8,50", corredor: "H-03", visivel: true, codigo: "HOR012", imagem: "https://cdn-icons-png.flaticon.com/512/2346/2346914.png", descricao: "Maço de brócolis ninja de cor intensa." },
    { id: 28, nome: "Ovos Brancos 12un", setor: "Hortifruti", valor: "10,00", corredor: "H-04", visivel: true, codigo: "HOR013", imagem: "https://cdn-icons-png.flaticon.com/512/2136/2136829.png", descricao: "Ovos grandes tipo A, direto da granja." },
    { id: 29, nome: "Alho Roxo (Kg)", setor: "Hortifruti", valor: "25,00", corredor: "H-02", visivel: true, codigo: "HOR014", imagem: "https://cdn-icons-png.flaticon.com/512/2909/2909852.png", descricao: "Alho nacional de aroma marcante." },
    { id: 30, nome: "Mamão Papaia", setor: "Hortifruti", valor: "6,20", corredor: "H-01", visivel: true, codigo: "HOR015", imagem: "https://cdn-icons-png.flaticon.com/512/2909/2909855.png", descricao: "Mamão maduro de polpa macia." },

    // LATICÍNIOS (15)
    { id: 31, nome: "Leite Integral 1L", setor: "Laticínios", valor: "5,40", corredor: "L-01", visivel: true, codigo: "LAT001", imagem: "https://cdn-icons-png.flaticon.com/512/2304/2304928.png", descricao: "Leite UHT tipo A rico em cálcio." },
    { id: 32, nome: "Queijo Mussarela (Kg)", setor: "Laticínios", valor: "48,00", corredor: "L-02", visivel: true, codigo: "LAT002", imagem: "https://cdn-icons-png.flaticon.com/512/2405/2405454.png", descricao: "Queijo de textura macia, ideal para derreter." },
    { id: 33, nome: "Manteiga com Sal", setor: "Laticínios", valor: "12,50", corredor: "L-03", visivel: true, codigo: "LAT003", imagem: "https://cdn-icons-png.flaticon.com/512/2153/2153777.png", descricao: "Manteiga extra de primeira qualidade." },
    { id: 34, nome: "Iogurte Natural", setor: "Laticínios", valor: "3,20", corredor: "L-04", visivel: true, codigo: "LAT004", imagem: "https://cdn-icons-png.flaticon.com/512/2619/2619550.png", descricao: "Integral, natural e sem conservantes." },
    { id: 35, nome: "Requeijão Cremoso", setor: "Laticínios", valor: "8,90", corredor: "L-02", visivel: true, codigo: "LAT005", imagem: "https://cdn-icons-png.flaticon.com/512/2153/2153765.png", descricao: "Copo 200g, textura aveludada." },
    { id: 36, nome: "Queijo Minas Frescal", setor: "Laticínios", valor: "22,00", corredor: "L-02", visivel: true, codigo: "LAT006", imagem: "https://cdn-icons-png.flaticon.com/512/817/817284.png", descricao: "Queijo branco, fresco e baixo teor de sódio." },
    { id: 37, nome: "Leite Condensado", setor: "Laticínios", valor: "6,80", corredor: "L-01", visivel: true, codigo: "LAT007", imagem: "https://cdn-icons-png.flaticon.com/512/1037/1037142.png", descricao: "Ideal para sobremesas e doces." },
    { id: 38, nome: "Creme de Leite", setor: "Laticínios", valor: "3,50", corredor: "L-01", visivel: true, codigo: "LAT008", imagem: "https://cdn-icons-png.flaticon.com/512/5029/5029251.png", descricao: "Consistência perfeita para culinária." },
    { id: 39, nome: "Queijo Parmesão", setor: "Laticínios", valor: "7,50", corredor: "L-02", visivel: true, codigo: "LAT009", imagem: "https://cdn-icons-png.flaticon.com/512/3058/3058917.png", descricao: "Ralado grosso, maturação longa." },
    { id: 40, nome: "Margarina 500g", setor: "Laticínios", valor: "6,40", corredor: "L-03", visivel: true, codigo: "LAT010", imagem: "https://cdn-icons-png.flaticon.com/512/2153/2153777.png", descricao: "Cremosa com vitaminas A e D." },
    { id: 41, nome: "Leite Desnatado 1L", setor: "Laticínios", valor: "5,60", corredor: "L-01", visivel: true, codigo: "LAT011", imagem: "https://cdn-icons-png.flaticon.com/512/2304/2304928.png", descricao: "Zero gordura para dietas leves." },
    { id: 42, nome: "Ricota Fresca", setor: "Laticínios", valor: "11,00", corredor: "L-02", visivel: true, codigo: "LAT012", imagem: "https://cdn-icons-png.flaticon.com/512/817/817284.png", descricao: "Baixo teor calórico, ideal para pastas." },
    { id: 43, nome: "Danone Morango 4un", setor: "Laticínios", valor: "7,90", corredor: "L-04", visivel: true, codigo: "LAT013", imagem: "https://cdn-icons-png.flaticon.com/512/2619/2619550.png", descricao: "Iogurte desnatado sabor fruta." },
    { id: 44, nome: "Bebida Láctea Choc", setor: "Laticínios", valor: "2,50", corredor: "L-01", visivel: true, codigo: "LAT014", imagem: "https://cdn-icons-png.flaticon.com/512/2405/2405527.png", descricao: "Achocolatado pronto para consumo." },
    { id: 45, nome: "Queijo Prato Fatiado", setor: "Laticínios", valor: "14,90", corredor: "L-02", visivel: true, codigo: "LAT015", imagem: "https://cdn-icons-png.flaticon.com/512/2405/2405454.png", descricao: "Fatias finas para sanduíches." },

    // PADARIA (15)
    { id: 46, nome: "Pão Francês (Un)", setor: "Padaria", valor: "0,50", corredor: "P-01", visivel: true, codigo: "PAD001", imagem: "https://cdn-icons-png.flaticon.com/512/1342/1342082.png", descricao: "Pão crocante saindo do forno agora." },
    { id: 47, nome: "Pão de Forma", setor: "Padaria", valor: "7,50", corredor: "P-02", visivel: true, codigo: "PAD002", imagem: "https://cdn-icons-png.flaticon.com/512/3211/3211468.png", descricao: "Pão fatiado macio para torradas." },
    { id: 48, nome: "Bolo de Fubá", setor: "Padaria", valor: "12,00", corredor: "P-03", visivel: true, codigo: "PAD003", imagem: "https://cdn-icons-png.flaticon.com/512/2917/2917995.png", descricao: "Bolo artesanal com erva-doce." },
    { id: 49, nome: "Pão de Queijo 100g", setor: "Padaria", valor: "4,50", corredor: "P-01", visivel: true, codigo: "PAD004", imagem: "https://cdn-icons-png.flaticon.com/512/3081/3081926.png", descricao: "Tradicional mineiro com queijo real." },
    { id: 50, nome: "Rosquinha Doce", setor: "Padaria", valor: "8,90", corredor: "P-03", visivel: true, codigo: "PAD005", imagem: "https://cdn-icons-png.flaticon.com/512/3081/3081881.png", descricao: "Rosca de coco com cobertura de açúcar." },
    { id: 51, nome: "Bagete com Gergelim", setor: "Padaria", valor: "4,20", corredor: "P-01", visivel: true, codigo: "PAD006", imagem: "https://cdn-icons-png.flaticon.com/512/1342/1342082.png", descricao: "Pão rústico de crosta firme." },
    { id: 52, nome: "Croissant Frango", setor: "Padaria", valor: "6,50", corredor: "P-01", visivel: true, codigo: "PAD007", imagem: "https://cdn-icons-png.flaticon.com/512/3081/3081896.png", descricao: "Massa folhada na manteiga." },
    { id: 53, nome: "Pão Integral 100%", setor: "Padaria", valor: "9,80", corredor: "P-02", visivel: true, codigo: "PAD008", imagem: "https://cdn-icons-png.flaticon.com/512/3211/3211468.png", descricao: "Zero gordura trans e rico em grãos." },
    { id: 54, nome: "Biscoito de Polvilho", setor: "Padaria", valor: "5,40", corredor: "P-04", visivel: true, codigo: "PAD009", imagem: "https://cdn-icons-png.flaticon.com/512/3081/3081912.png", descricao: "Snack leve e crocante para o café." },
    { id: 55, nome: "Bolo de Chocolate", setor: "Padaria", valor: "15,00", corredor: "P-03", visivel: true, codigo: "PAD010", imagem: "https://cdn-icons-png.flaticon.com/512/2917/2917995.png", descricao: "Com granulado e calda de chocolate." },
    { id: 56, nome: "Pão de Hambúrguer", setor: "Padaria", valor: "8,20", corredor: "P-02", visivel: true, codigo: "PAD011", imagem: "https://cdn-icons-png.flaticon.com/512/1342/1342082.png", descricao: "Massa leve com gergelim." },
    { id: 57, nome: "Sonho de Creme", setor: "Padaria", valor: "4,00", corredor: "P-01", visivel: true, codigo: "PAD012", imagem: "https://cdn-icons-png.flaticon.com/512/3081/3081881.png", descricao: "Massa frita recheada com baunilha." },
    { id: 58, nome: "Carolina Doce Leite", setor: "Padaria", valor: "10,00", corredor: "P-01", visivel: true, codigo: "PAD013", imagem: "https://cdn-icons-png.flaticon.com/512/3081/3081905.png", descricao: "Mini bombas recheadas artesanais." },
    { id: 59, nome: "Torrada Tradicional", setor: "Padaria", valor: "6,90", corredor: "P-02", visivel: true, codigo: "PAD014", imagem: "https://cdn-icons-png.flaticon.com/512/3081/3081917.png", descricao: "Fatias torradas crocantes." },
    { id: 60, nome: "Pão Italiano", setor: "Padaria", valor: "11,50", corredor: "P-01", visivel: true, codigo: "PAD015", imagem: "https://cdn-icons-png.flaticon.com/512/1342/1342082.png", descricao: "Pão de fermentação natural longa." },

    // LÍQUIDA (15)
    { id: 61, nome: "Coca-Cola 2L", setor: "Líquida", valor: "9,50", corredor: "Q-01", visivel: true, codigo: "LIQ001", imagem: "https://cdn-icons-png.flaticon.com/512/2405/2405479.png", descricao: "Refrigerante gaseificado original." },
    { id: 62, nome: "Água Mineral 500ml", setor: "Líquida", valor: "2,00", corredor: "Q-02", visivel: true, codigo: "LIQ002", imagem: "https://cdn-icons-png.flaticon.com/512/824/824231.png", descricao: "Água sem gás extraída da fonte." },
    { id: 63, nome: "Cerveja Lata 350ml", setor: "Líquida", valor: "3,80", corredor: "Q-03", visivel: true, codigo: "LIQ003", imagem: "https://cdn-icons-png.flaticon.com/512/918/918431.png", descricao: "Cerveja pilsen pura malte." },
    { id: 64, nome: "Suco de Uva 1L", setor: "Líquida", valor: "14,00", corredor: "Q-04", visivel: true, codigo: "LIQ004", imagem: "https://cdn-icons-png.flaticon.com/512/2405/2405490.png", descricao: "Suco integral 100% fruta." },
    { id: 65, nome: "Energético 250ml", setor: "Líquida", valor: "7,50", corredor: "Q-01", visivel: true, codigo: "LIQ005", imagem: "https://cdn-icons-png.flaticon.com/512/3050/3050181.png", descricao: "Bebida energética com cafeína." },
    { id: 66, nome: "Guaraná Antartica", setor: "Líquida", valor: "8,20", corredor: "Q-01", visivel: true, codigo: "LIQ006", imagem: "https://cdn-icons-png.flaticon.com/512/2405/2405479.png", descricao: "Refrigerante de fruta amazônica." },
    { id: 67, nome: "Vinho Tinto Suave", setor: "Líquida", valor: "25,00", corredor: "Q-05", visivel: true, codigo: "LIQ007", imagem: "https://cdn-icons-png.flaticon.com/512/920/920580.png", descricao: "Vinho de mesa tinto nacional." },
    { id: 68, nome: "Néctar de Laranja", setor: "Líquida", valor: "6,40", corredor: "Q-04", visivel: true, codigo: "LIQ008", imagem: "https://cdn-icons-png.flaticon.com/512/2405/2405490.png", descricao: "Bebida de laranja adoçada." },
    { id: 69, nome: "Água com Gás 500ml", setor: "Líquida", valor: "2,50", corredor: "Q-02", visivel: true, codigo: "LIQ009", imagem: "https://cdn-icons-png.flaticon.com/512/824/824231.png", descricao: "Água mineral levemente gaseificada." },
    { id: 70, nome: "Chá Gelado Limão", setor: "Líquida", valor: "5,90", corredor: "Q-04", visivel: true, codigo: "LIQ010", imagem: "https://cdn-icons-png.flaticon.com/512/935/935515.png", descricao: "Chá preto com toque de limão." },
    { id: 71, nome: "Isotônico Laranja", setor: "Líquida", valor: "6,20", corredor: "Q-01", visivel: true, codigo: "LIQ011", imagem: "https://cdn-icons-png.flaticon.com/512/3050/3050181.png", descricao: "Repositor de eletrólitos." },
    { id: 72, nome: "Aguardente 500ml", setor: "Líquida", valor: "12,00", corredor: "Q-05", visivel: true, codigo: "LIQ012", imagem: "https://cdn-icons-png.flaticon.com/512/920/920603.png", descricao: "Cachaça branca clássica." },
    { id: 73, nome: "Soda Limonada 2L", setor: "Líquida", valor: "7,90", corredor: "Q-01", visivel: true, codigo: "LIQ013", imagem: "https://cdn-icons-png.flaticon.com/512/2405/2405479.png", descricao: "Refrigerante cítrico refrescante." },
    { id: 74, nome: "Leite de Coco 200ml", setor: "Líquida", valor: "4,80", corredor: "Q-04", visivel: true, codigo: "LIQ014", imagem: "https://cdn-icons-png.flaticon.com/512/1037/1037142.png", descricao: "Extrato de coco puro para cozinha." },
    { id: 75, nome: "Vodka Destilada 1L", setor: "Líquida", valor: "45,00", corredor: "Q-05", visivel: true, codigo: "LIQ015", imagem: "https://cdn-icons-png.flaticon.com/512/920/920603.png", descricao: "Vodka premium de alta pureza." }
];

/* ======================================================
   ESTADOS DA APLICAÇÃO
====================================================== */
let admAtivo = false;

/* ======================================================
   MAPEAMENTO DO DOM
====================================================== */
const telaLobby = document.getElementById('lobby');
const telaApp = document.getElementById('app');
const telaDetalhes = document.getElementById('detalhesProduto');
const inputBusca = document.getElementById('pesquisa');
const containerProdutos = document.getElementById('listaProdutos');
const containerADM = document.getElementById('listaADM');
const painelADMSection = document.getElementById('painelADM');
const btnSairADM = document.getElementById('sairADM');
const tituloModoADM = document.getElementById('tituloADM');
const logoNomeTopo = document.getElementById('siteNomeTopo');

/* ======================================================
   FUNÇÕES DE NAVEGAÇÃO
====================================================== */
document.getElementById('btnIniciar').addEventListener('click', () => {
    telaLobby.classList.add('hidd
