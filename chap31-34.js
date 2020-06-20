// Assign# 1 program that displays current date and time in your browser.

// var currdate = new Date();
// document.write(currdate);
// ---------------------------------------------------------------------------------------

// Assign# 2 program that alerts the current month in words For example December..

// var currdate = new Date().getMonth();
// var m_names = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// document.write("Current Month is: " + m_names[currdate]);
// ---------------------------------------------------------------------------------------

// Assign# 3 program that alerts the first 3 letters of the current day, for example if today
//  is Sunday then alert will show Sun.

// var currdate = new Date().getDay();
// console.log(currdate);
// var d_names = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// document.write("Today is: " + d_names[currdate]);
// ---------------------------------------------------------------------------------------

// Assign# 4 program that displays a message “It’s Fun day” if its Saturday or Sunday today.

// var currdate = new Date().getDay();
// console.log(currdate);
// var d_names = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// if (d_names[currdate] === "Sat" || d_names[currdate] === "Sun") {
//   document.write("It’s Fun day");
// } else {
//   document.write("It’s Working day :( ");
// }
// ---------------------------------------------------------------------------------------

// Assign# 5 program that shows the message “First fifteen days of the month” if the date
// is less than 16th of the month else shows “Last days of the month”.

// var currdate = new Date().getDate();
// console.log(currdate);

// if (currdate < 16) {
//   document.write("First Fifteen days of Month.");
// } else {
//   document.write("Last days of month.");
// }
// ---------------------------------------------------------------------------------------

// Assign# 6 program that determines the minutes since midnight, Jan. 1, 1970 and assigns
// it to a variable that hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// var date1 = new Date("01/01/1970");
// var date2 = new Date();
// console.log(date1);
// console.log(date2);
// var diffMs = date2.getTime() - date1.getTime();
// var diff = Math.round(diffMs / 60000);

// document.write("Minutes pass since 1st Jan 1970 are: " + diff);
// ---------------------------------------------------------------------------------------

// Assign# 7 program that tests whether it's before noon and alert “Its AM” else “its PM”.

// var date1 = new Date();
// var h = date1.getHours();
// m = date1.getMinutes();
// var time = h > 12 ? "PM" : "AM";

// document.write("Its currently: " + time);
// ---------------------------------------------------------------------------------------

// Assign# 8 program that creates a Date object for the last day of the last month of 2020
// and assigns it to variable named laterDate.

// var laterDate = new Date("December 31 2020");

// document.write("Later Date: " + laterDate);
// ---------------------------------------------------------------------------------------

// Assign# 9 program a date object of the starting date of this Ramadan and alert the number
// of days past since 1st Ramadan? Note: 1st Ramadan was on April 23rd, 2020

// var date1 = new Date("April 23 2020");
// var date2 = new Date();
// var perDay = 1000 * 60 * 60 * 24;

// var diffMs = Math.abs(date1 - date2);
// var numDays = Math.round(diffMs / perDay);

// document.write("Days Pass Since 1st Ramaza April 23rd 2020:  " + numDays);
// ---------------------------------------------------------------------------------------

// Assign# 10 program that displays in your browser the seconds that elapsed between the
// reference date and the beginning of 2015.

// var date1 = new Date("January 1 2015");
// var date2 = new Date("December 5 2015");

// var diffMs = Math.abs(date1 - date2);
// var numDaysSec = Math.round(diffMs * 1000);

// document.write("Seconds Pass Since: " + date1 + " are:" + numDaysSec);
// ---------------------------------------------------------------------------------------

// Assign# 11 program to create Date object for the current date and time. Extract the hours,
// reset the date object an hour ahead and finally display the date object in your browser.

// var date1 = new Date();
// document.write("Date was: " + date1 + "<br>");
// var date2 = new Date(date1.setHours(date1.getHours() + 2));
// document.write("After 2 hours: " + date2);
// ---------------------------------------------------------------------------------------

// Assign# 12 program that creates a date object and show the date in an alert box that is
// reset to 100 years back?

// var date1 = new Date();
// document.write("Current Date is: " + date1 + "<br>");
// var date2 = new Date(date1.setMonth(date1.getMonth() - 12 * 100));
// document.write("100 years back: " + date2);
// ---------------------------------------------------------------------------------------

// Assign# 13 program to ask the user about his age. Calculate and show his birth year
// in your browser.
// var date1 = new Date();
// var age = parseInt(prompt("Enter your age: "));
// document.write("Your age is: " + age + "<br>");
// var date2 = new Date(date1.setMonth(date1.getMonth() - 12 * age));
// document.write("Your year of birth is: " + date2.getYear());
// ---------------------------------------------------------------------------------------

// Assign# 14 program to generate your K-Electric bill in your browser. All the amounts should
// be rounded off to 2 decimal places. Display the following fields:
// a. Customer Name b. Current Month c. Number of units d. Charges per unit e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge g. Gross Amount Payable (after Due Date) Where, Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge
// var custName = "Ahmed Hashim";
// var billMonth = "June-2020";
// var numUnits = 400;
// var perUnitCh = 16;
// var latePayment = 350;

// document.write("<h1>K-Electric Bill</h1>");

// document.write("Customer Name: " + custName + "<br>");
// document.write("Billing Month: " + billMonth + "<br>");
// document.write("Number of Units: " + numUnits + "<br>");
// document.write("Charges Per Unit: " + perUnitCh + "<br>");

// document.write("<h4>Bill Amounts</h4>");
// document.write(
//   "Net Amount Payable(within due date): " + numUnits * perUnitCh + "<br>"
// );

// document.write("Late Payment Surcharge: " + latePayment + "<br>");
// var grossAmount = numUnits * perUnitCh + latePayment;
// document.write(
//   "Gross Amount Payable (after Due Date): " + grossAmount + "<br>"
// );
// ---------------------------------------------------------------------------------------
