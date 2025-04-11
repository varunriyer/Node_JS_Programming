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
