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