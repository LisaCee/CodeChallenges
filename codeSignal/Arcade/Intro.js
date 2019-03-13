function add(param1, param2) {
    return param1 + param2;
}

// function centuryFromYear(year) {
//     yearEnd = year % 100;
//     year = year.toString();

//     if (year.length <= 2) return 1;
//     else if (year.length === 3) {
//         return yearEnd === 0 ? parseInt(year.slice(0, 1)) : parseInt(year.slice(0, 1)) + 1;
//     }
//     return yearEnd === 0 ? parseInt(year.slice(0, 2)) : parseInt(year.slice(0, 2)) + 1;

// }

function centuryFromYear(year) {
    return Math.ceil(year / 100)
}

// function checkPalindrome(inputString) {
//   return (
//     inputString ===
//     inputString
//       .split("")
//       .reverse()
//       .join("")
//   );
// }
function checkPalindrome(inputString) {
  return inputString === [...inputString].reverse().join("");
}

function adjacentElementsProduct(inputArray) {
    let arrayProduct = []
    for (let i = 0; i < inputArray.length; i++) {

        let product = inputArray[i] * inputArray[i + 1];
        arrayProduct.push(product);
        arrayProduct.sort((a, b) => b - a);
    }
    return arrayProduct[0];
}

function shapeArea(n) {
    let area = 1;
    for (i = 1; i <= n; i++) {
        area += ((i * 4) - 4);
    }
    return area;
}

function makeArrayConsecutive2(statues) {
    statues = statues.sort((a, b) => a - b);
    return (statues[statues.length - 1] - statues[0] + 1 - statues.length);
}

function almostIncreasingSequence(sequence) {
    var found = false;
    for (var i = 1; i < sequence.length; i++) {
        if (sequence[i] <= sequence[i - 1]) {
            if (found) {
                return false;
            }
            found = true;

            if (i === 1 || i + 1 === sequence.length) {
                continue;
            }
            else if (sequence[i] > sequence[i - 2]) {
                sequence[i - 1] = sequence[i - 2];
            }
            else if (sequence[i - 1] >= sequence[i + 1]) {
                return false;
            }
        }
    }
    return true;

}

function matrixElementsSum(matrix) {
    price = 0;
    for (var y = 0; y < matrix.length; y++)
        for (var x = 0; x < matrix[0].length; x++) {
            if (y == 0)
                price += matrix[y][x];
            else {
                if (matrix[y - 1][x] == 0)
                    matrix[y][x] = 0;
                price += matrix[y][x];
            }
        }
    return price;
}



