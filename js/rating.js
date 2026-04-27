$(document).ready(function () {
    $('.rating span').click(function () {
        let index = $(this).index();

        $(this).parent().children().each(function (i) {
            if (i <= index) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    });
});