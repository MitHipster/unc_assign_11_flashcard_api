/*jslint esversion: 6, browser: true*/
let inquirer = require('inquirer');
// let Basic = require('./basic.js');
// let Cloze = require('./cloze.js');

inquirer.prompt(
  {
    type: 'list',
    name: 'options',
    message: 'What would you like to do?',
    choices: [
      '1. Create Basic flashcard',
      '2. Create Cloze flashcard',
      '3. View Basic flashcard entries',
      '4. View Cloze flashcard entries'
    ]
  }
).then(function(answer) {
  switch (answer.options[0]) {
    case '1':
      console.log('you selected basic flashcard');
      break;
    case '2':
      console.log('you selected cloze flashcard');
      break;
    case '3':
      console.log('you selected view basic flashcards');
      break;
    case '4':
      console.log('you selected view cloze flashcards');
      break;
    default:
      return false;
  }
});
