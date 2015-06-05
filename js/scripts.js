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

