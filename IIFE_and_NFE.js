//Code inside an IIFE runs immediately (Immmediately Invoked Function Expression)

(function () {
    console.log("This runs immediately");
})();

//The above can also be depicted by arrow functionas 
(() => {
    console.log("This also a way to depict an IIFE");
})();

//IIFE Basic Example 

(() => {
    console.log("Hello Varun");
})();

{
    //Private Variable with IIFE 
    const counter = (function () {
        let count = 0;
        return function () {
            count++;
            return count;
        };
    })();

    console.log(counter());
    console.log(counter());
    console.log(counter());
}
{
    //IIFE to store secret
    const secretHolder = (function (initialSecret) {
        let secret = initialSecret;
        return function () {
            return secret;
        };
    })("hidden");

    console.log(secretHolder());
}
{
    //Updated code to set and get secret
    const secretHolder = (function (initialSecret) {
        let secret = initialSecret;
        return {
            getSecret: function () {
                return secret;
            },
            setSecret: function (newSecret) {
                secret = newSecret;
                return secret;
            }
        };
    })("hidden");

    console.log(secretHolder.getSecret());
    console.log(secretHolder.setSecret("Found it!"));
    console.log(secretHolder.getSecret());
}

//IIFE example that acts like a simple bank account 
{
    const account = (function (initialBalance) {
        let balance = initialBalance;
        return {
            deposit: function (amount) {
                balance += amount;
                return balance;
            },
            withdraw: function (amount) {
                if (amount <= balance) {
                    balance -= amount;
                    return balance;
                }
                else {
                    return ("Insufficient funds");
                }
            },
            checkBalance: function () {
                return balance;
            }
        };
    })(1000);

    console.log(account.deposit(500));
    console.log(account.withdraw(200));
    console.log(account.checkBalance());
    console.log(account.balance); //undefined 
}
//NFE - Named Function Expression --> useful for recursion in anonymous functions, better debugging, maintaining self-reference 
{
    //Basic NFE Syntax
    const myFunction = function functionName(params) {
        return params;
    }
    console.log(myFunction("test"));
}

//Basic NFE Example
{
    const factorial = function fact(n) {
        if (n <= 1) return 1;
        return n * fact(n - 1);
    };
    console.log(factorial(5));
    // console.log(fact) --> gives an error as it is used for self-reference and is not accessible outside
}

// NFE that prints countdown from n to 1 using recursion 
{
    const countdown = function count(n) {
        if (n <= 0) return
        console.log(n);
        return count(n - 1);
    };
    (countdown(5));
}
