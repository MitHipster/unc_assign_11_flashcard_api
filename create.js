/*jslint esversion: 6, browser: true*/
const inquirer = require('inquirer');
const fs = require('fs');
const Basic = require('./basic.js');
// let Cloze = require('./cloze.js');
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

let prompt = function () {
  inquirer.prompt({
      type: 'list',
      name: 'options',
      message: 'What would you like to do?',
      choices: [
        '1. Create basic flashcard',
        '2. Create cloze flashcard',
        '3. View basic flashcard entries',
        '4. View cloze flashcard entries'
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
      console.log('you selected view basic flashcards');
      break;
    case '4':
      console.log('you selected view cloze flashcards');
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
    message: 'Are the entries above correct?',
    default: true
  }).then(function (answer) {
    if (answer.validate) {
      if (type === 'basic') {
        
      }
    } else {
      // Run option again to correct mistake
      console.log('Please re-enter to fix errors or make changes.');
      choices(choice);
    }
  });
};

prompt();
