
$(document).ready(function () {
    var activeIcon = function(){
    $(".has-children").click(function() {
        $(this).toggleClass("is-active");
        });
    }
    activeIcon();
});
    