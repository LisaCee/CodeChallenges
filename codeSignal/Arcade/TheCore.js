//## Intro Gates

function addTwoDigits(n) {
    return n.toString().split('').reduce((a, b) => {
        return parseInt(a) + parseInt(b);
    })
}
function largestNumber(n) {
  return parseInt("9".repeat(n));
}
function candies(n, m) {
    return Math.floor(m / n) * n
}
function seatsInTheater(nCols, nRows, col, row) {
    return (nCols - col + 1) * (nRows - row)
}


function reachNextLevel(experience, threshold, reward) {
  return experience + reward >= threshold;
}
