//Function reverse a sentence, [...] change a input string into array of chars , later just output joined array

function reverseString([...text]) {
    let reversing = text.reverse()
    return reversing.join("");


}
module.exports = reverseString;