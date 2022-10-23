// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

// function generateHashtag(str) {
//   const normalizArr = str
//     .trim()
//     .split(" ")
//     .filter((el) => el.length > 0);
//   const normalizeStr = normalizArr.join("");
//   if (normalizeStr.length === 0 || normalizeStr.length >= 140) {
//     return false;
//   }
//   const result =
//     "#" +
//     normalizArr.map((el) => el[0].toUpperCase() + el.substring(1)).join("");
//   return result;
// }

// console.log(
//   'generateHashtag("    Hello     World   "): ',
//   generateHashtag("    Hello     World   ")
// );
// console.log(
//   'generateHashtag("Do We have A Hashtag"): ',
//   generateHashtag("Do We have A Hashtag")
// );
// ----------------------------------------------------------------------------------

// DESCRIPTION:
// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

// Examples:

// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

// ----------------------------------------------------------------------------------

// function cakes(recipe, available) {
//   let availableIngredient = Object.keys(available);
//   let recipeIngredient = Object.keys(recipe);
//   const res = [];
//   for (let i = 0; i < recipeIngredient.length; i++) {
//     const ingredient = recipeIngredient[i];
//     if (!availableIngredient.includes(ingredient)) {
//       return 0;
//     } else {
//       const count = Math.floor(available[ingredient] / recipe[ingredient]);
//       res.push(count);
//     }
//   }
//   return Math.min(...res);
// }

// console.log(
//   "cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}): ",
//   cakes(
//     { flour: 500, sugar: 200, eggs: 1 },
//     { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
//   )
// );

// console.log(
//   "cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}): ",
//   cakes(
//     { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
//     { sugar: 500, flour: 2000, milk: 2000 }
//   )
// );

// ----------------------------------------------------------------------------------

// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring
//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
// In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.

// function score(dice) {
//   const obj = {};

//   dice.forEach((el) => {
//     if (obj[el]) {
//       obj[el] += 1;
//     } else {
//       obj[el] = 1;
//     }
//   });

//   let result = 0;
//   dice.forEach((item) => {
//     if (obj[item] >= 3) {
//       obj[item] -= 3;
//       if (item === 1) {
//         result += item * 1000;
//       } else {
//         result += item * 100;
//       }
//     }

//     if (obj[item] > 0) {
//       if (item === 1) {
//         obj[item] -= 1;
//         result += item * 100;
//       }
//       if (item === 5) {
//         obj[item] -= 1;
//         result += item * 10;
//       }
//     }
//   });
//   return result;
// }

// console.log("score( [4, 4, 4, 3, 3]): ", score([4, 4, 4, 3, 3]));
// console.log("score( [2, 3, 4, 6, 2]): ", score([2, 3, 4, 6, 2]));
// ----------------------------------------------------------------------

// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
// Notes:
// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

// function scramble(str1, str2) {
//   const arr1 = str1.split("");
//   const arr2 = str2.split("");
//   let result = true;
//   arr2.forEach((el) => {
//     if (arr1.includes(el)) {
//       const index = arr1.indexOf(el);
//       arr1.splice(index, 1);
//     } else {
//       result = false;
//     }
//   });
//   return result;
// }

// function scramble(str1, str2) {
//   const arr1 = str1.split("");
//   const arr2 = str2.split("");
//   const obj = {};

//   arr1.forEach((el) => {
//     if (!(el in obj)) {
//       obj[el] = 1;
//     } else {
//       obj[el]++;
//     }
//   });

//   const result = arr2.every((el) => {
//     obj[el] -= 1;
//     return obj[el] >= 0;
//   });
//   return result;
// }

// console.log('scramble("rkwqodl", "world"): ', scramble("rkwqodl", "world"));
// console.log(
//   'scramble("cedewaraaossoqqyt", "codewars"): ',
//   scramble("cedewaraaossoqqyt", "codewars")
// );
// console.log(
//   "(scramble(scriptjavx, javascript ): ",
//   scramble("scriptjavx", "javascript")
// );

// ----------------------------------------------------------------------
// DESCRIPTION:
// John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper a list of distances between these towns. ls = [50, 55, 57, 58, 60]. John is tired of driving and he says to Mary that he doesn't want to drive more than t = 174 miles and he will visit only 3 towns.

// Which distances, hence which towns, they will choose so that the sum of the distances is the biggest possible to please Mary and John?

// Example:
// With list ls and 3 towns to visit they can make a choice between: [50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60].

// The sums of distances are then: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.

// The biggest possible sum taking a limit of 174 into account is then 173 and the distances of the 3 corresponding towns is [55, 58, 60].

// The function chooseBestSum (or choose_best_sum or ... depending on the language) will take as parameters t (maximum sum of distances, integer >= 0), k (number of towns to visit, k >= 1) and ls (list of distances, all distances are positive or zero integers and this list has at least one element). The function returns the "best" sum ie the biggest possible sum of k distances less than or equal to the given limit t, if that sum exists, or otherwise nil, null, None, Nothing, depending on the language. In that case with C, C++, D, Dart, Fortran, F#, Go, Julia, Kotlin, Nim, OCaml, Pascal, Perl, PowerShell, Reason, Rust, Scala, Shell, Swift return -1.

// Examples:
// ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163

// xs = [50] choose_best_sum(163, 3, xs) -> nil (or null or ... or -1 (C++, C, D, Rust, Swift, Go, ...)

// ys = [91, 74, 73, 85, 73, 81, 87] choose_best_sum(230, 3, ys) -> 228

// Notes:
// try not to modify the input list of distances ls
// in some languages this "list" is in fact a string (see the Sample Tests).

