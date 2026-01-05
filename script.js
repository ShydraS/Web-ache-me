/* ================= CONFIGURAÇÃO ================= */
const CODIGO_ADM = "123";

/* ================= BANCO DE DADOS ================= */
let produtos = [
    { id: 1, nome: "Arroz Agulhinha 5kg", setor: "Mercearia", valor: "29,90", corredor: "M-01", visivel: true, codigo: "MER001", imagem: "https://cdn-icons-png.flaticon.com/512/5029/5029236.png", descricao: "Arroz tipo 1, grãos selecionados." },
  { id: 2, nome: "Feijão Carioca 1kg", setor: "Mercearia", valor: "8,50", corredor: "M-01", visivel: true, codigo: "MER002", imagem: "https://cdn-icons-png.flaticon.com/512/8153/8153839.png", descricao: "Feijão novo de cozimento rápido." },
  { id: 3, nome: "Macarrão Espaguete", setor: "Mercearia", valor: "4,20", corredor: "M-02", visivel: true, codigo: "MER003", imagem: "https://cdn-icons-png.flaticon.com/512/2718/2718224.png", descricao: "Massa de sêmola com ovos." },
  { id: 4, nome: "Óleo de Soja 900ml", setor: "Mercearia", valor: "6,90", corredor: "M-03", visivel: true, codigo: "MER004", imagem: "https://cdn-icons-png.flaticon.com/512/1206/1206103.png", descricao: "Óleo vegetal refinado." },
  { id: 5, nome: "Açúcar Refinado 1kg", setor: "Mercearia", valor: "4,80", corredor: "M-04", visivel: true, codigo: "MER005", imagem: "https://cdn-icons-png.flaticon.com/512/5029/5029280.png", descricao: "Açúcar branco de alta pureza." },
  { id: 6, nome: "Café Torrado 500g", setor: "Mercearia", valor: "18,90", corredor: "M-05", visivel: true, codigo: "MER006", imagem: "https://cdn-icons-png.flaticon.com/512/924/924514.png", descricao: "Café extra forte moído." },
  { id: 7, nome: "Sal Refinado 1kg", setor: "Mercearia", valor: "2,50", corredor: "M-04", visivel: true, codigo: "MER007", imagem: "https://cdn-icons-png.flaticon.com/512/5029/5029278.png", descricao: "Sal iodado tipo 1." },
  { id: 8, nome: "Extrato de Tomate", setor: "Mercearia", valor: "3,75", corredor: "M-02", visivel: true, codigo: "MER008", imagem: "https://cdn-icons-png.flaticon.com/512/5029/5029264.png", descricao: "Concentrado de tomate puro." },
  { id: 9, nome: "Farinha de Trigo 1kg", setor: "Mercearia", valor: "5,40", corredor: "M-04", visivel: true, codigo: "MER009", imagem: "https://cdn-icons-png.flaticon.com/512/5029/5029275.png", descricao: "Farinha tipo 1 para bolos e pães." },
  { id: 10, nome: "Maionese 500g", setor: "Mercearia", valor: "7,20", corredor: "M-03", visivel: true, codigo: "MER010", imagem: "https://cdn-icons-png.flaticon.com/512/5029/5029253.png", descricao: "Maionese cremosa com ovos de galinha caipira." },
  { id: 11, nome: "Biscoito Recheado", setor: "Mercearia", valor: "3,50", corredor: "M-06", visivel: true, codigo: "MER011", imagem: "https://cdn-icons-png.flaticon.com/512/5029/5029240.png", descricao: "Sabor chocolate com recheio de baunilha." },
  { id: 12, nome: "Achocolatado Pó 400g", setor: "Mercearia", valor: "9,90", corredor: "M-05", visivel: true, codigo: "MER012", imagem: "https://cdn-icons-png.flaticon.com/512/5029/5029245.png", descricao: "Mistura para leite sabor chocolate." },
  { id: 13, nome: "Milho para Pipoca", setor: "Mercearia", valor: "5,80", corredor: "M-06", visivel: true, codigo: "MER013", imagem: "https://cdn-icons-png.flaticon.com/512/5029/5029255.png", descricao: "Milho premium, estoura fácil." },
  { id: 14, nome: "Sardinha em Lata", setor: "Mercearia", valor: "4,95", corredor: "M-02", visivel: true, codigo: "MER014", imagem: "https://cdn-icons-png.flaticon.com/512/5029/5029267.png", descricao: "Sardinha ao óleo comestível." },
  { id: 15, nome: "Fubá Mimoso 1kg", setor: "Mercearia", valor: "4,10", corredor: "M-04", visivel: true, codigo: "MER015", imagem: "https://cdn-icons-png.flaticon.com/512/5029/5029285.png", descricao: "Farinha de milho fina." },

  { id: 16, nome: "Banana Prata (Kg)", setor: "Hortifruti", valor: "6,50", corredor: "H-01", visivel: true, codigo: "HOR001", imagem: "https://cdn-icons-png.flaticon.com/512/2909/2909808.png", descricao: "Banana madura colhida no dia." },
  { id: 17, nome: "Maçã Gala (Kg)", setor: "Hortifruti", valor: "9,80", corredor: "H-01", visivel: true, codigo: "HOR002", imagem: "https://cdn-icons-png.flaticon.com/512/415/415733.png", descricao: "Maçã vermelha e crocante." },
  { id: 18, nome: "Tomate Italiano", setor: "Hortifruti", valor: "7,40", corredor: "H-02", visivel: true, codigo: "HOR003", imagem: "https://cdn-icons-png.flaticon.com/512/1202/1202125.png", descricao: "Ideal para molhos e saladas." },
  { id: 19, nome: "Cebola Branca (Kg)", setor: "Hortifruti", valor: "4,90", corredor: "H-02", visivel: true, codigo: "HOR004", imagem: "https://cdn-icons-png.flaticon.com/512/7230/7230868.png", descricao: "Cebola fresca selecionada." },
  { id: 20, nome: "Batata Inglesa (Kg)", setor: "Hortifruti", valor: "5,20", corredor: "H-02", visivel: true, codigo: "HOR005", imagem: "https://cdn-icons-png.flaticon.com/512/1135/1135543.png", descricao: "Batata lavada tipo especial." },
  { id: 21, nome: "Alface Crespa (Un)", setor: "Hortifruti", valor: "3,50", corredor: "H-03", visivel: true, codigo: "HOR006", imagem: "https://cdn-icons-png.flaticon.com/512/2346/2346930.png", descricao: "Folhas verdes e crocantes." },
  { id: 22, nome: "Cenoura (Kg)", setor: "Hortifruti", valor: "4,30", corredor: "H-02", visivel: true, codigo: "HOR007", imagem: "https://cdn-icons-png.flaticon.com/512/1041/1041355.png", descricao: "Cenoura fresca rica em vitamina A." },
  { id: 23, nome: "Laranja Pera (Kg)", setor: "Hortifruti", valor: "4,50", corredor: "H-01", visivel: true, codigo: "HOR008", imagem: "https://cdn-icons-png.flaticon.com/512/129/129391.png", descricao: "Laranja doce e suculenta." },
  { id: 24, nome: "Uva Sem Semente", setor: "Hortifruti", valor: "12,90", corredor: "H-01", visivel: true, codigo: "HOR009", imagem: "https://cdn-icons-png.flaticon.com/512/1041/1041349.png", descricao: "Uva Thompson doce e fresca." },
  { id: 25, nome: "Abóbora Cabotiá", setor: "Hortifruti", valor: "3,80", corredor: "H-02", visivel: true, codigo: "HOR010", imagem: "https://cdn-icons-png.flaticon.com/512/2909/2909880.png", descricao: "Abóbora de polpa firme." },
  { id: 26, nome: "Pimentão Verde", setor: "Hortifruti", valor: "6,90", corredor: "H-02", visivel: true, codigo: "HOR011", imagem: "https://cdn-icons-png.flaticon.com/512/3034/3034871.png", descricao: "Pimentão fresco de casca brilhante." },
  { id: 27, nome: "Brócolis Ninja", setor: "Hortifruti", valor: "8,50", corredor: "H-03", visivel: true, codigo: "HOR012", imagem: "https://cdn-icons-png.flaticon.com/512/2346/2346914.png", descricao: "Maço de brócolis selecionado." },
  { id: 28, nome: "Ovos Brancos 12un", setor: "Hortifruti", valor: "10,00", corredor: "H-04", visivel: true, codigo: "HOR013", imagem: "https://cdn-icons-png.flaticon.com/512/2136/2136829.png", descricao: "Ovos grandes tipo A." },
  { id: 29, nome: "Alho Roxo (Kg)", setor: "Hortifruti", valor: "25,00", corredor: "H-02", visivel: true, codigo: "HOR014", imagem: "https://cdn-icons-png.flaticon.com/512/2909/2909852.png", descricao: "Alho nacional de aroma forte." },
  { id: 30, nome: "Mamão Papaia", setor: "Hortifruti", valor: "6,20", corredor: "H-01", visivel: true, codigo: "HOR015", imagem: "https://cdn-icons-png.flaticon.com/512/2909/2909855.png", descricao: "Mamão maduro e doce." },

  { id: 31, nome: "Leite Integral 1L", setor: "Laticínios", valor: "5,40", corredor: "L-01", visivel: true, codigo: "LAT001", imagem: "https://cdn-icons-png.flaticon.com/512/2304/2304928.png", descricao: "Leite UHT tipo A." },
  { id: 32, nome: "Queijo Mussarela (Kg)", setor: "Laticínios", valor: "48,00", corredor: "L-02", visivel: true, codigo: "LAT002", imagem: "https://cdn-icons-png.flaticon.com/512/2405/2405454.png", descricao: "Fatiada ou pedaço, textura macia." },
  { id: 33, nome: "Manteiga com Sal", setor: "Laticínios", valor: "12,50", corredor: "L-03", visivel: true, codigo: "LAT003", imagem: "https://cdn-icons-png.flaticon.com/512/2153/2153777.png", descricao: "Manteiga extra de primeira qualidade." },
  { id: 34, nome: "Iogurte Natural", setor: "Laticínios", valor: "3,20", corredor: "L-04", visivel: true, codigo: "LAT004", imagem: "https://cdn-icons-png.flaticon.com/512/2619/2619550.png", descricao: "Integral, sem adição de açúcares." },
  { id: 35, nome: "Requeijão Cremoso", setor: "Laticínios", valor: "8,90", corredor: "L-02", visivel: true, codigo: "LAT005", imagem: "https://cdn-icons-png.flaticon.com/512/2153/2153765.png", descricao: "Copo 200g, textura aveludada." },
  { id: 36, nome: "Queijo Minas Frescal", setor: "Laticínios", valor: "22,00", corredor: "L-02", visivel: true, codigo: "LAT006", imagem: "https://cdn-icons-png.flaticon.com/512/817/817284.png", descricao: "Queijo branco, fresco e leve." },
  { id: 37, nome: "Leite Condensado", setor: "Laticínios", valor: "6,80", corredor: "L-01", visivel: true, codigo: "LAT007", imagem: "https://cdn-icons-png.flaticon.com/512/1037/1037142.png", descricao: "Lata 395g, ideal para doces." },
  { id: 38, nome: "Creme de Leite", setor: "Laticínios", valor: "3,50", corredor: "L-01", visivel: true, codigo: "LAT008", imagem: "https://cdn-icons-png.flaticon.com/512/5029/5029251.png", descricao: "Caixinha 200g, teor de gordura 17%." },
  { id: 39, nome: "Queijo Parmesão", setor: "Laticínios", valor: "7,50", corredor: "L-02", visivel: true, codigo: "LAT009", imagem: "https://cdn-icons-png.flaticon.com/512/3058/3058917.png", descricao: "Pacote 50g, ralado fino." },
  { id: 40, nome: "Margarina 500g", setor: "Laticínios", valor: "6,40", corredor: "L-03", visivel: true, codigo: "LAT010", imagem: "https://cdn-icons-png.flaticon.com/512/2153/2153777.png", descricao: "Com lipídios e vitamina A." },
  { id: 41, nome: "Leite Desnatado 1L", setor: "Laticínios", valor: "5,60", corredor: "L-01", visivel: true, codigo: "LAT011", imagem: "https://cdn-icons-png.flaticon.com/512/2304/2304928.png", descricao: "Zero gordura, rico em cálcio." },
  { id: 42, nome: "Ricota Fresca", setor: "Laticínios", valor: "11,00", corredor: "L-02", visivel: true, codigo: "LAT012", imagem: "https://cdn-icons-png.flaticon.com/512/817/817284.png", descricao: "Baixo teor calórico, fresca." },
  { id: 43, nome: "Danone Morango 4un", setor: "Laticínios", valor: "7,90", corredor: "L-04", visivel: true, codigo: "LAT013", imagem: "https://cdn-icons-png.flaticon.com/512/2619/2619550.png", descricao: "Iogurte infantil sabor fruta." },
  { id: 44, nome: "Bebida Láctea Choc", setor: "Laticínios", valor: "2,50", corredor: "L-01", visivel: true, codigo: "LAT014", imagem: "https://cdn-icons-png.flaticon.com/512/2405/2405527.png", descricao: "Pronto para beber, 200ml." },
  { id: 45, nome: "Queijo Prato Fatiado", setor: "Laticínios", valor: "14,90", corredor: "L-02", visivel: true, codigo: "LAT015", imagem: "https://cdn-icons-png.flaticon.com/512/2405/2405454.png", descricao: "Pacote 200g, ideal para lanches." },

  { id: 46, nome: "Pão Francês (Un)", setor: "Padaria", valor: "0,50", corredor: "P-01", visivel: true, codigo: "PAD001", imagem: "https://cdn-icons-png.flaticon.com/512/1342/1342082.png", descricao: "Pão quentinho saindo toda hora." },
  { id: 47, nome: "Pão de Forma", setor: "Padaria", valor: "7,50", corredor: "P-02", visivel: true, codigo: "PAD002", imagem: "https://cdn-icons-png.flaticon.com/512/3211/3211468.png", descricao: "Tradicional fatiado 450g." },
  { id: 48, nome: "Bolo de Fubá", setor: "Padaria", valor: "12,00", corredor: "P-03", visivel: true, codigo: "PAD003", imagem: "https://cdn-icons-png.flaticon.com/512/2917/2917995.png", descricao: "Bolo caseiro, receita da vovó." },
  { id: 49, nome: "Pão de Queijo 100g", setor: "Padaria", valor: "4,50", corredor: "P-01", visivel: true, codigo: "PAD004", imagem: "https://cdn-icons-png.flaticon.com/512/3081/3081926.png", descricao: "Feito com queijo canastra real." },
  { id: 50, nome: "Rosquinha Doce", setor: "Padaria", valor: "8,90", corredor: "P-03", visivel: true, codigo: "PAD005", imagem: "https://cdn-icons-png.flaticon.com/512/3081/3081881.png", descricao: "Rosca de coco com leite condensado." },
  { id: 51, nome: "Bagete com Gergelim", setor: "Padaria", valor: "4,20", corredor: "P-01", visivel: true, codigo: "PAD006", imagem: "https://cdn-icons-png.flaticon.com/512/1342/1342082.png", descricao: "Crosta crocante, interior macio." },
  { id: 52, nome: "Croissant Frango", setor: "Padaria", valor: "6,50", corredor: "P-01", visivel: true, codigo: "PAD007", imagem: "https://cdn-icons-png.flaticon.com/512/3081/3081896.png", descricao: "Massa folhada com recheio cremoso." },
  { id: 53, nome: "Pão Integral 100%", setor: "Padaria", valor: "9,80", corredor: "P-02", visivel: true, codigo: "PAD008", imagem: "https://cdn-icons-png.flaticon.com/512/3211/3211468.png", descricao: "Com grãos inteiros e fibras." },
  { id: 54, nome: "Biscoito de Polvilho", setor: "Padaria", valor: "5,40", corredor: "P-04", visivel: true, codigo: "PAD009", imagem: "https://cdn-icons-png.flaticon.com/512/3081/3081912.png", descricao: "Assado, leve e crocante." },
  { id: 55, nome: "Bolo de Chocolate", setor: "Padaria", valor: "15,00", corredor: "P-03", visivel: true, codigo: "PAD010", imagem: "https://cdn-icons-png.flaticon.com/512/2917/2917995.png", descricao: "Cobertura de brigadeiro gourmet." },
  { id: 56, nome: "Pão de Hambúrguer", setor: "Padaria", valor: "8,20", corredor: "P-02", visivel: true, codigo: "PAD011", imagem: "https://cdn-icons-png.flaticon.com/512/1342/1342082.png", descricao: "Pacote com 4 unidades grandes." },
  { id: 57, nome: "Sonho de Creme", setor: "Padaria", valor: "4,00", corredor: "P-01", visivel: true, codigo: "PAD012", imagem: "https://cdn-icons-png.flaticon.com/512/3081/3081881.png", descricao: "Frito e polvilhado com açúcar." },
  { id: 58, nome: "Carolina de Doce L.", setor: "Padaria", valor: "10,00", corredor: "P-01", visivel: true, codigo: "PAD013", imagem: "https://cdn-icons-png.flaticon.com/512/3081/3081905.png", descricao: "Cento pequeno, massa choux." },
  { id: 59, nome: "Torrada Tradicional", setor: "Padaria", valor: "6,90", corredor: "P-02", visivel: true, codigo: "PAD014", imagem: "https://cdn-icons-png.flaticon.com/512/3081/3081917.png", descricao: "Crocante, ideal para o café." },
  { id: 60, nome: "Pão Italiano", setor: "Padaria", valor: "11,50", corredor: "P-01", visivel: true, codigo: "PAD015", imagem: "https://cdn-icons-png.flaticon.com/512/1342/1342082.png", descricao: "Fermentação natural, casca grossa." },

  { id: 61, nome: "Coca-Cola 2L", setor: "Líquida", valor: "9,50", corredor: "Q-01", visivel: true, codigo: "LIQ001", imagem: "https://cdn-icons-png.flaticon.com/512/2405/2405479.png", descricao: "Refrigerante de cola original." },
  { id: 62, nome: "Água Mineral 500ml", setor: "Líquida", valor: "2,00", corredor: "Q-02", visivel: true, codigo: "LIQ002", imagem: "https://cdn-icons-png.flaticon.com/512/824/824231.png", descricao: "Sem gás, purificada." },
  { id: 63, nome: "Cerveja Lata 350ml", setor: "Líquida", valor: "3,80", corredor: "Q-03", visivel: true, codigo: "LIQ003", imagem: "https://cdn-icons-png.flaticon.com/512/918/918431.png", descricao: "Pilsen gelada e refrescante." },
  { id: 64, nome: "Suco de Uva 1L", setor: "Líquida", valor: "14,00", corredor: "Q-04", visivel: true, codigo: "LIQ004", imagem: "https://cdn-icons-png.flaticon.com/512/2405/2405490.png", descricao: "Integral, sem adição de açúcar." },
  { id: 65, nome: "Energético 250ml", setor: "Líquida", valor: "7,50", corredor: "Q-01", visivel: true, codigo: "LIQ005", imagem: "https://cdn-icons-png.flaticon.com/512/3050/3050181.png", descricao: "Rico em taurina e cafeína." },
  { id: 66, nome: "Guaraná Antartica", setor: "Líquida", valor: "8,20", corredor: "Q-01", visivel: true, codigo: "LIQ006", imagem: "https://cdn-icons-png.flaticon.com/512/2405/2405479.png", descricao: "Sabor original da Amazônia." },
  { id: 67, nome: "Vinho Tinto Suave", setor: "Líquida", valor: "25,00", corredor: "Q-05", visivel: true, codigo: "LIQ007", imagem: "https://cdn-icons-png.flaticon.com/512/920/920580.png", descricao: "Nacional, garrafa 750ml." },
  { id: 68, nome: "Néctar de Laranja", setor: "Líquida", valor: "6,40", corredor: "Q-04", visivel: true, codigo: "LIQ008", imagem: "https://cdn-icons-png.flaticon.com/512/2405/2405490.png", descricao: "Suco pronto para beber, caixinha 1L." },
  { id: 69, nome: "Água com Gás 500ml", setor: "Líquida", valor: "2,50", corredor: "Q-02", visivel: true, codigo: "LIQ009", imagem: "https://cdn-icons-png.flaticon.com/512/824/824231.png", descricao: "Fonte natural gaseificada." },
  { id: 70, nome: "Chá Gelado Limão", setor: "Líquida", valor: "5,90", corredor: "Q-04", visivel: true, codigo: "LIQ010", imagem: "https://cdn-icons-png.flaticon.com/512/935/935515.png", descricao: "Refresco de extrato de chá preto." },
  { id: 71, nome: "Isotônico Tangerina", setor: "Líquida", valor: "6,20", corredor: "Q-01", visivel: true, codigo: "LIQ011", imagem: "https://cdn-icons-png.flaticon.com/512/3050/3050181.png", descricao: "Reposição de sais minerais." },
  { id: 72, nome: "Aguardente 500ml", setor: "Líquida", valor: "12,00", corredor: "Q-05", visivel: true, codigo: "LIQ012", imagem: "https://cdn-icons-png.flaticon.com/512/920/920603.png", descricao: "Cachaça pura de alambique." },
  { id: 73, nome: "Soda Limonada 2L", setor: "Líquida", valor: "7,90", corredor: "Q-01", visivel: true, codigo: "LIQ013", imagem: "https://cdn-icons-png.flaticon.com/512/2405/2405479.png", descricao: "Refrigerante sabor limão cristalino." },
  { id: 74, nome: "Leite de Coco 200ml", setor: "Líquida", valor: "4,80", corredor: "Q-04", visivel: true, codigo: "LIQ014", imagem: "https://cdn-icons-png.flaticon.com/512/1037/1037142.png", descricao: "Ideal para culinária e moquecas." },
  { id: 75, nome: "Vodka Premium 1L", setor: "Líquida", valor: "45,00", corredor: "Q-05", visivel: true, codigo: "LIQ015", imagem: "https://cdn-icons-png.flaticon.com/512/920/920603.png", descricao: "Triplamente destilada." }
];

