// Adds reverse to all strings
String.prototype.reverse = function () {
  return Array.from(this).reverse().join("");
};

function Phrase(content) {
  this.content = content;
  
  //Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.content.toLowerCase();
  };
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  };
}

