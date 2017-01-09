var add = function(number1, number2) {
	return number1 + number2;
};

var subtract = function(number1, number2){
	return number1 - number2;
}

var multiply = function(number1, number2){
	return number1 * number2;
}

var divide = function(number1, number2){
	return number1 / number2;
}

var numb1 = parseInt(prompt("Enter a number:"));
var numb2 = parseInt(prompt("Enter another number:"));

alert(subtract(numb1, numb2));
