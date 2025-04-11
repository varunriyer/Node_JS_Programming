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

function testScopes() {
    var x = 1;
    let y = 2;
    const z = 3;

    {
        var x = 10;
        let y = 20;
        const z = 30;
        console.log("Inside Block:", x, y, z);
    }

    console.log("Outside Block:", x, y, z);
}

testScopes();
