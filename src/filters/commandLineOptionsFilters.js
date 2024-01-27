const { program } = require('commander');
const arrayController = require('../controllers/arrayController')

// BASED ON REQUIREMENTS, QUANTITY IS THE LAST FILTER AND INCLUDES THE REST OF FILTERS
// FIRST WE FILTER IF USER ENTERED EVEN OR ODD, COMPLETED OR NOT.
// THEN WE FILTER BY QUANTITY
exports.filterTodos = function filterTodos(options, todo_list){

    catchEvenAndOdsError(options)
    
    todo_list = filterByTherminology(options, todo_list)

    todo_list = filterByCompleted(options, todo_list)

    todo_list = filterByQuantity(options, todo_list)

    return todo_list
}

function catchEvenAndOdsError(options){
    // EVEN AND ODD CANNOT BE SET UP AT THE SAME TIME
    if(options.even && options.odd){
        throw program.error("error: options '-e, --even, -o, --odd, Cannot be set at the same time")

    }
}

function filterByTherminology(options, todo_list){
    // CHECKS IF OPTION EVEN IS SET AND FILTER
    if(options.even){
        todo_list = arrayController.getEvenIdsFromArray(todo_list)
    }

    // CHECKS IF OPTION ODD IS SET AND FILTER
    if(options.odd){
        todo_list = arrayController.getOddIdsFromArray(todo_list)
    }

    return todo_list

}



// CHECK COMPLETED PARAMETER IF TRUE, FALSE OR UNDEFINED
function filterByCompleted(options, todo_list){

    switch(options.completed){
        case undefined:
            todo_list = todo_list
            break;

        case "true":
            todo_list = arrayController.getCompletedIdsFromArray(todo_list, true)
            break;

        case "false":
            todo_list = arrayController.getCompletedIdsFromArray(todo_list, false)

            break;

        default:
            throw program.error("error: option '-c, --completed <boolean>, Needs to be true or false")
    }


    return todo_list
}


function filterByQuantity(options, todo_list){
    // VALIDATE IF THERE USER ENTERED "NUMBER" OPTION
    if(options.number){

        // VALIDATE IF PARAMETER ON "NUMBER" OPTION IS AN INTEGER. NEGATIVE NUMBERS, DECIMALS AND STRINGS ARE NOT VALID
        if(!options.number.match(/^[1-9]\d*$/)){
            throw program.error("error: option '-n, --number <number>, Needs to be an integer")
        }else{
            todo_list = arrayController.getMaxIdsFromArray(todo_list, options.number)
        }

    }

    return todo_list
}
    