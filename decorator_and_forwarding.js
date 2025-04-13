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