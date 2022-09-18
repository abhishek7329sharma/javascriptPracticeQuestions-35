//* 33. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
//*     - The same groups apply to both men and women.
//*     - Underweight: BMI is less than 18.5
//*    - Normal weight: BMI is 18.5 to 24.9
//*     - Overweight: BMI is 25 to 29.9
//*     - Obese: BMI is 30 or more

function calBMI(w, h) {
    let bmi = (w / (h * h))
    return Math.floor(bmi)
}
// calculation of bmi
let currBMI = calBMI(75, 1.8)

if (currBMI < 18.5) {
    console.log(`Underweight`);
}
else if (currBMI >= 18.5 && currBMI <= 24.9) {
    console.log(`Normal Weight`);
}
else if (currBMI >= 25 && currBMI <= 24.9) {
    console.log(`Overweight`);
}
else if (currBMI >= 30) {
    console.log(`Obese`);
}





