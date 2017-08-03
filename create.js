/*jslint esversion: 6, browser: true*/
const inquirer = require('inquirer');
const fs = require('fs');
const chalk = require('chalk');
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
      flashCreate(type);
      break;
    case '2':
      type = 'cloze';
      flashCreate(type);
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

let flashCreate = function(type) {
  inquirer.prompt(flashType(type)).then(function (inputs) {
    confirm(type, inputs.question, inputs.answer);
  });
};

let flashType = function (type) {
  return [
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
};

let confirm = function (type, q, a) {
  console.log(
    '\n' + messages[type].confirmQ + ' ' + chalk.cyan(q) +
    '\n' + messages[type].confirmA + ' ' + chalk.cyan(a) + '\n');
  inquirer.prompt({
    type: 'confirm',
    name: 'validate',
    message: 'Do you want to save this flashcard?',
    default: true
  }).then(function (answer) {
    if (answer.validate) {
      let card;
      if (type === 'basic') card = new Basic(q, a);
      if (type === 'cloze') card = new Cloze(q, a);
    }
    runPrompt();
  });
};

let display = function (type) {
  fs.readFile(type + '.txt', 'utf8', function (error, data) {
    if (error) throw error;
    console.log('\n' + data);
    runPrompt();
  });
};

runPrompt();
