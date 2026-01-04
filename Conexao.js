/* ================= CONEXÃO COM GOOGLE SHEETS ================= */

// URL do Apps Script (Web App)
const URL_SHEETS = "https://script.google.com/macros/s/AKfycbwuoF07UHuw3ViUWvQ9me5-Xvgbd8Omuy6fJUB7TpeVIK1y55cFYuy5RfjEJAFip3JbeA/exec";

/* ================= UTIL ================= */

/**
 * Função auxiliar para timeout (evita travar app se o Sheets cair)
 */
function fetchComTimeout(url, options = {}, timeout = 15000) {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Tempo de conexão excedido")), timeout)
    )
  ]);
}

/**
 * Garante que sempre retornamos um array válido
 */
function normalizarProdutos(data) {
  if (!Array.isArray(data)) return [];
  return data.map(p => ({
    id: p.id ?? Date.now(),
    nome: p.nome ?? "",
    setor: p.setor ?? "",
    valor: p.valor ?? "",
    corredor: p.corredor ?? "",
    codigo: p.codigo ?? "",
    descricao: p.descricao ?? "",
    imagem: p.imagem ?? "",
    visivel: p.visivel !== false
  }));
}

/* ================= BUSCAR PRODUTOS ================= */

/**
 * Busca todos os produtos da planilha
 * @returns {Promise<Array>}
 */
async function fetchProdutos() {
  try {
    const response = await fetchComTimeout(
      `${URL_SHEETS}?acao=listar`
    );

    if (!response.ok) {
      throw new Error("Resposta inválida do servidor");
    }

    const data = await response.json();
    return normalizarProdutos(data);

  } catch (err) {
    console.error("❌ Erro ao buscar produtos:", err);
    alert("Erro ao carregar produtos. Verifique sua conexão.");
    return [];
  }
}

/* ================= ADICIONAR PRODUTO ================= */

/**
 * Adiciona um novo produto na planilha
 * @param {Object} produto
 */
async function addProduto(produto) {
  try {
    const response = await fetchComTimeout(
      `${URL_SHEETS}?acao=adicionar`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(produto)
      }
    );

    if (!response.ok) {
      throw new Error("Falha ao adicionar produto");
    }

    const data = await response.json();
    return data;

  } catch (err) {
    console.error("❌ Erro ao adicionar produto:", err);
    alert("Não foi possível adicionar o produto.");
    return null;
  }
}

/* ================= EDITAR PRODUTO ================= */

/**
 * Edita um produto existente na planilha
 * @param {Object} produto
 */
async function editProduto(produto) {
  try {
    const response = await fetchComTimeout(
      `${URL_SHEETS}?acao=editar`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(produto)
      }
    );

    if (!response.ok) {
      throw new Error("Falha ao editar produto");
    }

    const data = await response.json();
    return data;

  } catch (err) {
    console.error("❌ Erro ao editar produto:", err);
    alert("Não foi possível salvar as alterações.");
    return null;
  }
  }

