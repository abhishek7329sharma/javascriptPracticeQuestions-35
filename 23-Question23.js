//* 23. Write a program which tells the number of days in a month, now consider leap year.

// program to check leap year
function checkLeapYear(year) {
    //? new Date(year, month, date, hours, minutes, seconds, ms)
    const leap = new Date(year, 1, 29).getDate() === 29;
    if (leap) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}
checkLeapYear(2004);