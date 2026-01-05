/**
 * ============================================================
 * WEB ACHE-ME - LÓGICA DE GERENCIAMENTO DE INVENTÁRIO
 * ============================================================
 * Versão: 2.0 (GitHub Stable)
 * Funcionalidades: LocalStorage, Modo ADM, Busca Inteligente,
 * Navegação Single Page (SPA) e Grid 3x3.
 */

// 1. BANCO DE DADOS INICIAL (ESTRUTURA COMPLETA)
const BANCO_PADRAO = [
    { 
        id: 1, 
        nome: "Arroz Agulhinha 5kg", 
        setor: "Mercearia", 
        valor: "29,90", 
        corredor: "A-01", 
        visivel: true, 
        codigo: "789102030", 
        imagem: "https://cdn-icons-png.flaticon.com/512/3504/3504803.png", 
        descricao: "Arroz tipo 1, grãos selecionados e polidos de alta qualidade, ideal para o dia a dia da família." 
    },
    { 
        id: 2, 
        nome: "Feijão Carioca 1kg", 
        setor: "Mercearia", 
        valor: "8,50", 
        corredor: "A-01", 
        visivel: true, 
        codigo: "789102031", 
        imagem: "https://cdn-icons-png.flaticon.com/512/4815/4815349.png", 
        descricao: "Feijão novo de cozimento rápido e caldo grosso. Rico em ferro e proteínas." 
    },
    { 
        id: 3, 
        nome: "Açúcar Refinado 1kg", 
        setor: "Mercearia", 
        valor: "4,20", 
        corredor: "A-02", 
        visivel: true, 
        codigo: "789102032", 
        imagem: "https://cdn-icons-png.flaticon.com/512/2316/2316934.png", 
        descricao: "Açúcar extra fino, dissolve rápido e é ideal para doces e bebidas." 
    },
    { 
        id: 4, 
        nome: "Café Torrado 500g", 
        setor: "Mercearia", 
        valor: "16,90", 
        corredor: "A-03", 
        visivel: true, 
        codigo: "789102033", 
        imagem: "https://cdn-icons-png.flaticon.com/512/2935/2935413.png", 
        descricao: "Café com aroma intenso e moagem fina. Perfeito para o começo da manhã." 
    },
    { 
        id: 5, 
        nome: "Óleo de Soja 900ml", 
        setor: "Mercearia", 
        valor: "6,90", 
        corredor: "A-02", 
        visivel: true, 
        codigo: "789102034", 
        imagem: "https://cdn-icons-png.flaticon.com/512/2554/2554041.png", 
        descricao: "Óleo vegetal 100% puro, rico em vitamina E e livre de gorduras trans." 
    },
    { 
        id: 6, 
        nome: "Detergente Neutro", 
        setor: "Limpeza", 
        valor: "2,45", 
        corredor: "L-10", 
        visivel: true, 
        codigo: "789102035", 
        imagem: "https://cdn-icons-png.flaticon.com/512/2553/2553642.png", 
        descricao: "Detergente com alto poder desengordurante e pH neutro para não agredir as mãos." 
    },
    { 
        id: 7, 
        nome: "Sabão em Pó 1kg", 
        setor: "Limpeza", 
        valor: "14,90", 
        corredor: "L-11", 
        visivel: true, 
        codigo: "789102036", 
        imagem: "https://cdn-icons-png.flaticon.com/512/2553/2553642.png", 
        descricao: "Limpeza profunda que preserva as cores dos tecidos e deixa um perfume duradouro." 
    },
    { 
        id: 8, 
        nome: "Leite Integral 1L", 
        setor: "Laticínios", 
        valor: "5,80", 
        corredor: "G-01", 
        visivel: true, 
        codigo: "789102037", 
        imagem: "https://cdn-icons-png.flaticon.com/512/2304/2304928.png", 
        descricao: "Leite UHT integral rico em cálcio, essencial para a saúde óssea." 
    },
    { 
        id: 9, 
        nome: "Biscoito Recheado", 
        setor: "Mercearia", 
        valor: "3,50", 
        corredor: "A-04", 
        visivel: true, 
        codigo: "789102038", 
        imagem: "https://cdn-icons-png.flaticon.com/512/3014/3014515.png", 
        descricao: "Biscoito crocante com recheio cremoso de chocolate. O lanche favorito das crianças." 
    },
    { 
        id: 10, 
        nome: "Papel Higiênico", 
        setor: "Higiene", 
        valor: "18,90", 
        corredor: "H-05", 
        visivel: true, 
        codigo: "789102039", 
        imagem: "https://cdn-icons-png.flaticon.com/512/2553/2553642.png", 
        descricao: "Papel higiênico folha dupla, maciez superior e alta absorção." 
    }
];

