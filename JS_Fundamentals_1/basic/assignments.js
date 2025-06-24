console.log('******* ASSIGNMENTS *******');
/**
 * ------------------------------------------------------------------------
 * LECTURE: Values and Variables
 * ------------------------------------------------------------------------
  */

const country = "Cambodia";
const continent = "Asia";
let population = 90;

console.log(country);
console.log(continent);
console.log(population);

/**
 * ------------------------------------------------------------------------
 * LECTURE: Data Types
 * ------------------------------------------------------------------------
 */

const isIsland = true;
let language;
console.log(
    typeof(language),
    typeof (population),
    typeof(country),
    typeof (isIsland),
);

/**
 * ------------------------------------------------------------------------
 * LECTURE: let, const and var
 * ------------------------------------------------------------------------
 */
language = 'Vietnamese';

/**
 * ------------------------------------------------------------------------
 * LECTURE: Basic Operators
 *          Strings and Template Literals
 * ------------------------------------------------------------------------
 */

let halfPopulation = population / 2;
console.log(`My population in half country is ${halfPopulation} millions people.`);
population += 1;
console.log(population);
console.log(`My country has more ${population - 6} million people than Finland.`);
let description = `${myCountry} is in ${myContient}, and its ${population} million people speak ${language}.`;
console.log(description)

/**
 * ------------------------------------------------------------------------
 * LECTURE:  if / else Statements
 * ------------------------------------------------------------------------
 */
const averagePopulation = 33
const compareToAverage = population - averagePopulation;
if (compareToAverage < 0) {
    console.log(`${myCountry}'s is ${population} million below average.`);
} else {
    console.log(`${myCountry}'s population is above average.`);
}

/**
 * ------------------------------------------------------------------------
 * LECTURE:  Type Conversion and Coercion
 * ------------------------------------------------------------------------
 */

const question1 = '9' - '5' // 4
const question2 = '19' - '13' + '17' // 617
const question3 = '19' - '13' + 17 // 23
const question4 = '123' < '57' // false
const  question5 = 5 + 6 +'4' + 9 - 4 -2 // 1143
console.log(`${question1},
${question2},
${question3},
${question4},
${question5}`);
// question4: dựa trên mã Unicode so sánh ký tự đầu tiên. Vì '1' < '5' nên '123' < '57' là true