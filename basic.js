/*jslint esversion: 6, browser: true*/
const fs = require('fs');

let Basic = function(front, back, test) {
  if (this instanceof Basic) {
    this.front = front;
    this.back = back;
    if (!test) this.log(front, back);
  } else {
    return new Basic(front, back, test);
  }
};

Basic.prototype.log = function(front, back) {
  let card =
    'Question: ' + front + '\n' +
    'Answer: ' + back + '\n\n';
  fs.appendFile('basic.txt', card, function (error) {
    if (error) throw error;
    console.log('New basic flashcard has been added.\n');
  });
};

module.exports = Basic;
