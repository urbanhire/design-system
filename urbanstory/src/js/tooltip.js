// <!--Active nav-item tab-->

$(document).ready(function () {
// var activeTab = function(){

// $(".nav-item").click(function() {
//     $(".nav-item").not(this).removeClass("active");
//     $(this).addClass("active");

//     });
// }


// var activeHtml = function(){

//     $(".nav-item").click(function() {
//         var activeHrefValue = $(".nav-item.active").attr("href");
//         console.log("pre"+activeHrefValue)
//         if (activeHrefValue) {
//             $("pre"+activeHrefValue).addClass("display-on")
//             $("pre"+activeHrefValue).not(this).removeClass("display-on")
//         } else{
//             $("pre#html").addClass("display-on")
//             $("pre#sass").removeClass("display-on")
//         }

        
//         });
//     }

// var activeSass = function(){

//     $("#sass-tab.nav-item").click(function() {
//         $("pre#sass").addClass("display-on")
//         $("pre#html").removeClass("display-on")
//         });
//     }
// var activeHtml = function(){

//     $("#hmlt-tab.nav-item").click(function() {
//         $("pre#sass").removeClass("display-on")
//         $("pre#html").addClass("display-on")
//         });
//     }



var showToast = function(){
    //let num = 0
    $(".toast-caller").click(function() {
        //num ++
        var toastHTML = `<div class="toast is-danger toast-fixed"><p>Fixed toast sample</p><button class="btn btn-flat btn-small toast-close"><i class="icon-close"></i></button></div>`; 
        var htmlParse = $.parseHTML(toastHTML)
        
        // $(htmlParse).animate({
            
        //     opacity: 'show',
        //     marginBottom : '10px',
        // }, 500).appendTo($("#toast-fixed-content"))

        $(htmlParse).appendTo($("#toast-fixed-content"))
       
        var children = $("#toast-fixed-content").children().toArray()
        setTimeout(function() { 

            /* Opsi 1 */
            children.forEach(function(items) {
                setTimeout(function(){
                    $(items).addClass('hide');
                    setTimeout(function(){
                        $(items).remove();
                    }, 500)
                }, 500)
                

            });
            
            /* Opsi 2 */
            // $("#toast-fixed-content").children().first().remove();
         }, 5000);
    });        
    }



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
// var callToast = function(){
//     $(".step-item").click(function() {
//         $(".step-item").not(this).removeClass("is-active");
//         $(this).addClass("is-active");
    
//         });
//     }
    

activeStep(); 
showToast(); 
activeSwitch();
//activeTab();
// activeHtml();
// activeSass();
//showCode();
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
