/* ================= CONEXÃO COM GOOGLE SHEETS ================= */

// URL do Apps Script ou SheetsBest
const URL_SHEETS = "https://api.sheetbest.com/sheets/a7b8674b-9876-4a84-a253-2aed62610ae2";

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
 * Normaliza os dados da planilha para o formato usado pelo site
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
    imagem: p.imagem ?? "https://via.placeholder.com/200",
    visivel: p.visivel !== false && p.visivel !== "off"
  }));
}

/* ================= BUSCAR PRODUTOS ================= */
async function fetchProdutos() {
  try {
    const response = await fetchComTimeout(URL_SHEETS);

    if (!response.ok) throw new Error("Resposta inválida do servidor");

    const data = await response.json();
    return normalizarProdutos(data);

  } catch (err) {
    console.error("❌ Erro ao buscar produtos:", err);
    alert("Erro ao carregar produtos. Verifique sua conexão.");
    return [];
  }
}

/* ================= ADICIONAR PRODUTO ================= */
async function addProduto(produto) {
  try {
    const response = await fetchComTimeout(URL_SHEETS, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(produto)
    });

    if (!response.ok) throw new Error("Falha ao adicionar produto");

    const data = await response.json();
    return data;

  } catch (err) {
    console.error("❌ Erro ao adicionar produto:", err);
    alert("Não foi possível adicionar o produto.");
    return null;
  }
}

/* ================= EDITAR PRODUTO ================= */
async function editProduto(produto) {
  try {
    const response = await fetchComTimeout(URL_SHEETS, {
      method: "PUT", // Alguns endpoints usam PUT para atualizar
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(produto)
    });

    if (!response.ok) throw new Error("Falha ao editar produto");

    const data = await response.json();
    return data;

  } catch (err) {
    console.error("❌ Erro ao editar produto:", err);
    alert("Não foi possível salvar as alterações.");
    return null;
  }
}
