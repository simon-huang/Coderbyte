/*
Challenge
Using the JavaScript language, have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number. 
Sample Test Cases
Input:99946
Output:9-9-946

Input:56730
Output:567-30
*/


function DashInsert(str) {
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] % 2 == 1) 
            str[i-1] % 2 == 1 ? newStr += "-" + str[i] : newStr += str[i];
        else
            newStr += str[i];
    }
    return newStr; 
}

/*
Easier to check the one ahead
  for (var i = 0; i < str.length-1; i++) {
    if (arr[i] % 2 !== 0 && arr[i+1] % 2 !== 0) {
      arr[i] = arr[i] + '-';
    }
  }
Also better to work with arrays when possible since faster
*/






