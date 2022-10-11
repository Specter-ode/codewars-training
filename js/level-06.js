// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
// Examples
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// function digitalRoot(n) {
//   let str = n.toString();
//   let arr = str.split("");
//   let sum = 0;

//   while (arr.length > 1) {
//     for (let i = 0; i < arr.length; i++) {
//       sum += Number(arr[i]);
//     }
//     str = sum.toString();
//     arr = str.split("");
//     sum = 0;
//   }
//   let res = 0;
//   if (arr.length === 1) res = Number(...arr);
//   return res;
// }
// console.log("digitalRoot(493193): ", digitalRoot(493193));

// ----------------------------------------------------------------------------------

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"

// function order(words) {
//   return words
//     .split(" ")
//     .sort((a, b) => a.match(/\d+/)[0] - b.match(/\d+/)[0])
//     .join(" ");
// }

// console.log("result: ", order("4of Fo1r pe6ople g3ood th5e the2"));

// ----------------------------------------------------------------------------------

// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
// For example, take 153 (3 digits), which is narcisstic:
//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:
//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language

// function narcissistic(value) {
//   const arr = value.toString().split("");
//   const degree = arr.length;
//   const result = arr
//     .map((item) => Math.pow(item, degree))
//     .reduce((acc, item) => acc + item, 0);
//   return result === value;
// }

// console.log("narcissistic(153);: ", narcissistic(153));
// console.log("narcissistic(1652): ", narcissistic(1652));

// ----------------------------------------------------------------------------------
