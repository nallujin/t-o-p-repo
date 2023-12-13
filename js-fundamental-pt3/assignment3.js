// Write a function called capitalize that takes a string and returns that 
// string with only the first letter capitalized. Make sure that it can 
// take strings that are lowercase, UPPERCASE or BoTh.

function capitalize(theStr) {
    const capied = theStr[0].toUpperCase();
    const result = capied.concat(theStr.slice(1, (theStr.length)))
    return result;
}

console.log(capitalize("mASBRO"));