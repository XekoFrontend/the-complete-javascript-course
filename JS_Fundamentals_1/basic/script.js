// link a JavaScript
let js= 'amazing';
// if (js === 'amazing') alert('JavaScript is fun');

let simpleMath = 50+6-7/8*9;
console.log(simpleMath);


/**
 * ------------------------------------------------------------------------
 * Quy tắc đặt tên Variables
 * ------------------------------------------------------------------------
    1. camelcase
    2. mổ tả rõ ràng
    3. không dùng số ở đầu, có thể dùng _ hoặc $
    4. chỉ chứa chữ cái, số hoặc 2 ký tự _ và $
    5. tránh dùng các từ khóa trùng với JavaScript, ví dụ: new, function ...
*/
let myFirstName = 'Haruka';
    // Trường hợp đặc biệt
let PI = 3.1415;


// assignments: Values and Variables
let myCountry = "Cambodia";
let myContient = "Asia";
let ourPopulation = 90;

console.log(myCountry);
console.log(myContient);
console.log(ourPopulation);

// ***** Value
let javascriptIsFun = true;
console.log("Show the type of a value: " + typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');
// change a value không cần dùng 'let'
javascriptIsFun = 'Yes! (❁´◡`❁)';
console.log(javascriptIsFun);
// vis dụ về biến có giá trị 'undefined'
let cuto;
console.log(cuto);
console.log(typeof cuto);

/**
 * ------------------------------------------------------------------------
 * 2 kiểu Khai báo variables thường dùng
 * ------------------------------------------------------------------------
 1. `let` cho phép bạn khai báo một biến có thể thay đổi giá trị sau này.
 2. `const` (constant) được sử dụng để khai báo một hằng số - nghĩa là giá trị không thể thay đổi sau khi được khởi tạo.

 */
// Có thể thay đổi values
let customerJob = 'Student';
// Cố định, không thay đổi
const customerAge = 25;

/**
 * ------------------------------------------------------------------------
 * Math Operator (phép toán)
 * ------------------------------------------------------------------------
 */
const futureYear = 2030;
const bithYearJonas = 1991;
const bithYearHaruka = 2011;
console.log("Jonas Age: ", futureYear - bithYearJonas, 'Haruka Age:', futureYear - bithYearHaruka);
// ***** lũy thừa 2**3 = 2*2*2
console.log(2 ** 3);
// ***** phép tính dồn
let ageHaruka = futureYear - bithYearHaruka; // = 19
ageHaruka += 10; // 19 + 10 = 29
ageHaruka -= 9; //20
ageHaruka /= 10; //2
// ***** tịnh tiến, thường dùng trong vòng lặp
ageHaruka ++; // 2 + 1 = 3
ageHaruka --; // 2
ageHaruka --; // 1
console.log(ageHaruka);

/**
 * ------------------------------------------------------------------------
 * Compare Operator (phép so sánh)
 * ------------------------------------------------------------------------
 * Thông thường sẽ lưu kết quả vào 1 biến
 */
const isCollectStudent= ageHaruka >= 18;
console.log(isCollectStudent);

/**
 * ------------------------------------------------------------------------
 * String and Template literals
 * ------------------------------------------------------------------------
 *  Sử dụng dấu ``
 *  ${tên biến, hoặc toán tử}
 *  dùng \n\ hoặc enter trực tiếp để xuống dòng.
 */
const lastName = 'Miku';
const userInfo = `----- String and Template literals -----\n\
Her name is ${myFirstName} and her last name is ${lastName}.
- she comes from ${myContient}.
- she is a ${customerJob}.`;
console.log(userInfo);


/**
 * ------------------------------------------------------------------------
 * Convert
 * ------------------------------------------------------------------------
 * Chú ý: viết hoa chữ cái trong các hàm chuyển đổi
 *      - Number
 *      - String
 * Không thể convert các value: null, undefined.
 */

// Type conversion
const year = '1991';
const month = 12;
console .log(Number(year) + month); //2003 <- number
console.log(year + month); // 199112 <- string
console.log(Number('Doremon')); // NaN <- Not a Number
console.log(year + String(month)); // 199112 <- string

// Type coercion (JavaScript tự động chuyển đổi cưỡng chế khi có 2 kiểu dữ liệu khác nhau, khi dùng operation)
// +
console.log('She is ' + 25 + ' years old.'); // string
// The rest (auto convert to number)
console.log('52' - 25 - '7');        // 20 <-number
console.log('34'/ '2');              // 17
console.log('57' * '2' / 6 - '4');   // 15

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
const year2 = 2993;
let century;
if (year2 > 2000){
    century = 21;
} else {
    century = 20;
}
console.log(century);

/**
 * ------------------------------------------------------------------------
 * Truthy and Falsy Values
 * ------------------------------------------------------------------------
 *  Trong boolean operator thì 5 giá trị dưới sẽ cho kết quả false.
 *  Ngoài 5 cái đó thì còn lại tự động là 'true'.
 *  5 falsy values: 0, undefined, '', null, NaN
 */

// example 1: the zero number
const height = 0;
if (height) {
    console.log("It's true because the height is a non-zero number.");
} else {
    console.log("It's false because the height is 0");
}
// example 2: Null
const weight = '';
if(weight){
    console.log('True');
}else {
    console.log('It\'s false because the variable is Null.');
}

/**
 * ------------------------------------------------------------------------
 * == vs ===
 * ------------------------------------------------------------------------
 * Toán tử	Ý nghĩa	kiểu dữ liệu?	Dùng khi nào?
 * =	    Gán	    ❌ Không	    Khi gán giá trị
 * ==	    So sánh	❌ Không	    Khi không quan tâm kiểu dữ liệu
 * ===	    So sánh	✅ Có	        Khi cần so sánh chính xác cả kiểu và giá trị
 * Pro Tip: Khi so sánh ưu tiên dùng === cho dễ debug. Giả vờ như == không tồn tại
 */
console.log('----- == vs === -----');
const newAge = '18';
if (newAge === 18) console.log('Strick: Khi cần so sánh chính xác cả kiểu và giá trị.');
if (newAge == 18) console.log('Loose: không quan tâm kiểu dữ liệu.');

// example prompt, if block
/*
const inputNumber = Number(prompt('Enter a number'));

if (inputNumber === 3) {
    console.log(`Correct! The number is ${inputNumber}`);
} else if (inputNumber === 5) {
    console.log(`${inputNumber} is cool, but too high.`);
} else if (inputNumber === 1) {
    console.log(`${inputNumber} is too low.`);
} else {
    console.log(`${inputNumber} is not our number.`);
}

if (inputNumber != 3) {
    console.log('try again.');
}
 */

/**
 * ------------------------------------------------------------------------
 * Logical Operators
 * ------------------------------------------------------------------------
 * - AND: &&
 * - OR:  ||
 * - NOT: !
 */
const hasDriversLicense = true; // Điều kiện A
const hasGoodVision = true;     // Điều kiện B
const isTired = false;           //Điều kiện C

const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;
if (shouldDrive) {
    console.log('You can drive.');
} else {
    console.log('You can\'t drive.');
}


/**
 * ------------------------------------------------------------------------
 * The switch Statement
 * ------------------------------------------------------------------------
 */
/*
console.log('----- The switch Statement -----');
const yourDay = prompt('Enter your day: ');
switch(yourDay){
    case 'monday':
        console.log('Thứ hai là ngày đầu tuần\n' +
            'Bé hứa cố gắng chăm ngoan');
        break;
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
        console.log('Thứ ba thứ tư thứ năm\n' +
            'Ngày nào cũng luôn cố gắng.');
        break;
    case 'friday':
    case 'saturday':
        console.log('Thứ sáu lại đến thứ bảy\n' +
            'Cô cho cháu phiếu bé ngoan');
        break;
    case 'sunday':
        console.log('Chủ nhật cả nhà đều vui\n' +
            'Là bé ngoan suốt tuần.');
        break;
    default:
        console.log('Enter a valid day. From monday to sunday');
}
*/


/**
 * ------------------------------------------------------------------------
 * If viết tắt
 * ------------------------------------------------------------------------
 */

const ageChecking = 18;

// statement
ageChecking >= 18 ? console.log('You can start driving license.') : console.log(`You have to wait for ${18 - ageChecking} years.`);

// expression: Quan trọng, dùng nhiều.
const drink = ageChecking >= 18 ? 'Wine 🍷' : 'Water 💧';
console.log(drink);

// Dùng trong template literal.
console.log(`You can drink ${ageChecking >= 18 ? 'wine 🍷' : 'water 💧'}.`);
