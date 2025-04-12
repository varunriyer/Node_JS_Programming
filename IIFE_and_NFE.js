//Code inside an IIFE runs immediately 

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