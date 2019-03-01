const numberOfJumps = (arr, startIndex) => {
    if (startIndex == arr.length - 1) {
        return 0
    }
    let size = arr.length;
    let remainingLength = size - startIndex

    if (remainingLength <= arr[startIndex]) {
        return 1
    }
    let jumps = Infinity;
    for (let i = 1; i <= arr[startIndex]; i++) {
        let temp = numberOfJumps(arr, startIndex + 1)
        if (temp !== Infinity) {
            jumps = Math.min(jumps, 1 + temp)
        }
    }
    return jumps;
}


numberOfJumps([1, 3, 6, 1, 0, 9], 0)
// Input: [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]
// Output: 3   // going from 1 -> 3 -> 8 -> 9
// print(naiveMinJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]));  # should print 3
// print(naiveMinJumps([1, 3, 6, 1, 0, 9]));  # should print 3
// print(naiveMinJumps([2, 0, 0, 5, 8, 1, 7, 4, 9, 12, 1]));  # should print Infinity
// print(naiveMinJumps([1, 3, 6, 3, 2, 3, 6, 8, 9, 5]));  # should print 4

// print("****")

// print(minJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]));  # should print 3
// print(minJumps([1, 3, 6, 1, 0, 9]));  # should print 3
// print(minJumps([2, 0, 0, 5, 8, 1, 7, 4, 9, 12, 1]));  # should print Infinity
// print(minJumps([1, 3, 6, 3, 2, 3, 6, 8, 9, 5]));  # should print 4

// numberOfJumps([1, 3, 6, 1, 0, 9])

