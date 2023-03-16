"use strict";

// Logical operator
let condition = (1 <= 2) && (3 >= 1);
condition = (1 < 2) || (3 > 1);
condition = !(1 < 2) ^ (3 > 1);
condition = (1 == '1') && (1 != '2'); // with cast
condition = (1 === '1') && (1 !== '2'); // without cast

// Conditional operators
const age = 30;
if (18 < age < 65) {
    console.log("You are old enough");
} else if (age > 65) {
    console.log("You are too old");
} else {
    console.log("You are too young");
}

const hungry = true;
const action = hungry ? "eat" : "do not eat";

const weather = "sunny";
switch (weather) {
    case "sunny":
        console.log("wear sunglasses");
        break;
    case "rainy":
        console.log("bring umbrella");
        break;
    default:
        console.log("wear jacket");
}
