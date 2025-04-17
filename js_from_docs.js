// Storing the value to a variable from an object using destructuring
{
    const foo = {
        bar: 3,
        text: "Hello"
    };
    const { bar } = foo;
    console.log(bar);
}
{
    console.log(x === undefined);
    var x = 3;

    (function () {
        console.log(x);
        var x = "local value";
    })();
}
