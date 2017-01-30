// different method using reduce
function squareSum(arr){
	var sum = arr.reduce((sum,n)=>{
		return (n*n)+sum;
	},0);
	console.log(sum);
}

 squareSum([1, 2, 2]);  // 9