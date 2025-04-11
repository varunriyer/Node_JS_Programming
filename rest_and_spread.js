{
    function sum(...numbers) {
        return numbers.reduce((acc, num) => acc + num, 0);
    }
    console.log(sum(1, 2, 5));
}
{
    function printAll(...args) {
        for (let item of args) {
            console.log(item);
        }
    }
    printAll(1, 2, "hello", [3, 4, 5], { a: 1, b: 2 });
}