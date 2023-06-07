"use strict";

// Loops
let num = 5;
while (num < 10) {
    num++;
}

do {
    num++;
} while (num < 15);

let j = 0;
firstLoop: for (; j < 10; j += 2) {
    secondLoop: while (true) {
        for (let i = 0; i < 10; ++i) {
            num++;

            if (i == 5) {
                continue;
            }
            if (i == 6) {
                continue firstLoop;
            }
            if (i == 7) {
                break;
            }
            if (i == 8) {
                break secondLoop;
            }
        }
    }
}

// Functions
function printSum(a, b) {
    console.log(a + b);
}
function getSum(a = 0, b = 0) {
    return a + b;
}

const empty = function () { return; };

const sum = (a, b) => a + b;
const descriminant = (a, b, c) => {
    return b * b - 4 * a * c;
}