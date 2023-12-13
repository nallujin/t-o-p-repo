// Write a function called lastLetter that takes a 
// string and returns the very last letter of that string:
// lastLetter("abcd") should return "d"

let lastLetter = anStr => anStr[anStr.length-1];
console.log(lastLetter("abcd"));