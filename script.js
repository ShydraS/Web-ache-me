// ===============================
// 1. Referências ao HTML
// ===============================
const campoBusca = document.getElementById('campoBusca');
const btnPesquisar = document.getElementById('btnPesquisar');
const resultadoProduto = document.getElementById('resultado-produto');
const mensagemBusca = document.getElementById('mensagem-busca');
const loading = document.getElementById('loading');

// ===============================
// 2. Lista de produtos (preenchida pelo backend)
// ===============================
let catalogoProdutos = [];

// ===============================
// 3. Renderizar produtos
// ===============================
function renderizarProdutos(produtos) {
    resultadoProduto.innerHTML = '<h2>Produtos:</h2>';

    if (!produtos || produtos.length === 0) {
        resultadoProduto.innerHTML += `<p class="mensagem-vazia">Produto não encontrado.</p>`;
        return;
    }

    produtos.forEach(produto => {
        resultadoProduto.innerHTML += `
            <div class="card-produto">
                <img src="imagem/${produto.imagem}" 
                     alt="Imagem de ${produto.nome ?? produto.codigo}" 
                     onerror="this.src='imagem/sem-imagem.jpg'">
                <h3>${produto.nome ?? 'Produto'}</h3>
                <p class="codigo">Código: ${produto.codigo}</p>
                <p class="preco">R$ ${Number(produto.preco).toFixed(2).replace('.', ',')}</p>
                <p class="corredor">Corredor: ${produto.corredor}</p>
                <p class="estoque">Estoque: ${produto.estoque ?? '0'}</p>
                <p class="setor">Setor: ${produto.setor ?? 'Não definido'}</p>
            </div>
        `;
    });
}

// ===============================
// 4. Função de busca
// ===============================
async function realizarBusca() {
    const termoBusca = campoBusca.value.toLowerCase().trim();
    resultadoProduto.innerHTML = '';
    mensagemBusca.textContent = '';

    if (!termoBusca) {
        mensagemBusca.textContent = "Digite o nome, código, corredor ou setor do produto desejado.";
        return;
    }

    // Exibe loading
    loading.style.display = 'block';

    // Simula tempo de busca (ou aguarda backend)
    await new Promise(r => setTimeout(r, 500));

    const resultados = catalogoProdutos.filter(produto =>
        (produto.nome?.toLowerCase().includes(termoBusca)) ||
        (String(produto.corredor).includes(termoBusca)) ||
        (String(produto.codigo).includes(termoBusca)) ||
        (produto.setor?.toLowerCase().includes(termoBusca))
    );

    renderizarProdutos(resultados);

    // Oculta loading
    loading.style.display = 'none';
}

// ===============================
// 5. Eventos
// ===============================
btnPesquisar.addEventListener('click', realizarBusca);
campoBusca.addEventListener('keydown', e => { if (e.key === 'Enter') realizarBusca(); });

// ===============================
// 6. Carregar produtos do backend
// ===============================
async function carregarProdutos() {
    try {
        const resposta = await fetch('/produtos');
        catalogoProdutos = await resposta.json();
    } catch (err) {
        console.error('Erro ao carregar produtos:', err);
        catalogoProdutos = [
            { id: 1, codigo: 54689078, nome: "Café", preco: 15.99, corredor: 3, imagem: "cafe.jpg", estoque: 1, setor: "Mercearia" },
            { id: 2, codigo: 60987850, nome: "Arroz", preco: 22.50, corredor: 1, imagem: "arroz.jpg", estoque: 1, setor: "Mercearia" },
            { id: 3, codigo: 15678907, nome: "Leite", preco: 5.49, corredor: 5, imagem: "leite.jpg", estoque: 1, setor: "Laticínios" }
        ];
    }
    renderizarProdutos(catalogoProdutos);
}

// ===============================
// 7. Inicialização
// ===============================
window.addEventListener('DOMContentLoaded', carregarProdutos);
