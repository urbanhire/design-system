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


/* active page */
$(document).ready(function () {
    var activePage = function(){
    $(".ats-nav-content li a").click(function() {
        $(".ats-nav-content li a").not(this).removeClass("active");
        $(".menu-icon").not(this).removeClass("menu-icon-active");
        $(this).toggleClass("active");
      });
    }
    activePage();
});

/* active page icon */

$(document).ready(function () {
    var activeIcon = function(){
    $(".has-icon").click(function() {
        console.log('icon clicked')
        $(".ats-nav-content li a ").removeClass("active");
        $(".has-icon a").not(this).removeClass("active");
        $(this).toggleClass("active");
      });
    }
    activeIcon();
});

/*menu toggle*/
$(document).ready(function () {
    var menuToggle = function() {
        var toggle = $('.ats-menu-button');
        toggle.click(function(e) {
            $(this).toggleClass('menu-button-active');
            
        })
    }
    menuToggle();
});