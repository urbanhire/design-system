
$(document).ready(function () {
    var activeIcon = function(){
    $(".has-children .dropdown-button").click(function() {
      $(this).siblings('div').toggleClass('is-hidden').toggleClass('is-show');
        });
  }
    activeIcon();
});

$(document).ready(function () {
  var dropdownClick = function(){
  $(".dropdown-menu").click(function() {
      $(this).toggleClass("is-rotate", 100);

      });
}
  dropdownClick();
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

$(document).ready(function () {
  $(".li-option a").each(function() { // ***
    $(this).data("original", $(this).text()); // ***
  })                                            // ***
  $('#searchInput').keyup(function() {
    console.log(this.value);
    var valThis = this.value.toLowerCase();
    var length = this.value.length;
    console.log(($(this).parent().parent().siblings().children()))
    console.log($('.li-option a'))


    $(this).parent().parent().siblings().children().each(function() {
      var text = $(this).data("original"),      // ***
        textL = text.toLowerCase(),
        index = textL.indexOf(valThis);  
        console.log(text);       // ***

      if (index !== -1) {
        var htmlR = text.substr(0, index) + '<strong>' + text.substr(index, length) + '</strong>' + text.substr(index + length); // ***
        $(this).html(htmlR).show()
      } else {
        $(this).hide();
      }
    });
  });
});