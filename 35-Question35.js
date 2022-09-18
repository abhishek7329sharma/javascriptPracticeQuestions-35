// 35. Write a functions which checks if all items are unique in the array.

let array = [1, 2, 3, 45]

let uniqueArr = new Set(array)
if (array.length !== uniqueArr.size) {
    console.log(`Array is not unique`);
} else {
    console.log(`Array is unique`);
}