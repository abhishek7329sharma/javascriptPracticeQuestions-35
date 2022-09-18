//* 29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

function getSumOfEvenOdd(max) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < max; i++) {
        if (i % 2 === 0) {
            sumEven = sumEven + i;
        }
        else {
            sumOdd = sumOdd + i;
        }
    }
    console.log('Sum of Even:', sumEven);
    console.log('Sum of Odd:', sumOdd);

}
getSumOfEvenOdd(100)
