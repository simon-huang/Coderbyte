/*
Challenge
Using the JavaScript language, have the function CountingMinutesI(str) take the str parameter being passed which will be two times (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of minutes between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output should be 1320. 
Sample Test Cases
Input:"12:30pm-12:00am"
Output:690

Input:"1:23am-1:08am"
Output:1425
*/

function CountingMinutesI(str) {
    var arr = str.split("");
    var startHour = arr.slice(0,arr.indexOf(":"));
    var startMin = arr.slice(arr.indexOf(":") + 1,arr.indexOf("m")-1);
    var startAMPM = arr.slice(arr.indexOf("m")-1, arr.indexOf("-")), ;
    arr = arr.slice(arr.indexOf("-")+1);
    var endHour = arr.slice(0,arr.indexOf(":"));
    var endMin = arr.slice(arr.indexOf(":") + 1,arr.indexOf("m")-1);
    var endAMPM = arr.slice(arr.indexOf("m")-1, arr.indexOf("-")), ;
//actually I could have kept it a string and used .substring
//var startHour = parseInt(str.substring(x,x)) is what I needed
//if pm add 12 to hour. time = (60*hours) + min. (24-start time) + end time. 

}
Also good idea -- more clear:

var seps = str.split("-");
var col1 = seps[0].indexOf(":");
var col2 = seps[1].indexOf(":");
var hour1 = parseInt(seps [0].slice(0, col1));
var hour2 = parseInt(seps[1].slice(0, col2));
var min1 = parseInt(seps[0].slice(col1+1, col1+3));
var min2 = parseInt(seps[1].slice(col2+1, col2+3));
var ampm1 = seps[0].slice(-2);
var ampm2 = seps[1].slice(-2);

Better abstracted - write a function that deals with half and call it for each half

function getDayMinutes(str) { 
  var min = 0;
  var t = Number(str.split(':')[0]);
  min+=t*60;
  t = Number(str.substr(str.length-4, 2));
  min+=t;
  if (str.substr(str.length-2) == 'pm')
    min+=12*60;
  return min;
}
function CountingMinutesI(str) { 
  var times = str.split('-')
  var diff =  getDayMinutes(times[1])-getDayMinutes(times[0]);
  if (diff<0)
    diff+=24*60;
  // code goes here  
  return diff; 
         
}