// function chooseBestSum(totalRange, n, rangesList) {
//   let biggestCount = 0;
//   const recurseTowns = function (townsSoFar, lastIndex) {
//     townsSoFar = townsSoFar || [];
//     if (townsSoFar.length === n) {
//       let sumDistance = townsSoFar.reduce((a, b) => a + b);
//       if (sumDistance <= totalRange && sumDistance > biggestCount) {
//         biggestCount = sumDistance;
//       }
//       return;
//     }
//     for (let i = lastIndex + 1 || 0; i < rangesList.length; i++) {
//       recurseTowns(townsSoFar.concat(rangesList[i]), i);
//     }
//   };
//   recurseTowns();

//   return biggestCount || null;
// }
// console.log(
//   "test( 167, 3, [50, 55, 56, 57, 58]: ",
//   chooseBestSum(163, 3, [50, 55, 56, 57, 58])
// );

// ----------------------------------------------------------------------

// DESCRIPTION:
// You are given a string containing 0's, 1's and one or more '?', where ? is a wildcard that can be 0 or 1.
// Return an array containing all the possibilities you can reach substituing the ? for a value.

// Examples
// '101?' -> ['1010', '1011']
// '1?1?' -> ['1010', '1110', '1011', '1111']

// function possibilities(str) {
//   const result = [];
//   function normalizer(string) {
//     if (string.includes("?")) {
//       let newstr1 = string.replace(/\?/, "0");
//       let newstr2 = string.replace(/\?/, "1");
//       normalizer(newstr1);
//       normalizer(newstr2);
//     } else {
//       result.push(string);
//     }
//   }
//   normalizer(str);
//   return result;
// }

// console.log("possibilities(1?10): ", possibilities("1?10"));
// console.log("possibilities(1?1??): ", possibilities("1?1??"));

// ----------------------------------------------------------------------

// DESCRIPTION:
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// function pigIt(str) {
//   const solution = [];
//   const arr = str.split(" ");
//   const test = arr.forEach((el) => {
//     const array = el.split("");
//     if (
//       (array.length === 1 && el === ".") || el === "," || el === "?" || el === "!") {
//       solution.push(el);
//     } else {
//       console.log("array: ", array);
//       const knife = array.splice(1, array.length - 1);
//       console.log("knife: ", knife);
//       console.log("array после ножа: ", array);
//       solution.push(knife.join("") + array + "ay");
//     }
//   });
//   return solution.join(" ");
// }

// console.log("pigIt(Pig latin is cool): ", pigIt("Pig latin is cool"));
// console.log("pigIt(O tempora o mores !): ", pigIt("O tempora o mores !"));

// ----------------------------------------------------------------------
// Moving Zeros To The End
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// function moveZeros(arr) {
//   const result = [];
//   const zeros = [];
//   arr.forEach((el) => {
//     if (el !== 0) {
//       result.push(el);
//     } else {
//       zeros.push(el);
//     }
//   });
//   return result.concat(zeros);
// }

// console.log(
//   '  moveZeros([false,1,0,1,2,0,1,3,"a"]): ',
//   moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])
// );

// ----------------------------------------------------------------------

// First non-repeating character
// DESCRIPTION:
// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.
// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.
// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.
// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

// function firstNonRepeatingLetter(str) {
//   const arr = str.split("");
//   const obj = {};
//   let key;
//   arr.forEach((el) => {
//     obj[el] ? (obj[el] += 1) : (obj[el] = 1);
//   });
//   for (key in obj) {
//     if ((key === "," || key === "." || key === "!" || key === "?") && obj[key] === 1) {
//       return key;
//     }
//     let keyLowerLetterCase = key === key.toLowerCase();
//     let keyUpperLetterCase = key === key.toUpperCase();
//     let isUpperCaseToo = arr.includes(key.toUpperCase());
//     let isLowerCaseToo = arr.includes(key.toLowerCase());
//     if (!((keyLowerLetterCase && isUpperCaseToo) || (keyUpperLetterCase && isLowerCaseToo)) && obj[key] === 1) {
//       return key;
//     }
//   }
//   return "";
// }

// function firstNonRepeatingLetter(string) {
//   let str = string.toLowerCase();
//   console.log("str: ", str);
//   for (let i = 0; i < str.length; i++) {
//     const symbol = str[i];
//     if (str.indexOf(symbol) === str.lastIndexOf(symbol)) {
//       return string[i];
//     }
//   }
//   return "";
// }
// console.log(
//   "firstNonRepeatingLetter(moonmenj): ",
//   firstNonRepeatingLetter("moonmenj")
// );

// console.log(
//   "firstNonRepeatingLetter(sTreSS): ",
//   firstNonRepeatingLetter("sTreSS")
// );
// console.log(
//   "firstNonRepeatingLetter(Go hang a salami, I'm a lasagna hog!): ",
//   firstNonRepeatingLetter("Go hang a salami, I'm a lasagna hog!")
// );
// ----------------------------------------------------------------------

// Product of consecutive Fib numbers
// The Fibonacci numbers are the numbers in the following integer sequence (Fn):
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...
// such as
// F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.
// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying
// F(n) * F(n+1) = prod.
// Your function productFib takes an integer (prod) and returns an array:
// [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
// depending on the language if F(n) * F(n+1) = prod.
// If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return
// [F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
// F(n) being the smallest one such as F(n) * F(n+1) > prod.
// Some Examples of Return:
// (depend on the language)
// productFib(714) # should return (21, 34, true),
//                 # since F(8) = 21, F(9) = 34 and 714 = 21 * 34
// productFib(800) # should return (34, 55, false),
//                 # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
// -----
// productFib(714) # should return [21, 34, true],
// productFib(800) # should return [34, 55, false],
// -----