// 2. CONFIGURAÇÕES E ESTADO GLOBAL
let db_produtos = JSON.parse(localStorage.getItem('web_acheme_db')) || BANCO_PADRAO;
const SENHA_MESTRA = "123";
let modoAdmAtivo = false;

// 3. MAPEAMENTO DE ELEMENTOS DOM (CACHE)
const dom = {
    lobby: document.getElementById('tela-lobby'),
    app: document.getElementById('tela-app'),
    detalhes: document.getElementById('tela-detalhes'),
    btnEntrar: document.getElementById('btn-entrar'),
    btnSairAdm: document.getElementById('btn-sair-adm'),
    campoPesquisa: document.getElementById('campo-pesquisa'),
    gridCliente: document.getElementById('grid-cliente'),
    painelAdm: document.getElementById('painel-adm'),
    listaAdm: document.getElementById('lista-adm-itens'),
    badgeAdm: document.getElementById('badge-adm'),
    txtNomeProjeto: document.getElementById('nome-projeto')
};

// 4. SISTEMA DE NAVEGAÇÃO ENTRE TELAS
function navegarPara(idTela) {
    // Esconde todas as visualizações
    dom.lobby.classList.add('view-hidden');
    dom.app.classList.add('view-hidden');
    dom.detalhes.classList.add('view-hidden');

    // Mostra apenas a desejada
    const telaDestino = document.getElementById(idTela);
    telaDestino.classList.remove('view-hidden');
    telaDestino.classList.add('view-active');

    // Scroll para o topo sempre que mudar de tela
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 5. INICIALIZAÇÃO DO APP
dom.btnEntrar.addEventListener('click', () => {
    navegarPara('tela-app');
    atualizarInterface();
});

// 6. LÓGICA DE PESQUISA E LOGIN ADM
dom.campoPesquisa.addEventListener('input', (event) => {
    const termo = event.target.value.trim();

    // Verificação de Senha ADM
    if (termo === SENHA_MESTRA) {
        ativarModoAdm();
    } else {
        atualizarInterface(termo.toLowerCase());
    }
});

function ativarModoAdm() {
    modoAdmAtivo = true;
    dom.campoPesquisa.value = "";
    dom.campoPesquisa.placeholder = "Pesquisar no inventário...";
    dom.btnSairAdm.classList.remove('hidden');
    dom.badgeAdm.classList.remove('hidden');
    dom.gridCliente.classList.add('hidden');
    dom.painelAdm.classList.remove('hidden');
    dom.txtNomeProjeto.innerText = "ADMINISTRAÇÃO";
    atualizarInterface();
}

dom.btnSairAdm.addEventListener('click', () => {
    modoAdmAtivo = false;
    dom.campoPesquisa.value = "";
    dom.campoPesquisa.placeholder = "Busque por produto...";
    dom.btnSairAdm.classList.add('hidden');
    dom.badgeAdm.classList.add('hidden');
    dom.gridCliente.classList.remove('hidden');
    dom.painelAdm.classList.add('hidden');
    dom.txtNomeProjeto.innerText = "WEB ACHE-ME";
    atualizarInterface();
});

// 7. RENDERIZAÇÃO DE INTERFACE
function atualizarInterface(filtro = "") {
    if (modoAdmAtivo) {
        renderizarPainelAdm(filtro);
    } else {
        renderizarGridCliente(filtro);
    }
}

// Renderização para o Usuário Final (Cliente)
function renderizarGridCliente(filtro) {
    dom.gridCliente.innerHTML = "";
    
    const produtosVisiveis = db_produtos.filter(p => {
        const matchesFiltro = p.nome.toLowerCase().includes(filtro) || 
                              p.setor.toLowerCase().includes(filtro) ||
                              p.corredor.toLowerCase().includes(filtro);
        return p.visivel && matchesFiltro;
    });

    if (produtosVisiveis.length === 0) {
        dom.gridCliente.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: #999;">Nenhum produto encontrado.</p>`;
        return;
    }

    produtosVisiveis.forEach(produto => {
        const card = document.createElement('div');
        card.className = "card-item-cliente";
        card.innerHTML = `
            <small>${produto.setor}</small>
            <strong>${produto.nome}</strong>
            <span class="card-preco-cliente">R$ ${produto.valor}</span>
        `;
        card.addEventListener('click', () => abrirDetalhes(produto));
        dom.gridCliente.appendChild(card);
    });
}

// Renderização para o Administrador
function renderizarPainelAdm(filtro) {
    dom.listaAdm.innerHTML = "";
    
    const todosProdutos = db_produtos.filter(p => p.nome.toLowerCase().includes(filtro));

    todosProdutos.forEach(produto => {
        const item = document.createElement('div');
        item.className = `item-adm-card ${produto.visivel ? '' : 'item-off'}`;
        item.innerHTML = `
            <div>
                <strong>${produto.nome}</strong><br>
                <small>Local: ${produto.corredor} | Cod: ${produto.codigo}</small>
            </div>
            <button class="btn-visibilidade" onclick="alternarVisibilidade(${produto.id})">
                ${produto.visivel ? '👁️ ATIVO' : '🙈 OCULTO'}
            </button>
        `;
        dom.listaAdm.appendChild(item);
    });
}

// 8. ALTERNAR VISIBILIDADE (ADM)
function alternarVisibilidade(id) {
    const index = db_produtos.findIndex(p => p.id === id);
    if (index !== -1) {
        db_produtos[index].visivel = !db_produtos[index].visivel;
        
        // Persistência no LocalStorage
        localStorage.setItem('web_acheme_db', JSON.stringify(db_produtos));
        
        // Feedback visual
        atualizarInterface(dom.campoPesquisa.value.toLowerCase());
    }
}

// 9. LÓGICA DA PÁGINA DE DETALHES E GRID 3X3
function abrirDetalhes(produto) {
    // Preenche dados principais
    document.getElementById('img-detalhe').src = produto.imagem;
    document.getElementById('nome-detalhe').innerText = produto.nome;
    document.getElementById('preco-detalhe').innerText = `R$ ${produto.valor}`;
    document.getElementById('info-setor').innerText = produto.setor;
    document.getElementById('info-corredor').innerText = produto.corredor;
    document.getElementById('info-codigo').innerText = produto.codigo;
    document.getElementById('texto-descricao').innerText = produto.descricao;

    // Gera o Grid de Sugestões 3x3
    gerarSugestoes(produto.id);

    // Muda de tela
    navegarPara('tela-detalhes');
}

function gerarSugestoes(idAtual) {
    const gridSugestoes = document.getElementById('grid-sugestoes');
    gridSugestoes.innerHTML = "";

    // Filtra para não sugerir o produto que já está aberto e apenas os visíveis
    // O sort() aleatório garante que as sugestões mudem
    const sugestoes = db_produtos
        .filter(p => p.id !== idAtual && p.visivel)
        .sort(() => 0.5 - Math.random())
        .slice(0, 9); // Pega exatamente 9 itens

    sugestoes.forEach(sug => {
        const miniCard = document.createElement('div');
        miniCard.className = "card-mini-sugestao";
        miniCard.innerHTML = `
            <img src="${sug.imagem}" alt="${sug.nome}">
            <strong>${sug.nome}</strong>
            <span>R$ ${sug.valor}</span>
        `;
        miniCard.addEventListener('click', () => abrirDetalhes(sug));
        gridSugestoes.appendChild(miniCard);
    });
}

/**
 * ============================================================
 * FIM DO SCRIPT
 * Dica: Coloque este ficheiro como 'script.js' na mesma pasta 
 * que o 'index.html' para que o GitHub Pages o reconheça.
 * ============================================================
 */

