$(document).ready(function () {
    var dropdown = function() {
        $('div.has-children').click(function(e) {
            $(this).addClass('is-active');
            $(this).children('ul').removeClass('is-hidden');
        }, function() {
            $(this).children('ul').addClass('is-hidden');
            $(this).removeClass('is-active');
        })
    }
    dropdown();
});
