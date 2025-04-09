const fs = require('fs');

console.log("Synchronous Code Execution");
console.log("first");
console.log("second");
console.log("third");

console.log("Asynchronous Code Execution");
console.log("first");
fs.readFile("sample.txt", () => {
    console.log("second");
})
console.log("third");
