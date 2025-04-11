let globalVar = "I'm global!";

function testScope() {
    let localVar = "I'm local!";
    console.log(globalVar);
    console.log(localVar);
}
testScope();
console.log(globalVar);
// console.log(localVar); --> This gives an error 