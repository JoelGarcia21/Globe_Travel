$(document).ready(function () {
    $('.flip-btn').click(function () {
        $(this).closest('.agency-card').toggleClass('flipped');
    })
});