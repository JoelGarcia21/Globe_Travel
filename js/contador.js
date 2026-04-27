$(document).ready(function () {

    let valorFinal = 840;
    let duracion = 8000; // 8 segundos

    $({ contador: 0 }).animate({ contador: valorFinal }, {
        duration: duracion,
        easing: 'swing',
        step: function () {
            $('#contador').text(Math.floor(this.contador));
        },
        complete: function () {
            $('#contador').text(valorFinal);
        }
    });

});