// Write a program which tells the number of days in a month

let month = 2;

if(month === 2) {
    console.log("28 or 29 Days");
} else if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
    console.log("31 Days");
} else {
    console.log("30 Days");
}
