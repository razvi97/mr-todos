const nu = require('../utils/numberUtils')
const { program } = require('commander');


// RETURN ARRAY EXTRACTING ONLY EVEN NUMBERS FROM THE ARRAY PASSED
exports.getEvenIdsFromArray = function getEvenIdsFromArray(array){

    // VALIDATE IF PARAMETERS IS AN ARRAY
    if(!Array.isArray(array)){
        throw new Error("error: 'array' needs to be an Array")

    }

    var new_array = []

    array.map((obj, index) => {

        if(!Object.keys(obj).includes('id')){
            throw new Error("error: Object doesn't contain id")
        }

        if(!String(obj.id).match(/^[0-9]\d*$/)){
            throw new Error("error: Id is not an integer")
        }

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
        throw new Error("error: 'array' needs to be an Array")

    }

    var new_array = []

    array.map((obj, index) => {

        if(!Object.keys(obj).includes('id')){
            throw new Error("error: Object doesn't contain id")
        }

        if(!String(obj.id).match(/^[0-9]\d*$/)){
            throw new Error("error: Id is not an integer")
        }

        if(!nu.isEven(obj.id)){
            new_array.push(obj)
        }
    })

    return new_array

}

// RETURN FIRST <QUANTITY> NUMBER OF ITEMS IN ARRAY PASSED
exports.getMaxIdsFromArray = function getMaxIdsFromArray(array, quantity){

    // VALIDATE IF PARAMETER QUANTITY IS AN INTEGER
    if(!String(quantity).match(/^[1-9]\d*$/)){
        throw new Error("error: 'quantity' needs to be a number")
 
    }

    // VALIDATE IF PARAMETERS IS AN ARRAY
    if(!Array.isArray(array)){
        throw new Error("error: 'array' needs to be an Array")

    }

    return array.slice(0, quantity)

}

// RETURN ARRAY WITH ONLY COMPLETED ITEMS
exports.getCompletedIdsFromArray = function getCompletedIdsFromArray(array, completed){

    // VALIDATE IF PARAMETERS IS AN ARRAY
    if(!Array.isArray(array)){
        throw new Error("error: 'array' needs to be an Array")

    }

    if(completed !== true && completed !== false){
        throw new Error("error: 'completed' is not a boolean")
    }

    var new_array = []

    array.map((obj, index) => {
        if(obj.completed === completed){
            new_array.push(obj)
        }
    })

    return new_array
    
}