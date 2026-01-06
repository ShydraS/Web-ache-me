/**
 * ============================================================
 * WEB ACHE-ME - LÓGICA DE GERENCIAMENTO DE INVENTÁRIO PRO
 * ============================================================
 */

// 1. BANCO DE DADOS DE PRODUTOS
const BANCO_DADOS_PADRAO = [
    { 
        id: 1, 
        nome: "Arroz Agulhinha 5kg", 
        setor: "Mercearia", 
        valor: "29,90", 
        corredor: "A-01", 
        visivel: true, 
        codigo: "789102030", 
        imagem: "https://cdn-icons-png.flaticon.com/512/3504/3504803.png", 
        descricao: "Arroz tipo 1, grãos selecionados e polidos." 
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
        descricao: "Feijão novo de cozimento rápido." 
    },
    { 
        id: 3, 
        nome: "Macarrão Espaguete", 
        setor: "Mercearia", 
        valor: "4,50", 
        corredor: "A-02", 
        visivel: true, 
        codigo: "789102032", 
        imagem: "https://cdn-icons-png.flaticon.com/512/3480/3480618.png", 
        descricao: "Massa de sêmola com ovos." 
    },
    { 
        id: 4, 
        nome: "Detergente Líquido", 
        setor: "Limpeza", 
        valor: "2,25", 
        corredor: "L-10", 
        visivel: true, 
        codigo: "789102033", 
        imagem: "https://cdn-icons-png.flaticon.com/512/2553/2553642.png", 
        descricao: "Alto poder desengordurante." 
    },
    { 
        id: 5, 
        nome: "Café Torrado 500g", 
        setor: "Mercearia", 
        valor: "16,90", 
        corredor: "A-03", 
        visivel: true, 
        codigo: "789102034", 
        imagem: "https://cdn-icons-png.flaticon.com/512/2935/2935413.png", 
        descricao: "Café de torra média." 
    },
    { 
        id: 6, 
        nome: "Leite Integral 1L", 
        setor: "Laticínios", 
        valor: "5,80", 
        corredor: "G-01", 
        visivel: true, 
        codigo: "789102035", 
        imagem: "https://cdn-icons-png.flaticon.com/512/2304/2304928.png", 
        descricao: "Leite UHT integral." 
    },
    { 
        id: 7, 
        nome: "Açúcar Refinado 1kg", 
        setor: "Mercearia", 
        valor: "4,15", 
        corredor: "A-02", 
        visivel: true, 
        codigo: "789102036", 
        imagem: "https://cdn-icons-png.flaticon.com/512/2316/2316934.png", 
        descricao: "Açúcar extra fino." 
    },
    { 
        id: 8, 
        nome: "Óleo de Soja 900ml", 
        setor: "Mercearia", 
        valor: "7,40", 
        corredor: "A-02", 
        visivel: true, 
        codigo: "789102037", 
        imagem: "https://cdn-icons-png.flaticon.com/512/2554/2554041.png", 
        descricao: "Óleo vegetal refinado." 
    },
    { 
        id: 9, 
        nome: "Papel Higiênico (12un)", 
        setor: "Higiene", 
        valor: "15,90", 
        corredor: "H-05", 
        visivel: true, 
        codigo: "789102038", 
        imagem: "https://cdn-icons-png.flaticon.com/512/2553/2553642.png", 
        descricao: "Folha dupla de alta maciez." 
    },
    { 
        id: 10, 
        nome: "Sabão em Pó 1kg", 
        setor: "Limpeza", 
        valor: "12,90", 
        corredor: "L-11", 
        visivel: true, 
        codigo: "789102039", 
        imagem: "https://cdn-icons-png.flaticon.com/512/2553/2553642.png", 
        descricao: "Remove manchas difíceis." 
    }
];

// 2. VARIÁVEIS DE ESTADO E PERSISTÊNCIA
let produtos = JSON.parse(localStorage.getItem('acheme_inventario')) || BANCO_DADOS_PADRAO;
const SENHA_ADMIN = "123";
let modoAdmAtivo = false;

/**
 * 3. INICIALIZAÇÃO SEGURA
 */
