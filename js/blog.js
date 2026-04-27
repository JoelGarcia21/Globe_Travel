$(document).ready(function () {

    $(".filtros button").click(function () {
        let filtro = $(this).data("filter");

        $(".filtros button").removeClass("active");
        $(this).addClass("active");

        if (filtro === "all") {
            $(".post").fadeIn();
        } else {
            $(".post").hide();
            $("." + filtro).fadeIn();
        }
    });

    function mostrarPosts() {
        $(".post").each(function () {
            let top = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let screen = $(window).height();

            if (top < scroll + screen - 50) {
                $(this).addClass("show");
            }
        });
    }

    $(window).on("scroll", mostrarPosts);
    mostrarPosts();
});