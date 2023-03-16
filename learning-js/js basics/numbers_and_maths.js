"use strict";

// numbers
const num4 = 1.2e6 + 1e-6;
const num5 = 0b11 + 0o77 + 0xff; // 0b - binary // 0o - octal // 0x - hexadecimal
const num6 = +num2.toString(2) + +num2.toString(16); // (base) // unary + converts to number

const epsilon = Number.EPSILON; // default little number
                                // used to work with inaccurate calculations
const nan = "hey" - 1; // NaN - not a number // unique value has type number
const inf = - 1 / 0 + 1 / 0; // -Inf + Inf -> NaN
const isNan = isNaN(num4); // true if NaN
const isNormalNumber = isFinite(num4); // false if NaN or +-Inf

const floatFromString = parseFloat("150.28px") // number before letters
const intFromString = parseInt("150.28px") // number before letters -> to int

//Math operators
num2 += (num1 + num3);
num2 -= (num1 - num3);
num2 %= (num1 % num3);
num2 *= (num1 * num3);
num2 /= (num1 / num3);
num1++;
++num1;
num2--;
--num2;

// Math functions
Math.abs(-1); //absolute value
Math.ceil(1.1); //round up
Math.floor(1.9); //round down
Math.max(1, 2, 3, 4, 5); //max value
Math.min(1, 2, 3, 4, 5); //min value
Math.pow(2, 3); //power
Math.random() //random number
Math.round(1.5); //round
Math.sqrt(4); //square root
num2.toFixed(3); // 3 digits after . // returns string