
$(document).ready(function () {
    var activeIcon = function(){
    $(".dropdown-menu").click(function() {
      $(this).siblings('div').slideToggle(300);
  
        });
  }
    activeIcon();
});

$(document).ready(function () {
  var desktopNav = function() {
      $('li.has-children').hover(function(e) {
          $(this).addClass('is-active');
          $(this).children('ul').removeClass('is-hidden');
      }, function() {
          $(this).children('ul').addClass('is-hidden');
          $(this).removeClass('is-active');
      })
  }
  desktopNav();
});

/* FILTERING WITHOUT HIGHLIGHTING MATHCING STRING */

// $(document).ready(function(){
//     var lookup = function(){
//     $("#searchInput").on("keyup", function() {
//       var value = $(this).val().toLowerCase();
//       console.log(value)
//       $("#myUL li").filter(function() {
//         console.log($(this).text().toLowerCase().indexOf(value))
//         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//       });
//     });
//     }
//     lookup();
// });


/* FILTERING + HIGHLIGHTING MATHCING STRING */

$(document).ready(function () {
  $(".li-option a").each(function() {               // ***
    $(this).data("original", $(this).text()); // ***
  })                                            // ***
  $('#searchInput').keyup(function() {
    var valThis = this.value.toLowerCase();
    var length = this.value.length;

    $('.li-option a').each(function() {
      var text = $(this).data("original"),      // ***
        textL = text.toLowerCase(),
        index = textL.indexOf(valThis);         // ***

      if (index !== -1) {
        var htmlR = text.substr(0, index) + '<strong>' + text.substr(index, length) + '</strong>' + text.substr(index + length); // ***
        console.log(text.substr(0, index))
        $(this).html(htmlR).show()
      } else {
        $(this).hide();
      }
    });
  });
});