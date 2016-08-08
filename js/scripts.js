var conversion = function(number1){
  return number1 * 3.785;
}

var number1 = parseInt(prompt("Enter the number of Gallons to convert to Litres: "));

var answer = conversion(number1);

alert("The ammount in Litres is: " + answer);

var conversion2 = function(number2){
  return number2 / 3.785;
}

var number2 = parseFloat(prompt("Enter the number of Litres to convert to Gallons: "));

var answer2 = conversion2(number2);

alert("The ammount in Litres is: " + answer2);
