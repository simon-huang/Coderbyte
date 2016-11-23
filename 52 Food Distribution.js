/*
Challenge
Using the JavaScript language, have the function FoodDistribution(arr) read the array of numbers stored in arr which will represent the hunger level of different people ranging from 0 to 5 (0 meaning not hungry at all, 5 meaning very hungry). You will also have N sandwiches to give out which will range from 1 to 20. The format of the array will be [N, h1, h2, h3, ...] where N represents the number of sandwiches you have and the rest of the array will represent the hunger levels of different people. Your goal is to minimize the hunger difference between each pair of people in the array using the sandwiches you have available. 

For example: if arr is [5, 3, 1, 2, 1], this means you have 5 sandwiches to give out. You can distribute them in the following order to the people: 2, 0, 1, 0. Giving these sandwiches to the people their hunger levels now become: [1, 1, 1, 1]. The difference between each pair of people is now 0, the total is also 0, so your program should return 0. Note: You may not have to give out all, or even any, of your sandwiches to produce a minimized difference. 

Another example: if arr is [4, 5, 2, 3, 1, 0] then you can distribute the sandwiches in the following order: [3, 0, 1, 0, 0] which makes all the hunger levels the following: [2, 2, 2, 1, 0]. The differences between each pair of people is now: 0, 0, 1, 1 and so your program should return the final minimized difference of 2. 
Sample Test Cases
Input:5, 2, 3, 4, 5
Output:1

Input:3, 2, 1, 0, 4, 1, 0
Output:4
*/


function FoodDistribution(arr) {
	var sandwiches = arr.shift();
	function notAllSame(arr){
		var sorted = arr.slice().sort();
		return sorted[0] != sorted[arr.length -1];
	}
	function biggestDiff(arr){
		var differences = [];
		for (var i = 0; i < arr.length - 1; i++){
			differences.push(Math.abs(arr[i] - arr[i+1]));
		}
		return differences.sort(function(a,b){return b-a;})[0];
	}
	function bigReducer(arr, num){
		//console.log("bdiff = " + biggestDiff(arr), "sw = " + sandwiches, arr);
		for (var i = 0; i < arr.length - 1; i++){
			if (Math.abs(arr[i] - arr[i+1]) >= num ){
				arr[i] > arr[i+1] ? arr[i]-- : arr[i+1]--;
				sandwiches--;
				//console.log(sandwiches,arr);
			}
			if (sandwiches === 0 || !notAllSame(arr))
				break;
		}
	}
	for (var i = sandwiches; i > 0 && notAllSame(arr); i--){
		if (biggestDiff(arr) >= 3) 
			bigReducer(arr, 3);
		else if (biggestDiff(arr) == 2) 
			bigReducer(arr, 2);
		else if (biggestDiff(arr) == 1) 
			bigReducer(arr, 1);
	}
	
	return arr.map(function(x,i,arr){return arr[i+1] === undefined ? 0 : Math.abs(x-arr[i+1])}).reduce(function(a,b){return a+b;});
}

console.log(FoodDistribution([1, 5, 4, 1])); 


//sudo killall -9 node





