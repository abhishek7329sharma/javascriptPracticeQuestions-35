//* 22. Write a program which tells the number of days in a month.

function daysInMonth(month, year) {
    // Because day 0 equates to the last day of the previous month the number returned is effectively the number of days for the month we want.
    return new Date(year, month, 0).getDate();
}

// July
daysInMonth(7, 2009); // 31

// February
daysInMonth(2, 2009); // 28
daysInMonth(2, 2008); // 29