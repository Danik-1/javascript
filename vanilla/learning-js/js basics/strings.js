"use strict";

// Strings
let str1 = "hey";
const str2 = 'hey';
const str3 = `hey ${str1} ho ${str2}`;

const str1Length = str1.length;
const str1FirstCharacter = str1.charAt(0); // returns const
const str1lastCharacter = str1[str1.length - 1];
const substr1 = str1.slice(0, - 2); // start includes end doesn't
const substr2 = str1.slice(1); // from 1 to end

for (const char of str1) {
    console.log(char);
}

str1 = str1.toUpperCase();
str1 = str1.toLowerCase();
const indexOf = str3.indexOf("h", 3); // (substr, start index) // -1 if not found
const includes = str3.includes("h");
const startsWith = str1.startsWith("a");
const endsWith = str1.endsWith("a"); 
