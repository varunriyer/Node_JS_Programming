{
    function countdown(n) {
        if (n <= 0) {
            console.log("Done!");
            return;
        }
        console.log(n);
        countdown(n - 1);
    }
    countdown(5);
}

//Factorial of a number - Using Recursion
{
    function factorial(n) {
        if (n == 0) return 1;
        return n * factorial(n - 1);
    }
    console.log(factorial(5));
    console.log(factorial(999)); //This gives infinity
    // console.log(factorial(9654)); --> Numbers above this give error
}
//Practice Questions 
// Q1) Sum of natiral numbers upto n
{
    function sum(n) {
        if (n < 0) throw new Error("Input must be a non-negative integer");
        if (n === 0) return 0;
        return n + sum(n - 1);
    }
    console.log(sum(5));
}

// Q2) Print each character of a string recursively
{
    function print_str(str) {
        if (str === "") return;
        console.log(str[0]);
        print_str(str.slice(1));
    }
    print_str("Hello");
}

// Q3) Reverse a string using recursion
{
    function reverseStr(str) {
        if (str.length <= 1) return str;
        return reverseStr(str.slice(1)) + str[0];
    }
    console.log(reverseStr("abc"));
}

//How Recursion uses the call stack in JS 
// Implementation 
{
    function factorial(n) {
        console.log("Entering factorial:");
        if (n === 0) {
            console.log("Base Case Reached");
            return 1;
        }
        let result = n * factorial(n - 1);
        console.log(`Returning ${result} for n = ${n}`);
        return result;
    }
    factorial(5);
}

//Code to test stack overflow
// {
//     function infinite() {
//         return infinite()
//     }
//     infinite()
// }

//Intermediate Questions on Recursion
// Q1) Fibonacci Series upto a number
{
    function fibonacci(n) {
        if (n === 0) return 0;
        if (n === 1) return 1;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    console.log(fibonacci(7));
}
{
    function print_fibonacci(n, a = 0, b = 1) {
        if (n <= 0) return;
        console.log(a);
        print_fibonacci(n - 1, b, a + b);
    }
    print_fibonacci(6);
}

{
    console.log("Printing Reverse:");
    function printReverse(n) {
        if (n <= 0) return;
        console.log(n);
        printReverse(n - 1);
    }
    printReverse(5);
}

// Simulate a Stack using an Array 
{
    console.log("Stack using Array:");
    let stack = [];
    function pushtostack(n) {
        if (n <= 0) return;
        stack.push(n);
        pushtostack(n - 1);
    }
    function popStack() {
        if (stack.length === 0) return;
        console.log(stack.pop());
        popStack();
    }
    pushtostack(5);
    popStack();
}

//Reverse array using stack approach
{
    console.log("Reversing an array:");
    function reverseArray(arr) {
        if (arr.length === 0) return;
        console.log(arr.pop());
        reverseArray(arr);
    }
    reverseArray([1, 2, 3]);
}
//Solved the above problem without modifying the original array 
{
    console.log("Reversing an array:");
    function reverseArray(arr, index = arr.length - 1) {
        if (index < 0) return;
        console.log(arr[index]);
        reverseArray(arr, index - 1);
    }

    reverseArray([1, 2, 3]);  // Output: 3 2 1

}
// Trace Factorial
{
    console.log("Trace Fatorial:");
    function traceFactorial(n) {
        if (n === 0) {
            console.log(`Entering traceFactorial(0) `);
            return 1;
        }
        console.log(`Entering traceFactorial(${n})`);
        let result = n * traceFactorial(n - 1);
        console.log(`Exiting traceFactorial(${n}): ${result}`);
        return result;
    }
    traceFactorial(3);
}