function ceasarCipher(shift,str){


    let result = "";
    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);

        // checking if a character is a letter
        if (charCode >= 97 && charCode <= 122) {
            // Shift the ASCII code of the character by the value of shift modulo 26
            const newCharCode = ((charCode - 97 + shift) % 26) + 97;
            result += String.fromCharCode(newCharCode);
        } else {
            // Convert the ASCII code to a character and append it to the result string
            result += str[i];
        }
    }
    return result;

}



module.exports = ceasarCipher;