document.addEventListener('DOMContentLoaded', () => {
    
    // Botão Iniciar do Lobby
    const botaoIniciar = document.getElementById('btn-entrar');
    if (botaoIniciar) {
        botaoIniciar.onclick = () => {
            desativarModoAdm(); // Garante que começa como cliente
            navegarPara('tela-app');
        };
    }

    // Configura o Campo de Busca
    const campoBusca = document.getElementById('campo-pesquisa');
    if (campoBusca) {
        campoBusca.oninput = (e) => {
            const valor = e.target.value.trim();
            // Verifica se o usuário digitou a senha de administração
            if (valor === SENHA_ADMIN) {
                ativarModoAdm();
            } else {
                atualizarTelas(valor.toLowerCase());
            }
        };
    }

    // Botão Sair do ADM (Ajustado para o novo layout de voltar)
    const btnSairAdm = document.getElementById('btn-sair-adm');
    if (btnSairAdm) {
        btnSairAdm.onclick = () => {
            desativarModoAdm();
        };
    }

    // Configura o botão de Feedback no rodapé da página de detalhes
    // Adicionamos o evento dinamicamente para garantir o alerta solicitado
    const btnFeedback = document.querySelector('.btn-enviar-feedback');
    if (btnFeedback) {
        btnFeedback.onclick = () => {
            const mensagem = "Muito obrigado pela sua atenção, mas essa função ainda não está disponível, mas futuramente ela estará";
            alert(mensagem);
            
            // Limpa o campo de texto após o alerta
            const inputFeedback = document.getElementById('feedback-input');
            if(inputFeedback) inputFeedback.value = "";
        };
    }

    atualizarTelas();
});

/**
 * 4. SISTEMA DE NAVEGAÇÃO ENTRE TELAS (SPA)
 */
