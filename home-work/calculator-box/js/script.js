var total = 0;

// 1. user clicks #a10 - handle with .click
// 2. add 10 to 'total'
// 3. write total to #out

$('#a10').click(function () {
  //2 
  total = total + 10;

  //3

  $('#out').html(total);
})

// #20
  
$('#a20').click(function () {
  //2 
  total = total + 20;

  //3

  $('#out').html(total);
})

//#30

  
$('#a30').click(function () {
  //2 
  total = total + 30;

  //3

  $('#out').html(total);
})

$('#red').click(function () {
  //2 

  $('#out').css("background", "red");
})

$('#blue').click(function () {
  //2 

  $('#out').css("background", "blue");
})

$('#n10').click(function () {
  //2 
  total = total - 10;

  //3

  $('#out').html(total);
})

// #20
  
$('#n20').click(function () {
  //2 
  total = total - 20;

  //3

  $('#out').html(total);
})

//#30

  
$('#n30').click(function () {
  //2 
  total = total - 30;

  //3

  $('#out').html(total);
})