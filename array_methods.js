// Array.at()
{
    const arr = [3, 4, 5, 6, 7];
    const index1 = 2;
    const index2 = 11

    console.log(`An index of ${index1} returns ${arr.at(index1)}`);
    console.log(`An index of ${index2} returns ${arr.at(index2)}`); // if index not present --> returns undefined
}