// function fibonachi(n) {
//   if (n < 0) {
//     return 0;
//   }
//   if (n <= 2) {
//     return 1;
//   }
//   return fibonachi(n - 1) + fibonachi(n - 2);
// }

// function productFib(number) {
//   for (let i = 0; i < number; i++) {
//     if (fibonachi(i) * fibonachi(i + 1) === number) {
//       return [fibonachi(i), fibonachi(i + 1), true];
//     }
//     if (fibonachi(i) * fibonachi(i + 1) > number) {
//       return [fibonachi(i), fibonachi(i + 1), false];
//     }
//   }
// }
// console.log("productFib(714);: ", productFib(714));
// console.log("productFib(800);: ", productFib(1600));

// ----------------------------------------------------------------------
// Weight for weight
// My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.
// I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.
// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.
// Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?
// When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:
// 180 is before 90 since, having the same "weight" (9), it comes before as a string.
// All numbers in the list are positive numbers and the list can be empty.
// Example:
// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: "100 180 90 56 65 74 68 86 99"

// function orderWeight(str) {
//   const newArr = str.split(" ").map((weight) => {
//     const newTypeOfWeight = weight
//       .split("")
//       .reduce((acc, number) => acc + Number(number), 0);
//     return [weight, newTypeOfWeight];
//   });
//   const result = newArr
//     .sort((a, b) => {
//       if (a[1] === b[1]) {
//         return a[0].localeCompare(b[0]);
//       } else {
//         return a[1] - b[1];
//       }
//     })
//     .map((el) => el[0])
//     .join(" ");
//   return result;
// }

// console.log(
//   'orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"): ',
//   orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")
// );
// console.log(
//   ' orderWeight("56 65 74 100 99 68 86 180 90"): ',
//   orderWeight("56 65 74 100 99 68 86 180 90")
// );
// ----------------------------------------------------------------------

// Array.diff hero
// DESCRIPTION:
// You know about simple Array.diff task. Now try to solve enhanced version!
// Your goal in this kata is to implement a difference function, which subtracts one list from another.
// It should remove all values from list a, which are present in list b. Each element x in both arrays is integer and 0 ≤ x ≤ 25. And lengths of arrays can reach 5 000 000 elements.
// arrayDiffVeryFast([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from another:
// arrayDiffVeryFast([1,2,2,2,3],[2]) == [1,3]

// function arrayDiffVeryFast(arr, arrToCompare) {
//   const result = [];
//   arr.forEach((element) => {
//     let status = true;
//     arrToCompare.forEach((testEl) => {
//       if (element === testEl) {
//         status = false;
//       }
//     });
//     if (status) {
//       result.push(element);
//     }
//   });
//   return result;
// }

// function arrayDiffVeryFast(arr, arrToCompare) {
//   return arr.filter((value) => !arrToCompare.includes(value));
// }

// ----------------------------------------------------------------------

// function isMerge(s, part1, part2) {
//   if (s.length !== part1.length + part2.length) return false;
//   if (!s.length) return true;
//   const word = s
//     .split("")
//     .sort((a, b) => a.localeCompare(b))
//     .join("");
//   const symbols = (part1 + part2)
//     .split("")
//     .sort((a, b) => a.localeCompare(b))
//     .join("");
//   return word === symbols;
// }

// function isMerge(s, part1, part2) {
//   if (s.length !== part1.length + part2.length) {
//     return false;
//   }
//   if (!s.length) {
//     return false;
//   }

//   if (part1[0] === s[0] && isMerge(s.slice(1), part1.slice(1), part2)) {
//     return true;
//   }

//   if (part2[0] === s[0] && isMerge(s.slice(1), part1, part2.slice(1))) {
//     return true;
//   }
//   return false;
// }

// console.log(
//   'isMerge("dewars", "cdwr", "oeas"): ',
//   isMerge("codewars", "cdwr", "oeas")
// );
// console.log(
//   'isMerge("Making progress", "Mak pross", "inggre"): ',
//   isMerge("Making progress", "Mak pross", "inggre")
// );

// ----------------------------------------------------------------------
// Human Readable Time
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// function humanReadable(sec) {
//   const minute = 60;
//   const hour = minute * 60;
//   const hours = Math.floor(sec / hour);
//   if (hours > 99) {
//     return "99:59:59";
//   }
//   const HH = ("0" + hours).slice(-2);
//   const minutes = Math.floor((sec % hour) / minute);
//   const MM = ("0" + minutes).slice(-2);
//   const seconds = Math.floor((sec % hour) % minute);
//   const SS = ("0" + seconds).slice(-2);
//   return `${HH}:${MM}:${SS}`;
// }

// console.log("humanReadable(90): ", humanReadable(90000));
// console.log("humanReadable(3800): ", humanReadable(3700));

// ----------------------------------------------------------------------
// RGB To Hex Conversion
// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

// function rgb(r, g, b) {
//   function toHex(n) {
//     if (n > 255) {
//       n = 255;
//     }
//     if (n < 0) {
//       n = 0;
//     }
//     return ("0" + n.toString(16)).slice(-2).toUpperCase();
//   }
//   return toHex(r) + toHex(g) + toHex(b);
// }

// console.log("rgb(0,0,0): ", rgb(-444, 0, 0));
// console.log("rgb(255, 255, 255): ", rgb(255, 255, 255));
// console.log("rgb(300,255,255): ", rgb(300, 255, 255));
// console.log("rgb(148, 0, 211): ", rgb(148, 0, 211));

// ----------------------------------------------------------------------
// Calculating with Functions
// DESCRIPTION:
// This time we want to write calculations using functions and get the results. Let's have a look at some examples:
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:
// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

