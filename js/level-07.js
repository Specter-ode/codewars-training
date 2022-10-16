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
// ----------------------------------------------------------------------------------

// Count the number of divisors of a positive integer n.
// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

// function getDivisorsCnt(n) {
//   const arr = [];
//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//       arr.push(i);
//     }
//   }
//   return arr.length;
// }

// console.log("(getDivisorsCnt(54), ответ = 8: ", getDivisorsCnt(54));
// console.log("(getDivisorsCnt(10), ответ = 4: ", getDivisorsCnt(10));

// ----------------------------------------------------------------------------------
// Are the numbers in order?
// In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.
// For the purposes of this Kata, you may assume that all inputs are valid, i.e. arrays containing only integers.
// Note that an array of 0 or 1 integer(s) is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value.

// For example:
// inAscOrder([1,2,4,7,19]); // returns true
// inAscOrder([1,2,3,4,5]); // returns true
// inAscOrder([1,6,10,18,2,4,20]); // returns false
// inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order

// function inAscOrder(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     const prevEl = arr[i - 1] || -Infinity;
//     const currentEl = arr[i];
//     const nextEl = arr[i + 1];
//     if (!(prevEl < currentEl && currentEl < nextEl)) {
//       return false;
//     }
//   }
//   return true;
// }

// function inAscOrder(arr) {
//     for(let i = 0; i < arr.length - 1; i++) {
//         const currentEl = arr[i];
//         const nextEl = arr[i + 1] || Infinity;
//       if (currentEl > nextEl) {
//         return false;
//       }
//     }
//     return true;
//   }

// console.log("inAscOrder([1, 2, 4, 7, 19]): ", inAscOrder([1, 2, 4, 7, 19, 50]));
// console.log(
//   "inAscOrder([1, 6, 10, 18, 2, 4, 20]): ",
//   inAscOrder([1, 6, 10, 18, 2, 4, 20])
// );
// ----------------------------------------------------------------------------------
