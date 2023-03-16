"use strict";

// Objects
const home = "house";
const isMarried = true;
const person = {
    name: "Sherlock",
    age: 20,
    printAge: () => console.log(this.name), // this is the main object
    adress: {
        street: "Backer Street",
        [home]: "221b", // [var] -> varValue -> toString
    },
    isMarried, // varName: varValue
}

const personsAge = person.age;
const personsStreet = person.adress[home]; // variable could be used as key only with []

person.age++; // property of const object could be changed
person["lastName"] = "Holmes"; // adding a new property

let personsHome = person?.adress?.house; // if (person.adress) -> if (person.adress.house) -> person.adress.house
                                         // else -> undefined
const isHomeless = "adress" in person;

let person2 = person; // object isn't coppied
let person3 = Object.assign({}, person); // copy // (to, what to copy)

function InitUser(name, age) { // constructr, named with capital letter
    // this = {}; // implicit creation of empty object
    this.name = name;
    this.age = age;
    // return this; // implicit return
}

let joe = new InitUser("Joe", 33);