// const zero = (action) => (action ? action(0) : 0);
// const one = (action) => (action ? action(1) : 1);
// const two = (action) => (action ? action(2) : 2);
// const three = (action) => (action ? action(3) : 3);
// const four = (action) => (action ? action(4) : 4);
// const five = (action) => (action ? action(5) : 5);
// const six = (action) => (action ? action(6) : 6);
// const seven = (action) => (action ? action(7) : 7);
// const eight = (action) => (action ? action(8) : 8);
// const nine = (action) => (action ? action(9) : 9);

// function plus(secondNumber) {
//   return (firstNumber) => firstNumber + secondNumber;
// }
// function minus(secondNumber) {
//   return (firstNumber) => firstNumber - secondNumber;
// }
// function times(secondNumber) {
//   return (firstNumber) => firstNumber * secondNumber;
// }
// function dividedBy(secondNumber) {
//   return (firstNumber) => Math.floor(firstNumber / secondNumber);
// }

// console.log("four(plus(nine())): ", four(plus(nine())));
// console.log("five(dividedBy(six()): ", five(dividedBy(six())));

// ----------------------------------------------------------------------

// Maximum subarray sum
// DESCRIPTION:
// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.
// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

// function maxSequence(array) {
//   if (array.length === 0) {
//     return 0;
//   }
//   const newArr = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i; j < array.length; j++) {
//       const testArr = [...array].splice(i, array.length - j);
//       console.log("новый уникальный подмассив: ", testArr);
//       const sum = testArr.reduce((acc, number) => acc + number, 0);
//       console.log("сумма созданного подмассива: ", sum);
//       newArr.push([testArr, sum]);
//     }
//   }
//   newArr.sort((a, b) => b[1] - a[1]);
//   console.log("отсортированный newArr: ", newArr);
//   console.log("результат: ", newArr[0][1]);
//   if (newArr[0][1] < 0) {
//     return 0;
//   }
//   return newArr[0][1];
// }

// function maxSequence(arr) {
//   let maxSum = 0;
//   let subTotal = 0;
//   for (let number of arr) {
//     subTotal += number;
//     if (subTotal < 0) subTotal = 0;
//     if (subTotal > maxSum) maxSum = subTotal;
//   }
//   return maxSum;
// }
// console.log(
//   "[2, -1, 3] масимальное значение суммы всевозможных подмасивов: ",
//   maxSequence([2, -1, 3])
// );
// console.log(
//   "[7, 2, -1, 3] масимальное значение суммы всевозможных подмасивов: ",
//   maxSequence([7, 2, -1, 3])
// );
// ----------------------------------------------------------------------
// Rot13;
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// function rot13(message) {
//   const alpha =
//     "abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM";
//   const result = [];
//   const alphaArr = alpha.split("");
//   message.split("").forEach((symbol) => {
//     for (let i = 0; i < alphaArr.length; i++) {
//       if (alphaArr[i] === symbol) {
//         result.push(alphaArr[i + 13]);
//         return;
//       }
//       if (i === alphaArr.length - 1 && alphaArr[i] !== symbol) {
//         result.push(symbol);
//       }
//     }
//   });
//   return result.join("");
// }

// console.log("rot13(test): ", rot13("tes2t")); //return grf2g
// console.log("rot13(It's my 1st experience): ", rot13("It's my 1st experience")); //return Vg'f zl 1fg rkcrevrapr

// ----------------------------------------------------------------------

// Extract the domain name from a URL
// DESCRIPTION:
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

// function domainName(url) {
//   url = url.split("");
//   const indexProtocol = url.indexOf(":");
//   if (indexProtocol !== -1) {
//     url.splice(0, indexProtocol + 3);
//   }
//   const result = url.join("").split(".");
//   if (result[0] === "www") {
//     return result[1];
//   }
//   return result[0];
// }

// function domainName(url) {
//   return url
//     .replace("http://", "")
//     .replace("https://", "")
//     .replace("www.", "")
//     .split(".")[0];
// }
// console.log(
//   'domainName("http://gqn3x7qywza9dav0.name/error"): ',
//   domainName("http://gqn3x7qywza9dav0.name/error")
// );

// console.log('domainName("www.xakep.ru"): ', domainName("www.xakep.ru"));
// console.log(
//   'domainName("http://codewars.com"): ',
//   domainName("http://codewars.com")
// );

// ----------------------------------------------------------------------
// Your job is to write a function which increments a string, to create a new string.
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.
// function incrementString(str) {
//   const regex = /\d+/g;
//   const matches = str.match(regex);
//   if (!matches) {
//     return str + 1;
//   }
//   const lastIndex = matches.length - 1;
//   const matchesString = matches[lastIndex];
//   let result = (Number(matchesString) + 1).toString();

//   while (matchesString.length > result.length) {
//     result = "0" + result;
//   }
//   if (lastIndex !== 0) {
//     return (
//       str
//         .split("")
//         .slice(0, str.length - matchesString.length)
//         .join("") + result
//     );
//   }
//   return str.replace(matchesString, result);
// }

// console.log('incrementString("fo99obar99");: ', incrementString("fo99obar99"));
// console.log(' incrementString("foobar23"): ', incrementString("foobar23"));
// console.log('incrementString("foo099");: ', incrementString("foo099"));
// console.log('incrementString("foo0042");: ', incrementString("foo0042"));
// ----------------------------------------------------------------------

// Number of trailing zeros of N!
// Write a program that will calculate the number of trailing zeros in a factorial of a given number.
// N! = 1 * 2 * 3 *  ... * N
// Be careful 1000! has 2568 digits...
// Examples
// zeros(6) = 1
// # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero
// zeros(12) = 2
// # 12! = 479001600 --> 2 trailing zeros

