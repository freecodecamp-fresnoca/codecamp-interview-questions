function highLow(str){
  var nums = str.split(' ');
  var max =Math.max(...nums); // es2015 spread operator
  var min = Math.min(...nums);
  console.log(max,min);
}
highLow("1 2 3 4 5");  
highLow("1 2 9 4 -3"); 
highLow("8 2 2 4 -1"); 