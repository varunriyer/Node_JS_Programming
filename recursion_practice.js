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
//Q1) Sum of natiral numbers upto n
{
    function sum(n) {
        if (n == 0) return 0;
        return n + sum(n - 1);
    }
    console.log(sum(5));
}
