// Função para exibir a data e hora atual
function exibirDataHoraAtual() {
    var dataHoraAtual = new Date();
    var dataHoraElemento = document.getElementById('data-hora');
    dataHoraElemento.textContent = dataHoraAtual.toLocaleString();
}

// Função para buscar a previsão do tempo em Curitiba
function buscarPrevisaoTempo() {
    // Você pode substituir pela API de previsão do tempo de sua preferência
    // Neste exemplo, estou usando uma string simples
    var previsaoTempo = "Ensolarado, 28°C";
    var previsaoTempoElemento = document.getElementById('previsao-tempo');
    previsaoTempoElemento.textContent = previsaoTempo;
}

// Função para exibir uma mensagem positiva aleatória
function exibirMensagemPositiva() {
    var mensagensPositivas = [
        "Acredite em si mesmo, você é capaz de grandes coisas!",
        "A cada dia, uma nova oportunidade para alcançar seus sonhos!",
        "Seja a mudança que você deseja ver no mundo!",
        "Nunca desista, pois grandes coisas levam tempo para se concretizarem!",
        "O caminho para o sucesso é feito de pequenos passos. Continue caminhando!"
    ];

    var mensagemPositiva = mensagensPositivas[Math.floor(Math.random() * mensagensPositivas.length)];
    var mensagemPositivaElemento = document.getElementById('mensagem-positiva');
    mensagemPositivaElemento.textContent = mensagemPositiva;
}

// Ao carregar a página, chamar as funções para exibir a data e hora atual, buscar a previsão do tempo e exibir uma mensagem positiva aleatória
window.onload = function() {
    exibirDataHoraAtual();
    buscarPrevisaoTempo();
    exibirMensagemPositiva();
};
