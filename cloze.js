/*jslint esversion: 6, browser: true*/
let Cloze = function(fullText, cloze) {
  this.fullText = fullText;
  this.cloze = cloze;
  this.partialText = function () {
    if (this.fullText.toLowerCase().indexOf(cloze.toLowerCase()) !== -1) {
      console.log(this.fullText.toLowerCase().indexOf(cloze.toLowerCase()));
      return this.fullText.replace(cloze, '...');
    } else {
      this.err('Cloze not found in full text. Please re-enter.');
    }
  };
};

Cloze.prototype.err = function (message) {
  console.log(message);
};

let test = new Cloze('9 + 9 = 18', '19');
console.log(test.partialText());
module.exports = Cloze;
