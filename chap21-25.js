// -------------------------------
// Chapter 21-25 Assignments    ||
// -------------------------------

// Assign#1 program that takes two user inputs for first and last name using prompt
// and merge them in a new variable titled fullName. Greet the user using his full name.

// var firstName = prompt("Please enter First Name: ");
// var lastName = prompt("Please enter Last Name: ");
// var fullName = firstName + " " + lastName;

// alert("Welcome to Saylani Portal " + fullName);
// ---------------------------------------------------------------------------------------

// Assign# 2 program to take a user input about his favorite mobile phone model.
// Find and display the length of user input in your browser

// var favMob = prompt("Please enter your favorite mobile model: ");
// alert(
//   "My favorite phone is: " +
//     favMob +
//     "\r\n" +
//     "Length of String is: " +
//     favMob.length
// );
// ---------------------------------------------------------------------------------------

// Assign# 3 program to find the index of letter “n” in the word “Pakistani”
// and display the result in your browser .

// var word = "Pakistani";
// alert("String: " + word + "\r\n" + "Index of 'n': " + word.indexOf("n"));

// ---------------------------------------------------------------------------------------

// Assign# 4 program to find the last index of letter “l” in the word “Hello World”
// and display the result in your browser.
// var word = "Hello World";
// alert(
//   "String: " + word + "\r\n" + "Last Index of 'l': " + word.lastIndexOf("l")
// );
// ---------------------------------------------------------------------------------------

// Assign# 5 program to find the character at 3rd index in the word “Pakistani”
// and display the result in your browser.
// var word = "Pakistani";
// alert("String: " + word + "\r\n" + "String at 3rd Index " + word[3]);
// ---------------------------------------------------------------------------------------

// Assign# 6 Repeat Q1 using string concat() method.
// var firstName = prompt("Please enter First Name: ");
// var lastName = prompt("Please enter Last Name: ");
// var fullName = firstName.concat(lastName);

// alert("Welcome to Saylani Portal " + fullName);
// ---------------------------------------------------------------------------------------

// Assign# 7 program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display
// the result in your browser.

// var cityName = "Hyderabad";
// var cityName2 = cityName.replace("Hyder", "Islam");

// alert("City: " + cityName + "\r\n" + "After Replacement: " + cityName2);
// ---------------------------------------------------------------------------------------

// Assign# 8 program to replace all occurrences of “and” in the string with “&” and display
// the result in your browser.

// var message =
//   "Ali and Sami are best friends. They play cricket and football together.";
// var message2 = message.replaceAll("and", "&");

// alert(
//   "Original Message: " +
//     message +
//     "\r\n" +
//     "After Replacement of All: " +
//     message2
// );
// ---------------------------------------------------------------------------------------

// Assign# 9 program that converts a string “472” to a number 472. Display the values &
// types in your browser.

// var str = "472";
// var num = parseInt(str);

// alert(
//   "String: " +
//     str +
//     "\r\n" +
//     "Type: " +
//     typeof str +
//     "\r\n" +
//     "Conversion to Number: " +
//     num +
//     "\r\n" +
//     "Type: " +
//     typeof num
// );
// ---------------------------------------------------------------------------------------

// Assign# 10 program that takes user input. Convert and show the input in capital letters.

// var str = "peanuts";

// alert(
//   "Original String: " +
//     str +
//     "\r\n" +
//     "Conversion to Upper: " +
//     str.toUpperCase()
// );
// ---------------------------------------------------------------------------------------

// Assign# 11 program that takes user input. Convert and show the input in title case.

// var str = "javascript";
// var str2 = str[0].toUpperCase() + str.slice(1, str.length);

// alert("Original String: " + str + "\r\n" + "Conversion to Titlecase: " + str2);
// ---------------------------------------------------------------------------------------

// Assign# 12 program that converts the variable num to string.

// var num = 35.36;
// var str2 = num.toString().replace(".", "");

// alert("Original String: " + num + "\r\n" + "Conversion to Titlecase: " + str2);
// ---------------------------------------------------------------------------------------

// Assign# 13 program to take user input and store username in a variable. If the username
// contains any special symbol among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// var userName = prompt("Enter user name: ");
// var n = userName.search("@");
// var n2 = userName.search("!");
// var n3 = userName.search(".");
// var n4 = userName.search(",");

// if (n >= 1 || n2 >= 1 || n3 >= 1 || n4 >= 1) {
//   alert("Invalid Username, please enter correct username.");
// } else {
//   alert("Username accepted, welcome to Saylani Portal");
// }

// ---------------------------------------------------------------------------------------

// Assign# 14 program to enable “search by user input” in an array. After searching,
// prompt the user whether the given item is found in the list or not, search insensitive

// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userSearch = prompt("Welcome to bakery what do you want today: ");
// var a = arr.indexOf(userSearch.toLowerCase());
// console.log(a);
// if (a >= 0) {
//   alert(userSearch + " is available at index " + a + " in our bakery.");
// } else {
//   alert("The search item is not found.");
// }

// ---------------------------------------------------------------------------------------

// Assign# 15 program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements, prompt the user to enter a valid password.

// var userPass = prompt("Please enter password: ");

// // Check for Illegal characters
// var n = userPass.search("@");
// var n2 = userPass.search("!");
// var n3 = userPass.search(".");
// var n4 = userPass.search(",");

// // Check for 1st character not number
// var num = userPass[0];
// // console.log(num);

// var len = userPass.length;

// if (n >= 1 || n2 >= 1 || n3 >= 1 || n4 >= 1) {
//   alert("Invalid password, password cannot contain illegal characters.");
// } else if (!isNaN(userPass.charAt(0))) {
//   console.log(num);
//   alert("Invalid password, 1st letter cannot be a number.");
// } else if (len < 6) {
//   alert("Invalid password, Length cannot be less then 6 characters.");
// } else {
//   alert("Password accepted. Welcome to Saylani Portal");
// }

// ---------------------------------------------------------------------------------------

// Assign# 16 program to convert the following string to an array using string split method.

// var str = "University of Karachi";
// var arr = str.split(" ");

// console.log(arr);

// for (var i = 0; i < arr.length; i++) {
//   for (var j = 0; j < arr.length; j++) {
//     document.write(arr[j]);
//   }
// }
// ---------------------------------------------------------------------------------------

// Assign# 17 program to display the last character of a user input.

// var str = prompt("Enter Input");
// var lastIndex = str.length;
// var lastChar = str[lastIndex - 1];

// alert("User Input: " + str + "\r\n" + "Last Character: " + lastChar);

// ---------------------------------------------------------------------------------------

// Assign# 18 program to count occurance of word.

var str = "The quick brown fox jumps over the lazy dog";
var word = "the";
var arr = str.toUpperCase().split(" ");
var count = 0;

for (var i = 0; i <= arr.length; i++) {
  if (arr[i] === word.toUpperCase()) {
    count = count + 1;
  }
}

alert("Text: " + str + "\r\n" + "Occurance of word: " + count);

// ---------------------------------------------------------------------------------------
