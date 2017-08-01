/*jslint esversion: 6, browser: true*/
const inquirer = require('inquirer');
const fs = require('fs');
const Basic = require('./basic.js');
const Cloze = require('./cloze.js');

const messages = {
  basic: {
    inputQ: 'Please enter a question.',
    inputA: 'Please enter an answer.',
    confirmQ: 'Question:',
    confirmA: 'Answer:'
  },
  cloze: {
    inputQ: 'Please enter full statement.',
    inputA: 'Please enter cloze deletion.',
    confirmQ: 'Full statement:',
    confirmA: 'Cloze deletion:'
  }
};

let runPrompt = function () {
  inquirer.prompt({
      type: 'list',
      name: 'options',
      message: 'What would you like to do?',
      choices: [
        '1. Create basic flashcard',
        '2. Create cloze flashcard',
        '3. View basic flashcard entries',
        '4. View cloze flashcard entries',
        '5. Quit program'
      ]
  }).then(function (choice) {
    choices(choice.options[0]);
  });
};

let choices = function (choice) {
  let type;
  switch (choice) {
    case '1':
      type = 'basic';
      flashCreate(type, choice);
      break;
    case '2':
      type = 'cloze';
      flashCreate(type, choice);
      break;
    case '3':
      type = 'basic';
      display(type);
      break;
    case '4':
      type = 'cloze';
      display(type);
      break;
    default:
      return false;
  }
};

let flashCreate = function(type, choice) {
  inquirer.prompt(flashType(type)).then(function (inputs) {
    confirm(choice, inputs, type, messages[type].confirmQ, messages[type].confirmA);
  });
};

let flashType = function (type) {
  let flashBasic = [
    {
      type: 'input',
      name: 'question',
      message: messages[type].inputQ
    },
    {
      type: 'input',
      name: 'answer',
      message: messages[type].inputA
    }
  ];
  return flashBasic;
};

let confirm = function (choice, inputs, type, q, a) {
  console.log(
    '\n' + q + ' ' + inputs.question +
    '\n' + a + ' ' + inputs.answer + '\n');
  inquirer.prompt({
    type: 'confirm',
    name: 'validate',
    message: 'Do you want to save this flashcard?',
    default: true
  }).then(function (answer) {
    if (answer.validate) {
      if (type === 'basic') {
        let card = new Basic(inputs.question, inputs.answer);
      } else {
        let card = new Cloze(inputs.question, inputs.answer, choice);
      }
    }
  });
};

let display = function (type) {
  fs.readFile(type + '.txt', 'utf8', function (error, data) {
    if (error) {
      err('The file ' + type + '.txt does not exist.\n');
    } else {
      console.log('\n' + data);
      runPrompt();
    }
  });
};

let err = function (message) {
  console.error(message);
};

runPrompt();

module.exports.runPrompt = runPrompt;
module.exports.choices = choices;
module.exports.err = err;
