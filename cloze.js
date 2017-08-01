/*jslint esversion: 6, browser: true*/
const fs = require('fs');

let Cloze = function(fullText, cloze) {
  this.fullText = fullText;
  this.cloze = cloze;
  this.partialText(fullText, cloze);
};

Cloze.prototype.partialText = function (fullText, cloze) {
  if (fullText.toLowerCase().indexOf(cloze.toLowerCase()) !== -1) {
    this.log(fullText, cloze);
    return fullText.replace(cloze, '...');
  } else {
    this.err('Cloze not found in full text. Please re-enter.');
  }
};

Cloze.prototype.log = function(fullText, cloze) {
  let card =
    'Question: ' + fullText + '\n' +
    'Answer: ' + cloze + '\n';
  fs.appendFile('cloze.txt', card, function (err) {
    if (err) console.error(err);
    console.log('Cloze flashcard has been added.');
  });
};

Cloze.prototype.err = function (message) {
  console.error(message);
};

module.exports = Cloze;
