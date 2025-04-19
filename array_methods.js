// Array.at()
{
    const arr = [3, 4, 5, 6, 7];
    const index1 = 2;
    const index2 = 11

    console.log(`An index of ${index1} returns ${arr.at(index1)}`);
    console.log(`An index of ${index2} returns ${arr.at(index2)}`); // if index not present --> returns undefined
    console.log(arr.at(-1), arr.at(-2)); // --> Can you negative indexes as well

    //Using it with non array objects 
    const arrayLike = {
        length: 2,
        0: "a",
        1: "b",
        2: "c",
    };

    console.log(Array.prototype.at.call(arrayLike, 0)); // a
    console.log(Array.prototype.at.call(arrayLike, 2)); //undefined since length is 2 

}

// Array.concat()
{
    const arr1 = [1, 2, 3];
    const arr2 = [3, 4, 5];
    const arr3 = ["text"];
    console.log(arr1.concat(arr2));
    console.log(arr1.concat(arr2, arr3));

    console.log(arr1.concat([10, [11, 12]])); //Can also concatenate values to an array using.concat()

    // Concatenating Nested Arrays 

    const arr4 = [[1]];
    const arr5 = [2, [3]];

    const arr6 = arr4.concat(arr5);
    console.log(arr6);

    arr4[0].push(4);

    console.log(arr6);
}


// Using concat with array-like objects (using Symbol.isConcatSpreadable)
{
    const obj1 = { 0: 1, 1: 2, 2: 3, length: 3 };
    const obj2 = { 0: 1, 1: 2, 2: 3, length: 3, [Symbol.isConcatSpreadable]: true };

    console.log([0].concat(obj1, obj2));
}

// Using concat() on sparse arrays 
{
    const arr1 = [1, , 3];
    const arr2 = [1, 2, ,];
    console.log(arr1.concat(arr2)); // --> [ 1, <1 empty item>, 3, 1, 2, <1 empty item> ]
}

//Calling concat() on non-array objects 
console.log(Array.prototype.concat.call({}, 1, 2, 3)); // --> [ {}, 1, 2, 3 ]
console.log(Array.prototype.concat.call(1, 2, 3)); // --> [ [Number: 1], 2, 3 ]


// Array.entries()
{
    const arr = ["a", "b", "c"];
    for (let [key, value] of arr.entries()) {
        console.log(key, value);
    }
    const iterator = arr.entries()
    console.log(iterator.next().value);
    console.log(iterator.next().value);
    console.log(iterator.next().value);

    console.log("Testing array.keys()");
    for (let key of arr.keys()) {
        console.log(key);
    }

    console.log("Testing array.values()");
    for (let value of arr.values()) {
        console.log(value);
    }
}

// Using Array.every()
{
    const isBelowThreshold = (currentValue) => currentValue < 40;

    const arr = [1, 30, 39, 29, 10, 13];

    console.log(arr.every(isBelowThreshold));

    // Adding another example 
    function ageVerification(age) {
        return age >= 18;
    }

    const ages = [21, 34, 19, 92];
    console.log(ages.every(ageVerification));
}

// Using .every() to check if an array is a subset of another 
{
    function isSubset(arr1, arr2) {
        return arr2.every((element) => arr1.includes(element));
    }
    console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 6, 7])); //true
    console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [0, 4, 2])); //false
}