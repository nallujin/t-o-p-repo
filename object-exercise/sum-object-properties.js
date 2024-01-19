// Exercise URL: https://javascript.info/task/sum-object
// We have an object storing salaries of our team:
//  let salaries = {
//      John: 100,
//      Ann: 160,
//      Pete: 130
//  }
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
// If salaries is empty, then the result must be 0.

let salaries1 = {
    John: 100,
    Ann: 160,
    Pete: 130
};
let salaries2 = {};

const sumSalary = (salary) => {
    let startValue = 0;
    for (let obj in salary) {
        startValue += salary[obj];
    }
    return startValue;
};

console.log(sumSalary(salaries1));
console.log(sumSalary(salaries2));