let modoADM = false;

/* ================= ELEMENTOS ================= */
const lobby = document.getElementById("lobby");
const app = document.getElementById("app");
const pesquisa = document.getElementById("pesquisa");
const listaProdutos = document.getElementById("listaProdutos");
const painelADM = document.getElementById("painelADM");
const listaADM = document.getElementById("listaADM");
const detalhesProduto = document.getElementById("detalhesProduto");
const sairADM = document.getElementById("sairADM");

/* ================= INICIALIZAÇÃO ================= */
document.getElementById("btnIniciar").onclick = () => {
  lobby.classList.add("hidden");
  app.classList.remove("hidden");
  listarProdutos();
};

/* ================= BUSCA / ADM ================= */
pesquisa.oninput = () => {
  const valor = pesquisa.value.trim();
  if (valor === CODIGO_ADM && !modoADM) {
    abrirModoADM();
    return;
  }
  modoADM ? listarADM(valor) : listarProdutos(valor);
};

function abrirModoADM() {
  modoADM = true;
  pesquisa.value = "";
  document.getElementById("siteNomeTopo").classList.add("hidden");
  document.getElementById("tituloADM").classList.remove("hidden");
  sairADM.classList.remove("hidden");
  listaProdutos.classList.add("hidden");
  painelADM.classList.remove("hidden");
  listarADM();
}

sairADM.onclick = () => {
  modoADM = false;
  pesquisa.value = "";
  location.reload(); // Reinicia para limpar estado
};

/* ================= LISTAGENS ================= */
function listarProdutos(filtro = "") {
  listaProdutos.innerHTML = "";
  const termo = filtro.toLowerCase();
  produtos.filter(p => p.visivel && p.nome.toLowerCase().includes(termo)).forEach(p => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<strong>${p.nome}</strong> <span>R$ ${p.valor}</span>`;
    div.onclick = () => abrirProduto(p.id);
    listaProdutos.appendChild(div);
  });
}

function listarADM(filtro = "") {
  listaADM.innerHTML = "";
  const termo = filtro.toLowerCase();
  produtos.filter(p => p.nome.toLowerCase().includes(termo)).forEa
