const stringToCamelCase = str => {
    if (str.includes('-')) {
        str = str.split('-')
    } else if (str.includes('_')) {
        str = str.split('_')
    }
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].slice(1)
    } 
    return str.join(' ');
}

console.log(stringToCamelCase('hi-my-name-is-lisa'))
console.log(stringToCamelCase('what_is_your_name?'))