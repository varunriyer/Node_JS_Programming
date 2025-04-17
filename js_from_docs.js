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