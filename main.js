$(document).ready(function () {
    // Quando um link do menu for clicado
    $('nav a').on('click', function (event) {
        event.preventDefault(); // Previne o comportamento padrão do link

        // Obtém o id da seção para onde será rolado
        var target = $(this).attr('href');
        

        // Faz a rolagem suave até a seção alvo
        $('html, body').animate({
            scrollTop: $(target).offset().top // Ajusta o deslocamento
        }, 800); // Duração da animação (800ms)
    });
});
