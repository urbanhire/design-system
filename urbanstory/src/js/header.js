/* Navbar drop down menu */

$(document).ready(function () {
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
});

/*menu toggle*/
$(document).ready(function () {
    var menuToggle = function() {
        var toggle = $('.ats-menu-button');
        //var overlay = $('.menu-overlay');
        toggle.click(function(e) {
            $(this).toggleClass('menu-button-active');
            $(this).next().toggleClass('ats-nav-content-active');
            $('#jobs > ul').addClass('show-sub-menu');
            overlay.toggleClass('active');
        })
        // overlay.click(function(e) {
        //     toggle.toggleClass('menu-toggle-active');
        //     toggle.next().toggleClass('uh-site-nav-active');
        //     overlay.toggleClass('active');
        // });
    }
    menuToggle();
});