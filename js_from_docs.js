// Storing the value to a variable from an object using destructuring
{
    const foo = {
        bar: 3,
        text: "Hello"
    };
    const { bar } = foo;
    console.log(bar);
}

console.log(x === undefined);
var x = 3;

(function () {
    console.log(x);
    var x = "local value";
})();

{
    const sales = "Toyota";

    function carTypes(name) {
        return name === "Honda" ? name : `Sorry, we don't sell ${name}.`;
    }

    const car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales };

    const car2 = { myCar: "Saturn", getCar: carTypes("Benz"), special: sales };

    console.log(car.myCar);
    console.log(car.getCar);
    console.log(car2.getCar);
    console.log(car.special);
}

{
    const car = {
        manyCars: { a: "Nano", b: "Jeep" }, 7: "Fav car number", "!": "dayum"
    }; //Property names that are not valid identidfiers cannot be accessed by . operator 
    console.log(car.manyCars.b); // They should be marked in " " and be accessed with [" "]
    console.log(car[7], car["!"]);

}

//Special Characters in JS Strings
{
    console.log("one line \nanother line");
    console.log("Hello \0 World");
    console.log("Hello\bWorld"); // \b is used to backspace in strings
    console.log("Hello \fWorld"); // \f actually used for new page 
    console.log("hello wait hmm \rWorld"); // \r implementation
    console.log("Hello\tWorld"); // \t for tab
    console.log("Hello\vWorld"); // \v for vertical tab
    console.log("Hello\\World"); // to include backslash character
    console.log("Test \123"); // To print using octal digits 
    console.log("Test \xAA"); // To print using hexadecimal digits
    console.log("Test \u00A9") // TO print UNICODE
}

//Falsy Values - 0, null, false, undefined, ""(empty string),NaN
//All other values are evaluated as true

{
    let fruitType = "Cherries";
    switch (fruitType) {
        case "Oranges":
            console.log("Oranges are $0.59 a pound.");
            break;
        case "Apples":
            console.log("Apples are $0.32 a pound.");
            break;
        case "Bananas":
            console.log("Bananas are $0.48 a pound.");
            break;
        case "Cherries":
            console.log("Cherries are $3.00 a pound.");
            break;
        case "Mangoes":
            console.log("Mangoes are $0.56 a pound.");
            break;
        case "Papayas":
            console.log("Papayas are $2.79 a pound.");
            break;
        default:
            console.log(`Sorry, we are out of ${fruitType}.`);
    }
    console.log("Is there anything else you'd like?");

}
// Try..throw..catch  block
{
    function logMyErrors(error) {
        console.error("An error occurred:");
        console.error("Error Name: " + error);
    }

    function getMonthName(month) {
        month--; // Adjusting month number to array index as array index is from 0 to 11

        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        if (months[month]) {
            return months[month];
        }
        else {
            throw new Error("Invalid Month Number");
        }
    };
    let myMonth = 17;

    try {
        monthName = getMonthName(myMonth);
    } catch (e) {
        monthName = "unknown";
        // console.log(e); --> Printing this will give the error, should create a function which logs errors and then displays it 
        logMyErrors(e);
    }
    console.log(monthName);
}

//For of & For in loops 
{
    const arr = [3, 5, 7];
    arr.foo = "hello";
    for (const i in arr) {
        console.log(i);
    }
    for (const i of arr) {
        console.log(i);
    }

    const obj = { a: 3, b: 5 };
    for (const [key, value] of Object.entries(obj)) {
        console.log(key, value);
    }
}

//Passing array as parameter 
{
    function myFunc(arr) {
        arr[0] = 30;
    }

    const arr = [45, 12, 7];
    console.log(arr[0]);
    myFunc(arr);
    console.log(arr[0]);
}

// Function declarations & expressions can be nested 
{
    function addSquares(a, b) {
        function square(x) {
            return x * x;
        }
        return square(a) + square(b);
    }
    const num1 = 3;
    const num2 = 4;

    console.log(addSquares(num1, num2));
}

// Using Function Expression where a function can be anonymous and it doesn't have to have a name
{
    const square = function (x) {
        return x * x;
    }
    console.log(square(5));
}

//But you can also name the function 
{
    const factorial = function fact(n) {
        return n < 2 ? 1 : n * fact(n - 1);
    }
    console.log(factorial(5));
}

// Using Function Expression when passing a function as an argument to another function 
{
    // function map(f, a) {   ---> This code can be used if you do not want to modify the original array and create a new array 
    //     const result = new Array(a.length);
    //     for (let i = 0; i < a.length; i++) {
    //         result[i] = f(a[i]);
    //     }
    //     return result;
    // }
    function map(f, a) {
        for (let i = 0; i < a.length; i++) {
            a[i] = f(a[i]);
        }
        return a;
    }
    const numbers = [0, 1, 2, 5, 10];
    const cubedNumbers = map(function (x) {
        return x * x * x;
    }, numbers);
    console.log(cubedNumbers);
}

//Defining a function based on a condition 
{
    let myFunc;
    let num = 0;
    let obj = {
        type: "sedan",
        color: "red"
    }
    if (num == 0) {
        myFunc = function (theObject) {
            theObject.make = "Toyota";
        };
        myFunc(obj);
        console.log(obj);
    }
    else {
        console.log("Num value invalid");
    }
}
// eval function - but not advised to use the same directly 
console.log(eval("2+2") === eval("4"));
console.log("2+2" === "4");

//Function hoisting in JS - can call a function first and declare it later
{
    console.log(myFunc());
    function myFunc() {
        return `Do something`;
    }
    const x = "Break";
    console.log(x);
}

// Recursion demonstration using functions

function loop(x) {
    if (x >= 10) {
        return;
    }

    loop(x + 1);
    console.log('count');
};

loop(0);

//Demonstration to show that recursion itself uses the function stack 
function foo(i) {
    if (i < 0) {
        return;
    }
    console.log(`Begin: ${i}`);
    foo(i - 1);
    console.log(`End: ${i}`);
};
foo(3);

