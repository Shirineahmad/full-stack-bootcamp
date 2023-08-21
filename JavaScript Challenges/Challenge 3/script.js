// step 1 basic function
function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log("addNumbers",addNumbers(3,4));

// Function with Conditional Statements
function findMax(num1, num2) {
    if (num1 > num2) {
        return(num1);
    }
     else if (num2 > num1) {
        return (num2);
    }
    else {
        return ("both are equal");
        
    }
}
console.log("findMax 7 and 8",findMax(7, 8));
// Nested Function
function compute(num1, num2, operation) {
    function multiply(num1, num2) {
        return (num1 * num2)

    }
    function divide(num1, num2) {
        return (num1 / num2)
    }
    function substract(num1, num2) {
        return (num1 - num2)
    }
    function addition(num1, num2) {
        return (num1 + num2)

    }
    if (operation ==="*") { return multiply(num1,num2)}
    else if (operation === "/") {  return divide(num1,num2)}
    else if (operation === "+") { return addition(num1,num2) }
    else { return substract(num1,num2)}
    
}
console.log("compute 2*4", compute(2, 4,"*"));

// "Challenge 3 - Done with step 1"
// Arrow Function
var globalVar = "global";
const squareNumber = () => {
    var localVar;
}
// localVar = local;
// console.log(localVar);
// Step 3: Loops
// For Loop
for (let i = 1; i <= 10; i++){
    console.log("for loop",i);
}
// While Loop
var numbers = 10;
while (numbers >= 1) {
    console.log("while",numbers);
    numbers--;
    
}
//  Do-While Loop with Conditionals
var numbers2 = 1;
do {
    if (numbers2 % 2 == 0) {
        console.log("do while",numbers2)
    }
    numbers2++;
    
} while (" do while",numbers2<=10);
// Advanced Loop Challenge
var fruits = ["avocado", "passion", "banana", "mango", "orange", "kiwi"];
for (let i = 0; i < fruits.length; i++){
    if (fruits[i].length > 5) {
        console.log(fruits[i]);
    }
}