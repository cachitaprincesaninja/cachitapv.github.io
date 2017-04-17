$('#farenheit').keypress(function () {
  var fartemp = $('#farenheit').val();
  fartemp = parseFloat(fartemp);
  celtemp = (fartemp - 32) / 1.8;
  celtemp= parseFloat(celtemp);
  $('#celcius').val(celtemp);

   if (fartemp>90) {
  $('body').css('background-color', 'red');
   } else if (fartemp>80) {
  $('body').css('background-color', 'orangered');
   } else if (fartemp>70) {
  $('body').css('background-color', 'tomato');
   }
   else if (fartemp>60) {
  $('body').css('background-color', 'orange');
   }else if (fartemp>50) {
  $('body').css('background-color', 'burlywood');
  } else if (fartemp>40) {
  $('body').css('background-color', '#d9dea6');
  } else if (fartemp>30) {
  $('body').css('background-color', '#b8e5d7');
  } else if (fartemp>20) {
  $('body').css('background-color', 'lightblue');
   }else if (fartemp>10) {
  $('body').css('background-color', '#cbe6ec');
   }else if (fartemp>0) {
  $('body').css('background-color', 'aliceblue');
  }
});

//*else if (fartemp>100) { $('body').css('background', 'url(http://www.wallpapers-web.com/data/out/84/4477240-fried-egg-wallpapers.jpg');

$('#celcius').keypress(function () {
  var celtemp = $('#celcius').val();
  celtemp = parseFloat(celtemp);
  fartemp = celtemp * 1.8 + 32;
  fartemp= parseFloat(fartemp);
  $('#farenheit').val(fartemp);

  if (fartemp>80) {
  $('body').css('background-color', 'red');
  } else if (fartemp<80) {
  $('body').css('background-color', 'lightblue');
  }
});

