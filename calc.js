function mostrarFormulario() {
    var tipoCalculo = document.getElementById('tipoCalculo').value;
    document.getElementById('formularios').style.display = 'block';

    document.getElementById('formulario-rolos').style.display = (tipoCalculo === 'rolos') ? 'block' : 'none';
    document.getElementById('formulario-metros').style.display = (tipoCalculo === 'metros') ? 'block' : 'none';
    document.getElementById('formulario-caixas').style.display = (tipoCalculo === 'caixas') ? 'block' : 'none';
}

// Adicione esta linha para mostrar o formulário da primeira opção por padrão
mostrarFormulario();


function calcularQuantidadeMetrosRolos() {
    var largura = parseFloat(document.getElementById('largura-rolos').value);
    var comprimento = parseFloat(document.getElementById('comprimento-rolos').value);
    var rolos = parseInt(document.getElementById('rolos-rolos').value);

    var metros = (largura * comprimento * rolos) / 1000;

    document.getElementById('resultado-rolos').innerHTML = 'Quantidade em metros: ' + metros.toFixed(2) + 'm';
}

function calcularQuantidadeRoIosMetros() {
    var largura = parseFloat(document.getElementById('largura-metros').value);
    var comprimento = parseFloat(document.getElementById('comprimento-metros').value);
    var metros = parseFloat(document.getElementById('metros-metros').value);

    var rolos = (metros * 1000) / (largura * comprimento);

    document.getElementById('resultado-metros').innerHTML = 'Quantidade de rolos: ' + rolos.toFixed(2);
}

function calcularQuantidadeMetrosRoIosCaixas() {
    var largura = parseFloat(document.getElementById('largura-caixas').value);
    var comprimento = parseFloat(document.getElementById('comprimento-caixas').value);
    var caixas = parseInt(document.getElementById('caixas-caixas').value);

    // Defina a quantidade de rolos, caixas por piso, e pisos por pallet conforme necessário
    var rolosPorCaixa = 50;
    var caixasPorPiso = 10;
    var pisosPorPallet = 5;

    var totalDeRolos = rolosPorCaixa * caixas;
    var totalMetros = (largura * comprimento * totalDeRolos) / 1000;

    document.getElementById('resultado-caixas').innerHTML = 'Quantidade em metros: ' + totalMetros.toFixed(2) + 'm, Quantidade de rolos: ' + totalDeRolos;
}

