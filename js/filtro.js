$(document).ready(function () {

    $(".filtros button").click(function () {

        let filtro = $(this).data("filter");

        $(".filtros button").removeClass("active");
        $(this).addClass("active");

        if (filtro === "all") {
            $(".grid .card").show(300);
        } else {
            $(".grid .card").hide(300);
            $(".grid ." + filtro).show(300);
        }

    });

});