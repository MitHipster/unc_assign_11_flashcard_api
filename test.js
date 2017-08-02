/*jslint esversion: 6, browser: true*/
const chalk = require('chalk');
const Basic = require('./basic.js');
const Cloze = require('./cloze.js');

let firstPresident = new Basic('Who was the first president of the United States?', 'George Washington', true);

// Who was the first president of the United States?
console.log(chalk.green('\nBasic: \n') + firstPresident.front);

// George Washington
console.log(firstPresident.back + '\n');

let firstPresidentCloze = new Cloze('George Washington was the first president of the United States.', 'George Washington', true);

// George Washington
console.log(chalk.green('Cloze: \n') + firstPresidentCloze.cloze);

// ... was the first president of the United States.
console.log(firstPresidentCloze.partialText);

// George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText + '\n');

// Should throw or log an error because 'oops' doesn't appear in "This doesn't work"
let brokenCloze = new Cloze("This doesn't work", 'oops');

// Scope safe constructor tests
let scope = Basic("Use this test to handle a constructor call without the 'new' keyword provided.", 'instanceof', true);

console.log(chalk.green('Scope Safe Basic: \n') + scope.front);

console.log(scope.back + '\n');

let scopeCloze = Cloze("Use instanceof to handle a constructor call without the 'new' keyword provided.", 'instanceof', true);

console.log(chalk.green('Scope Safe Cloze: \n') + scopeCloze.cloze);

console.log(scopeCloze.partialText);

console.log(scopeCloze.fullText + '\n');
