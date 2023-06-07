"use strict";

//Variable scopes
var num1 = 1; //global
let num2 = 2; // local
const num3 = 3; //local unchangable
// num4 = 4 // could not be used in strict mode

//Basic data types
const number = 1;
const bigInteger = 12345678901234567890n;
const string = "string" + 'string' + `string ${number}`;
const boolean = true;
const array = [1, 2, 3, 4, 5];
const object = { name: "name", age: 1 };
function name(params) {
    return params;
}
const nullValue = null;
const undefinedValue = undefined;

// JS is not strict typed language
let variable = 1;
variable = true;
variable = "string";
console.log(typeof variable);