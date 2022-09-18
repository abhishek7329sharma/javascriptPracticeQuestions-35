// * 11. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
// *     - 4 > 3
// *     - 4 >= 3
// *     - 4 < 3
// *     - 4 <= 3
// *     - 4 == 4
// *     - 4 === 4
// *     - 4 != 4
// *     - 4 !== 4
// *     - 4 != '4'
// *     - 4 == '4'
// *     - 4 === '4'
// *     - Find the length of python and jargon and make a falsy comparison statement.


console.log(4 > 3); // true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 != 4); // false
console.log(4 === 4); // true
console.log(4 !== 4); // false
console.log(4 != '4'); // false
console.log(4 !== '4'); // true
console.log(4 == '4'); // true
console.log(4 === '4'); // false

let lang1 = 'python'
let lang2 = 'jargon'
console.log(lang1.length != lang2.length); // falsy comparison statement