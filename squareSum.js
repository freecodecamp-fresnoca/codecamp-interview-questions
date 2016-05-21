function squareSum(numbers){
  var result = 0;
  for (i=0; i<numbers.length; i++) {
    result += numbers[i] * numbers[i];
  }
  return result;
}
console.log(squareSum([2,3,4,5,6]));
