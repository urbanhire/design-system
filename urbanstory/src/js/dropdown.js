
// $(document).ready(function () {
//     var activeIcon = function(){
//     $(".has-children").click(function() {
//         $(this).toggleClass("is-active");
//         });
//     }
//     activeIcon();
// });

$(document).ready(function(){
    var lookup = function(){
    $("#searchInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myUL li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
    }
    lookup();
});