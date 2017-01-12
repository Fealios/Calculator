var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {
  $("#add").submit(function(event) {
    event.preventDefault();

    var operator = $('input:radio[name=operator]:checked').val();

    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    // alert(add(number1, number2));
    var result ;
    if (operator === "add") {
   result = add(number1, number2);
 } else if (operator === "subtract") {
   result = subtract(number1, number2);
 } else if (operator === 'multiply') {
   result = multiple(number1, number2);
 } else if (operator === 'divide') {
   result = divide(number1, number2);
 }
		$("#output").text(result);
  });
});
