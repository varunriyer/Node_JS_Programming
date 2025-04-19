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
    console.log(arr1.concat(arr2));
}