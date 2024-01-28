const { program } = require('commander');

// FUNCTION RETURNS IF NUMBER IS EVEN OR NOT
exports.isEven = function isEven(number){
    if(isNaN(number)){
        throw new Error("error: number needs to be an number")
    }
    return number % 2 === 0;
}

