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
