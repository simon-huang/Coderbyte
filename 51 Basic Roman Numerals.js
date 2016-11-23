/*
Challenge
Using the JavaScript language, have the function BasicRomanNumerals(str) read str which will be a string of Roman numerals. The numerals being used are: I for 1, V for 5, X for 10, L for 50, C for 100, D for 500 and M for 1000. In Roman numerals, to create a number like 11 you simply add a 1 after the 10, so you get XI. But to create a number like 19, you use the subtraction notation which is to add an I before an X or V (or add an X before an L or C). So 19 in Roman numerals is XIX. 

The goal of your program is to return the decimal equivalent of the Roman numeral given. For example: if str is "XXIV" your program should return 24 
Sample Test Cases
Input:"IV"
Output:4

Input:"XLVI"
Output:46

*/
function BasicRomanNumerals(str) { 

  var numbers = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
  return eval(str.split('').map(function(x,i,arr){return numbers[x]<numbers[arr[i+1]] ? -numbers[x] : numbers[x];}).join('+'));
}


function BasicRomanNumerals(str) { 

  var numbers = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
  var sum = 0;
  
  for (var i = 0; i < str.length; i++) {
      var curr = numbers[str[i]];
      var next = numbers[str[i+1]];
      
      if (curr < next) 
          sum -= curr;
      else 
          sum += curr;
  }
  return sum;
}

function BasicRomanNumerals(str) { 
	function convert(x,i,arr){
		if (x == 'I')
			return 1;
		else if (x == 'V')
			return 5;
		else if (x == 'X')
			return 10;
		else if (x == 'L')
			return 50;
		else if (x == 'C')
			return 100;
		else if (x == 'D')
			return 500;
		else if (x == 'M')
			return 1000;
	} 
	return eval(str.split('').map(convert).map(function(x,i,arr){
		var next = arr[i + 1] || 0; 
		return x > next ? x : -x;
	}).join('+'));
}

function BasicRomanNumerals(str) { 
	function convert(x,i,arr){
		if (x == 'I' && arr[i+1] != 'V' && arr[i+1] != 'X')
			return 1;
		else if (x == 'I' && (arr[i+1] == 'V' ||  arr[i+1] == 'X'))
			return -1;
		else if (x == 'V')
			return 5;
		else if (x == 'X' && arr[i+1] != 'L' && arr[i+1] != 'C')
			return 10;
		else if (x == 'X' && (arr[i+1] == 'L' ||  arr[i+1] == 'C'))
			return -10;
		else if (x == 'L')
			return 50;
		else if (x == 'C' && arr[i+1] != 'D' && arr[i+1] != 'M')
			return 100;
		else if (x == 'C' && (arr[i+1] == 'D' || arr[i+1] == 'M'))
			return -100;
		else if (x == 'D')
			return 500;
		else if (x == 'M')
			return 1000;
	} 
	return eval(str.split('').map(convert).join("+"));
}

console.log(BasicRomanNumerals('IV'));






