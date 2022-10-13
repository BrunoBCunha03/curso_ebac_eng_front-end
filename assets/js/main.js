var dados = [];
$(document).ready(function () {

    $('form').on('submit', function (e) {
        e.preventDefault();

        const atividadeNome = $('#atividade').val();

        dados.push(atividadeNome);
        paginar();
        ajustarBotoes();
        $('#atividade').val('');
    });

    var tamanhoPagina = 6;
    var pagina = 0;

    function paginar() {
        $('ul > .container > li').remove();
        for (var i = pagina * tamanhoPagina; i < dados.length && i < (pagina + 1) * tamanhoPagina; i++) {
            const novaLinha = $(`<li style="display: none"onclick="atividadeCheck(this);">${dados[i]}</li>`);

            $(novaLinha).appendTo('ul .container');
            $(novaLinha).fadeIn(1000);
        };
        $('#numeracao').text('Página ' + (pagina + 1) + ' de ' + Math.ceil(dados.length / tamanhoPagina));
    };

    function ajustarBotoes() {
        $('#proximo').prop('disabled', dados.length <= tamanhoPagina || pagina > dados.length / tamanhoPagina - 1);
        $('#anterior').prop('disabled', dados.length <= tamanhoPagina || pagina == 0);
    };

    $('#proximo').click(function () {
        if (pagina < dados.length / tamanhoPagina - 1) {
            pagina++;
            paginar();
            ajustarBotoes();
        }
    });
    $('#anterior').click(function () {
        if (pagina > 0) {
            pagina--;
            paginar();
            ajustarBotoes();
        }
    });
});

function atividadeCheck(atividade) {
    if ($(atividade).hasClass("atividadeCheck")) {
        $(atividade).removeClass("atividadeCheck");
    }
    else {
        $(atividade).addClass("atividadeCheck");
    }
};
