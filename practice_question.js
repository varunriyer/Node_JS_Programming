function countPoints(arr) {
    let slope;
    let count = 0;
    if (arr[0] > arr[1]) {
        slope = -1;
    }
    else {
        slope = 1;
    }
    for (let i = 0; i < arr.length; i++) {
        if (slope == 1) {
            if (arr[i] < arr[i + 1]) {
                continue;
            }
            else {
                count++;
                slope = -1;
            }
        }

        if (slope == -1) {

            if (arr[i] > arr[i + 1]) {
                continue;
            }
            else {
                count++;
                slope = 1;
            }
        }
    }
    return count;
}
console.log(countPoints([2, 3, 4, 6, 5, 7, 3, 1]))