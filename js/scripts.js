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
  $("button#return").hide();
  $("form#binaryCocktail").submit(function(event) {
    event.preventDefault();

    var equation = Object.create(Equation);
    var inputtedNumber = $("input#number").val();
    var inputtedNumberMinusOne = equation.numberMinusOne(inputtedNumber);
    var zeros = equation.numberZeros(inputtedNumber, inputtedNumberMinusOne);
    var ones = equation.numberOnes(zeros, inputtedNumber);

    $("div#results").append(
      "<h3> And the results are in! </h3>" +  
      "<h4> For 2 to the power of " + inputtedNumber + " the cocktail is:</h4>" +  
      "<h4 class='answer'>" + zeros + " parts zero, and " + ones + " parts one! </h4>").show();
    $("div#explanation").hide();
    $("div#form").hide();
    $("button#return").show();
  });
  
  $("button#return").click(function(event) {
    $("div#results").empty().hide();
    $("button#return").hide();
    $("div#explanation").show();
    $("input#number").val("");
    $("div#form").show();
  });
});