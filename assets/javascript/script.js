$(document).ready(function() {

    $('.to-about').on('click', function () {
        setTimeout($([document.documentElement, document.body]).animate({
            scrollTop: $("#about").offset().top
        }, 1500), 500)
    })
    $('.to-work').on('click', function () {
        setTimeout($([document.documentElement, document.body]).animate({
            scrollTop: $("#work").offset().top
        }, 1500), 500)
    })
    $('.to-contact').on('click', function () {
        setTimeout($([document.documentElement, document.body]).animate({
            scrollTop: $("#contact").offset().top
        }, 1500), 500)
    })


})