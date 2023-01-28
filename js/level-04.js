// function transformToObj(arr) {
//   const obj = {};
//   arr.forEach((el) => {
//     obj[el] ? (obj[el] += 1) : (obj[el] = 1);
//   });
//   return obj;
// }
// ----------------------------------------------------------------------------------

// Range Extraction
// DESCRIPTION:
// A format for expressing an ordered list of integers is to use a comma separated list of either
// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

// Example:

// solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
// solution([0, 2, 4, 5, 6, 8, 9, 10, 11]);
// returns "0,2,4-6,8-11"

// function solution(list) {
//   const updatedList = [];

//   for (let i = 0; i < list.length; i++) {
//     let prevEl = list[i - 1];
//     let currentEl = list[i];
//     let nextEl = list[i + 1];
//     if (i === 0) {
//       updatedList.push(currentEl);
//     } else {
//       if (prevEl + 2 === nextEl) {
//         updatedList.push("#");
//       } else {
//         updatedList.push(currentEl);
//       }
//     }
//   }
//   console.log("updatedList: ", updatedList);
//   const stringOfUpdateListItems = updatedList.join(",");
//   console.log("stringOfUpdateListItems: ", stringOfUpdateListItems);
//   const result = stringOfUpdateListItems.replace(/(,#)+,/g, "-");
//   return result;
// }

// console.log(
//   "solution([0, 2, 4, 5, 6, 8, 9, 10, 11]);: ",
//   solution([0, 2, 4, 5, 6, 8, 9, 10, 11])
// );
// // returns "0,2,4-6,8-11"
// console.log(
//   "solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]): ",
//   solution([
//     -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
//   ])
// );

// ----------------------------------------------------------------------------------
// Next bigger number with the same digits
// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:
// If the digits can't be rearranged to form a bigger number, return -1
// function nextBigger(n) {
//   const arr = n.toString().split("");
//   let i = arr.length - 1;
//   while (i > 0) {
//     const el = arr[i];
//     const prevEl = arr[i - 1];
//     if (el > prevEl) break;
//     i -= 1;
//   }
//   if (i === 0) return -1;
//   const test = arr.splice(i).sort();
//   let el = arr[arr.length - 1];
//   for (i = 0; i < test.length; ++i) {
//     if (test[i] > el) break;
//   }
//   arr[arr.length - 1] = test[i];
//   test[i] = el;
//   const res = arr.concat(test);
//   const num = parseInt(res.join(""));
//   return num;
// }

// console.log("nextBigger(num: 12): ", nextBigger(1234567890)); // returns 21
// console.log("nextBigger(num: 513): ", nextBigger(513)); // returns 531
// console.log("nextBigger(num: 2017): ", nextBigger(2017)); // returns 2071

console.log(
  'holder.png: ',
  checkImageFormatFromDB(
    'https://frontend-test-assignment-api.abz.agency/images/placeholders/placeholder.png'
  )
);

console.log(
  '7c0ac14.jpeg: ',
  checkImageFormatFromDB(
    'https://frontend-test-assignment-api.abz.agency/images/users/5fa2a6597c0ac14.jpeg'
  )
);
