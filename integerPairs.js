// Integer Pairs
// Write a function integerPairs to find and print out all pairs of integers within an input array which sum up to a specified input value k.

// There are multiple ways to do this, depending upon whether you want to favor runtime or space.

//     Example:

// integerPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11);
// // should print '6 5', '7 4', '8 3', '9 2', '10 1'
// Analyze the time and space complexity of your solution.
//********************************* */
// # 1   0(n) space and time - linear depends on array length
// const integerPairs = (arr, sum) => {
//     let cache = {};
//     let solution = [];
//     arr.forEach((num, i) => {
//         if (cache[sum - num]) {
//             solution.push([num, sum-num])
//         } else {
//             cache[num] = i + 1
//         }
//     })
//     return solution;
// }
// ************************************
//  # 2   O(n log n) runtime due to the sorting
//  with O(1) space
// const integerPairs = (arr, sum) => {
//     arr.sort((a, b) => a - b);
//     let first = 0;
//     let last = arr.length - 1;
//     let solution = [];

//     while (first < last) {
//         const total = arr[first] + arr[last];
//         if(total === sum) {
//             solution.push([arr[first], arr[last]])
//             first++;
//             last--;
//         } else {
//             if (total < sum) {
//                 first ++;
//             } else {
//                 last --;
//             }
//         }
//     }
//     return solution;
// }

// ************************************
//  # 3   O(n^2) nested for loops
const integerPairs = (arr, sum) => {
    let solution = [];
    for (let i = 0; i < arr.length/2; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == sum) {
                solution.push([arr[i], arr[j]]);
            }
        }
    } return solution;
}

console.log(integerPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));