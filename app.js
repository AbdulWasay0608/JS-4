//==========CHAPTER 21==========//


// var allLower = userInput.toLowerCase();

// x = x.toLowerCase();

// y = y.toUpperCase();

// var newStr = str.toLowerCase();

// var lowercaseStr = arr[index].toLowerCase();

// alert(str.toUpperCase());

// cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();


//==========CHAPTER 22-25==========//


// sameWords = sameWords.slice(0, 1) + sameWords.slice(3);

// var length = str.length;

// var animal = "elephant";
// var seg = animal.slice(2, 6);

// var count = str.length;

// var strLength = str.length;
// var slicedStr = str.slice(1, strLength - 3);

// indx = 3

// indx = 16

// var indx = text.lastIndexOf("go");

// if (str.charAt(indexNum)) {
    // Rest of the code
//   }

// var character = "abcde".charAt(2);  // character will be "c"

// var cha = input.charAt(4);

// if (str.charAt(2) === 'x') {
    // Rest of the code
//   }
  
// var arr = [];
// for (var i = 0; i < str.length; i++) {
//   arr.push(str.charAt(i));
// }

// var revisedReply = reply.replace("no", "yes");

// var newStr = str.replace("1", "one");


//==========CHAPTER 26==========//


// var roundedNum = Math.round(num);

// var roundNum = Math.ceil(origNum);

// var roundNum = Math.floor(origNum);

// var rounded = Math.round(num);

// var roundedNum = Math.floor(0.5);


//==========CHAPTER 27==========//


// var randomNum = Math.floor(Math.random() * 50) + 1;

// var randomNum = Math.random();

// var a = Math.random()
// var dice = Math.ceil(a * 6)

// var a = Math.random()
// var dice = Math.ceil(a * 2)
// if (toss == 1){
// console.log("Hat")
// }
// else{
    // console.log("Tail")
// }


//==========CHAPTER 28-29==========//


// var integerNum = parseInt(stringNum);

// var num = parseInt("123");

// var floatNum = parseFloat(decimalString);

// var stringNum = "123";
// if (!isNaN(parseInt(stringNum))) {
//   // Conversion is successful
// }

// var strNum = number.toString();

// var strNum = (42).toString();

// var decimalString = "3.14";
// var integerNum = parseInt(decimalString);  // integerNum will be 3


//==========CHAPTER 30==========//


// var newNum = num.toFixed(4);

// num = parseFloat(num.toFixed(2));

// if (num.toFixed(2).toString().length > 5) {
//     // Rest of the code
//   }

//   alert(num.toFixed(3));

  
//==========CHAPTER 31-34==========//


// Chapter 31-34 (Date & Time)
// 1.
var dObj = new Date();

// 2.
var d = new Date();
var dStr = d.toString();

// 3.
var d = new Date();
var day = d.getDay();

// 4.
var d = new Date();
var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var currentDay = dayNames[d.getDay()];
alert(currentDay);

// 5.
var d = new Date();
var year = d.getFullYear();
var month = d.getMonth();
var day = d.getDate();
var hours = d.getHours();
var minutes = d.getMinutes();
var seconds = d.getSeconds();
var milliseconds = d.getMilliseconds();

// 6.
var later = new Date(2020, 11, 31);

// 7.
var date = new Date(1992, 1, 2);

// 8.
var referenceDate = new Date(1980, 0, 1);
var millisecondsElapsed = d.getTime() - referenceDate.getTime();
alert(millisecondsElapsed);

// 9.
var d = new Date();
d.setFullYear(2022);

// 10.
function changeMonthToJanuary(date) {
  date.setMonth(0);
  return date;
}

// 11. There is no direct method to change the day of the week for a specific date.

// 12.
function changeMinutesToValue(date, value) {
  date.setMinutes(value);
  return date;
}

// 13.
function addHoursToTime(date, hours) {
  date.setHours(date.getHours() + hours);
  return date;
}

// 14.
function calculateAge(dateOfBirth) {
  var currentDate = new Date();
  var age = currentDate.getFullYear() - dateOfBirth.getFullYear();
  if (currentDate.getMonth() < dateOfBirth.getMonth() || (currentDate.getMonth() == dateOfBirth.getMonth() && currentDate.getDate() < dateOfBirth.getDate())) {
    age--;
  }
  return age;
}


//==========CHAPTER 35-37==========//


// 1.
function displayAlert() {
    // Code to be executed
  }
  
  // 2.
  function askName() {
    var userName = prompt("Enter name");
    return userName;
  }
  
  // 3.
  function callOtherFunctions() {
    function1();
    function2();
  }
  
  // 4.
  function displayAndAlertName() {
    var name = prompt("Enter name");
    alert(name);
  }
  
  // 5.
  function concat(a, b, c) {
    var result = a.concat(b, c);
    return result;
  }
  concat("a", "b", "c"); // Example function call
  
  // 6.
  function concatenateStrings(string1, string2) {
    var concatenatedString = string1 + string2;
    return concatenatedString;
  }
  
  // 7.
  function multiplyNumbers(a, b, c) {
    var result = a * b * c;
    return result;
  }
  
  // 8.
  function calculateAverage(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    var average = sum / numbers.length;
    return average;
  }
  
  // 9.
  function calculateSum(a, b) {
    var sum = a + b;
    return sum;
  }
  
  // 10. Same as question 8.
  
  // 11.
  var returnValue = functionName();
  
  // 12.
  function countLetters(word) {
    return word.length;
  }
  
  // 13.
  function setYear(date, year) {
    date.setFullYear(year);
    return date;
  }
  
  // 14.
  function calculateAge(dateOfBirth) {
    var currentDate = new Date();
    var age = currentDate.getFullYear() - dateOfBirth.getFullYear();
    if (currentDate.getMonth() < dateOfBirth.getMonth() || (currentDate.getMonth() == dateOfBirth.getMonth() && currentDate.getDate() < dateOfBirth.getDate())) {
      age--;
    }
    return age;
  }
  
  // 15.
  function checkPresence(word, array) {
    var result = array.includes(word);
    return result;
  }
  
  // 16.
  function repeatLetter(letter, times) {
    var repeatedString = letter.repeat(times);
    return repeatedString;
  }
  
  // 17.
  function reverseArray(arr) {
    var reversedArray = arr.reverse();
    return reversedArray;
  }
  

//==========CHAPTER 38==========//


// 1.
function localVariableDemo() {
    var localVariable = "This is a local variable.";
    // Code to be executed
  }
  
  // 2.
  var globalVariable = "This is a global variable.";
  
  function accessGlobalVariable() {
    console.log(globalVariable);
  }

  
//==========CHAPTER 39-40==========//


// 1.
var variable = "value";

switch (variable) {
  case "value1":
    // Code for value1
    break;
  case "value2":
    // Code for value2
    break;
  default:
    // Code for default case
    break;
}

// 2.
var cityName = "New York";

switch (cityName) {
  case "London":
    alert("City is London.");
    break;
  case "Paris":
    alert("City is Paris.");
    break;
  default:
    alert("City does not match any known cities.");
    break;
}
