//Function capitalize first letter [...] change a input string into array of chars , later just output joined array

function capitalize([...text]) {
    text[0] = text[0].toUpperCase();
    return text.join("");

}
module.exports = capitalize;