// function zeros(n) {
//   let result = 0;
//   function factorial(n) {
//     return n != 1 ? n * factorial(n - 1) : 1;
//   }
//   const resOfFactorial = factorial(n);
//   console.log("resOfFactorial: ", resOfFactorial);
//   const arr = resOfFactorial.toString().split("").reverse();
//   if (arr[0] !== "0") {
//     return 0;
//   }
//   for (let el of arr) {
//     if (el === "0") {
//       result++;
//     } else {
//       return result;
//     }
//   }
// }

// function zeros(n) {
//   if (n < 0) return -1;
//   let result = 0;
//   for (let i = 5; Math.floor(n / i) >= 1; i *= 5) {
//     result += Math.floor(n / i);
//   }
//   return result;
// }
// function zeros(n) {
//   let result = 0;
//   while (n > 0) {
//     n = Math.floor(n / 5);
//     result += n;
//   }
//   return result;
// }
// console.log("zeros(30): ", zeros(30));
// console.log("zeros(12): ", zeros(12));

// ----------------------------------------------------------------------

// Directions Reduction
// DESCRIPTION:
// Once upon a time, on a way through the old wild mountainous west,a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.
// Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!
// How I crossed a mountainous desert the smart way.
// The directions given to the man are, for example, the following (depending on the language):
// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
// or
// { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
// or
// [North, South, South, East, West, North, West]
// You can immediately see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:
// ["WEST"]
// or
// { "WEST" }
// or
// [West]
// Other examples:
// In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.
// The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).
// In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].
// Task
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).
// The Haskell version takes a list of directions with data Direction = North | East | West | South.
// The Clojure version returns nil when the path is reduced to nothing.
// The Rust version takes a slice of enum Direction {North, East, West, South}.
// See more examples in "Sample Tests:"
// Notes
// Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].

// function dirReduc(arr) {
//   const opposites = {
//     NORTH: "SOUTH",
//     EAST: "WEST",
//     SOUTH: "NORTH",
//     WEST: "EAST",
//   };
//   let iteration = 1;

//   return arr.reduce((acc, cur) => {
//     console.log("итерация: ", iteration);
//     iteration++;
//     console.log("acc: ", acc);
//     console.log("opposites[acc]: ", opposites[acc]);
//     console.log("opposites[acc.slice(-1)]: ", opposites[acc.slice(-1)]);
//     console.log("cur: ", cur);

//     return opposites[acc.slice(-1)] === cur ? acc.pop() : acc.push(cur), acc;
//   }, []);
// }

// console.log(
//   'dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]): ',
//   dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
// );

// ----------------------------------------------------------------------
// Perimeter of squares in a rectangle
// The drowing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80
// Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drowing:
// alternative text
// Hint:
// See Fibonacci sequence
// Ref:
// http://oeis.org/A000045
// The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.

// perimeter(5)  should return 80
// perimeter(7)  should return 216
// let it = 1;
// function perimeter(n) {
//   const array = [1, 1];
//   let newNumber = 0;
//   let sum = 2;
//   for (let i = 0; i < n - 1; i++) {
//     console.log("итеранция: ", it);
//     it++;
//     newNumber = array[i] + array[i + 1];
//     console.log("array[i]: ", array[i]);
//     console.log("array[i + 1]: ", array[i + 1]);
//     array.push(newNumber);
//     sum += newNumber;
//     console.log("sum: ", sum);
//     console.log("array: ", array);
//   }
//   return sum * 4;
// }

// console.log("perimeter(5): ", perimeter(5));
// console.log("perimeter(7): ", perimeter(7));
// ----------------------------------------------------------------------

// Sum of Pairs
// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.
// If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.
// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]

// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * the correct answer is the pair whose second value has the smallest index
// == [4, 2]
// let it = 1;

// function sumPairs(arr, n) {
//   console.log("arr: ", arr);
//   console.log("n: ", n);
//   const obj = {};
//   let result = null;
//   for (let i = 0; i < arr.length; i++) {
//     console.log("итерация: ", it);
//     it++;

//     const firstEl = arr[i];
//     console.log("firstEl: ", firstEl);
//     const secondEl = n - firstEl;
//     console.log("secondEl: ", secondEl);

//     for (let index = i + 1; index < arr.length; index++) {
//       const testEl = arr[index];
//       if (testEl === secondEl) {
//         obj[index] = [firstEl, secondEl];

//         break;
//       }
//     }
//     console.log("obj: ", obj);
//     result = Object.entries(obj).sort((a, b) => a[0] - b[0]);
//     console.log("result: ", result);
//   }
//   if (result.length > 0) {
//     return result[0][1];
//   }
//   console.log("result: ", result);
//   return undefined;
// }

// function sumPairs(arr, n) {
//   const obj = {};

//   for (let i = 0; i < arr.length; ++i) {
//     console.log("итерация: ", it);
//     it++;
//     const el = arr[i];
//     console.log("el: ", el);
//     if (obj[n - el]) {
//       return [n - el, el];
//     }
//     obj[el] = true;
//     console.log("obj: ", obj);
//   }
// }

// console.log(
//   "sumPairs([1, 4, 8, 7, 3, 15], 8); : ",
//   sumPairs([1, 4, 8, 7, 3, 15], 8)
// ); // return [1, 7]
// console.log(
//   "sumPairs([ 10, 5, 2, 3, 7, 5 ], 10); : ",
//   sumPairs([10, 5, 2, 3, 7, 5], 10)
// ); // return [3, 7]

// console.log("sumPairs([ 20, -13, 40 ], -7); : ", sumPairs([20, -13, 40], -7)); // return undefined

// console.log(
//   "sumPairs([1, 2, 3, 4, 1, 0], 2); : ",
//   sumPairs([1, 2, 3, 4, 1, 0], 2)
// ); // return [1, 1]

