/**
 * ============================================================
 * WEB ACHE-ME - LÓGICA DE GERENCIAMENTO DE INVENTÁRIO PRO
 * ============================================================
 */
// 1. BANCO DE DADOS DE PRODUTOS
const BANCO_DADOS_PADRAO = [
   // ================= MERCEARIA =================
{ id: 1, nome: "Arroz Padim 1kg", setor: "Mercearia", valor: "3,99", corredor: "33", visivel: true, codigo: "0995253092", imagem: "https://supermercadoraizes.com.br/wp-content/uploads/2024/03/arroz.png", descricao: "Arroz padim branco 1kg, grãos selecionados e polidos." },
{ id: 2, nome: "Feijão Kicaldo 1kg", setor: "Mercearia", valor: "5,90", corredor: "33", visivel: true, codigo: "9872636189", imagem: "https://kicaldo.com.br/wp-content/uploads/2020/07/Kicaldo-feijaocarioca.png", descricao: "Feijão kicaldo de alta qualidade." },
{ id: 3, nome: "Macarrão Espaguete Fortazela 500g", setor: "Mercearia", valor: "2,59", corredor: "22", visivel: true, codigo: "9837362829", imagem: "https://marcafortaleza.com.br/wp-content/uploads/2018/09/mkp_Fortaleza_Massa_Semola_Espaguete-1412px-1.png", descricao: "Macarrão espaguete fortaleza tradicional." },
{ id: 4, nome: "Óleo de Soja 900ml", setor: "Mercearia", valor: "7,99", corredor: "M-02", visivel: true, codigo: "MER004", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIjp3-NkThjfdzNZGgFm3CiScAh3DYCh4hVAUoUrF0Fw&s=10", descricao: "Óleo de soja refinado." },
{ id: 5, nome: "Açúcar Refinado União 1kg", setor: "Mercearia", valor: "2,99", corredor: "M-03", visivel: true, codigo: "MER005", imagem: "https://uniao.com.br/public/_assets/images/produtos/acucar-refinado.png", descricao: "Açúcar branco União refinado." },
{ id: 6, nome: "Farinha de Trigo Finna 1kg", setor: "Mercearia", valor: "5,10", corredor: "M-03", visivel: true, codigo: "MER006", imagem: "https://finna.com.br/wp-content/uploads/2014/06/mockup-finna-tradicional-1kg-plastico.png", descricao: "Farinha de trigo finna tradicional, ideal para pães e bolos." },
// ================= HORTIFRUTI =================
{ id: 7, nome: "Banana (kg)", setor: "Hortifruti", valor: "5,99", corredor: "H-01", visivel: true, codigo: "HOR001", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxE5Zz7RImNZt4RZBZB34R_FcaFgqLLmlAoE-VLFj_tA&s=10", descricao: "Banana fresca." },
{ id: 8, nome: "Maçã Gala (kg)", setor: "Hortifruti", valor: "7,49", corredor: "H-01", visivel: true, codigo: "HOR002", imagem: "https://www.naturaldaterra.com.br/_next/image?url=https%3A%2F%2Fnaturalterra.vtexassets.com%2Farquivos%2Fids%2F171268%2FMaca-Gala-Organica-Unidade.jpg%3Fv%3D638671094704900000%26format%3Dwebp&w=1440&q=75", descricao: "Maçã selecionada." },
{ id: 9, nome: "Tomate (kg)", setor: "Hortifruti", valor: "6,89", corredor: "H-02", visivel: true, codigo: "HOR003", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROPsMH_DetbFUQ4nMbGrESSDKg0IsL8I5hKyhiVtMxgLADApb72Z4JRfM&s=10", descricao: "Tomate vermelho fresco." },
{ id: 10, nome: "Batata (kg)", setor: "Hortifruti", valor: "4,99", corredor: "H-02", visivel: true, codigo: "HOR004", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIcD0n6NpghRBHURI16cV23LGcSQf7mIXdhUXb6WK4jQ&s=10", descricao: "Batata inglesa lavada." },
{ id: 11, nome: "Cenoura (kg)", setor: "Hortifruti", valor: "3,79", corredor: "H-03", visivel: true, codigo: "HOR005", imagem: "https://png.pngtree.com/png-vector/20241225/ourmid/pngtree-fresh-organic-carrots-in-a-neat-stack-png-image_14812590.png", descricao: "Cenoura crocante." },
{ id: 12, nome: "Alface", setor: "Hortifruti", valor: "2,99", corredor: "H-03", visivel: true, codigo: "HOR006", imagem: "https://sitioaborigene.com.br/wp-content/uploads/2021/11/alface-lisa.png", descricao: "Alface fresca e higienizada." },
// ================= LATICÍNIOS =================
{ id: 13, nome: "Leite Integral Italac 1L", setor: "Laticínios", valor: "4,99", corredor: "L-01", visivel: true, codigo: "LAT001", imagem: "https://supermercadobomdemais.com.br/wp-content/uploads/2020/05/Leite-Integral-Italac-1l.png", descricao: "Leite integral pasteurizado." },
{ id: 14, nome: "Leite Desnatado Betania 1L", setor: "Laticínios", valor: "4,89", corredor: "L-01", visivel: true, codigo: "LAT002", imagem: "https://redemix.vteximg.com.br/arquivos/ids/213937-1000-1000/7898403782394.jpg?v=638350624515570000", descricao: "Leite desnatado saudável." },
{ id: 15, nome: "Queijo Mussarela Italac (kg)", setor: "Laticínios", valor: "39,90", corredor: "L-02", visivel: true, codigo: "LAT003", imagem: "https://arasuper.com.br/uploads/produtos/17130_arasuper_queijo-muss-italac-pca-kg.jpg", descricao: "Queijo mussarela fatiado." },
{ id: 16, nome: "Presunto Sadia 200g", setor: "Laticínios", valor: "6,99", corredor: "L-02", visivel: true, codigo: "LAT004", imagem: "https://redemix.vteximg.com.br/arquivos/ids/217727-1000-1000/14893-29580-e-48720.png?v=638503350424700000", descricao: "Presunto cozido fatiado." },
{ id: 17, nome: "Iogurte Natural Itambe 170g", setor: "Laticínios", valor: "2,49", corredor: "L-03", visivel: true, codigo: "LAT005", imagem: "https://www.itambe.com.br/portal/Images/Produto/af3ditambeiogurteintegral170gsimpl_full.png", descricao: "Iogurte natural tradicional." },
{ id: 18, nome: "Manteiga Delicia 200g", setor: "Laticínios", valor: "8,79", corredor: "L-03", visivel: true, codigo: "LAT006", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjZUb59DdGw1QVlyu2Rg9Nr5UqAMPUuDlIyamsUwOAZA&s=10", descricao: "Manteiga cremosa." },
// ================= PADARIA =================
{ id: 19, nome: "Pão Francês (kg)", setor: "Padaria", valor: "13,90", corredor: "P-01", visivel: true, codigo: "PAD001", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXlWY4bsvTYIXKkMMCUq3SwkWI2tmWFAADgDiH5tCbxg&s=10", descricao: "Pão francês crocante." },
{ id: 20, nome: "Pão de Forma Visconti", setor: "Padaria", valor: "7,49", corredor: "P-01", visivel: true, codigo: "PAD002", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2VFIAAEPp6syJiDTcPpda1x2CuWX7UqjFycUXlfL2SsWxWsESua354jQw&s=10", descricao: "Pão de forma macio." },
{ id: 21, nome: "Bolo de Chocolate", setor: "Padaria", valor: "15,90", corredor: "P-02", visivel: true, codigo: "PAD003", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtkoviF3P2IWb0fG_Ovh0H83yG6vIXPKLPiZRvUVTylGFXUuacjqEVpFI&s=10", descricao: "Bolo de chocolate caseiro." },
{ id: 22, nome: "Bolo de Milho", setor: "Padaria", valor: "14,90", corredor: "P-02", visivel: true, codigo: "PAD004", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrk5qF7PxtcIiw_idR1tdZnbd0HoWn5yfhk5Dg67Cw1lFp7xaxgr5OoheG&s=10", descricao: "Bolo de milho tradicional." },
{ id: 23, nome: "Rosca Doce", setor: "Padaria", valor: "9,99", corredor: "P-03", visivel: true, codigo: "PAD005", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlwVdexbCMT74cspXP12MpiXOWBMP2QoCH7h1iv5_Bi97HcHmp9KsgQRZe&s=10", descricao: "Rosca doce artesanal." },
{ id: 24, nome: "Sonho Recheado", setor: "Padaria", valor: "4,50", corredor: "P-03", visivel: true, codigo: "PAD006", imagem: "https://phygital-files.mercafacil.com/peruzzo/uploads/produto/padaria_sonho_doce_leite_kg_988fd121-c3c5-41a7-a940-9ec37ed9db7a.jpg", descricao: "Sonho com recheio cremoso." },
// ================= BEBIDAS =================
{ id: 25, nome: "Refrigerante Cola Original 2L", setor: "Bebidas", valor: "9,50", corredor: "B-01", visivel: true, codigo: "BEB001", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8LXugXV5UHLNNypLBMaGPqYmSFIStI5B_mE6p14wmpg&s=10", descricao: "Refrigerante cola tradicional." },
{ id: 26, nome: "Refrigerante Guaraná Antarctica 2L", setor: "Bebidas", valor: "8,99", corredor: "B-01", visivel: true, codigo: "BEB002", imagem: "https://supermercadobomdemais.com.br/wp-content/uploads/2020/05/Refrigerante-Guaran%C3%A1-Antarctica-2l.png", descricao: "Refrigerante guaraná." },
{ id: 27, nome: "Suco de Laranja Del Valle 1,5L", setor: "Bebidas", valor: "6,49", corredor: "B-02", visivel: true, codigo: "BEB003", imagem: "https://coopsp.vtexassets.com/arquivos/ids/249065-800-auto?v=638941437451300000&width=800&height=auto&aspect=true", descricao: "Suco de laranja integral." },
{ id: 28, nome: "Água Mineral Indaia 1,5L", setor: "Bebidas", valor: "2,99", corredor: "B-02", visivel: true, codigo: "BEB004", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7N6d5kZYXKgOCxf2sq2T5ihEiw_EhLaGAzrk7jkSoba-xG02oH2MPALo&s=10", descricao: "Água mineral natural." },
{ id: 29, nome: "Água com Gás Indaia 500ml", setor: "Bebidas", valor: "2,49", corredor: "B-03", visivel: true, codigo: "BEB005", imagem: "https://cdn.shopify.com/s/files/1/0579/9742/6861/files/image-removebg-preview_1_cbdc38fa-89cd-44e0-a4dd-4338ba6123c7.png?v=1693486710&width=480", descricao: "Água gaseificada." },
{ id: 30, nome: "Energético Bayle Melancia", setor: "Bebidas", valor: "7,99", corredor: "B-03", visivel: true, codigo: "BEB006", imagem: "https://redemix.vteximg.com.br/arquivos/ids/222730-1000-1000/energetico_baly_energy_drink_melancia_2l_1029_1_b24a6ba45d76a3d31f1521280ed1686a.png?v=638836249367530000", descricao: "Bebida energética." },
];

// 2. VARIÁVEIS DE ESTADO E PERSISTÊNCIA
let produtos = BANCO_DADOS_PADRAO.map(p => ({ ...p }));
localStorage.setItem('acheme_inventario', JSON.stringify(produtos));
const SENHA_ADMIN = "123";
let modoAdmAtivo = false;

/**
 * 3. INICIALIZAÇÃO SEGURA
 */
document.addEventListener('DOMContentLoaded', () => {

    // BOTÃO INICIAR
    const botaoIniciar = document.getElementById('btn-entrar');
    if (botaoIniciar) {
        botaoIniciar.onclick = () => {
            desativarModoAdm();
            navegarPara('tela-app');
        };
    }

    // CAMPO DE BUSCA
    const campoBusca = document.getElementById('campo-pesquisa');
    if (campoBusca) {
        campoBusca.oninput = (e) => {
            const valor = e.target.value.trim();
            if (valor === SENHA_ADMIN) {
                ativarModoAdm();
            } else {
                atualizarTelas(valor.toLowerCase());
            }
        };
    }

    // BOTÃO SAIR ADM
    const btnSairAdm = document.getElementById('btn-sair-adm');
    if (btnSairAdm) {
        btnSairAdm.onclick = () => {
            desativarModoAdm();
        };
    }

    // BOTÃO FEEDBACK
    const btnFeedback = document.querySelector('.btn-enviar-feedback');
    if (btnFeedback) {
        btnFeedback.onclick = () => {
            alert("Muito obrigado pela sua atenção, mas essa função ainda não está disponível, mas futuramente ela estará");
            const inputFeedback = document.getElementById('feedback-input');
            if (inputFeedback) inputFeedback.value = "";
        };
    }

    // PRIMEIRO RENDER
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
