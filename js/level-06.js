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

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// function duplicateEncode(word) {
//   const arr = word.toLowerCase().split("");
//   const test = {};
//   for (let i = 0; i < arr.length; ++i) {
//     let symbol = arr[i];
//     if (test[symbol] !== undefined) {
//       test[symbol] = false;
//     } else {
//       test[symbol] = true;
//     }
//   }
//   const result = arr
//     .map((item) => {
//       return test[item] ? "(" : ")";
//     })
//     .join("");
//   return result;
// }

// function duplicateEncode(word) {
//   return word
//     .toLowerCase()
//     .split("")
//     .map(function (a, i, w) {
//       return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
//     })
//     .join("");
// }

// console.log('duplicateEncode("din");: ', duplicateEncode("din"));
// console.log('duplicateEncode("recede");: ', duplicateEncode());
// console.log('duplicateEncode("Success");: ', duplicateEncode("Success"));
// console.log('duplicateEncode("(( @");: ', duplicateEncode("(( @"));

// const word = "Recede";
// const arr = word.toLowerCase().split("");
// const getCheck = arr.reduce((acc, el) => {
//   acc[el] = (acc[el] || 0) + 1;
//   return acc;
// }, {});
// console.log("getCheck: ", getCheck);
// Консоль выводит  {r: 1, e: 3, c: 1, d: 1}

// ----------------------------------------------------------------------------------

// function expandedForm(num) {
//   const reverseNumArr = num.toString().split("").reverse();
//   const result = reverseNumArr
//     .map((number, i) => number * Math.pow(10, i))
//     .filter((number) => number > 0)
//     .reverse()
//     .join(" + ");
//   return result;
// }

// console.log("expandedForm(12): ", expandedForm(12));
// Should return '10 + 2'
// console.log("expandedForm(42): ", expandedForm(42));
// Should return '40 + 2'
// console.log("expandedForm(70304): ", expandedForm(70304));
// Should return '70000 + 300 + 4'

// ----------------------------------------------------------------------------------

// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

// function validParentheses(str) {
//   const stack = [];
//   for (let i = 0; i < str.length; i += 1) {
//     const bracket = str[i];
//     if (bracket === "(") {
//       stack.push(bracket);
//     } else {
//       const lastEl = stack.pop();
//       if (!lastEl) return false;
//     }
//   }
//   if (stack.length > 0) return false;
//   return true;
// }

// console.log(
//   'validParentheses("(())((()())())"): ',
//   validParentheses("(())((()())())")
// );
// console.log('validParentheses(")(()))"): ', validParentheses(")(()))"));

// Второй более тяжелый вариант когда скобки разного вида
// Examples
// "([]([]){[()]})"   =>  true
// ")(()))"          =>  false

// function validParentheses(str) {
//   const stack = [];

//   const obj = {
//     "(": ")",
//     "[": "]",
//     "{": "}",
//   };

//   for (let i = 0; i < str.length; i += 1) {
//     const bracket = str[i];
//     if (bracket === "(" || bracket === "[" || bracket === "{") {
//       stack.push(bracket);
//     } else {
//       const lastEl = stack.pop();
//       if (bracket !== obj[lastEl]) return false;
//     }
//   }
//   if (stack.length > 0) return false;
//   return true;
// }
// console.log('validParentheses("({[])}"): ', validParentheses("({[])}"));
// console.log(
//   'validParentheses("([]([]){[()]})"): ',
//   validParentheses("([]([]){[()]})")
// );

// ----------------------------------------------------------------------------------

// function withoutRepeat(arr) {
//   const uniqueValues = [];
//   for (let i = 0; i < arr.length; i++) {
//     const currentItem = arr[i];
//     let count = 0;
//     console.log("currentItem: ", currentItem);
//     for (let j = 0; j < arr.length; j++) {
//       const testItem = arr[j];
//       console.log("testItem: ", testItem);
//       if (currentItem === testItem) {
//         count += 1;
//       }
//     }
//     if (count === 1) {
//       uniqueValues.push(currentItem);
//     }
//   }
//   return uniqueValues;
// }

// Второй вариант решения(без цикла в цикле)
// function withoutRepeat(arr) {
//   const uniqueValues = [];
//   const obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     const currentItem = arr[i];
//     if (!(currentItem in obj)) {
//       obj[currentItem] = 1;
//     } else {
//       obj[currentItem] += 1;
//     }
//   }
//   const keys = Object.keys(obj);
//   keys.forEach((key) => {
//     if (obj[key] === 1) uniqueValues.push(key);
//   });
//   return uniqueValues;
// }

// console.log("withoutRepeat(arr): ", withoutRepeat([1, 1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 8]));
// ----------------------------------------------------------------------------------

// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

function deleteNth(array, n) {
  const resArray = [];
  const obj = {};

  for (let i = 0; i < array.length; i++) {
    const currentEl = array[i];
    console.log("currentEl: ", currentEl);
    if (!(currentEl in obj)) {
      obj[currentEl] = 1;
      console.log("obj[currentEl]: ", obj[currentEl]);
      resArray.push(currentEl);
    } else {
      if (obj[currentEl] < n) {
        obj[currentEl] += 1;
        resArray.push(currentEl);
      }
    }
    console.log("obj: ", obj);
  }
  return resArray;
}

console.log("deleteNth([20,37,20,21]: ", deleteNth([20, 37, 20, 21], 1));
console.log(
  "deleteNth([1,2,3,1,2,1,2,3]: ",
  deleteNth([1, 2, 3, 1, 2, 1, 2, 3], 2)
);