// ----------------------------------------------------------------------
// Pick peaks
// DESCRIPTION:
// In this kata, you will write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.
// For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5).
// The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be {pos: [], peaks: []}.
// Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]} (or equivalent in other languages)
// All input arrays will be valid integer arrays (although it could still be empty), so you won't need to validate the input.
// The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).
// Also, beware of plateaus !!! [1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] and [1, 2, 2, 2, 2] do not. In case of a plateau-peak, please only return the position and value of the beginning of the plateau. For example: pickPeaks([1, 2, 2, 2, 1]) returns {pos: [1], peaks: [2]} (or equivalent in other languages)
// Have fun!

// function pickPeaks(arr) {
//   const res = [];
//   const posArr = [];
//   const peaksArr = [];
//   let test;
//   for (let i = 1; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i - 1] && arr[i] >= arr[i + 1]) {
//       if (arr[i] > arr[i + 1]) {
//         test = true;
//       } else {
//         for (let j = i + 1; j < arr.length; j++) {
//           const element = arr[j];
//           if (element < arr[i]) {
//             test = true;
//             break;
//           }
//           if (element > arr[i]) {
//             test = false;
//             break;
//           }
//           if (j === arr.length - 1 && arr[i] === arr[arr.length - 1]) {
//             test = false;
//           } else {
//             test = true;
//           }
//         }
//       }
//     }
//     if (test) {
//       res.push([i, arr[i]]);
//       test = false;
//     }
//   }
//   res.forEach((el) => {
//     posArr.push(el[0]);
//     peaksArr.push(el[1]);
//   });
//   return { pos: posArr, peaks: peaksArr };
// }

// console.log(
//   " pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1]: ",
//   pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1])
// );
// console.log(
//   "pickPeaks([1, 3, 6, 4, 1, 2, 3, 1]): ",
//   pickPeaks([1, 3, 6, 4, 1, 2, 3, 1])
// );

// console.log(
//   "pickPeaks([ 2, 1, 3, 1,2, 2, 2, 2])",
//   pickPeaks([2, 1, 3, 1, 2, 2, 2, 2])
// );

// ----------------------------------------------------------------------
// PaginationHelper;
// DESCRIPTION:
// For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.
// The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.
// The following are some examples of how this class is used:

// const helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
// helper.pageCount(); //should == 2
// helper.itemCount(); //should == 6
// helper.pageItemCount(0); //should == 4
// helper.pageItemCount(1); // last page - should == 2
// helper.pageItemCount(2); // should == -1 since the page is invalid

// // pageIndex takes an item index and returns the page that it belongs on
// helper.pageIndex(5); //should == 1 (zero based index)
// helper.pageIndex(2); //should == 0
// helper.pageIndex(20); //should == -1
// helper.pageIndex(-10); //should == -1

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
// function PaginationHelper(collection, itemsPerPage) {
//   this.collection = collection;
//   this.itemsPerPage = itemsPerPage;
// }

// // returns the number of items within the entire collection
// PaginationHelper.prototype.itemCount = function () {
//   return this.collection.length;
// };

// // returns the number of pages
// PaginationHelper.prototype.pageCount = function () {
//   return Math.ceil(this.collection.length / this.itemsPerPage);
// };

// // returns the number of items on the current page. page_index is zero based.
// // this method should return -1 for pageIndex values that are out of range
// PaginationHelper.prototype.pageItemCount = function (pageIndex) {
//   if (pageIndex + 1 < helper.pageCount()) {
//     return this.itemsPerPage;
//   } else if (pageIndex + 1 === helper.pageCount()) {
//     return this.collection.length % this.itemsPerPage;
//   } else {
//     return -1;
//   }
// };

// // determines what page an item is on. Zero based indexes
// // this method should return -1 for itemIndex values that are out of range
// PaginationHelper.prototype.pageIndex = function (itemIndex) {
//   const totalCount = helper.itemCount();
//   console.log("itemIndex: ", itemIndex);
//   console.log("totalCount: ", totalCount);
//   if (itemIndex >= 0 && itemIndex < totalCount) {
//     return Math.floor(itemIndex / this.itemsPerPage);
//   } else {
//     return -1;
//   }
// };

// const helper = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4);
// console.log("helper.itemCount();: ", helper.itemCount());
// console.log("helper.pageCount(): ", helper.pageCount());
// console.log("helper.pageItemCount(0): ", helper.pageItemCount(0));
// console.log("helper.pageItemCount(1): ", helper.pageItemCount(1));
// console.log("helper.pageItemCount(2): ", helper.pageItemCount(2));
// console.log("helper.pageIndex(5): ", helper.pageIndex(5));
// console.log("helper.pageIndex(2): ", helper.pageIndex(2));
// console.log("helper.pageIndex(20): ", helper.pageIndex(20));
// console.log("helper.pageIndex(-10): ", helper.pageIndex(-10));
// ----------------------------------------------------------------------
// Did I Finish my Sudoku ?
// Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter. If the board is valid return 'Finished!', otherwise return 'Try again!'
// Sudoku rules:
// Complete the Sudoku puzzle so that each and every row, column, and region contains the numbers one through nine only once.
// Rows:
// There are 9 rows in a traditional Sudoku puzzle. Every row must contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. There may not be any duplicate numbers in any row. In other words, there can not be any rows that are identical.
// In the illustration the numbers 5, 3, 1, and 2 are the "givens". They can not be changed. The remaining numbers in black are the numbers that you fill in to complete the row.
// Columns:
// There are 9 columns in a traditional Sudoku puzzle. Like the Sudoku rule for rows, every column must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Again, there may not be any duplicate numbers in any column. Each column will be unique as a result.
// In the illustration the numbers 7, 2, and 6 are the "givens". They can not be changed. You fill in the remaining numbers as shown in black to complete the column.
// Regions
// A region is a 3x3 box like the one shown to the left. There are 9 regions in a traditional Sudoku puzzle.
// Like the Sudoku requirements for rows and columns, every region must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Duplicate numbers are not permitted in any region. Each region will differ from the other regions.
// In the illustration the numbers 1, 2, and 8 are the "givens". They can not be changed. Fill in the remaining numbers as shown in black to complete the region.

