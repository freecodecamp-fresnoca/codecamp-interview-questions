function highLow(stringOfNumbers) {
  var split = stringOfNumbers.split(' ');
  var max = split[0];
  var min = split[0];
  for (i=1; i<split.length; ++i) {
    if (split[i] < min) {
      min = split[i];
    }
    if (split[i] > max) {
      max = split[i];
    }
  }
  return '' + min + " " + max;
}

//Test code for function
console.log(highLow("1 2 3"));
