function avgVal(arr) {
    let sum = null;
    let index = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        index++;
    }

    if(index === 0){
        return null
    } else {
        return sum / index;
    }
}

console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null