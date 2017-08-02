/*jslint esversion: 6, browser: true*/
const Basic = require('./basic.js');
const Cloze = require('./cloze.js');

let firstPresident = new Basic('Who was the first president of the United States?', 'George Washington', true);

// Who was the first president of the United States?
console.log('\n' + firstPresident.front);

// George Washington
console.log(firstPresident.back + '\n');
