// ##The Journey Begins

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
// built in Math function
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

//spread operator instead of split
function checkPalindrome(inputString) {
  return inputString === [...inputString].reverse().join("");
}

// ## Edge of the Ocean

// function adjacentElementsProduct(inputArray) {
//     let arrayProduct = []
//     for (let i = 0; i < inputArray.length; i++) {

//         let product = inputArray[i] * inputArray[i + 1];
//         arrayProduct.push(product);
//         arrayProduct.sort((a, b) => b - a);
//     }
//     return arrayProduct[0];
// }

//condensed sort and return into 1 line
function adjacentElementsProduct(inputArray) {
    let arrayProduct = []
    for (let i = 0; i < inputArray.length; i++) {
        let product = inputArray[i] * inputArray[i + 1];
        arrayProduct.push(product);
    }
    return arrayProduct.sort((a, b) => b - a)[0];
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

// ##Smooth Sailing

// function allLongestStrings(inputArray) {
//     let arrayLength = inputArray.sort((a, b) => b.length - a.length)[0].length;

//     let solution = [];

//     inputArray.filter((str) => {
//         str.length >= arrayLength ? solution.push(str) : null
//     })
//     return solution;

// }
// refactored with filter 

function allLongestStrings(inputArray) {
    let arrayLength = inputArray.sort((a, b) => b.length - a.length)[0].length;

    return inputArray.filter((word) => word.length >= arrayLength)

}
// ## Exploring the Waters
function addBorder(picture) {
    let width = picture[0].length + 2;

    return ["*".repeat(width),
    ...picture.map(str => "*" + str + "*"),
    "*".repeat(width)];
}

// ## Island of Knowledge
function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    let myStrong;
    let myWeak;
    let friendStrong;
    let friendWeak;
    if (yourLeft >= yourRight) {
        myStrong = yourLeft;
        myWeak = yourRight;
    } else {
        myStrong = yourRight;
        myWeak = yourLeft
    }

    if (friendsLeft >= friendsRight) {
        friendStrong = friendsLeft;
        friendWeak = friendsRight;
    } else {
        friendStrong = friendsRight;
        friendWeak = friendsLeft
    }

    return myStrong == friendStrong && myWeak == friendWeak;

}

//working code but way too verbose

function isIPv4Address(inputString) {
    var inputArr = inputString.split('.');
    var trueCounter = 0;
    if (inputArr.length === 4) {
        for (var i = 0; i < inputArr.length; i++) {
            if (inputArr[i] >= 0 && inputArr[i] <= 255 && inputArr[i].length >= 1) {
                trueCounter++
            }
        }
    }

    if (trueCounter !== 4) {
        return false
    }
    return true

}
//not my code, but learning from it.  Tried regex...

function addBorder(picture) {
    let width = picture[0].length + 2;

    return ["*".repeat(width),
    ...picture.map(str => "*" + str + "*"),
    "*".repeat(width)];
}


