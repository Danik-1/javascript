// document is the main DOM object
// every other element is document's child
const wholeHtml = document.documentElement; // gets the whole html
const head = document.head;
const body = document.body;

// Every child
const firstBodyChild = body.firstChild;
const lastBodyChild = body.lastChild;

const allChildren = body.childNodes; // returns collection with all body's children
const hasChildren = body.hasChildNodes;

const previous = body.previousSibling;
const next = body.nextSibling;
const parent = body.parentNode;

// Tags only
const firstBodyChildTag = body.firstElementChild;
const lastBodyChildTag = body.lastElementChild;

const children = body.children; // gets collection of children tags only

const previousTag = body.previousElementSibling;
const nextTag = body.nextElementSibling;
const parentTag = body.parentElement;

// querySelectorAll returns static collection of all found elements
console.log(document.querySelectorAll('.class1, .class2')); // elements with 'class1' or/and 'class2' class
                                                           // . before class name needed
console.log(document.querySelectorAll('li')); // li elements
console.log(document.querySelectorAll('li.class1')); // li elements with 'class1' classs
console.log(document.querySelectorAll('.class1>li')); // li elements with parent with 'class1'

console.log(document.querySelectorAll('#id')); // element with id 'id' // # before id name needed
console.log(document.querySelectorAll('.class1 .class2')); // elements with 'class2' inside elements with 'class1'

console.log(document.querySelectorAll('[atribute]')); // elements with atribute
console.log(document.querySelectorAll('[atribute="85"]')); // elements with atribute=85

const firstFound = document.querySelector('class1'); // same as querySelectorAll but returns first element found

// returns dynamic collection
const getByTag = document.getElementsByTagName('li');
const getById = document.getElementById('id');
const getByClass = document.getElementsByClassName('class-name');
const getByName = document.getElementsByName('name');

const closestParent = getById.closest('.class1'); // finds closest parent element with 'class1' class
const matchesCondition = getById.matches('[class$="class1"]'); // true if element has this class