// function checkRow(rowBoard) {
//   let result = true;
//   const rows = rowBoard.map((row) => {
//     const checkRowBoard = row.filter(
//       (value, i, arr) => arr.indexOf(value) === i && value > 0 && value <= 9
//     );
//     if (row.length !== checkRowBoard.length) {
//       return (result = false);
//     }
//   });
//   return result;
// }

// function createColumnBoard(board) {
//   let columnArr = [];
//   for (let i = 0; i < board.length; i++) {
//     const rowArr = board[i];

//     for (let j = 0; j < rowArr.length; j++) {
//       if (!columnArr[j]) {
//         columnArr[j] = [];
//       }
//       columnArr[j].push(rowArr[j]);
//     }
//   }
//   return columnArr;
// }

// let it = 1;
// let ij = 1;

// function createCubeBoard(board) {
//   let cubeArr = [];
//   for (let i = 0; i < board.length; i++) {
//     let k = -3;

//     console.log("итерация i: ", it);
//     it++;
//     ij = 0;
//     const rowArr = board[i];
//     for (let j = 0; j < board.length; j++) {
//       console.log("итерация j: ", ij);
//       ij++;
//       if (j % 3 === 0) {
//         k += 3;
//         console.log("k: ", k);
//       }

//       if (i % 3 === 0 && j % 3 === 0) {
//         console.log("создали массив с индексом:: ", Math.floor(i / 3) + j);
//         cubeArr[Math.floor(i / 3) + j] = [];
//       }
//       console.log("добавляем в  массив с индексом:: ", Math.floor(i / 3) + k);

//       cubeArr[Math.floor(i / 3) + k].push(rowArr[j]);

//       console.log("k после итерации j: ", k);
//     }
//   }
//   console.log("cubeArr: ", cubeArr);
//   return cubeArr;
// }

// function doneOrNot(board) {
//   const row = checkRow(board);
//   const column = checkRow(createColumnBoard(board));
//   const cube = checkRow(createCubeBoard(board));
//   return row && column && cube ? "Finished!" : "Try again!";
// }

// console.log(
//   "[5, 3, 4, 6, 7, 8, 9, 1, 2],  [6, 7, 2, 1, 9, 0, 3, 4, 9],  [1, 0, 0, 3, 4, 2, 5, 6, 0],  [8, 5, 9, 7, 6, 1, 0, 2, 0],  [4, 2, 6, 8, 5, 3, 7, 9, 1],  [7, 1, 3, 9, 2, 4, 8, 5, 6],[9, 0, 1, 5, 3, 7, 2, 1, 4],[2, 8, 7, 4, 1, 9, 6, 3, 5], [3, 0, 0, 4, 8, 1, 1, 7, 9]",
//   doneOrNot([
//     [0, 3, 4, 6, 7, 8, 9, 1, 0],
//     [6, 7, 2, 1, 9, 0, 3, 4, 9],
//     [1, 0, 0, 3, 4, 2, 5, 6, 0],
//     [8, 5, 9, 7, 6, 1, 0, 2, 0],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 0, 1, 5, 3, 7, 2, 1, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     [3, 0, 0, 4, 8, 1, 1, 7, 9],
//   ])
// ); //"Try again!";
// console.log(
//   "[5, 3, 4, 6, 7, 8, 9, 1, 2],[6, 7, 2, 1, 9, 5, 3, 4, 8],[1, 9, 8, 3, 4, 2, 5, 6, 7],[8, 5, 9, 7, 6, 1, 4, 2, 3],[4, 2, 6, 8, 5, 3, 7, 9, 1],[7, 1, 3, 9, 2, 4, 8, 5, 6],[9, 6, 1, 5, 3, 7, 2, 8, 4],[2, 8, 7, 4, 1, 9, 6, 3, 5],[3, 4, 5, 2, 8, 6, 1, 7, 9]",
//   doneOrNot([
//     [5, 3, 4, 6, 7, 8, 9, 1, 2],
//     [6, 7, 2, 1, 9, 5, 3, 4, 8],
//     [1, 9, 8, 3, 4, 2, 5, 6, 7],
//     [8, 5, 9, 7, 6, 1, 4, 2, 3],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 6, 1, 5, 3, 7, 2, 8, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     [3, 4, 5, 2, 8, 6, 1, 7, 9],
//   ])
// ); // "Finished!"
// ----------------------------------------------------------------------

// Is my friend cheating?
// A friend of mine takes the sequence of all numbers from 1 to n (where n > 0).
// Within that sequence, he chooses two numbers, a and b.
// He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
// Given a number n, could you tell me the numbers he excluded from the sequence?
// The function takes the parameter: n (n is always strictly greater than 0) and returns an array or a string (depending on the language) of the form:

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]
// with all (a, b) which are the possible removed numbers in the sequence 1 to n.
// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ... will be sorted in increasing order of the "a".
// It happens that there are several possible (a, b). The function returns an empty array (or an empty string) if no possible numbers are found which will prove that my friend has not told the truth! (Go: in this case return nil)

