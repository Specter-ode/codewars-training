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

function test(totalRange, ranges, n) {
  const obj = {};
  ranges.forEach((element, index) => {
    console.log("element: ", element);
    let test = [element];

    ranges.forEach((el, i) => {
      console.log("index: ", index);
      console.log("i: ", i);
      if (test.length < n && i > index) {
        console.log("индекс который сработал: ", i);
        test.push(el);
      }
      console.log("test: ", test);
      if (test.length === n && !(test in obj)) {
        obj[test] = test.reduce((a, b) => a + b);
        console.log("obj[test]: ", obj[test]);
        test = [element];
      }
    });
  });

  const array = [];
  for (let range in obj) {
    array.push([[range], obj[range]]);
  }
  console.log("array: ", array);
  const result = array
    .filter((el) => el[1] < totalRange)
    .sort((a, b) => b[1] - a[1]);

  console.log(" obj: ", obj);
  console.log("result: ", result);

  return result[0][0];
}

console.log(
  "test( 27, [10, 15, 12, 14], 2): ",
  test(27, [10, 15, 12, 14, 18], 2)
);
