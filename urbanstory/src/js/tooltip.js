// <!--Active nav-item tab-->

$(document).ready(function () {


// var callToast = function(){
   
//     $(".toast-caller").click(function() {
        
//         var toastHTML = `<div class="toast toast-danger"><p>Fixed toast sample</p><button class="uh-btn uh-btn-flat uh-btn-small toast-close"><i class="icon-close"></i></button></div>`; 
//         var htmlParse = $.parseHTML(toastHTML)
        
//         $(htmlParse).appendTo($("#toast-fixed-content"))
       
//         var children = $("#toast-fixed-content").children().toArray()
//         setTimeout(function() { 

//             children.forEach(function(items) {
//                 setTimeout(function(){
//                     $(items).addClass('hide');
//                     setTimeout(function(){
//                         $(items).remove();
//                     }, 500)
//                 }, 500)
//             });

//          }, 5000);
//         });        
//     }

var activeStep = function(){
    $(".step-item").click(function() {
        $(".step-item").not(this).removeClass("is-active");
        $(this).addClass("is-active");
    
        });
    }
    
var activeSwitch = function(){
    $(".uh-switch").click(function() {
        $(this).toggleClass("active");
        });
    }
    

activeStep(); 
// callToast(); 
activeSwitch();

});

$(document).ready(function() {
    
    $(".code-preview").each(function() {
        
        var $myTabs = $(this);

        //$myTabs.find(".code-snippet").hide().first().show();
        $myTabs.find("nav.uh-tab-nav a:first").addClass("active").show();


        $myTabs.find("nav.uh-tab-nav a").click(function() {

            var $this = $(this);
            var hrefVal = $(this).attr("href");
            $(hrefVal).removeClass("display-off").siblings().addClass("display-off");
            
            $this.addClass("active").siblings().removeClass("active");
            $this.find(".code-snippet").hide();
            
            var activeTab = $this.find("a").attr("href");
            $(activeTab).fadeIn();
        
            return false;
        });
    });

});
