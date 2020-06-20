// Assign# 1 program that takes a positive integer from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var userInput = prompt("Please enter a number");

// alert(
//   "Number: " +
//     userInput +
//     "\r\n" +
//     "Round-Off Value: " +
//     Math.round(userInput) +
//     "\r\n" +
//     "floor Value: " +
//     Math.floor(userInput) +
//     "\r\n" +
//     "Ceil Value: " +
//     Math.ceil(userInput)
// );

// ---------------------------------------------------------------------------------------

// Assign# 2 program that takes a negative floating point number from user & display the following in your browser
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var userInput = prompt("Please enter a negative number");

// alert(
//   "Number: " +
//     userInput +
//     "\r\n" +
//     "Round-Off Value: " +
//     Math.round(userInput) +
//     "\r\n" +
//     "floor Value: " +
//     Math.floor(userInput) +
//     "\r\n" +
//     "Ceil Value: " +
//     Math.ceil(userInput)
// );

// ---------------------------------------------------------------------------------------

// Assign# 3 program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var userInput = prompt("Please enter a number");

// alert(
//   "Number: " + userInput + "\r\n" + "Absoulute Value: " + Math.abs(userInput)
// );

// ---------------------------------------------------------------------------------------

// Assign# 4 program that simulates a dice using random() method of JS Math class.
// Display the value of dice in your browser.:

// var dice = Math.floor(Math.random() * 6);

// alert("Random Dice Value: " + dice);

// ---------------------------------------------------------------------------------------

// Assign# 5 program that simulates a coin toss using random() method of JS Math class.
// Display the value of coin in your browser

// var coin = Math.floor(Math.random() * 2);

// if (coin === 1) {
//   alert(coin + ": Random Coin Value: " + "Head");
// } else {
//   alert(coin + ": Random Coin Value: " + "Tails");
// }

// ---------------------------------------------------------------------------------------

// Assign# 6 program that shows a random number between 1 and 100 in your browser.

// for (var i = 0; i <= 100; i++) {
//   var randNum = Math.floor(Math.random() * 100);
//   document.write(randNum + "<br>");
// }

// ---------------------------------------------------------------------------------------

// Assign# 7 program that shows a random number between 1 and 100 in your browser.

// for (var i = 0; i <= 100; i++) {
//   var randNum = Math.floor(Math.random() * 100);
//   document.write(randNum + "<br>");
// }

// ---------------------------------------------------------------------------------------

// Assign# 7 program that asks the user about his weight. Parse the user input and display
// his weight in your browser. Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// var userInput = prompt("Enter your weight in kilograms");
// var weight = "";

// for (i = 0; i < userInput.length; i++) {
//   if (!isNaN(userInput[i]) || userInput[i] === ".") {
//     weight += userInput[i];
//   }
// }
// document.write("The weight of user is: " + weight + " Kilograms");
// ---------------------------------------------------------------------------------------

// Assign# 8 program that stores a random secret number from 1 to 10 in a variable.
// Ask the user to input a number between 1 and 10. If the user input equals the secret number,
// congratulate the user.

// var secNum = Math.floor(Math.random() * 10);
// console.log(secNum);
// var userInput = parseInt(prompt("Enter your guess between 1-10: "));

// if (userInput >= 0 && userInput <= 10) {
//   if (userInput === secNum) {
//     document.write("Congratulations!!! You won...");
//   } else {
//     document.write("Sorry, number not matched");
//   }
// } else {
//   alert("Number range criteria not matched..");
// }

// ---------------------------------------------------------------------------------------
