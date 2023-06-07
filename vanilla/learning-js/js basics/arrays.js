"use strict";

// Arrays
const emptyArr = new Array();
const arr1 = [1, 2, "hello", 6, 9];
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

const arr1Length = arr1.length;
arr1.length = 2; // removes elements after 1
arr1[0] = 2;
arr1[8] = true; // assigning new element // between 4 and 8 elements are empty

 // const arrays could be changed with methods like that
emptyArr.push(1, 2, 3); // adds to the end
emptyArr.shift(); // deletes first element
emptyArr.pop(); //deletes last element
emptyArr.unshift(1, 2, 3); // adds to the beginning of the array
delete emptyArr[0] // element becomes empty

const removedElements = emptyArr.splice(1, 3) // start includes end doesn't
                                              // changes arr
emptyArr.splice(1, 3, "new"); // replaces with new elements
emptyArr.splice(1, 0, "new"); // if second index is 0 new adds after first index

const newArr1 = emptyArr.slice(1, 5); // creates new array with emptyArr elements from 1 to 5
const newArr2 = emptyArr.slice(); // copies entire array

const index1 = arr1.indexOf("hello", 2); // index of first "hello" element starting from 2
const isIn = arr1.includes("hello", 2); // true if there is "hello" after 2 element

const find = arr1.find(item => item < 4); // returns first element with function returns true
const findIndex = arr1.findIndex(item => item < 4); // retruns index of this element
const filter = arr1.filter(item => item < 4); // retruns arrat with every element < 4

const sortedArr = arr1.sort(); // sorts as strings
const reversedArr = arr1.reverse(); // sorts as strings
const sortedNumbers = arr1.sort((a, b) => a - b); // positive to swap, negative to do nothing

const map = arr1.map((item) => item + 1); // rewrites every element with function return
const forEach = arr1.forEach((item) => console.log(item)); // does the function for each element
const createString = arr1.reduce((previousValue, item) => `${previousValue} ${item}`, 0);

const isArr = Array.isArray(arr1);
