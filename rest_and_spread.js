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
{
    // Use Spread operator to merge 2 arrays 
    function mergeArrays(arr1, arr2) {
        return ([...arr1, ...arr2]);
    }
    console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
}
{
    // Take any number of numeric arguments and return their sum 
    function sumAll(...nums) {
        let sum = 0;
        for (let num of nums) {
            sum += num;
        }
        return sum;
    }
    console.log(sumAll(5, 10, 15))
}
{
    const sumAll = (...nums) => nums.reduce((a, b) => a + b, 0); //writing in short code
    console.log(sumAll(5, 10, 15));
}