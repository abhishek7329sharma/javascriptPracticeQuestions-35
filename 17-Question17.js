//? 17. Create a human readable time format using the Date time object
//?     - YYYY-MM-DD HH:mm
//?     - DD-MM-YYYY HH:mm
//?     - DD/MM/YYYY HH:mm


let d = new Date()
let fullYear = d.getFullYear()
let month = d.getMonth()
let date = d.getDate()
let hours = d.getHours()
let minutes = d.getMinutes()


/* ------ Validations if month, date, hours & minutes are less than 10 ------ */

if (month < 10) {
    month = `0${month}`
}

if (date < 10) {
    date = `0${date}`
}

if (hours < 10) {
    hours = `0${hours}`
}

if (minutes < 10) {
    minutes = `0${minutes}`
}

/* ----------------------- FORMAT 1: YYYY-MM-DD HH:mm ----------------------- */
console.log(`${fullYear}-${month}-${date} ${hours}:${minutes}`); // 2022-07-31 00:32

/* ----------------------- FORMAT 2: DD-MM-YYYY HH:mm ----------------------- */
console.log(`${date}-${month}-${fullYear} ${hours}:${minutes}`); // 31-07-2022 00:32

/* ----------------------- FORMAT 3: DD-MM-YYYY HH:mm ----------------------- */
console.log(`${date}/${month}/${fullYear} ${hours}:${minutes}`); // 31/07/2022 00:32