// <!--Active nav-item tab-->

$(document).ready(function () {
var activeTab = function(){

$(".nav-item").click(function() {
    $(".nav-item").not(this).removeClass("active");
    $(this).addClass("active");

    });
}

var activeHtml = function(){

    $("#html-tab.nav-item").click(function() {
        $("pre#html").removeClass("display-off")
        $("pre#sass").addClass("display-off")
        });
    }

var activeSass = function(){

    $("#sass-tab.nav-item").click(function() {
        $("pre#sass").removeClass("display-off")
        $("pre#html").addClass("display-off")
    
        });
    }
    
activeTab();
activeHtml();
activeSass();
});
