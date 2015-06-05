var Equation = {
  number: 0,
  numberMinusOne: function(number) {
    return number-1;
  },
  numberZeros: function(number, numberMinusOne) {
    return number * Math.pow(2, numberMinusOne);
  },
  numberOnes: function(numberZeros, number) {
    return numberZeros + Math.pow(2, number);
  }
};

$(document).ready(function(event) {
  $("form#binaryCocktail").submit(function(event) {
    event.preventDefault();

    var equation = Object.create(Equation);
    var inputtedNumber = $("input#number").val();
    var inputtedNumberMinusOne = equation.numberMinusOne(inputtedNumber);
    var zeros = equation.numberZeros(inputtedNumber, inputtedNumberMinusOne);
    var ones = equation.numberOnes(zeros, inputtedNumber);

    $("div#results").append(
      "<h3> And the results are in! </h3>" + "</br>" + 
      "<h4> For 2 to the power of " + inputtedNumber + "</h4>" + "</br>" + 
      "<h4> The amount of zeros is " + zeros + "</h4>" + "</br>" + 
      "<h4> The amount of ones is " + ones + "</h4>");
    $("div#form").hide();
  });
});