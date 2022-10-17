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
