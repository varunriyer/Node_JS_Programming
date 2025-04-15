{
    function slow(x) {
        // let us assume there is a heavy CPU-intensive job here 
        alert(`Called with ${x}`);
        return x;
    };

    function cachingDecorator(func) {
        let cache = new Map();

        return function (x) {
            if (cache.has(x)) {
                return cache.get(x);
            }
        }
    }
}
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