$(document).ready(function() {
    $('.toggle_component').on('click', function() {
        $('body').toggleClass('dark-mode');
        $('.toggle_component').toggleClass('is-on');
    });
});