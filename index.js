#!/usr/bin/env node
//  ** Exercise 2 ** Personal massege
let message = "Hellow World";
console.log(message);
let myName = "Ummay";
console.log(myName);
console.log("--------------------------");
// ** Exercise 3 ** Name Case 
let personName = "Ummay";
// IN LOWER CASE
console.log("lowercase:", personName.toLowerCase());
// uppercase
console.log("uppercase:", personName.toUpperCase());
// title case
console.log("titlecase:", personName.replace(/\b\w/g, c => c.toUpperCase()));
console.log("--------------------------");
//  ** Exercise 4 **  Famous Quote
let quote = "A person who never made a mistake never tried anything new";
let author = "Albert Einstein";
console.log(`${author} once said, "${quote}"`);
console.log("--------------------------");
//  ** Exercise 5 **  Famous Quote 2
let quotes = " A person who never made a mistake never tried anything new";
let famous_person = " Albert Einstein";
message = `${famous_person} once said, ${quotes}`;
console.log(message);
console.log("--------------------------");
// ** Exercise 6 ** Stripping Names:
personName = `\n\t Ummay Kulsoom \t\n`;
console.log(personName);
let stripped = personName.trim();
console.log(stripped);
console.log("--------------------------");
// ** EXercise 7. Number Eight: 
console.log(5 + 3);
console.log(11 - 3);
console.log(4 * 2);
console.log(16 / 2);
console.log("--------------------------");
//  * * Exercise 8. create four lines 
console.log("--------------------------");
//  * * Exercise 9. Favorite Number: 
let favouriteNumber = 4;
console.log(`My favouriteNumber is ${favouriteNumber}`);
console.log("--------------------------");
//  * * Exercise 10 Adding Comments:
// my name is Ummay
// Dated: 24/02/2024
console.log('Hello world simple program');
console.log("--------------------------");
// * * Exercise 10 **
// my name is Ummay
// Dated: 24/02/2024
console.log(5 * 2);
console.log("--------------------------");
// * * Exercise 11 **
let member = [`azar`, `saqlain`, `mehmood`, `sana`, `seema`];
for (let i = 0; i < member.length; i++) {
    console.log(member[i]);
}
console.log("--------------------------");
// ** Exercise 12 **
let members = ["azar", "saqlain", "mehmood", "sana", "seema"];
let messege = 'Today is a rainy day';
for (var i = 0; i < members.length; i++) {
    console.log(messege + ' ' + members[i]); // Added a space between the message and the member
}
console.log("--------------------------");
// * * Exercise 13 **
let transportation = ['civic', 'bike', 'bus', 'suzuki jis me cow ho'];
for (let i = 0; i < transportation.length; i++) {
    console.log('I would like to own a ' + transportation[i]);
}
console.log("--------------------------");
// * * Exercise 14 **
let guestList = ["Jiya", "Hamiz", "Sarah", "Sonia"];
for (let i = 0; i < guestList.length; i++) {
    console.log("Respected Sir/Madam " + guestList[i] + ",\nWe invited you to dinner tomorrow.\n\nThank You");
}
console.log("--------------------------");
//  Exercise 15
let notPresent = "Sarah";
let newGuest = "Shrmeen";
guestList[1] = newGuest;
for (let i = 0; i < guestList.length; i++) {
    console.log("Respected Sir/Madam" + guestList[i] + ',\nwe invited you on dinner tomorrow.\nThank You\n');
}
console.log(`Ms. ${notPresent} will not coming tommorrow dinner.`);
guestList.unshift("Razi", "Zoyan", " Orhan");
for (let i = 0; i < guestList.length; i++) {
    console.log("Respected Sir/Madam" + guestList[i] + ',\nwe Invited you on dinner tomorrow. We foung big table');
}
console.log('\nUnfortunately we can not arrange big table, only two people allow.');
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log("Sorry Sir/Madam. $({removeGuest} You are not invited for dinner.");
}
for (let i = 0; i < guestList.length; i++) {
    console.log(" Respected Sir/Madam" + guestList[i] + ',\nyes you are still invited on tomorrow dinner\nThank You\n');
}
guestList.splice(0, 2);
console.log(guestList);
console.log("--------------------------");
//  ** Exercise 16 ** 
// • Print a new set of invitation messages, one for each person in your list.
guestList = ['Ali', 'Saim', 'Noor', 'Neha'];
// for (let i = 0; i < guestList.length; i++) {
//     console.log("Respected Sir/Madam " + guestList[i] + ',\nwe invited you on dinner tomorrow.\nThank You\n');
// }
notPresent = "Sarah";
newGuest = "Shrmeen";
guestList[1] = newGuest;
for (let i = 0; i < guestList.length; i++) {
    console.log("Respected Sir/Madam " + guestList[i] + ',\nwe invited you on dinner tomorrow.\nThank You\n');
}
guestList.unshift("Razi", "Zoyan", "Orhan");
for (let i = 0; i < guestList.length; i++) {
    console.log("Respected Sir/Madam " + guestList[i] + ',\nwe invited you on dinner tomorrow. We found a big table.\n');
}
//  ** Exercise 18 ** 
//  Seeing the World: Think of at least five places in the world you'd like to visit.
// .Store the locations in a array. Make sure the array is not in alphabetical order. 
// .Print your attay in its oraginal order.
let places = ["Captown", "Dehli", "Iran", "China", "Bankok"];
console.log("Original : + places");
// Print Your array in alphabetical order without modifying the actual List.
console.log("copy" + [...places].sort());
// Show that your arrays is still in its original order by printing it.
console.log("original :", places);
//  Print Your array in recerse alphabetical order without changing the order of the original list.
console.log("copy" + [...places].sort().reverse());
//  Show that your array is still in its original order by printing in again.
console.log("copy" + [...places].sort().reverse());
//  Riverse the order of your list. Print the array to show that its order has changed.
console.log("original :" + places.sort());
// Riverse the order of your list again. Print the list to show it's back to its original order.
console.log("original:" + places.sort().reverse);
// Sort your array so it's stored in alphabetical order. Print the array to show that its order has been changed.
console.log("--------------------------");
// Exercise 19
//  Dinner Guest : Working with one of the programs from Exercises 14 through 18, 
// print a massage indicating the number of people you are inviting to dinner.
console.log("--------------------------");
// Exercise 20
// Think of something you could store in a array . For example , you could make a list of mountains,
//  rivers, countries, cities, languages, or anything else you'd like.
// Write a program that creates a list containing these items.
let languages = [' English', "French", 'Urdu', 'Hindi', ' Arabic'];
console.log("list of languages:");
for (let top of languages) {
    console.log(top);
}
let mountains = [' K_2', "Nanga Parbut", 'Mount Everest', 'Mount Albres'];
console.log("list of mountains:");
for (let top of mountains) {
    console.log(top);
}
let rivers = ['Indus River', "Nile River", 'Amazon River', 'Volga River'];
console.log("list of rivers:");
for (let top of rivers) {
    console.log(top);
}
let countries = ['Pakistan', "India", 'Japan', 'China'];
console.log("list of countries:");
for (let top of countries) {
    console.log(top);
}
let cities = ['Karachi', "Multan", 'Lahore', 'Melsi'];
console.log("list of cities:");
for (let top of cities) {
    console.log(top);
}
console.log("--------------------------");
//  create twp objects
const book = {
    name: 'ESSENTIAL TYPESCRIPT',
    price: 450
};
const apple = {
    name: "Golden",
    price: 200
};
console.log(`book name: ${book.name}, price: $${book.price}`);
console.log(`apple name: ${apple.name}, price: $${apple.price}`);
console.log("--------------------------");
//  Exercise 22
//  International Error: If you haven't received an array index error in one of your 
// programs yet, try to make one happen. Change an index in one of your 
// programs to produce an index error. Make sure you correct the error before closing the program.
// ERROR
let aray = [`babr`, `Taha`, 3, 5, 8];
console.log(aray[5]);
//  CORRECTION
let array = [`babr`, `Taha`, 3, 5, 8, 'Noian'];
console.log(array[5]);
console.log(array[4]);
console.log(array[0]);
console.log(array[3]);
console.log(array[2]);
console.log(array[1]);
console.log("--------------------------");
// Exercise 23
//  Conditional Tests: 
let car = 'subaru';
// Test 1: Equality comparison (True)
console.log(" Is car == 'subaru'? I predict True.");
console.log(car === 'subaru'); //True
// Test 2: strict equality comparison (True)
console.log(" Is car == 'subaru'? I predict True.");
console.log(car === 'subaru'); // True
// Test 3:  inequality comparison (False)
console.log(" Is car != 'subaru'? I predict false.");
console.log(car !== 'subaru'); // False
// Test 4: strict inequality comparison (False)
console.log(" Is car !== 'subaru'? I predict false.");
console.log(car !== 'subaru'); // False
// Test 5: Less than comparison (False)
console.log(" Is car < 'subaru'? I predict false.");
console.log(car < 'subaru'); // False (lexicographic comperision)
// Test 6: Greater than comparison (False)
console.log(" Is car > 'subaru'? I predict false.");
console.log(car > 'subaru'); // False (lexicographic comperision)
// Test 7: Less than or equal comparison (True))
console.log(" Is car <= 'subaru'? I predict True.");
console.log(car <= 'subaru'); // True
// Test 8: Greater than or equal comparison (True))
console.log(" Is car >= 'subaru'? I predict True.");
console.log(car >= 'subaru'); // True
// Test 9: Checking Truthiness (True))
console.log(" Is car ? I predict True.");
console.log(car); // True (non empty string is truthy)
// Test 9: Checking falsiness (False))
console.log(" Is !car ? I predict False.");
console.log(!car); // False (negation of a truthy value)
console.log("--------------------------");
// Exercise 24
// More Conditional Test: You don't have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests.
// Have at least one True and one False result for each of the following:
// Tests for equality and inequality with strings 
// Tests using the lower case function
// Numerical tests involving equlity and inequality, greater than and less than, greater than or equal
//  **String Tests
// Test 1 : Equality (True)
console.log(" Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); //True (case - insensitive)
// Test 2  : Stric equality (False)
console.log(" Is car === 'subaru'? I predict False.");
console.log(car === 'subaru'); //False (case - sensitive
// Test 3 : Inequality (True)
console.log(" Is car != 'Toyota'? I predict True.");
console.log(car != 'Toyota'); //True
// Test 4 : Inequality (False)
console.log(" Is car !== 'Toyota'? I predict False.");
console.log(car !== 'Toyota'); // False (case - sensitive)
//  ** Lowercase Function Tests **
// Test 5: Lowercase conversion (True)
console.log(" Is car .toLowerCase() =='subaru'? I predict True.");
console.log(car.toLowerCase() == 'Toyota'); //True (Converted to Lowercase)
// Test 6: Lowercase conversion (False)
console.log(" Is car === car.toLowerCase()? I predict False.");
console.log(car === car.toLowerCase()); //False (Origional Value remain uppercase)
// ** Numerical Tests**
// Test 7 Equality (True)
let age = 25;
console.log("Is age == 25? I predict True");
console.log(age == 25); // True
// Test 8 Inequality (True)
console.log("Is age == 30? I predict True");
console.log(age != 30); // False
// Test 9  Greater then (False)
console.log("Is age > 30? I predict False");
console.log(age > 30); // False
// Test 10 Less then OR Equal (True)
console.log("Is age <= 25? I predict True");
console.log(age <= 30); // True
// ** Logical Operators **
//  Test 11: AND (True)
console.log(" is age> 20 && age <30? I predict True.");
console.log(age > 20 && age < 30); //True (both conditions met)
//  Test 12: OR (False)
console.log(" is age> 30 || age < 18 ? I predict False.");
console.log(age > 20 && age < 30); //True (both conditions met)
// ** Array Tests **
let numbers = [1, 2, 3, 4,];
//  Test 13: In array (True)
console.log(" is 3 in numbers? I predict True.");
console.log(3 in numbers); //True (Check for index existence)
//  Test 14: Not In array (False)
console.log(" is 5 not in numbers? I predict True.");
console.log(5 in numbers); //True (negation of "in  Operators)
console.log("--------------------------");
// ** Exercise 25
//  Create a variable called alien color
let alienColor = "green";
// * Write an if statement to test whether the alien's color is green. If it
// print a messege that the player just earned 5 points.
if (alienColor == "green") {
    console.log("The player just earned 5 points.");
}
//  * Write one version for this program that passes the if test and another that fails.
// (The version that fail will have no output.)
alienColor = "Yellow";
if (alienColor == "green") {
    console.log(" The player just earned 5 points.");
}
console.log("--------------------------");
//  ** Exercise # 26
//  Alien Colors #2: Choose a color for an alien as you did in exercise 25, and
//  write an if - else chain .
alienColor = "green";
// If the alien's color is green, print a statement that
// the player just earned 5 points for shooting the alien.
if (alienColor == "green") {
    console.log("The player just earned 5 points for shooting the alien.");
}
// If the alien's color isn't green, print a statement that player just earned 10 points.
else {
    console.log("The player just earned 10 points.");
}
// Write one Version of this program that runs the if block and another that runs the else block.
alienColor = "red";
if (alienColor == "green") {
    console.log("The player just earned 5 points for shooting the alien.");
}
console.log("--------------------------");
// ** Exercise # 27 **
// Alien colors #3: Turn your if-else chain fron Exercise 25-26 into an if-else chain.
//  Write three versions of this program, making sure each message is printed for 
// the appropriate color alien.
//      ** Version # 1 **
alienColor = "green";
//  If the alien is green , print a message thet the player earned 5 points,
if (alienColor == "green") {
    console.log("The player just earned 5 points.");
}
//  If the alien is yellow, print a message that the player 10 points
else if (alienColor == " Yellow") {
    console.log("the player just earned 10 points.");
}
//  If the alien is red, print a message that the player earned 15 points.
else if (alienColor == "red") {
    console.log("The player just earned 15 points.");
}
else {
    console.log("[please select right color");
}
//      ** Version # 2 **
alienColor = "red";
if (alienColor == "green") {
    console.log("The player just earned 5 points.");
}
//  If the alien is yellow, print a message that the player 10 points
else if (alienColor == " Yellow") {
    console.log("the player just earned 10 points.");
}
//  If the alien is red, print a message that the player earned 15 points.
else if (alienColor == "red") {
    console.log("The player just earned 15 points.");
}
else {
    console.log("[please select right color");
}
//      ** Version # 3 **
alienColor = "Yellow";
if (alienColor == "green") {
    console.log("The player just earned 5 points.");
}
//  If the alien is yellow, print a message that the player 10 points
else if (alienColor == " Yellow") {
    console.log("the player just earned 10 points.");
}
//  If the alien is red, print a message that the player earned 15 points.
else if (alienColor == "red") {
    console.log("The player just earned 15 points.");
}
else {
    console.log("[please select right color");
}
console.log("--------------------------");
//  **  Exercise 28 **
//  Stage of life: Write an if-else chain that determines a person's stage of life. Set a 
// value for the variable age, and then:
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "age",
        type: "number",
        message: "select an age",
    }
]);
// * If the person is less than 2 years old, print a message that the person is a baby.
if (answers.age < 2) {
    console.log("The person is a baby");
}
// * If the person is at least2 years old but less then 4, prinr a message that the person is a toddler.
else if (answers.age >= 2 && answers.age < 4) {
    console.log("The person is a toddler");
}
// * If the person is at least 4 years old but less then 13, print a message that the person is a kid.
else if (answers.age >= 4 && answers.age < 13) {
    console.log("The person is a kid");
}
// * If the person is atleast 13 years old but less then 20, print a message that the person is a teenager.
else if (answers.age >= 13 && answers.age < 20) {
    console.log("The person is teenager");
}
// * If the person is atleast 20 years old but less then 65, print a message that the person is an adult.
else if (answers.age >= 20 && answers.age < 65) {
    console.log("The person is an adult");
}
// * If the person is age 65 years older, print a message that the person is an elder.
else {
    console.log("The person is an elder");
}
console.log("--------------------------");
//  ** Exercise 29 **
//  Favorite Fruit: Make a array of your favorite fruits, and then series
//  of independent if statements that check for certain fruits in your array.
// * Make an array of your three favorite fruits and call it favorite fruits.
let favoriteFruits = ["mango", "peach", "banana"];
//  * Write five if statements. Each should check whether a certain kind of fruit is in your array.
// * If the fruit is in your array, the if block should print a statement, such as you really like bananas!
if (favoriteFruits.includes("mango")) {
    console.log("I really like mango");
}
if (favoriteFruits.includes("peach")) {
    console.log("I really like peach");
}
if (favoriteFruits.includes("banana")) {
    console.log("I really like banana");
}
if (favoriteFruits.includes("apple")) {
    console.log("I really like apple");
}
if (favoriteFruits.includes("orange")) {
    console.log("I really like orange");
}
console.log("--------------------------");
//  ** Execrcise 30
// ** Hello Admin: Make an array of five or more usernames, including the name "admin".Imagine you are
// writing code that will print a greeting to each user after they log in to website. 
let users = ["Sara", "Beena", "Jiya", "Sana", "admin"];
// Loop through the array , and print a greeting to each user:
// If the username is "admin", print a special greeting, such as Hello admin, would you
// like to see a status report?
// Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
for (let user of users) {
    if (user === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${user}, thank you for logging in again.`);
    }
}
console.log("--------------------------");
//  ** Exercise 31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
users = [] = ["Sara", "Beena", "Jiya", "Sana", "admin"];
// If the list is empty, print the message we need to find some users!
if (users.length === 0) {
    console.log(" We need to find some users!");
}
// Remove all of the username from your array, and make sure the correct message is printed
else {
    users = [];
    console.log("All users have been removed" + users.length);
}
console.log("--------------------------");
// ** Exercise 32
// Checking Username: Do the following to create a program that simulates
// how websites ensure that everyone has a unique username.
// Make another list of five usernames called new users.Make sure one or two of the new usernames are
// also in the current users list.
//  Loop through the new users list to see if each new username as already been used.
// If it has, print a message that the prson will need to enter a new username.If a username has not been
// used, print a message saying that the username is available.
//  Make sure yout comparision is case insensitive. If "John "has been used "John "should not be eccpectes.
let currentUsers = ["Ali", "Sana", " Nina", "Irsa", "admin"];
let newUsers = [] = ["Hina", "Naima", " Sania", "Irma", "admin"];
newUsers.forEach((newUser) => {
    if (currentUsers.some((currentUsers) => currentUsers.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUsers} will need to enter a newUsername`);
    }
    else {
        console.log(`${newUser} is available.`);
    }
});
console.log("--------------------------");
// ** Exercise 33 **
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd .
// Most ordinal numbers end in the . except 1,2 and 3.
// * Store the numbers 1 through 9 in a array.
let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// * use an if - else chain inside the loop to print the proper ordinal ending for each number.
// You output should read "1st 2nd 3rd 4ht 5th 6ht 7th 8th 9th", and each result should be on a seperate line.
// *Loop through the array.
for (let i = 0; i < myNumbers.length; i++) {
    // now we use conditions
    if (myNumbers[i] == 1) {
        console.log(` ${myNumbers[i]}st`);
    }
    else if (myNumbers[i] == 2) {
        console.log(` ${myNumbers[i]}nd`);
    }
    else if (myNumbers[i] == 3) {
        console.log(` ${myNumbers[i]}rd`);
    }
    else if (myNumbers[i] >= 4 && myNumbers[i] <= 9) {
        console.log(` ${myNumbers[i]}th`);
    }
}
console.log("--------------------------");
// ** Exercise 34
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, 
let myPizza = ["chicken tikka pizza", " fajita pizza", "cheese pizza "];
// loop to print the name of each pizza.
for (let i = 0; i < myPizza.length; i++) {
    console.log(myPizza[i]);
}
// • Modify your for loop to print a sentence using the name of the pizza instead of printing 
// containing a simple statement like I like pepperoni pizza.
for (let i = 0; i < myPizza.length; i++) {
    console.log(`I like to eat ${myPizza[i]}`);
    //you like and then an additional sentence,such as I really love pizza!
    console.log(`\nI really love pizza. I could eat it every day!`);
}
console.log("--------------------------");
//  ** Exercise 35
// Animals: Think of at least three different animals that have a common characteristic. 
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal
let Animals = ["Dog", "Cat", "Rabbit"];
//  • Modify your program to print a statement about each animal, such as A dog would make a great pet.
//  • Add a line at the end of your program stating what these animals have in common.
//   You could print a sentence such as Any of these animals would make a great pet!
Animals.forEach(animals => {
    console.log(`A. ${animals} would make a great pet!`);
});
console.log("----------------------------");
//  ** Exercise 36
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that
//  should be printed on the shirt. The function should print a sentence summarizing 
// the size of the shirt and the message printed on it. Call the function.
function makeShirt(size, message) {
    console.log(`making a ${size}t-shirt with the message "${message}" printed on it.`);
}
makeShirt("medium", "Code is Life");
console.log("----------------------------");
//  ** Exercise 37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message
//  that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, 
// and a shirt of any size with a different message.
function makeShirts(size = "large", message = "I love Typescript") {
    console.log(`making a ${size} t-shirt with the message "${message}" printed on it.`);
}
makeShirts(); // Default large and message
makeShirts("medium"); // Default message, medium size
makeShirts("small", "Dive into Coding"); //Custom message, small size
console.log("----------------------------");
//  ** Exercise 38
// Cities: Write a function called describe_city() that accepts the name of a city and its country. 
// The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter
// for the country a default value. Call your function for three different cities, at least one of 
// which is not in the default country.
function describe_city(nameOFCity, country = "Pakistan") {
    return `${nameOFCity} is in ${country}`;
}
;
//  3 Cities
let city1 = describe_city("Karachi", "Pakistan");
let city2 = describe_city("Hong Kong", "China");
let city3 = describe_city("Tehran", "Iran");
let city4 = describe_city("Dehli", "India");
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
console.log("----------------------------");
//  ** Exercse 39
// City Names: Write a function called city_country() that takes in the name of a city and its country.
//  The function should return a string formatted like this: "Lahore, Pakistan"
function city_country(city, country) {
    return `${city}, ${country}`;
    console.log(`"${city} ${country}"`);
}
;
city_country("Karachi", "Pakistan");
let myCities = city_country("Karachi", "Pakistan");
console.log(myCities);
// Call your function with at least three city-country pairs, and print the value that’s returned.
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Tehran", "Iran"));
console.log(city_country("Istanbol", "Turkey"));
console.log("----------------------------");
// ** Exercise 40
// Album: Write a function called make_album() that builds a Object describing a music album.
// The function should take in an artist name and an album title, and it should return a Object 
// containing these two pieces of information. Use the function to make three dictionaries representing
// different albums. Print each return value to show that Objects are storing the album information correctly.
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
// If the calling line includes a value for the number of tracks, add that value to the album’s Object.
// Make at least one new function call that includes the number of tracks on an album.
function myAlbum(artistName, albumTitle) {
    return { albumTitle, artistName, };
}
let album1 = myAlbum("Michael Jackson", "Thriller");
let album2 = myAlbum("The Beatles", "Abbey Road");
let album3 = myAlbum("Pink Floyd", "The Dark Side of the Moon");
console.log(album1);
console.log(album2);
console.log(album3);
function myAlbum1(artistName, albumTitle, numberOfTracks) {
    return { albumTitle, artistName, numberOfTracks };
}
let album4 = myAlbum1("AC/DC", "Back in Black", 30);
let album5 = myAlbum1("Fleetwood Mac", "Rumours", 50);
let album6 = myAlbum1("Junoon", "Junoon", 40);
console.log(album4);
console.log(album5);
console.log(album6);
console.log("----------------------------");
// Exercise 41
// Magicians: Make an array of magician’s names.
// Pass the array to a function called show_magicians(), which prints the name of each
// magician in the array.
let magician = ["Merlin", "Harry Houdini", "David Copperfield", "Hans Klok"];
function show_magician(magician) {
    magician.forEach(magician => {
        console.log(magician);
    });
}
show_magician(magician);
console.log("----------------------------");
// Exercise 42
// Great Magicians: Start with a copy of your program from Exercise 41.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to see that
// the list has actually been modified.
let magicians_42 = ['Morgan the Marvelous', 'Victor Vaudeville', 'Phoenix the Phenomenon'];
function make_great_42(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' The Great'; // Added space before 'The Great'
    }
}
function show_magicians_42(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
make_great_42(magicians_42);
show_magicians_42(magicians_42);
console.log("----------------------------");
// Exercise 43
// Unchanged Magicians: Start with your work from Exercise 40.
// Call the function make_great() with a copy of the array of magicians’ names.
// Because the original array will be unchanged, return the new array and store it
// in a separate array. Call show_magicians() with each array to show that
// you have one array of the original names and one array with the Great added to
// each magician’s name.
let magicians_43 = ['Morgan the Marvelous', 'Victor Vaudeville', 'Phoenix the Phenomenon'];
function make_great_43(magicians) {
    let greatMagicians = [];
    magicians.forEach(magician => {
        greatMagicians.push(`${magician} The Great`);
    });
    return greatMagicians;
}
let greatMagicians_43 = make_great_43(magicians_43.slice()); // Creates a new modified array
console.log("Original magicians:");
console.log(magicians_43.join('\n')); // Log the magicians array directly
console.log("Great magicians:");
console.log(greatMagicians_43.join('\n')); // Log the greatMagicians array directly
console.log("----------------------------");
//  ** Exercise 44
// Sandwiches: Write a function that accepts a array of items a person wants
//  on a sandwich. The function should have one parameter that collects as 
// many items as the function call provides, and it should print a summary of
//  the sandwich that is being ordered. Call the function three times,
//  using a different number of arguments each time.
function make_sandwitch(...items) {
    console.log(`Making a sandwitch: ${items.join(',')}`);
}
make_sandwitch("cheese", "boiled egg", "mayo");
make_sandwitch("chicken", "chicken Spread", "lettuce");
make_sandwitch("avacado", "sprouts", "mayo", "mustard");
//  ** Exercise 45
// Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments.
//  Call the function with the required information and two other
//  name-value pairs, such as a color or an optional feature.
//  Print the Object that’s returned to make sure 
// all the information was stored correctly.
function make_car(manufacturer, model, ...options) {
    let car = { manufacturer, model }; // Added type annotation for car
    options.forEach(([key, value]) => car[key] = value);
    return car;
}
console.log(make_car("Toyota", "Corolla", ["color", "Red"], ["Year", 2024]));
console.log(make_car("Fortune", "Ferrari", ["color", "Blue"], ["Sunroof", true]));
