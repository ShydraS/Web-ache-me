/* =====================================================
   1️⃣ PROTÓTIPO DE PRODUTO (MODELO)
   → usado como base para criação e edição
===================================================== */

const produtoPrototipo = {
  id: 0,              // 0 a 999
  nome: "",           // string
  setor: "",          // string
  valor: 0,           // number
  corredor: "",       // string
  codigo: "",         // string
  descricao: "",      // string
  imagem: ""          // url ou base64
};

/* =====================================================
   CONEXAO.JS
   SOMENTE LEITURA (CATÁLOGO FIXO)
===================================================== */

const produtos = [
  {
    id: 1,
    nome: "Arroz",
    setor: "Alimentos",
    valor: "25.90",
    corredor: "A1",
    codigo: "001",
    descricao: "Arroz branco 5kg",
    imagem: "https://via.placeholder.com/200",
    visivel: true
  },
  {
    id: 2,
    nome: "Feijão",
    setor: "Alimentos",
    valor: "8.50",
    corredor: "A1",
    codigo: "002",
    descricao: "Feijão carioca",
    imagem: "https://via.placeholder.com/200",
    visivel: true
  },
  {
    id: 3,
    nome: "Detergente",
    setor: "Limpeza",
    valor: "3.20",
    corredor: "B2",
    codigo: "010",
    descricao: "Detergente neutro",
    imagem: "https://via.placeholder.com/200",
    visivel: true
  }
];

/* FUNÇÃO DE LEITURA */
function fetchProdutos() {
  return Promise.resolve(produtos);
}
