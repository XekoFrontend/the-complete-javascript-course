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

