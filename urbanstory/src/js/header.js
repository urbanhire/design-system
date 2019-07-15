var desktopNav = function() {
    $('.has-children').hover(function(e) {
        $(this).addClass('is-active');
        $(this).children('ul').removeClass('is-hidden');
    }, function() {
        $(this).children('ul').addClass('is-hidden');
        $(this).removeClass('is-active');
    })
}
desktopNav();