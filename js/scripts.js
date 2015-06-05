var Number = {
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
  event.preventDefault();
  
  var number = Object.create(Number);
  var inputtedNumber = $("input#number").val();
  var inputtedNumberMinusOne = number.numberMinusOne(inputtedNumber);
  var zeros = number.numberZeros(inputtedNumber, inputtedNumberMinusOne);
  var ones = number.numberOnes(zeros, inputtedNumber);
  
  number.number = inputtedNumber;
  
  $("div#results").append(
    "<h3> And the results are in! </h3>" + "<br>" + "<h4> For 2 to the power of " number.number + "<h4>"
   + "<br>" + "<h4> The amount of zeros is " + zeros + "<h4>" +
     "<br>" + "<h4> The amount of ones is " + ones + "<h4>"
  );
  $("div#form").hide();
  
});