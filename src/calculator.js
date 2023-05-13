function ValidArguments(num1,num2){
    if (typeof num1 !== 'number' && typeof num2 !== 'number'){
        return false;
    }else {
        return true;
    }
}

function add(num1,num2){
    if (ValidArguments(num1,num2)){
        return num1 + num2
    }else{
        return "Valid Arguments, check if they are numbers"
    }
}

function subtract(num1,num2){
    if (ValidArguments(num1,num2)){
        return num1 - num2
    }else{
        return "Valid Arguments, check if they are numbers"
    }
}

function divide(num1,num2){
    if (ValidArguments(num1,num2)){
        return num1 / num2
    }else{
        return "Valid Arguments, check if they are numbers"
    }
}

function multiply(num1,num2){
    if (ValidArguments(num1,num2)){
        return num1 * num2
    }else{
        return "Valid Arguments, check if they are numbers"
    }
}


const calculator ={
    add,
    subtract,
    multiply,
    divide
};


module.exports = calculator;