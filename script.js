/**
 * ============================================================
 * WEB ACHE-ME - LÓGICA DE GERENCIAMENTO DE INVENTÁRIO PRO
 * ============================================================
 */

// 1. BANCO DE DADOS DE PRODUTOS
const BANCO_DADOS_PADRAO = [
   // ================= MERCEARIA =================
{ id: 1, nome: "Arroz Agulhinha 5kg", setor: "Mercearia", valor: "29,90", corredor: "M-01", visivel: true, codigo: "MER001", imagem: "https://cdn-icons-png.flaticon.com/512/5029/5029236.png", descricao: "Arroz tipo 1, grãos selecionados e polidos." },
{ id: 2, nome: "Feijão Carioca 1kg", setor: "Mercearia", valor: "8,90", corredor: "M-01", visivel: true, codigo: "MER002", imagem: "https://cdn-icons-png.flaticon.com/512/590/590685.png", descricao: "Feijão carioca de alta qualidade." },
{ id: 3, nome: "Macarrão Espaguete 500g", setor: "Mercearia", valor: "4,50", corredor: "M-02", visivel: true, codigo: "MER003", imagem: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png", descricao: "Macarrão espaguete tradicional." },
{ id: 4, nome: "Óleo de Soja 900ml", setor: "Mercearia", valor: "7,99", corredor: "M-02", visivel: true, codigo: "MER004", imagem: "https://cdn-icons-png.flaticon.com/512/3082/3082033.png", descricao: "Óleo de soja refinado." },
{ id: 5, nome: "Açúcar Refinado 1kg", setor: "Mercearia", valor: "4,29", corredor: "M-03", visivel: true, codigo: "MER005", imagem: "https://cdn-icons-png.flaticon.com/512/992/992745.png", descricao: "Açúcar branco refinado." },
{ id: 6, nome: "Farinha de Trigo 1kg", setor: "Mercearia", valor: "5,10", corredor: "M-03", visivel: true, codigo: "MER006", imagem: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png", descricao: "Farinha ideal para pães e bolos." },

// ================= HORTIFRUTI =================
{ id: 7, nome: "Banana Prata (kg)", setor: "Hortifruti", valor: "5,99", corredor: "H-01", visivel: true, codigo: "HOR001", imagem: "https://cdn-icons-png.flaticon.com/512/2909/2909761.png", descricao: "Banana prata fresca." },
{ id: 8, nome: "Maçã Gala (kg)", setor: "Hortifruti", valor: "7,49", corredor: "H-01", visivel: true, codigo: "HOR002", imagem: "https://cdn-icons-png.flaticon.com/512/415/415733.png", descricao: "Maçã gala selecionada." },
{ id: 9, nome: "Tomate (kg)", setor: "Hortifruti", valor: "6,89", corredor: "H-02", visivel: true, codigo: "HOR003", imagem: "https://cdn-icons-png.flaticon.com/512/590/590685.png", descricao: "Tomate vermelho fresco." },
{ id: 10, nome: "Batata Inglesa (kg)", setor: "Hortifruti", valor: "4,99", corredor: "H-02", visivel: true, codigo: "HOR004", imagem: "https://cdn-icons-png.flaticon.com/512/2909/2909806.png", descricao: "Batata inglesa lavada." },
{ id: 11, nome: "Cenoura (kg)", setor: "Hortifruti", valor: "3,79", corredor: "H-03", visivel: true, codigo: "HOR005", imagem: "https://cdn-icons-png.flaticon.com/512/415/415682.png", descricao: "Cenoura crocante." },
{ id: 12, nome: "Alface Crespa", setor: "Hortifruti", valor: "2,99", corredor: "H-03", visivel: true, codigo: "HOR006", imagem: "https://cdn-icons-png.flaticon.com/512/766/766020.png", descricao: "Alface fresca e higienizada." },

// ================= LATICÍNIOS =================
{ id: 13, nome: "Leite Integral 1L", setor: "Laticínios", valor: "4,99", corredor: "L-01", visivel: true, codigo: "LAT001", imagem: "https://cdn-icons-png.flaticon.com/512/2674/2674486.png", descricao: "Leite integral pasteurizado." },
{ id: 14, nome: "Leite Desnatado 1L", setor: "Laticínios", valor: "4,89", corredor: "L-01", visivel: true, codigo: "LAT002", imagem: "https://cdn-icons-png.flaticon.com/512/2674/2674486.png", descricao: "Leite desnatado saudável." },
{ id: 15, nome: "Queijo Mussarela (kg)", setor: "Laticínios", valor: "39,90", corredor: "L-02", visivel: true, codigo: "LAT003", imagem: "https://cdn-icons-png.flaticon.com/512/1046/1046751.png", descricao: "Queijo mussarela fatiado." },
{ id: 16, nome: "Presunto Fatiado 200g", setor: "Laticínios", valor: "6,99", corredor: "L-02", visivel: true, codigo: "LAT004", imagem: "https://cdn-icons-png.flaticon.com/512/3075/3075974.png", descricao: "Presunto cozido fatiado." },
{ id: 17, nome: "Iogurte Natural 170g", setor: "Laticínios", valor: "2,49", corredor: "L-03", visivel: true, codigo: "LAT005", imagem: "https://cdn-icons-png.flaticon.com/512/888/888034.png", descricao: "Iogurte natural tradicional." },
{ id: 18, nome: "Manteiga 200g", setor: "Laticínios", valor: "8,79", corredor: "L-03", visivel: true, codigo: "LAT006", imagem: "https://cdn-icons-png.flaticon.com/512/3075/3075976.png", descricao: "Manteiga cremosa." },

// ================= PADARIA =================
{ id: 19, nome: "Pão Francês (kg)", setor: "Padaria", valor: "13,90", corredor: "P-01", visivel: true, codigo: "PAD001", imagem: "https://cdn-icons-png.flaticon.com/512/1046/1046786.png", descricao: "Pão francês crocante." },
{ id: 20, nome: "Pão de Forma", setor: "Padaria", valor: "7,49", corredor: "P-01", visivel: true, codigo: "PAD002", imagem: "https://cdn-icons-png.flaticon.com/512/3075/3075972.png", descricao: "Pão de forma macio." },
{ id: 21, nome: "Bolo de Chocolate", setor: "Padaria", valor: "15,90", corredor: "P-02", visivel: true, codigo: "PAD003", imagem: "https://cdn-icons-png.flaticon.com/512/590/590719.png", descricao: "Bolo de chocolate caseiro." },
{ id: 22, nome: "Bolo de Milho", setor: "Padaria", valor: "14,90", corredor: "P-02", visivel: true, codigo: "PAD004", imagem: "https://cdn-icons-png.flaticon.com/512/590/590719.png", descricao: "Bolo de milho tradicional." },
{ id: 23, nome: "Rosca Doce", setor: "Padaria", valor: "9,99", corredor: "P-03", visivel: true, codigo: "PAD005", imagem: "https://cdn-icons-png.flaticon.com/512/3075/3075978.png", descricao: "Rosca doce artesanal." },
{ id: 24, nome: "Sonho Recheado", setor: "Padaria", valor: "4,50", corredor: "P-03", visivel: true, codigo: "PAD006", imagem: "https://cdn-icons-png.flaticon.com/512/590/590719.png", descricao: "Sonho com recheio cremoso." },

// ================= BEBIDAS =================
{ id: 25, nome: "Refrigerante Cola 2L", setor: "Bebidas", valor: "9,50", corredor: "B-01", visivel: true, codigo: "BEB001", imagem: "https://cdn-icons-png.flaticon.com/512/2405/2405479.png", descricao: "Refrigerante cola tradicional." },
{ id: 26, nome: "Refrigerante Guaraná 2L", setor: "Bebidas", valor: "8,99", corredor: "B-01", visivel: true, codigo: "BEB002", imagem: "https://cdn-icons-png.flaticon.com/512/2405/2405479.png", descricao: "Refrigerante guaraná." },
{ id: 27, nome: "Suco de Laranja 1L", setor: "Bebidas", valor: "6,49", corredor: "B-02", visivel: true, codigo: "BEB003", imagem: "https://cdn-icons-png.flaticon.com/512/3082/3082036.png", descricao: "Suco de laranja integral." },
{ id: 28, nome: "Água Mineral 1,5L", setor: "Bebidas", valor: "2,99", corredor: "B-02", visivel: true, codigo: "BEB004", imagem: "https://cdn-icons-png.flaticon.com/512/1046/1046782.png", descricao: "Água mineral natural." },
{ id: 29, nome: "Água com Gás 500ml", setor: "Bebidas", valor: "2,49", corredor: "B-03", visivel: true, codigo: "BEB005", imagem: "https://cdn-icons-png.flaticon.com/512/1046/1046782.png", descricao: "Água gaseificada." },
{ id: 30, nome: "Energético Lata", setor: "Bebidas", valor: "7,99", corredor: "B-03", visivel: true, codigo: "BEB006", imagem: "https://cdn-icons-png.flaticon.com/512/1046/1046785.png", descricao: "Bebida energética." }
];

// 2. VARIÁVEIS DE ESTADO E PERSISTÊNCIA
localStorage.clear(), console.log(localStorage);
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
