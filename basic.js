/*jslint esversion: 6, browser: true*/
const create = require('./create.js');
const fs = require('fs');

let Basic = function(front, back) {
  this.front = front;
  this.back = back;
  this.log(front, back);
};

Basic.prototype.log = function(front, back) {
  let card =
    'Question: ' + front + '\n' +
    'Answer: ' + back + '\n\n';
  fs.appendFile('basic.txt', card, function (error) {
    if (error) create.err('Basic flashcard could not be added.');
    console.log('New basic flashcard has been added.\n');
    create.runPrompt();
  });
};

module.exports = Basic;
