function squareSum(arrayOfNumbers){
  var result = 0;
  for (i=0; i<arrayOfNumbers.length; i++) {
    result += arrayOfNumbers[i] * arrayOfNumbers[i];
  }
  return result;
}
console.log(squareSum([2,3,4,5,6]));
