/* ================= BANCO LOCAL ================= */

// PROTÓTIPO (modelo)
const PROTOTIPO_PRODUTO = {
  id: 0,
  nome: "",
  setor: "",
  valor: "",
  corredor: "",
  codigo: "",
  descricao: "",
  imagem: "",
  visivel: true
};

// PRODUTOS SALVOS
const PRODUTOS_DB = [
  {
    id: 1,
    nome: "Arroz 5kg",
    setor: "Alimentos",
    valor: "25.00",
    corredor: "3",
    codigo: "A001",
    descricao: "Arroz tipo 1",
    imagem: "https://via.placeholder.com/200",
    visivel: true
  },
  {
    id: 2,
    nome: "Feijão",
    setor: "Alimentos",
    valor: "9.50",
    corredor: "3",
    codigo: "F002",
    descricao: "Feijão carioca",
    imagem: "https://via.placeholder.com/200",
    visivel: true
  }
];

/* ================= API FAKE ================= */

function fetchProdutos() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([...PRODUTOS_DB]);
    }, 300);
  });
}
