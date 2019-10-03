window.UH = {}

window.UH.Toast = (function () {
  'use strict'
  const init = function () {
    $(".toast-caller").click(function() { 
      let toastHTML = `<div class="toast toast-danger"><p>Fixed toast sample</p><button class="uh-btn uh-btn-flat uh-btn-small toast-close"><i class="icon-close"></i></button></div>`; 
      let htmlParse = $.parseHTML(toastHTML)
      
      $(htmlParse).appendTo($("#toast-fixed-content"))
  
      let children = $("#toast-fixed-content").children().toArray()
      setTimeout(function() { 
        children.forEach(function(items) {
          setTimeout(function(){
            $(items).addClass('hide');
            setTimeout(function(){
              $(items).remove();
            }, 500)
          }, 500)
        });
      }, 5000);
    });
  }
  return {
    init
  }
}())

$(() => {
  'use strict'
  window.UH.Toast.init()
})