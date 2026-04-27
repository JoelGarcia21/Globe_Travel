$(document).ready(function () {

    $("input, textarea").on("input", function () {
        if (this.checkValidity()) {
            $(this).removeClass("is-invalid").addClass("is-valid");
        } else {
            $(this).removeClass("is-valid").addClass("is-invalid");
        }
    });

    $("#formContacto").on("submit", function (e) {
        e.preventDefault();

        let valido = true;

        $("input, textarea").each(function () {
            if (!this.checkValidity()) {
                $(this).addClass("is-invalid");
                valido = false;
            }
        });

        if (!valido) return;

        $("#spinner").removeClass("d-none");
        $("#btnTexto").text("Enviando...");

        setTimeout(() => {

            $("#spinner").addClass("d-none");
            $("#btnTexto").text("Enviar");

            let modal = new bootstrap.Modal(document.getElementById('modalConfirmacion'));
            modal.show();

            $("#formContacto")[0].reset();
            $("input, textarea").removeClass("is-valid");

        }, 1500);

    });

});
