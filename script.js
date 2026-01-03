/* ================= CONFIGURAÇÃO ================= */
const CODIGO_ADM = "123";

/* ================= ESTADO GLOBAL ================= */
let produtos = [];
let produtoEmEdicao = null;
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

const btnNovoProduto = document.getElementById("btnNovoProduto");
const formNovoProduto = document.getElementById("formNovoProduto");
const btnSalvarNovo = document.getElementById("btnSalvarNovo");
const btnCancelarNovo = document.getElementById("btnCancelarNovo");

/* ================= NOVOS ELEMENTOS ADICIONADOS ================= */
const sairADM = document.getElementById("sairADM"); // Botão de sair do ADM
const tituloADM = document.getElementById("tituloADM"); // Título grande ADM
const produtosAleatoriosADM = document.getElementById("produtosAleatoriosADM"); // Produtos aleatórios

/* ================= INICIALIZAÇÃO ================= */
document.addEventListener("DOMContentLoaded", async () => {
  esconderTudo();
  lobby.classList.remove("hidden");

  try {
    produtos = await fetchProdutos();
    listarProdutos();
  } catch (e) {
    console.error("Erro ao carregar produtos:", e);
  }
});

/* ================= FUNÇÕES BASE ================= */
function esconderTudo() {
  lobby.classList.add("hidden");
  app.classList.add("hidden");
  painelADM.classList.add("hidden");
  detalhesProduto.classList.add("hidden");
  formNovoProduto.classList.add("hidden");

  // esconder elementos novos
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

/* ================= PESQUISA ================= */
pesquisa.oninput = () => {
  const valor = pesquisa.value.trim();

  // só entra no modo ADM se o código for correto
  if (!modoADM && valor === CODIGO_ADM) {
    modoADM = true;

    // MOSTRAR ELEMENTOS DO ADM
    painelADM.classList.remove("hidden");
    listaProdutos.classList.add("hidden");
    tituloADM.classList.remove("hidden");
    sairADM.classList.remove("hidden");

    // Listar produtos ADM normalmente
    listarADM();

    // Listar produtos aleatórios no topo (máx 4)
    mostrarProdutosAleatorios();
  }

  // Se já estiver no modo ADM, não faz nada
};

/* ================= NOVA FUNÇÃO: MOSTRAR 4 PRODUTOS ALEATÓRIOS ================= */
function mostrarProdutosAleatorios() {
  produtosAleatoriosADM.innerHTML = "";
  let visiveis = produtos.filter(p => p.visivel !== false);
  let aleatorios = visiveis.sort(() => Math.random() - 0.5).slice(0, 4);

  aleatorios.forEach(p => {
    const div = document.createElement("div");
    div.className = "card aleatorio-adm";
    div.innerHTML = `
      <strong>${p.nome}</strong>
      <div>${p.setor || "Sem setor"} - R$ ${p.valor || "--"}</div>
    `;
    div.onclick = () => abrirProduto(p.id);
    produtosAleatoriosADM.appendChild(div);
  });

  produtosAleatoriosADM.classList.remove("hidden");
}

/* ================= NOVA FUNÇÃO: SAIR DO ADM ================= */
sairADM.onclick = () => {
  modoADM = false;
  painelADM.classList.add("hidden");
  listaProdutos.classList.remove("hidden");

  // esconder elementos ADM
  tituloADM.classList.add("hidden");
  sairADM.classList.add("hidden");
  produtosAleatoriosADM.classList.add("hidden");

  pesquisa.value = "";
  listarProdutos();
};

/* ================= LISTAGEM DE PRODUTOS ================= */
function listarProdutos(filtro = "") {
  if (modoADM) return;

  listaProdutos.innerHTML = "";

  if (!Array.isArray(produtos)) return;

  produtos
    .filter(p => p.visivel !== false)
    .filter(p =>
      p.nome?.toLowerCase().includes(filtro.toLowerCase()) ||
      p.setor?.toLowerCase().includes(filtro.toLowerCase()) ||
      p.codigo?.includes(filtro)
    )
    .forEach(p => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <strong>${p.nome || "Produto sem nome"}</strong>
        <div>${p.setor || "Sem setor"} - R$ ${p.valor || "--"}</div>
      `;
      div.onclick = () => abrirProduto(p.id);
      listaProdutos.appendChild(div);
    });
}

/* ================= DETALHES ================= */
function abrirProduto(id) {
  const p = produtos.find(prod => prod.id === id);
  if (!p) return;

  app.classList.add("hidden");
  detalhesProduto.classList.remove("hidden");

  document.getElementById("detalheImagem").src =
    p.imagem || "https://via.placeholder.com/200";
  document.getElementById("detalheNome").innerText = p.nome || "";
  document.getElementById("detalheSetor").innerText = p.setor || "";
  document.getElementById("detalheValor").innerText = p.valor || "";
  document.getElementById("detalheCorredor").innerText = p.corredor || "";
  document.getElementById("detalheDescricao").innerText = p.descricao || "";

  listarSugestoes(p);
}

btnVoltar.onclick = () => {
  detalhesProduto.classList.add("hidden");
  app.classList.remove("hidden");
};

/* ================= SUGESTÕES ================= */
function listarSugestoes(produto) {
  const sugestoes = document.getElementById("sugestoes");
  sugestoes.innerHTML = "";

  if (!produto?.setor) return;

  let relacionados = produtos.filter(p =>
    p.visivel &&
    p.setor?.toLowerCase() === produto.setor.toLowerCase() &&
    p.id !== produto.id
  );

  relacionados = relacionados.sort(() => Math.random() - 0.5).slice(0, 9);

  if (relacionados.length === 0) {
    sugestoes.innerHTML = "<span>Nenhum produto relacionado.</span>";
    return;
  }

  relacionados.forEach(p => {
    const div = document.createElement("div");
    div.className = "card sugestao-card";
    div.onclick = () => abrirProduto(p.id);
    div.innerHTML = `
      <img src="${p.imagem || 'https://via.placeholder.com/60'}">
      <div>
        <strong>${p.nome}</strong>
        <p>${p.descricao || ''}</p>
      </div>
    `;
    sugestoes.appendChild(div);
  });
}

/* ================= CONFIGURAÇÃO DO SITE ================= */
function aplicarConfig() {
  document.getElementById("siteNomeLobby").innerText = config.nomeSite;
  document.getElementById("siteNomeTopo").innerText = config.nomeSite;

  if (config.fundo) {
    document.body.style.backgroundImage = `url(${config.fundo})`;
    document.body.style.backgroundSize = "cover";
  } else {
    document.body.style.backgroundImage = "";
  }
}

document.getElementById("salvarConfigBtn").onclick = () => {
  const nome = document.getElementById("nomeSiteInput").value.trim();
  const fundo = document.getElementById("fundoSiteInput").value.trim();

  if (nome) config.nomeSite = nome;
  config.fundo = fundo;

  aplicarConfig();
};

/* ================= ADM ================= */
btnNovoProduto.onclick = () => {
  produtoEmEdicao = null;
  limparFormNovoProduto();

  // ESCONDE PAINEL ADM
  painelADM.classList.add("hidden");

  // MOSTRA FORM COMO TELA
  formNovoProduto.classList.remove("hidden");
};

btnCancelarNovo.onclick = () => {
  limparFormNovoProduto();

  // FECHA FORM
  formNovoProduto.classList.add("hidden");

  // VOLTA PARA O ADM
  painelADM.classList.remove("hidden");

  produtoEmEdicao = null;
};

btnSalvarNovo.onclick = async () => {
  const novoProduto = {
    id: produtoEmEdicao?.id || Date.now(),
    nome: novoNome.value.trim(),
    setor: novoSetor.value.trim(),
    valor: novoValor.value.trim(),
    corredor: novoCorredor.value.trim(),
    codigo: novoCodigo.value.trim(),
    descricao: novoDescricao.value.trim(),
    imagem: novoImagem.value.trim() || "https://via.placeholder.com/200",
    visivel: true
  };

  if (!novoProduto.nome || !novoProduto.setor || !novoProduto.codigo) {
    alert("Preencha todos os campos obrigatórios");
    return;
  }

  if (produtoEmEdicao) {
    await editProduto(novoProduto);
  } else {
    await addProduto(novoProduto);
  }

  produtos = await fetchProdutos();
  listarADM();
  listarProdutos();

  limparFormNovoProduto();
  formNovoProduto.classList.add("hidden");
  btnNovoProduto.classList.remove("hidden");
  produtoEmEdicao = null;
};

/* ================= ADM LISTA ================= */
function listarADM() {
  listaADM.innerHTML = "";

  produtos.forEach(p => {
    const div = document.createElement("div");
    div.className = "adm-item";
    div.innerHTML = `
      <strong>${p.nome}</strong>
      <button onclick="editarProdutoForm(${p.id})">Editar</button>
      <button onclick="toggleProduto(${p.id})">
        ${p.visivel ? "Ocultar" : "Mostrar"}
      </button>
    `;
    listaADM.appendChild(div);
  });
}

function editarProdutoForm(id) {
  const p = produtos.find(x => x.id === id);
  if (!p) return;

  produtoEmEdicao = p;

  novoNome.value = p.nome;
  novoSetor.value = p.setor;
  novoValor.value = p.valor;
  novoCorredor.value = p.corredor;
  novoCodigo.value = p.codigo;
  novoDescricao.value = p.descricao;
  novoImagem.value = p.imagem;

  formNovoProduto.classList.remove("hidden");
  btnNovoProduto.classList.add("hidden");
}

async function toggleProduto(id) {
  const p = produtos.find(x => x.id === id);
  if (!p) return;

  p.visivel = !p.visivel;
  await editProduto(p);

  produtos = await fetchProdutos();
  listarADM();
  listarProdutos();
}

/* ================= UTIL ================= */
function limparFormNovoProduto() {
  novoNome.value = "";
  novoSetor.value = "";
  novoValor.value = "";
  novoCorredor.value = "";
  novoCodigo.value = "";
  novoDescricao.value = "";
  novoImagem.value = "";
}
