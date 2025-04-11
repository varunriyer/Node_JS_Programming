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
{
    const arr = [10, 20, 30, 40, 50];
    const [a, b, ...rest] = arr;
    console.log(a, b, rest);
}
{
    const obj = { brand: 'Tesla', wheels: 4 };
    const obj_copy = { ...obj };
    obj_copy.brand = 'BMW';
    console.log(obj, obj_copy);
}
{
    const defaults = { theme: 'light', notification: true };
    const userSettings = { notification: false, fontsize: 'Medium' };
    console.log({ ...defaults, ...userSettings });
}
{
    const user = {
        name: "Varun",
        age: 22,
        country: "India",
        isAdmin: true
    };
    const { name, ...rest } = user;
    console.log(name, rest);
}
{
    const user = {
        name: "Varun",
        email: "varun@example.com",
        password: "supersecret123"
    };
    const { password, ...safeUser } = user;
    console.log(safeUser);
}
{
    //Spread works for only shallow copy and not deep copy 
    const user = {
        name: "Varun",
        hobbies: ["coding", "basketball"]
    };
    const clone = { ...user };
    clone.hobbies.push("music");
    console.log(user.hobbies); //returns [ 'coding', 'basketball', 'music' ] 
}
{
    //For deep copy, we have to use other tools like given below:
    const user = {
        name: "Varun",
        hobbies: ["coding", "basketball"]
    };
    const deepClone = JSON.parse(JSON.stringify(user));
    deepClone.hobbies.push("music");
    console.log(user.hobbies); //returns [ 'coding', 'basketball' ]
    console.log(deepClone.hobbies); //reterns [ 'coding', 'basketball', 'music' ]
}