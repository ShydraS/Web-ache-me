/* ================= CONFIGURAÇÃO ================= */
const CODIGO_ADM = "123";

/* ================= ESTADO GLOBAL ================= */
let produtos = [];
let modoADM = false;

let config = {
  nomeSite: "Web Ache-me",
  fundo: ""
};

/* ================= ELEMENTOS ================= */
const lobby = document.getElementById("lobby");
const app = document.getElementById("app");
const btnIniciar = document.getElementById("btnIniciar");

const pesquisa = document.getElementById("pesquisa");
const listaProdutos = document.getElementById("listaProdutos");

const painelADM = document.getElementById("painelADM");
const listaADM = document.getElementById("listaADM");

const detalhesProduto = document.getElementById("detalhesProduto");
const btnVoltar = document.getElementById("btnVoltar");

/* ================= ADM VISUAL ================= */
const sairADM = document.getElementById("sairADM");
const tituloADM = document.getElementById("tituloADM");
const produtosAleatoriosADM = document.getElementById("produtosAleatoriosADM");

/* ================= INICIALIZAÇÃO ================= */
document.addEventListener("DOMContentLoaded", async () => {

  esconderTudo();

  lobby.classList.remove("hidden");

  try {

    produtos = await fetchProdutos();

    if (!Array.isArray(produtos)) {
      produtos = [];
    }

    listarProdutos();

  } catch (erro) {
    console.error("Erro ao carregar produtos:", erro);
  }

});

/* ================= BASE ================= */
function esconderTudo() {

  lobby.classList.add("hidden");
  app.classList.add("hidden");
  painelADM.classList.add("hidden");
  detalhesProduto.classList.add("hidden");

  sairADM.classList.add("hidden");
  tituloADM.classList.add("hidden");
  produtosAleatoriosADM.classList.add("hidden");

}

/* ================= LOBBY ================= */
btnIniciar.onclick = () => {

  modoADM = false;

  pesquisa.value = "";

  lobby.classList.add("hidden");
  app.classList.remove("hidden");

  painelADM.classList.add("hidden");
  listaProdutos.classList.remove("hidden");

  aplicarConfig();
  listarProdutos();

};

/* ================= PESQUISA / ADM ================= */
pesquisa.oninput = () => {

  const valor = pesquisa.value.trim();

  /* === ENTRAR NO ADM === */
  if (!modoADM && valor === CODIGO_ADM) {

    modoADM = true;

    painelADM.classList.remove("hidden");
    listaProdutos.classList.add("hidden");

    tituloADM.classList.remove("hidden");
    sairADM.classList.remove("hidden");

    listarADM();
    mostrarProdutosAleatorios();

    return;
  }

  /* === PESQUISA NORMAL === */
  if (!modoADM) {
    listarProdutos(valor);
  }

};

/* ================= SAIR DO ADM ================= */
sairADM.onclick = () => {

  modoADM = false;

  painelADM.classList.add("hidden");
  listaProdutos.classList.remove("hidden");

  tituloADM.classList.add("hidden");
  sairADM.classList.add("hidden");
  produtosAleatoriosADM.classList.add("hidden");

  detalhesProduto.classList.add("hidden");
  app.classList.remove("hidden");

  pesquisa.value = "";

  listarProdutos();

};

/* ================= LISTAGEM NORMAL ================= */
function listarProdutos(filtro = "") {

  if (modoADM) {
    return;
  }

  listaProdutos.innerHTML = "";

  produtos
    .filter(produto => produto.visivel !== false)
    .filter(produto => {

      const nome = produto.nome || "";
      const setor = produto.setor || "";
      const codigo = produto.codigo || "";

      return (
        nome.toLowerCase().includes(filtro.toLowerCase()) ||
        setor.toLowerCase().includes(filtro.toLowerCase()) ||
        codigo.includes(filtro)
      );

    })
    .forEach(produto => {

      const div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `
        <strong>${produto.nome || "Sem nome"}</strong>
        <div>${produto.setor || "Sem setor"} - R$ ${produto.valor || "--"}</div>
      `;

      div.onclick = () => abrirProduto(produto.id);

      listaProdutos.appendChild(div);

    });

}

/* ================= ADM (SOMENTE VISUAL) ================= */
function listarADM() {

  listaADM.innerHTML = "";

  produtos.forEach(produto => {

    const div = document.createElement("div");
    div.className = "adm-item";

    div.innerHTML = `
      <strong>${produto.nome || "Sem nome"}</strong>
      <span>${produto.visivel !== false ? "Visível" : "Oculto"}</span>
    `;

    listaADM.appendChild(div);

  });

}

/* ================= PRODUTOS ALEATÓRIOS ADM ================= */
function mostrarProdutosAleatorios() {

  produtosAleatoriosADM.innerHTML = "";

  const visiveis = produtos.filter(p => p.visivel !== false);

  const aleatorios = visiveis
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  aleatorios.forEach(produto => {

    const div = document.createElement("div");
    div.className = "card aleatorio-adm";

    div.innerHTML = `
      <strong>${produto.nome || "Sem nome"}</strong>
      <div>${produto.setor || "Sem setor"} - R$ ${produto.valor || "--"}</div>
    `;

    div.onclick = () => abrirProduto(produto.id);

    produtosAleatoriosADM.appendChild(div);

  });

  produtosAleatoriosADM.classList.remove("hidden");

}

/* ================= DETALHES ================= */
function abrirProduto(id) {

  const produto = produtos.find(p => p.id === id);

  if (!produto) {
    return;
  }

  app.classList.add("hidden");
  detalhesProduto.classList.remove("hidden");

  document.getElementById("detalheImagem").src =
    produto.imagem || "https://via.placeholder.com/200";

  document.getElementById("detalheNome").innerText =
    produto.nome || "";

  document.getElementById("detalheSetor").innerText =
    produto.setor || "";

  document.getElementById("detalheValor").innerText =
    produto.valor || "";

  document.getElementById("detalheCorredor").innerText =
    produto.corredor || "";

  document.getElementById("detalheDescricao").innerText =
    produto.descricao || "";

  listarSugestoes(produto);

}

/* ================= VOLTAR ================= */
btnVoltar.onclick = () => {

  detalhesProduto.classList.add("hidden");
  app.classList.remove("hidden");

  const sugestoes = document.getElementById("sugestoes");
  if (sugestoes) {
    sugestoes.innerHTML = "";
  }

};

/* ================= SUGESTÕES ================= */
function listarSugestoes(produtoBase) {

  const sugestoes = document.getElementById("sugestoes");
  sugestoes.innerHTML = "";

  const relacionados = produtos
    .filter(p =>
      p.visivel !== false &&
      p.setor === produtoBase.setor &&
      p.id !== produtoBase.id
    )
    .sort(() => Math.random() - 0.5)
    .slice(0, 6);

  if (relacionados.length === 0) {
    sugestoes.innerHTML = "<span>Nenhum produto relacionado.</span>";
    return;
  }

  relacionados.forEach(produto => {

    const div = document.createElement("div");
    div.className = "card sugestao-card";

    div.innerHTML = `
      <img src="${produto.imagem || 'https://via.placeholder.com/60'}">
      <strong>${produto.nome || "Sem nome"}</strong>
    `;

    div.onclick = () => abrirProduto(produto.id);

    sugestoes.appendChild(div);

  });

}

/* ================= CONFIG ================= */
function aplicarConfig() {

  document.getElementById("siteNomeLobby").innerText =
    config.nomeSite;

  document.getElementById("siteNomeTopo").innerText =
    config.nomeSite;

}
