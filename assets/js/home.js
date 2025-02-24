// Função para trocar pesquisa entre carro e moto

let tipoVeiculoMoto = document.getElementById('veiculo-moto');
let tipoVeiculoCarro = document.getElementById('veiculo-carro');
let divInputPesquisarCarro = document.getElementById('div-input-pesquisar-carro');
let divInputPesquisarMoto = document.getElementById('div-input-pesquisar-moto');

tipoVeiculoMoto.addEventListener('click', function() {
    if (tipoVeiculoMoto.classList.contains('veiculo-nao-selecionado')) {
        tipoVeiculoMoto.classList.replace('veiculo-nao-selecionado', 'veiculo-selecionado');
        divInputPesquisarMoto.style.display = 'flex';
        
        divInputPesquisarCarro.style.display = 'none';
        tipoVeiculoCarro.classList.replace('veiculo-selecionado', 'veiculo-nao-selecionado');
    }
});

tipoVeiculoCarro.addEventListener('click', function() {
    if (tipoVeiculoCarro.classList.contains('veiculo-nao-selecionado')) {
        tipoVeiculoCarro.classList.replace('veiculo-nao-selecionado', 'veiculo-selecionado');
        divInputPesquisarCarro.style.display = 'flex';
        
        divInputPesquisarMoto.style.display = 'none';
        tipoVeiculoMoto.classList.replace('veiculo-selecionado', 'veiculo-nao-selecionado');
    }
});

// Abrir modal veículos

let itemNavVeiculos = document.getElementById('nav-veiculos');
let modalNavVeiculos = document.getElementById('modal-nav-veiculos');

itemNavVeiculos.addEventListener('mouseenter', function() {
    modalNavVeiculos.style.display = 'flex';
});

modalNavVeiculos.addEventListener('mouseenter', function() {
    modalNavVeiculos.style.display = 'flex';
});

itemNavVeiculos.addEventListener('mouseleave', function() {
    modalNavVeiculos.style.display = 'none';
});

modalNavVeiculos.addEventListener('mouseleave', function() {
    modalNavVeiculos.style.display = 'none';
});

// Abrir e fechar modal login

let closeModalLogin = document.getElementById('closeModalLogin');
let modalLogin = document.getElementById('modal-login');

closeModalLogin.addEventListener('click', function() {

    let displayModal = window.getComputedStyle(modalLogin).display;

    if (displayModal === 'flex') {
        modalLogin.style.display = 'none';
    }
});

let divEntrar = document.getElementById('divEntrar');

divEntrar.addEventListener('click', function() {

    let displayModal = window.getComputedStyle(modalLogin).display;

    if (displayModal === 'flex') {
        modalLogin.style.display = 'none';
    }

    if (displayModal === 'none') {
        modalLogin.style.display = 'flex';
    }
});

// Abrir e fechar barra lateral

const sanduiche = document.getElementById('sanduicheHeader');
const barraLateral = document.getElementById('barra-lateral');
const overlayBg = document.getElementById('overlay-bg');
const closeBarraLateral = document.getElementById('fecharBarraLateral');

sanduiche.addEventListener('click', function() {
    barraLateral.style.animation = 'abrirBarraLateral 0.5s';
    overlayBg.style.animation = 'aparecerOverlay 0.5s';

    barraLateral.style.display = 'flex';
    overlayBg.style.display = 'flex';

})

closeBarraLateral.addEventListener('click', function() {
    barraLateral.style.animation = 'fecharBarraLateral 0.5s';
    overlayBg.style.animation = 'sumirOverlay 0.5s';
    setTimeout(() => {
        barraLateral.style.display = 'none';
        overlayBg.style.display = 'none';
    }, 499)
})