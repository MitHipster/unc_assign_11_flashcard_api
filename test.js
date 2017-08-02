/*jslint esversion: 6, browser: true*/
const Basic = require('./basic.js');
const Cloze = require('./cloze.js');

let firstPresident = new Basic('Who was the first president of the United States?', 'George Washington', true);

// Who was the first president of the United States?
console.log('\nBasic: \n' + firstPresident.front);

// George Washington
console.log(firstPresident.back + '\n');

let firstPresidentCloze = new Cloze('George Washington was the first president of the United States.', 'George Washington', true);

// George Washington
console.log('Cloze: \n' + firstPresidentCloze.cloze);

// ... was the first president of the United States.
console.log(firstPresidentCloze.partialText);

// George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText + '\n');
