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

function arrayDiffVeryFast(arr, arrToCompare) {
  const result = [];
  arr.forEach((element) => {
    let status = true;
    arrToCompare.forEach((testEl) => {
      if (element === testEl) {
        status = false;
      }
    });
    if (status) {
      result.push(element);
    }
  });
  return result;
}

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

function isMerge(s, part1, part2) {
  if (s.length !== part1.length + part2.length) {
    return false;
  }
  if (!s.length) {
    return false;
  }

  if (part1[0] === s[0] && isMerge(s.slice(1), part1.slice(1), part2)) {
    return true;
  }

  if (part2[0] === s[0] && isMerge(s.slice(1), part1, part2.slice(1))) {
    return true;
  }
  return false;
}

console.log(
  'isMerge("dewars", "dwr", "eas"): ',
  isMerge("codewars", "cdwr", "oeas")
);
console.log(
  'isMerge("codewars", "code", "ckde"): ',
  isMerge("codewars", "code", "ckde")
);
console.log(
  'isMerge("Making progress", "Mak pross", "inggre"): ',
  isMerge("Making progress", "Mak pross", "inggre")
);
