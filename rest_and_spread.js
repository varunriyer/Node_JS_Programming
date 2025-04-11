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
{
    const arr1 = [1, 2, 3];
    const arr2 = [...arr1]; // shallow copy using spread operator
    console.log(arr2);
    const arr3 = [...arr1, ...arr2]; //merging 2 arrays using spread operator
    console.log(arr3);
    const obj = { name: "Varun", age: 23 };
    const clone_obj = { ...obj }; //Spread operator with objects for cloning
    console.log(clone_obj);
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    console.log({ ...obj1, ...obj2 }); // Merging objects using spread
}
