/**
 * ------------------------------------------------------------------------
 * CHALLENGE 1
 * ------------------------------------------------------------------------
 * Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
 * BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
 * ---- Test data:
 * § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
 * m tall.
 * § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
 * m tall.
 */

// 1. Store Mark's and John's mass and height in variables
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;
// 2. Calculate both their BMIs using the formula
let bmiMark = massMark / heightMark ** 2;
let bmiJohn = massJohn / heightJohn ** 2;
// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
let markHigherBMI = bmiMark > bmiJohn;
console.log('----- Challenge 1 -----');
console.log('Data 1', bmiMark, bmiJohn, markHigherBMI);

// Testing Data 2
massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;
bmiMark = massMark / heightMark ** 2;
bmiJohn = massJohn / heightJohn ** 2;
markHigherBMI = bmiMark > bmiJohn;
console.log('Data 2', bmiMark, bmiJohn, markHigherBMI);


/**
 * ------------------------------------------------------------------------
 * CHALLENGE 2
 * ------------------------------------------------------------------------
 * Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
 * Your tasks:
 * 1. Print a nice output to the console, saying who has the higher BMI. The message
 * is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
 * 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
 * BMI (28.3) is higher than John's (23.9)!"
 * Hint: Use an if/else statement
 */

console.log('----- Challenge 2 -----');
if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI ${bmiMark} is heigher than John's BMI ${bmiJohn}.`);
} else {
    console.log(`Mark's BMI ${bmiMark} is lower than John's BMI ${bmiJohn}.`);
}


/**
 * ------------------------------------------------------------------------
 * CHALLENGE 3
 * ------------------------------------------------------------------------
 * There are two gymnastics teams, Dolphins and Koalas. They compete against each
 * other 3 times. The winner with the highest average score wins a trophy!
 * Your tasks:
 * 1. Calculate the average score for each team, using the test data below
 * 2. Compare the team's average scores to determine the winner of the competition,
 * and print it to the console. Don\'t forget that there can be a draw, so test for that
 * as well (draw means they have the same average score)
 * Test data:
 * § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
 * § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
 * § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
 */

console.log('----- Challenge 3 -----');
// Calculate the average score
const dolphinsScore = (196 + 108 + 89)/3;
const koalasScore = (88 + 91 + 110)/3;
// Adding requirement: minimum score of 100
const minimumScore = 100;
// Compare
if (dolphinsScore > koalasScore && dolphinsScore >= minimumScore) {
    console.log(`Dolphins win the competition!\nDolphins's score: ${dolphinsScore} and Koalas's score: ${koalasScore}.`);
} else if (dolphinsScore < koalasScore && koalasScore >= minimumScore) {
    console.log(`Koalas win the competition!\nDolphins's score: ${dolphinsScore} and Koalas's score: ${koalasScore}.`);
} else if (dolphinsScore === koalasScore && koalasScore >= minimumScore) {
    console.log(`Draw!\nDolphins's score: ${dolphinsScore} and Koalas's score: ${koalasScore}.`);
} else {
    console.log(`require minimum score of ${minimumScore}.`);
}


/**
 * ------------------------------------------------------------------------
 * CHALLENGE 4
 * ------------------------------------------------------------------------
 * Steven wants to build a very simple tip calculator for whenever he goes eating in a
 * restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
 * 300. If the value is different, the tip is 20%.
 *
 * Data 1: Test for bill values 275, 40 and 430
 */

console.log('----- Challenge 4: simple tip calculator -----');
let stevenBill = 275 + 40 + 430
// if (stevenBill >= 50 && stevenBill <= 300) {
//     console.log(`Steven's bill was ${stevenBill}, the tip was ${stevenBill * 0.15} and the total was ${stevenBill * 1.15}.`);
// } else {
//     console.log(`Steven's bill was ${stevenBill}, the tip was ${stevenBill * 0.2} and the total was ${stevenBill * 1.2}.`);
// }

// 300<= stevenBill >=50 ? console.log(`Steven's bill was ${stevenBill}, the tip was ${stevenBill * 0.15} and the total was ${stevenBill * 1.15}.`) : console.log(`Steven's bill was ${stevenBill}, the tip was ${stevenBill * 0.2} and the total was ${stevenBill * 1.2}.`);

const tip = stevenBill >= 50 && stevenBill <= 300 ? stevenBill * 0.15 : stevenBill * 0.2;
console.log(`Steven's bill was ${stevenBill}, the tip was ${tip} and the total was ${stevenBill + tip}.`);