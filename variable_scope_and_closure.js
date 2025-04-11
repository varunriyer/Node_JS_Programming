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

//Closures
{
    function outer() {
        let name = "Varun";

        function inner() {
            console.log("Hello" + " " + name);
        }
        return inner;
    }
    const greetVarun = outer();
    greetVarun();
}
{
    function counter() {
        let count = 0;

        return function () {
            count++;
            console.log(count);
        };
    }

    const increment = counter();
    increment(); // 1
    increment(); // 2
    increment(); // 3

    const A = counter();
    A(); //
    A();

    const B = counter();
    B();

}
{
    console.log("Final Question Output:")
    function counter(start = 0) {
        let count = start;
        return {
            increment: function () {
                count++;
                console.log(count);
            },
            decrement: function () {
                count--;
                console.log(count);
            }
        };
    }

    const C = counter(5);
    C.increment();  // ?
    C.increment();  // ?
    C.decrement();  // ?

    const D = counter(100);
    D.decrement();  // ?
    C.increment();  // ?

}
{
    function sharedCounter() {
        let count = 0;

        function increment() {
            count++;
            console.log("Increment:", count);
        }

        function decrement() {
            count--;
            console.log("Decrement:", count);
        }

        return { increment, decrement };
    }

    const counterA = sharedCounter();
    const counterB = counterA;

    counterA.increment();  // 1
    counterB.increment();  // 2
    counterA.decrement();  // 1
    counterB.decrement();  // 0

}