{
    function logDecorator(func) {
        return function (...args) {
            console.log(`Calling with arguments: ${args}`);
            const result = func.apply(this, args);
            console.log(`Result: ${result}`);
            return result;
        };
    }
    function add(a, b) {
        return a + b;
    }

    const decoratedAdd = logDecorator(add);
    decoratedAdd(2, 3);
}
{
    function greet(name, timeofDay) {
        return `Good ${timeofDay}, ${name}`;
    }
    function wrapper(func) {
        return function (...args) {
            return func.apply(this, args);
        };
    }
    const forwardedGreet = wrapper(greet);
    console.log(forwardedGreet("Varun", "Evening"));
}
