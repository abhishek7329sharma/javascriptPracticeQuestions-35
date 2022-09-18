// * 12. Use the Date object to do the following activities
// *     - What is the year today?
// *     - What is the month today as a number?
// *     - What is the date today?
// *     - What is the day today as a number?
// *     - What is the hours now?
// *     - What is the minutes now?
// *     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

let date = new Date();
console.log(`What is the year today? - ${date.getYear()}`); // 122
console.log(`What is the month today as a number? - ${date.getMonth() + 1}`); // 8
console.log(`What is the date today? - ${date.getDate()}`); // 30
console.log(`What is the day today as a number? - ${date.getDay()}`); // 2
console.log(`What is the hours now? - ${date.getHours()}`); // 22
console.log(`What is the minutes now? - ${date.getMinutes()}`); // 24

let newDate = new Date('January 1, 1970')
console.log(newDate.getTime() / 1000); // -19800
