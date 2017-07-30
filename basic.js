/*jslint esversion: 6, browser: true*/
let Basic = function(front, back) {
  this.front = front;
  this.back = back;
};

let test = new Basic('Who was the first president?', 'George Washington');
console.log(test);
module.exports = Basic;
