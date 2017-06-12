// 1) add an event listen to #click-me
// 2) store inputs as variables using the .value method
// 3) (Max age - age) * drinks per day * 365
// 4) output answers for the user to see

document.querySelector('#click-me').onclick = function () {
  //2
  var currentAge = document.querySelector('#age').value;
  var maxAge = document.querySelector('#max-age').value;
  var favDrink = document.querySelector('#item').value;
  var numPerDay = document.querySelector('#num-per-day').value;
  //3
  currentAge = parseInt(currentAge);
  maxAge = parseInt(maxAge);
  numPerDay = parseInt(numPerDay);
  
  var drinksLeft = parseInt(maxAge - currentAge) * numPerDay * 365;
  //4
document.querySelector('#solution').innerHTML = drinksLeft;
document.querySelector('#drink').innerHTML = favDrink;

} 
