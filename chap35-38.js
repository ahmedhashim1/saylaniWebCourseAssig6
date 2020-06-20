// Assign# 1 function that displays current date & time in your browser
// function myDate() {
//   var date1 = new Date();
//   return date1;
// }
// document.write(myDate());
// ---------------------------------------------------------------------------------------

// Assign# 2 function that takes first & last name and then it greets the user using his full name.

// var fName = prompt("Please enter First Name");
// var lName = prompt("Please enter Last Name");

// function fullName(firstName, lastName) {
//   return firstName + " " + lastName;
// }

// document.write("Welcome " + fullName(fName, lName));
// ---------------------------------------------------------------------------------------

// Assign# 3 function that adds two numbers (input by user) and returns the sum of two numbers..

// var n1 = parseInt(prompt("Please enter First Number"));
// var n2 = parseInt(prompt("Please enter Second Number"));

// function addNum(fNum, sNum) {
//   return fNum + sNum;
// }

// document.write("Sum of two numbers is " + addNum(n1, n2));
// ---------------------------------------------------------------------------------------

// Assign# 4 function that takes three arguments num1, num2 & operator & compute the desired
// operation. Return and show the desired result in your browser.

// var n1 = parseInt(prompt("Please enter First Number: "));
// var s = prompt("Please enter Calculation to performed: ");
// var n2 = parseInt(prompt("Please enter Second Number: "));

// function calcNum(fNum, sign, sNum) {
//   if (sign === "+") {
//     return fNum + sNum;
//   } else if (sign === "-") {
//     return fNum - sNum;
//   } else if (sign === "*") {
//     return fNum * sNum;
//   } else if (sign === "/") {
//     return fNum / sNum;
//   }
// }
// document.write(
//   "Equation is :" +
//     n1 +
//     " " +
//     s +
//     " " +
//     n2 +
//     " result is: " +
//     calcNum(n1, s, n2)
// );
// ---------------------------------------------------------------------------------------

// Assign# 5 function that squares its argument

// var n1 = parseInt(prompt("Please enter Number to square: "));

// function calcSq(sq) {
//   return Math.sqrt(n1);
// }
// document.write("Square of : " + n1 + " is " + calcSq(n1));
// ---------------------------------------------------------------------------------------

// Assign# 6 function that computes factorial of a number

// var n1 = parseInt(prompt("Please enter Number to calc factorial: "));

// function calcFactorial(n1) {
//   return n1 ? n1 * calcFactorial(n1 - 1) : 1;
// }

// document.write("Factorial of : " + n1 + " is " + calcFactorial(n1));
// ---------------------------------------------------------------------------------------

// Assign# 7 function that take start and end number as inputs & display counting in your browser

// var n1 = parseInt(prompt("Please enter Start Number: "));
// var n2 = parseInt(prompt("Please enter End Number: "));

// function runCounting(num1, num2) {
//   var count = 0;
//   for (i = num1; i <= num2; i++) {
//     document.write("count " + i + "<br>");
//   }
// }
// runCounting(n1, n2);
// ---------------------------------------------------------------------------------------

// Assign# 8 nested function that computes hypotenuse of a right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2

// ---------------------------------------------------------------------------------------

// Assign# 9 function that calculates the area of a rectangle. A = width * height
// Pass width and height in following manner: i. Arguments as value ii. Arguments as variables

// var width = parseInt(prompt("Enter width: "));
// var height = parseInt(prompt("Enter height: "));

// Method 1 aurgument as value
// function calcArea() {
//   var w = prompt("Enter width");
//   var h = prompt("Enter height");
//   return "With values :" + w * h;
// }

// document.write(calcArea());
// document.write("<br>");

// var width = parseInt(prompt("Enter width: "));
// var height = parseInt(prompt("Enter height: "));
// function calcAreaVar(width, height) {
//   return "With Variable :" + width * height;
// }

// document.write(calcAreaVar(width, height));
// ---------------------------------------------------------------------------------------

// Assign# 10 function that checks whether a passed string is palindrome or not? A palindrome is word,
// phrase, or sequence that reads the same backward as forward, e.g., madam.

// var word = prompt("Enter word: ");

// function check_Palindrome(w) {
//   // Change the string into lower case and remove  all non-alphanumeric characters
//   var cstr = w.toLowerCase();
//   // Loop through to check the first character to the last character and then move next
//   for (var x = 0; x < cstr.length; x++) {
//     // Compare characters and drop them if they do not match
//     if (cstr[x] != cstr.slice(-1 - x)[0]) {
//       console.log("Entry is not a palindrome.");
//       return false;
//     }
//   }
//   console.log("The entry is a palindrome.");
//   return true;
// }

// check_Palindrome(word);
// ---------------------------------------------------------------------------------------

// Assign# 11 function that accepts a string as a parameter and converts the first letter of
// each word of the string in upper case. EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// var pharase = prompt("Enter pharase: ");

// function upperCase(pharase) {
//   var array1 = pharase.split(" ");
//   var newarray1 = [];

//   for (var x = 0; x < array1.length; x++) {
//     newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
//   }
//   return newarray1.join(" ");
// }
// document.write(upperCase(pharase));

// ---------------------------------------------------------------------------------------

// Assign# 12 JavaScript function that accepts a string as a parameter and find the longest
// word within the string. EXAMPLE STRING : 'Web Development Tutorial' EXPECTED OUTPUT : 'Development'

// var pharase = prompt("Enter pharase to check long word: ");

// function findLongWord(pharase) {
//   var array1 = pharase.split(" ");
//   var result = array1[0];

//   for (var x = 1; x < array1.length; x++) {
//     if (result.length < array1[x].length) {
//       result = array1[x];
//     }
//   }
//   return result;
// }

// document.write("Origial Pharase is: " + pharase + "<br>");
// document.write("Longest word is: ");
// document.write(findLongWord(pharase));
// document.write(
//   "<br>Which contain total characters : " + findLongWord(pharase).length
// );

// ---------------------------------------------------------------------------------------

// Assign# 13 function that accepts two arguments, a string and a letter and the function
// will count the number of occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

// var pharase = prompt("Enter pharase : ");
// var letter = prompt("Enter letter to count in pharase: ");

// function letterCount(pharase, letter) {
//   var letter_Count = 0;
//   for (var position = 0; position < pharase.length; position++) {
//     if (pharase.charAt(position) == letter) {
//       letter_Count += 1;
//     }
//   }
//   return letter_Count;
// }

// document.write("Origial Pharase is: " + pharase + "<br>");
// document.write("Letter to count is: " + letter + "<br>");
// document.write("Total Occurance " + letterCount(pharase, letter));

// ---------------------------------------------------------------------------------------

// Assign# 14 Create 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumference: • Pass the radius to the function. • Calculate the
// circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea: // • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area is NN"

var radius = parseInt(prompt("Enter radius : "));

function calcCircumfrence(radius) {
  var y = Math.PI * radius * 2;
  return y;
}
function calcArea(radius) {
  var x = Math.PI * radius * radius;
  return x;
}

document.write("The circumference is: " + calcCircumfrence(radius) + "<br>");
document.write("The Area is: " + calcArea(radius) + "<br>");

// ---------------------------------------------------------------------------------------
