/* =====================================================
   CONEXAO.JS
   BANCO DE DADOS SIMULADO (JS PURO)
===================================================== */

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
   2️⃣ LISTA VAZIA (USA O PROTÓTIPO)
===================================================== */

let produtos = [];

/* =====================================================
   3️⃣ PRODUTOS INICIAIS (CRIADOS A PARTIR DO PROTÓTIPO)
===================================================== */

const produtosBase = [
  {
    ...produtoPrototipo,
    id: 1,
    nome: "Arroz Branco",
    setor: "Alimentos",
    valor: 25.90,
    corredor: "A1",
    codigo: "001",
    descricao: "Arroz branco tipo 1 – 5kg",
    imagem: ""
  },
  {
    ...produtoPrototipo,
    id: 2,
    nome: "Feijão Carioca",
    setor: "Alimentos",
    valor: 8.50,
    corredor: "A1",
    codigo: "002",
    descricao: "Feijão carioca selecionado",
    imagem: ""
  },
  {
    ...produtoPrototipo,
    id: 3,
    nome: "Açúcar Refinado",
    setor: "Alimentos",
    valor: 4.20,
    corredor: "A2",
    codigo: "003",
    descricao: "Açúcar refinado 1kg",
    imagem: ""
  }
];

/* =====================================================
   4️⃣ INICIALIZAÇÃO
===================================================== */

if (produtos.length === 0) {
  produtos = [...produtosBase];
}

/* =====================================================
   5️⃣ FUNÇÕES DO "BANCO"
===================================================== */

// 🔍 LISTAR
function listarProdutos() {
  return produtos;
}

// ➕ CRIAR (usa protótipo)
function adicionarProduto(dados) {
  const novoProduto = {
    ...produtoPrototipo,
    ...dados,
    id: Math.floor(Math.random() * 1000) // 0 a 999
  };

  produtos.push(novoProduto);
}

// ✏️ EDITAR
function editarProduto(id, novosDados) {
  const index = produtos.findIndex(p => p.id === id);
  if (index !== -1) {
    produtos[index] = {
      ...produtos[index],
      ...novosDados
    };
  }
}

// ❌ REMOVER
function removerProduto(id) {
  produtos = produtos.filter(p => p.id !== id);
}

/* =====================================================
   6️⃣ EXPOSIÇÃO GLOBAL
===================================================== */

window.DB = {
  produtoPrototipo,
  listarProdutos,
  adicionarProduto,
  editarProduto,
  removerProduto
};
