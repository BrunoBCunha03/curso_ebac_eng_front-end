const form = document.getElementById('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const valorA = parseInt(document.getElementById('a').value);
    const valorB = parseInt(document.getElementById('b').value);
    const mensagem = document.getElementById('mensagem');
    if (valida(valorA, valorB)) {
        gerarMensagem(true);
    }
    else {
        gerarMensagem(false);
    }
});

function valida(campoA, campoB) {
    console.log(campoB > campoA);
    return (campoB > campoA);
}

function gerarMensagem(condicao) {
    mensagem.style.padding = '8px';
    mensagem.style.marginBottom = '5px';
    mensagem.style.color = 'white';
    mensagem.style.fontWeight = 'bold';
    mensagem.style.textAlign = 'center';
    if (condicao) {
        mensagem.innerHTML = 'Valido';
        mensagem.style.background = 'green';
    }
    else {
        mensagem.innerHTML = 'Não valido';
        mensagem.style.background = 'red';
    }
}


