const longestString = arr => {
    return arr.sort((a, b) => b.length - a.length)[0];
}

console.log(longestString(['My', 'name', 'is', 'LisaCee']));