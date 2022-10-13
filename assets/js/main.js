$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();
    
        const atividadeNome = $('#atividade').val();
        const novaLinha = $(`<li style="display: none">${atividadeNome}</li>`);
            
        $(novaLinha).appendTo('ul .container');
        $(novaLinha).fadeIn(1000);
        $('#atividade').val('');
    });
});
