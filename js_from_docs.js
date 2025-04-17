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