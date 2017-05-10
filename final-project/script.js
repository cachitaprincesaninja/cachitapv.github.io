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
        height: 30,
        speed: 900
      })
});
//spaceship

$('#navigation').click(function (appendItem) {
  var item = $('a').val();
  $('h2').append('<h2>' + item + '</h2>');

$('#todolist').on('click', 'button', function(){
  $(this).closest('li').remove();
});
//if (item='') {
  //alert('Item is blank!');
//}
});
$(document).ready(function () {
  // console.logs the window.width
  $(window).resize(function () {
    console.log($(window).width())
  })
})

$('.toggle').click(function () {
  $('#navigation').slideToggle();
})

//links


//slider

jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });
  
  var slideCount = $('#slider ul li').length;
  var slideWidth = $('#slider ul li').width();
  var slideHeight = $('#slider ul li').height();
  var sliderUlWidth = slideCount * slideWidth;
  
  $('#slider').css({ width: slideWidth, height: slideHeight });
  
  $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
  
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});    

//header visible on scroll
