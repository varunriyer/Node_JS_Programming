let globalVar = "I'm global!";

function testScope() {
    let localVar = "I'm local!";
    console.log(globalVar);
    console.log(localVar);
}
testScope();
console.log(globalVar);
// console.log(localVar); --> This gives an error 

let username = "Varun";
function greet() {
    let greeting = "Salute sir";
    console.log(`${greeting}, ${username}`);
}
greet();
// console.log(`${greeting}, ${username}`); --> This gives an error