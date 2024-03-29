// Exercise URL: https://javascript.info/task/is-empty
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
// Should work like that:
//  let schedule = {};
//  alert( isEmpty(schedule) ); // true
//  schedule["8:30"] = "get up";
//  alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
    let counter = 0;
    for (let prop in obj) {
        counter += 1;
    }
    return counter === 0;
}

let schedule = {};
console.log(isEmpty(schedule));
schedule["8:30"] = "get up";
console.log(isEmpty(schedule));