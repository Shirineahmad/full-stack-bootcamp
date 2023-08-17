// step1
var age = 27;
if (age > 20) {
    check(true);
}
else {
    check(false);
    
}
function check(value) {
    if (value) {
        console.log("You can enter this room.");
    }
    else {
        console.log("You can't enter this room.");
    }
}

const expression1 = 5 > 3;
const expression2 = 10 === '10';
const expression3 = true && false;
const expression4 = !expression3;
console.log(expression1);
console.log(expression2);
console.log(expression3);
console.log(expression4);
