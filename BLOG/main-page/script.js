 var baloon = $('#spaceship');
   function runIt() {
       baloon.animate({top:'+=20'}, 1000);
       baloon.animate({top:'-=20'}, 1000, runIt);
   }

   runIt();


$(document).ready(function() {
    $('#spaceship').jqFloat({
    width: 2,
        height: 30,
        speed: 900
      })
});


// make telepromptr when spaceship is designed

$('.toggle').click(function () {
  $('#spaceship').slideToggle();
})


//header resize on scroll (need to work on this)
