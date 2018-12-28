jQuery(document).ready(function () {

	/*menu toggle*/
    var menuToggle = function () {
        var toggle = $('.menu-toggle');
        var overlay = $('.menu-overlay');
        toggle.click(function (e) {
            $(this).toggleClass('menu-toggle-active');
             $(this).next().toggleClass('site-nav-active');
             overlay.toggleClass('active');
        });
        overlay.click(function (e) {
            toggle.removeClass('menu-toggle-active');
             toggle.next().removeClass('site-nav-active');
             overlay.removeClass('active');
        });
    };
    menuToggle();

    //if menu has children / dropdown on desktop screen
    var desktopNav = function () {
        $('.has-children').hover(function (e) {
            $(this).addClass('is-active');
            $(this).children('ul').removeClass('is-hidden');
        }, function () {
            $(this).children('ul').addClass('is-hidden');
            $(this).removeClass('is-active');
        });
    };
    desktopNav();

    //if menu has children / dropdown on mobile screen
    var mobileNav = function () {
        
        $('.has-children > a').click(function (e) {
            var next = $(this).next('.has-children ul');
            $('body').find('.has-children ul').not(next).removeClass('show-sub-menu');
            next.toggleClass('show-sub-menu');
            e.stopPropagation();
        });
        $(".site-nav").click(function (e) {
            e.stopPropagation();
        });
        $(document).click(function () {
            $(".has-children ul").removeClass('show-sub-menu');
        });
    };
    mobileNav();
	

	$(window).scroll(function () {
            var scroll = $(window).scrollTop();
            var object = $(".site-header");
            if (scroll >= 100) {
                object.addClass("is-scrolled");
            } else {
                object.removeClass("is-scrolled");
            }
        });

    
    var clickMouse = function(){
        $("#clickmouse").click(function (){
                $('html, body').animate({
                    scrollTop: $("#scrollTarget").offset().top-80
                }, 500);
            });
    };
    //
    clickMouse();

    var uModal = function(){
    $(".modal-box").click(function (e) {
        e.stopPropagation();
    });
    $(".fn-close-modal, .modal").click(function (e) {
        $('body').toggleClass('disabled');
        $('.overlay').toggleClass('is-active');
        $('.modal').toggleClass('is-active');
    });

    };
    uModal();

});
