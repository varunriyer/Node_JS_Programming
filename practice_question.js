let arr = [2, 1, 3, 4, 8, 9, 21, 45, 7];
let start = [2, 1, 3, 8];
for (let i = 0; i < arr.length; i++) {
    if (start.includes(arr[i])) {
        arr.splice(i, 1);
        i--;
    }
    else {
        continue;
    }
}
let new_arr = [...start];
let n_sort = (a, b) => a - b;

arr.sort(n_sort);

new_arr.push(...arr);
console.log(new_arr);

