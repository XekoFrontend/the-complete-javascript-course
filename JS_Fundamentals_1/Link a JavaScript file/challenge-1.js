/**
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