function navegarPara(idAlvo) {
    const telas = ['tela-lobby', 'tela-app', 'tela-detalhes'];
    
    telas.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.classList.add('view-hidden');
            el.classList.remove('view-active');
        }
    });

    const telaAlvo = document.getElementById(idAlvo);
    if (telaAlvo) {
        telaAlvo.classList.remove('view-hidden');
        telaAlvo.classList.add('view-active');
        // Sempre volta para o topo ao trocar de tela
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

/**
 * 5. CONTROLE DE MODO ADMINISTRADOR (SEPARAÇÃO DE TELAS)
 */
function ativarModoAdm() {
    modoAdmAtivo = true;
    
    // Configura o cabeçalho para o modo Administrativo
    const inputBusca = document.getElementById('campo-pesquisa');
    if (inputBusca) inputBusca.value = "";
    
    const tituloProjeto = document.getElementById('nome-projeto');
    if (tituloProjeto) tituloProjeto.innerText = "PAINEL ADM";
    
    // Gerencia visibilidade dos elementos de navegação
    document.getElementById('badge-adm').classList.remove('hidden');
    document.getElementById('btn-sair-adm').classList.remove('hidden');
    
    // REGRA DE SEPARAÇÃO: Esconde o grid do cliente e mostra a lista do ADM
    document.getElementById('grid-cliente').classList.add('hidden');
    document.getElementById('painel-adm').classList.remove('hidden');
    
    atualizarTelas();
}

function desativarModoAdm() {
    modoAdmAtivo = false;
    
    // Retorna o cabeçalho para o modo Cliente
    const inputBusca = document.getElementById('campo-pesquisa');
    if (inputBusca) inputBusca.value = "";
    
    const tituloProjeto = document.getElementById('nome-projeto');
    if (tituloProjeto) tituloProjeto.innerText = "WEB ACHE-ME";
    
    // Esconde elementos exclusivos do ADM
    document.getElementById('badge-adm').classList.add('hidden');
    document.getElementById('btn-sair-adm').classList.add('hidden');
    
    // REGRA DE SEPARAÇÃO: Mostra o grid do cliente e oculta o painel administrativo
    document.getElementById('grid-cliente').classList.remove('hidden');
    document.getElementById('painel-adm').classList.add('hidden');
    
    atualizarTelas();
}

/**
 * 6. RENDERIZAÇÃO DINÂMICA
 */
function atualizarTelas(filtro = "") {
    if (modoAdmAtivo) {
        renderizarListaAdm(filtro);
    } else {
        renderizarGridCliente(filtro);
    }
}

function renderizarGridCliente(filtro) {
    const grid = document.getElementById('grid-cliente');
    if (!grid) return;
    grid.innerHTML = "";

    const filtrados = produtos.filter(p => 
        p.visivel && (p.nome.toLowerCase().includes(filtro) || p.setor.toLowerCase().includes(filtro))
    );

    filtrados.forEach(p => {
        const card = document.createElement('div');
        card.className = "card-item-cliente";
        card.innerHTML = `
            <small>${p.setor}</small>
            <strong>${p.nome}</strong>
            <span class="card-preco-cliente">R$ ${p.valor}</span>
        `;
        card.onclick = () => verDetalhes(p);
        grid.appendChild(card);
    });
}

function renderizarListaAdm(filtro) {
    const lista = document.getElementById('lista-adm-itens');
    if (!lista) return;
    lista.innerHTML = "";

    produtos.filter(p => p.nome.toLowerCase().includes(filtro)).forEach(p => {
        const item = document.createElement('div');
        item.className = `item-adm-card ${p.visivel ? '' : 'item-off'}`;
        item.innerHTML = `
            <div>
                <strong>${p.nome}</strong><br>
                <small>COD: ${p.codigo} | LOCAL: ${p.corredor}</small>
            </div>
            <button class="btn-visibilidade" onclick="alternarItem(${p.id})">
                ${p.visivel ? '👁️ VISÍVEL' : '🙈 OCULTO'}
            </button>
        `;
        lista.appendChild(item);
    });
}

/**
 * 7. GESTÃO DE DADOS
 */
window.alternarItem = function(id) {
    const p = produtos.find(item => item.id === id);
    if (p) {
        p.visivel = !p.visivel;
        // Salva a alteração de visibilidade no banco local
        localStorage.setItem('acheme_inventario', JSON.stringify(produtos));
        
        // Mantém a tela atualizada com o filtro que já estava sendo usado
        const filtroAtual = document.getElementById('campo-pesquisa').value.toLowerCase();
        atualizarTelas(filtroAtual);
    }
};

/**
 * 8. PÁGINA DE DETALHES E SUGESTÕES 3X3
 */
function verDetalhes(p) {
    // Preenchimento dos dados do produto principal
    document.getElementById('img-detalhe').src = p.imagem;
    document.getElementById('nome-detalhe').innerText = p.nome;
    document.getElementById('preco-detalhe').innerText = `R$ ${p.valor}`;
    document.getElementById('info-setor').innerText = p.setor;
    document.getElementById('info-corredor').innerText = p.corredor;
    document.getElementById('info-codigo').innerText = p.codigo;
    document.getElementById('texto-descricao').innerText = p.descricao;

    // Gerenciamento das sugestões (Grid 3x3)
    const gridSugestao = document.getElementById('grid-sugestoes');
    if (gridSugestao) {
        gridSugestao.innerHTML = "";

        // Filtra outros produtos visíveis, embaralha e pega 9 para o grid 3x3
        const sugestoes = produtos
            .filter(item => item.id !== p.id && item.visivel)
            .sort(() => 0.5 - Math.random())
            .slice(0, 9);

        sugestoes.forEach(s => {
            const mini = document.createElement('div');
            mini.className = "card-mini-sugestao";
            mini.innerHTML = `
                <img src="${s.imagem}">
                <strong>${s.nome}</strong>
                <span>R$ ${s.valor}</span>
            `;
            mini.onclick = () => verDetalhes(s);
            gridSugestao.appendChild(mini);
        });
    }

    navegarPara('tela-detalhes');
}

/**
 * 9. FUNÇÕES DE RETORNO
 */
window.voltarParaApp = function() {
    navegarPara('tela-app');
};

// Expondo funções globais se necessário para botões em HTML dinâmico
window.navegarPara = navegarPara;
window.desativarModoAdm = desativarModoAdm;
