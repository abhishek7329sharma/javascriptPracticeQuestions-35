//* 20. Write a code which can give grades to students according to theirs scores:
//* - 80-100, A
//* - 70-89, B
//* - 60-69, C
//* - 50-59, D
//* - 0-49, F

let studentName = 'Abhishek'
let score = 55

if (score >= 80 && score <= 100) {
    console.log(`${studentName} scored A Grade`);
}
else if (score >= 70 && score <= 89) {
    console.log(`${studentName} scored B Grade`);
}
else if (score >= 60 && score <= 69) {
    console.log(`${studentName} scored C Grade`);
}
else if (score >= 50 && score <= 59) {
    console.log(`${studentName} scored D Grade`);
}
else {
    console.log(`${studentName} scored F Grade`);
}

// * Abhishek scored D Grade