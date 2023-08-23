// Challenge 4

// Step 1: Arrays and Objects
// Array Creation
var fiveNumbers = [ 4, 5, 6, 8,9];
// Object Creation

var personalInfo = { name: "shirine", age: 27, height: 156, location:"beirut", nationality:"syria" };
// Step 2: Spread Operator
// New Array with Spread
var nextThreeNumbers = [1, 2, 3];
var fullInfo = fiveNumbers.concat( nextThreeNumbers);
console.log(fullInfo);
//  Step 3: Destructuring
// Destructuring Arrays
var firstNum = fiveNumbers[0];
var secondNum = fiveNumbers[1];
var thirdNum = fiveNumbers[2];
console.log(firstNum, secondNum, thirdNum);
// Destructuring Object
var name = personalInfo.name;
var age = personalInfo.age;
var height = personalInfo.height;
// var location = personalInfo.location;
var nationality = personalInfo.nationality;
console.log(name, age, height, nationality);

//  Bonus Step: Advanced Operations
// Nested Destructuring
var personalInfo = { first: 1, second: 2, contactInfo: { prop1: "welcome", "prop2": "contactInfo" } }
var nested = personalInfo.contactInfo.prop1;
console.log(nested);
// Rest with Destructuring
var first = fiveNumbers.slice(0,1);
var second = fiveNumbers.slice(1,2);
var restOfNumbers =[fiveNumbers.slice(2)];
console.log(restOfNumbers);
//  Merging and Overwriting with Spread
var object1 = { color: "white", text: "first" }
var object2 = { color: "blue", text: "second" }
var merge = { ...object1, ...object2 };
console.log(merge);