//* 27. The following is an array of 10 students ages:
//*     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//*     - Sort the array and find the min and max age
//*     - Find the median age(one middle item or two middle items divided by two)
//*     - Find the average age(all items divided by number of items)
//*     - Find the range of the ages(max minus min)
//*     - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// - Sort the array and find the min and max age
console.log(ages.sort()); // array sort to ascending order
console.log('Minimun Element', Math.min(...ages)); // 19 - min element in array 
console.log('Maximum Element', Math.max(...ages)); // 26 - max element in array

// Find the median age(one middle item or two middle items divided by two)

function median(agesArr) {
    //? STEP1: Sort Array in ascending order 
    const sorted = agesArr.sort((a, b) => a - b); // ascending order sorting 

    //? STEP2: Get the middle element of an array. 
    const middle = Math.floor(sorted.length / 2);

    //? If middle is even
    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }

    //? If middle is odd
    return sorted[middle];
}

console.log('Median:', median(ages))

function average(arr) { // accepts an array
    let sum = 0;
    for (const item of arr) {
        sum = sum + item;
    }
    return (sum / arr.length)
}

console.log('Average:', average(ages));

function rangeOfArray(arr) {
    let min = Math.min(...arr) // min
    let max = Math.max(...arr) // max
    return max - min
}
console.log('Range of an array:', rangeOfArray(ages));

//? Compare the value of (min - average) and (max - average), use abs() method 
let minArr = Math.min(...ages)
let maxArr = Math.max(...ages)
let averageArr = average(ages)

//? (min - average) 
console.log(Math.abs(minArr - averageArr));

//? (max - average)
console.log(Math.abs(maxArr - averageArr));