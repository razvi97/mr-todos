const nu = require('../utils/numberUtils')
const { program } = require('commander');


// RETURN ARRAY EXTRACTING ONLY EVEN NUMBERS FROM THE ARRAY PASSED
exports.getEvenIdsFromArray = function getEvenIdsFromArray(array){

    // VALIDATE IF PARAMETERS IS AN ARRAY
    if(!Array.isArray(array)){
        throw program.error("error: 'array' needs to be an Array")

    }

    var new_array = []

    array.map((obj, index) => {
        if(nu.isEven(obj.id)){
            new_array.push(obj)
        }
    })

    return new_array

}

// RETURN ARRAY EXTRACTING ONLY ODD NUMBERS FROM THE ARRAY PASSED
exports.getOddIdsFromArray = function getOddIdsFromArray(array){

    // VALIDATE IF PARAMETERS IS AN ARRAY
    if(!Array.isArray(array)){
        throw program.error("error: 'array' needs to be an Array")

    }

    var new_array = []

    array.map((obj, index) => {
        if(!nu.isEven(obj.id)){
            new_array.push(obj)
        }
    })

    return new_array

}

// RETURN FIRST <QUANTITY> NUMBER OF ITEMS IN ARRAY PASSED
exports.getMaxIdsFromArray = function getMaxIdsFromArray(array, quantity){

    // VALIDATE IF PARAMETER QUANTITY IS AN INTEGER
    if(!quantity.match(/^[1-9]\d*$/)){
        throw program.error("error: 'quantity' needs to be a number")
 
    }

    // VALIDATE IF PARAMETERS IS AN ARRAY
    if(!Array.isArray(array)){
        throw program.error("error: 'array' needs to be an Array")

    }

    return array.slice(0, quantity)

}

// RETURN ARRAY WITH ONLY COMPLETED ITEMS
exports.getCompletedIdsFromArray = function getCompletedIdsFromArray(array, completed){

    // VALIDATE IF PARAMETERS IS AN ARRAY
    if(!Array.isArray(array)){
        throw program.error("error: 'array' needs to be an Array")

    }

    var new_array = []

    array.map((obj, index) => {
        if(obj.completed === completed){
            new_array.push(obj)
        }
    })

    return new_array
    
}