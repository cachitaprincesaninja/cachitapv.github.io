$(document).ready(function () {
	// console.logs the window.width
	$(window).resize(function () {
		console.log($(window).width())
	})
})

//1.click event on #burger

$('#burger').click(function () {
  $('#mobile-nav').slideToggle();
})
//2. slideToggle on #mobile-nav