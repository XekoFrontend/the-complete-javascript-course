/**
 * ------------------------------------------------------------------------
 * IF
 * ------------------------------------------------------------------------
 */
// example 1
const age = 16;
if(age >= 18){
    console.log('You can start driving license.');
} else {
    console.log(`You have to wait for ${18 - age} years.`);
}

// Example 2
const year = 2993;
let century;
if (year > 2000){
    century = 21;
} else {
    century = 20;
}
console.log(century);