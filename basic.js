/*jslint esversion: 6, browser: true*/
const fs = require('fs');

let Basic = function(front, back) {
  this.front = front;
  this.back = back;
  this.log(front, back);
};

Basic.prototype.log = function(front, back) {
  let card =
    'Question: ' + front + '\n' +
    'Answer: ' + back + '\n';
  fs.appendFile('basic.txt', card, function (err) {
    if (err) console.error(err);
    console.log('Basic flashcard has been added.');
  });
};

module.exports = Basic;
