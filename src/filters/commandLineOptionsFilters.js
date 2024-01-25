const { program } = require('commander');


// BASED ON REQUIREMENTS, QUANTITY IS THE LAST FILTER AND INCLUDES THE REST OF FILTERS
// FIRST WE FILTER IF USER ENTERED EVEN OR ODD, COMPLETED OR NOT.
// THEN WE FILTER BY QUANTITY
exports.filterTodos = function filterTodos(options, todo_list){
    var output = ""
    console.log(options)
    
    // EVEN AND ODD CANNOT BE SET UP AT THE SAME TIME
    if(options.even && options.odd){
        throw program.error("error: options '-e, --even, -o, --odd, Cannot be set at the same time")

    }

    // CHECKS IF OPTION EVEN IS SET AND FILTER
    if(options.even){
        output += " even"

    }

    // CHECK IF OPTION ODD IS SET AND FILTER
    if(options.odd){
        output += " odd"
    }

    // CHECK COMPLETED PARAMETER IF TRUE, FALSE OR UNDEFINED
    if(options.completed === undefined){
        output +=" completed not set"
    }else if(options.completed === "true"){
       output += ' completed true'
    }else if(options.completed === "false"){
        output += " completed false"
    }else{
        throw program.error("error: option '-c, --completed <boolean>, Needs to be true or false")

    }

    // VALIDATE IF THERE USER ENTERED "NUMBER" OPTION
    if(options.number){

        // VALIDATE IF PARAMETER ON "NUMBER" OPTION IS AN INTEGER. NEGATIVE NUMBERS, DECIMALS AND STRINGS ARE NOT VALID
        if(!options.number.match(/^[1-9]\d*$/)){
            throw program.error("error: option '-n, --number <number>, Needs to be an integer")
        }else{
            output += " Filter " + options.number
        }

    }

    return output
}

    