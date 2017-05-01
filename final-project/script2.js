// var baloon = $('#spaceship');
//   function runIt() {
//       baloon.animate({top:'+=20'}, 1000);
//       baloon.animate({top:'-=20'}, 1000, runIt);
//   }
//
//   runIt();

1
2
3
$(document).ready(function() {
    $('#spaceship').jqFloat({
    width: 2,
        height: 20,
        speed: 900
      })
});