// function removeNb(n) {
//   const arr = [];
//   const result = [];
//   let number = 0;
//   let totalSum = 0;
//   while (number < n) {
//     number++;
//     arr.push(number);
//     totalSum += number;
//   }
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     const el = arr[i];
//     for (let j = 0; j < arr.length; j++) {
//       if (el !== arr[j]) {
//         sum = totalSum - el - arr[j];
//         if (el * arr[j] === sum) {
//           result.push([el, arr[j]]);
//         }
//       }
//     }
//   }
//   return result;
// }

// best variant

// function removeNb(n) {
//   const result = [];
//   const sum = (n * (n + 1)) / 2;
//   for (let b = n; b > 0; b--) {
//     // a * b = sum - a - b
//     // a * b + 1 = sum - b
//     // a * b + a * 1 = sum - b
//     // a(b + 1) = sum - b
//     const a = (sum - b) / (b + 1);
//     if (a > b) break; // this line reduce the number of unnecessary iterations
//     if (a < n && Number.isInteger(a)) {
//       result.push([a, b]);
//     }
//   }
//   [...result].reverse().forEach((el) => {
//     result.push([...el].reverse());
//   });
//   return result;
// }
// console.log("removeNb(100): ", removeNb(100)); // return [];
// console.log("removeNb(26): ", removeNb(26)); //return [15,21], [21, 15]
// console.log("removeNb(1000003): ", removeNb(1000003)); // [550320, 908566], [559756, 893250], [893250, 559756], [908566, 550320]
// ----------------------------------------------------------------------
// Count IP Addresses
// Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).
// All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

// function ipsBetween(start, end) {
//   const sum = (ip) =>
//     ip.split(".").reduce((acc, n) => acc * 256 + Number(n), 0);
//   return sum(end) - sum(start);
// }
// console.log(
//   'ipsBetween("170.0.0.0", "170.1.0.0", 65536);: ',
//   ipsBetween("170.0.0.0", "170.1.0.0")
// );
// console.log(
//   'ipsBetween("20.0.0.10", "20.0.1.0", 246);: ',
//   ipsBetween("20.0.0.10", "20.0.1.0")
// );
// console.log(
//   'ipsBetween("10.11.12.13", "10.11.13.0", 243);: ',
//   ipsBetween("10.11.12.13", "10.11.13.0")
// );

// ----------------------------------------------------------------------
// A Chain adding function
// We want to create a function that will add numbers together when called in succession.
// add(1)(2); // == 3
// We also want to be able to continue to add numbers to our chain.
// add(1)(2)(3); // == 6
// add(1)(2)(3)(4); //  == 10
// add(1)(2)(3)(4)(5); // == 15
// and so on.
// A single call should be equal to the number passed in.
// add(1); // == 1
// We should be able to store the returned values and reuse them.

// const addTwo = add(2);
// addTwo; // == 2
// addTwo + 5; // == 7
// addTwo(3); // == 5
// addTwo(3)(5); // == 10
// We can assume any number being passed in will be valid whole number.

// function add(n) {
//   const result = (x) => add(n + x);
//   result.valueOf = () => n;
//   return result;
// }

// console.log("add(1)(2)(3): -- 6", add(1)(2)(3));
// console.log("add(1)(2)(3)(4)(5), 15", add(1)(2)(3)(4)(5));
// ----------------------------------------------------------------------

// Josephus Permutation
// This problem takes its name by arguably the most important event in the life of the ancient historian Josephus: according to his tale, he and his 40 soldiers were trapped in a cave by the Romans during a siege.
// Refusing to surrender to the enemy, they instead opted for mass suicide, with a twist: they formed a circle and proceeded to kill one man every three, until one last man was left (and that it was supposed to kill himself to end the act).
// Well, Josephus and another man were the last two and, as we now know every detail of the story, you may have correctly guessed that they didn't exactly follow through the original idea.
// You are now to create a function that returns a Josephus permutation, taking as parameters the initial array/list of items to be permuted as if they were in a circle and counted out every k places until none remained.
// Tips and notes: it helps to start counting from 1 up to n, instead of the usual range 0..n-1; k will always be >=1.
// For example, with n=7 and k=3 josephus(7,3) should act this way.

// [1,2,3,4,5,6,7] - initial sequence
// [1,2,4,5,6,7] => 3 is counted out and goes into the result [3]
// [1,2,4,5,7] => 6 is counted out and goes into the result [3,6]
// [1,4,5,7] => 2 is counted out and goes into the result [3,6,2]
// [1,4,5] => 7 is counted out and goes into the result [3,6,2,7]
// [1,4] => 5 is counted out and goes into the result [3,6,2,7,5]
// [4] => 1 is counted out and goes into the result [3,6,2,7,5,1]
// [] => 4 is counted out and goes into the result [3,6,2,7,5,1,

function josephus(items, step) {
  const result = [];
  let i = 0;
  let k = 1;
  if (items.length < 1) return items;
  while (items.length !== 1) {
    if (k === step && i === items.length - 1) {
      result.push(items[i]);
      items.splice(i, 1);
      i = 0;
      k = 1;
    } else if (k === step && i != items.length - 1) {
      result.push(items[i]);
      items.splice(i, 1);
      k = 1;
    } else if (k < step && i === items.length - 1) {
      k++;
      i = 0;
    } else if (k < step && i !== items.length - 1) {
      k++;
      i++;
    }
  }
  result.push(items[0]);
  return result;
}
// console.log(
//   "josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2): ",
//   josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)
// );
console.log(
  'josephus (["C", "o", "d", "e", "W", "a", "r", "s"], 4): ',
  josephus(["C", "o", "d", "e", "W", "a", "r", "s"], 4)
); //['e', 's', 'W', 'o', 'C', 'd', 'r', 'a'])
// console.log(
//   "josephus ([ 1, 2, 3, 4, 5, 6, 7 ], 3): ",
//   josephus([1, 2, 3, 4, 5, 6, 7], 3)
// );
