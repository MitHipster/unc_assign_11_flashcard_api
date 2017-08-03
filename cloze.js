/*jslint esversion: 6, browser: true*/
const fs = require('fs');
const chalk = require('chalk');

let Cloze = function(fullText, cloze, test) {
  if (this instanceof Cloze) {
    this.partialText = this.partial(fullText, cloze, test);
    this.fullText = fullText;
    this.cloze = cloze;
  } else {
    return new Cloze(fullText, cloze, test);
  }
};

Cloze.prototype.partial = function (fullText, cloze, test) {
  if (fullText.toLowerCase().includes(cloze.toLowerCase())) {
    let text = fullText.replace(cloze, '...');
    if(!test) this.log(text, cloze);
    return text;
  } else {
    console.error(chalk.red('Cloze not found in full text. Please re-enter.\n'));
  }
};

Cloze.prototype.log = function(text, cloze) {
  let card =
    'Full statement: ' + text + '\n' +
    'Cloze deletion: ' + cloze + '\n\n';
  try {
    fs.appendFileSync('cloze.txt', card);
  } catch (error) {
    console.error(error);
    return false;
  }
  console.log(chalk.green('New cloze flashcard has been added.\n'));
};

module.exports = Cloze;
