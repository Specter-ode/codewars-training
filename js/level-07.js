// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false
// "000000" --> true

// function validatePIN(pin) {
//   const arr = pin.split("");
//   const checkLength = arr.length === 4 || arr.length === 6;
//   const test = arr.map((el) => (el === " " ? true : isNaN(Number(el))));
//   return checkLength && !test.includes(true);
// }

// function validatePIN(pin) {
//   const checkLength = pin.length === 4 || pin.length === 6;
//   const numMatch = /^[0-9]/g;
//   let er = /^-?[0-9]+$/;
//   if (er.test(pin)) {
//     if (checkLength && pin.match(numMatch)) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log('validatePIN("123 ");: ', validatePIN("-123"));
// console.log('validatePIN("123");: ', validatePIN("123"));
// console.log('validatePIN("4f67"): ', validatePIN("4f67"));
// console.log('validatePIN("4067");: ', validatePIN("4067"));
// console.log('validatePIN("654f67"): ', validatePIN("654f67"));
// console.log('validatePIN("411167"): ', validatePIN("411167"));
// console.log('validatePIN("00000"): ', validatePIN("00000"));

// ----------------------------------------------------------------------------------

// You might know some pretty large perfect squares. But what about the NEXT one?
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
// Examples:(Input --> Output)
// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

// function findNextSquare(sq) {
//   const sqrt = Math.sqrt(sq);
//   return Number.isInteger(sqrt) ? Math.pow(sqrt + 1, 2) : -1;
// }

// console.log("findNextSquare(625): ", findNextSquare(625));
// console.log("findNextSquare(121): ", findNextSquare(121));
// console.log("findNextSquare(114): ", findNextSquare(114));
