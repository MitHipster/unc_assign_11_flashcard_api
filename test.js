/*jslint esversion: 6, browser: true*/
const Basic = require('./basic.js');
const Cloze = require('./cloze.js');

let firstPresident = new Basic('Who was the first president of the United States?', 'George Washington', true);
console.log(typeof firstPresident);

// Who was the first president of the United States?
console.log(firstPresident.front);

// George Washington
console.log(firstPresident.back);
