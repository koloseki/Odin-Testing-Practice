
function fizzBuzz(number){
    if (number % 3 === 0 && number % 5 === 0){
        return "fizzbuzz";
    }else if(number % 5 ===0){
        return "buzz";
    }else{
        return "fizz"
    }
}

module.exports = fizzBuzz;