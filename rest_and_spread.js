{
    function sum(...numbers) {
        return numbers.reduce((acc, num) => acc + num, 0);
    }
    console.log(sum(1, 2, 5));
}