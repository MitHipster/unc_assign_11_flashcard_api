/*jslint esversion: 6, browser: true*/
const create = require('./create.js');
const fs = require('fs');

let Cloze = function(fullText, cloze, choice) {
  this.partialText(fullText, cloze, choice);
  this.fullText = fullText;
  this.cloze = cloze;
};

Cloze.prototype.partialText = function (fullText, cloze, choice) {
  if (fullText.toLowerCase().includes(cloze.toLowerCase())) {
    let partial = fullText.replace(cloze, '...');
    this.log(partial, cloze);
    return partial;
  } else {
    create.err('Cloze not found in full text. Please re-enter.\n');
    create.choices(choice);
  }
};

Cloze.prototype.log = function(partialText, cloze) {
  let card =
    'Full statement: ' + partialText + '\n' +
    'Cloze deletion: ' + cloze + '\n\n';
  fs.appendFile('cloze.txt', card, function (error) {
    if (error) create.err('Cloze flashcard could not be added.\n');
    console.log('New cloze flashcard has been added.\n');
    create.runPrompt();
  });
};

module.exports = Cloze;
