/*jslint esversion: 6, browser: true*/
const fs = require('fs');

let Cloze = function(fullText, cloze, test) {
  this.partialText = this.partial(fullText, cloze, test);
  this.fullText = fullText;
  this.cloze = cloze;
};

Cloze.prototype.partial = function (fullText, cloze, test) {
  if (fullText.toLowerCase().includes(cloze.toLowerCase())) {
    let text = fullText.replace(cloze, '...');
    if(!test) this.log(text, cloze);
    return text;
  } else {
    console.error('Cloze not found in full text. Please re-enter.\n');
  }
};

Cloze.prototype.log = function(text, cloze) {
  let card =
    'Full statement: ' + text + '\n' +
    'Cloze deletion: ' + cloze + '\n\n';
  fs.appendFile('cloze.txt', card, function (error) {
    if (error) throw error;
    console.log('New cloze flashcard has been added.\n');
  });
};

module.exports = Cloze;
