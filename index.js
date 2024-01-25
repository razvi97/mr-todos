require('dotenv').config()
const { program } = require('commander');
const todos = require('./src/services/todos')
const clof = require('./src/filters/commandLineOptionsFilters')

// USING PROGRAM FROM COMMANDER LIBRARY WE CREATE ALL POSSIBLE OPTIONS THAT CAN BE PASSED IN COMMAND LINE.
program
    .option("-n, --number <number>", "Retrieves max quantity of IDs. If not set, retrieves all")
    .option("-e, --even", "Retrieves only even numbers of IDs. If not set, retrieves all")
    .option("-o, --odd", "Retrieves only odd numbers of IDs. If not set, retrieves all")
    .option("-c, --completed <completed>", "Retrieves TODO's that are completed or not. If not set, retrieves all")

// PROCESS THE ARGUMENTS FROM COMMAND LINE
program.parse();

// RETRIEVE OPTIONS ENTERED IN COMMAND LINE
const options = program.opts();

// RETRIEVE ALL TODOS. 

// BASED ON OPTIONS REQUIREMENTS, SOME DATA CAN BE FILTERED LOCALLY AND OTHER DATA CAN BE FILTERED FROM URL PARAMS
// FOR A REQUEST THAT RETURNS LARGE AMOUNT OF DATA, IS BETTER TO CREATE THE FILTERS IN SERVER SIDE, HOWEVER I HAVE NO ACCESS TO MODIFY THE REST API
// THEREFORE I CHOOSE TO RETRIEVE ALL DATA AND FILTER EVERYTHING LOCALLY.

const todo_list = todos.getTodos();

// ONCE RETRIEVED TODO's LIST, WE FILTER AND RECEIVE FILTERED ARRAY
const filtered_todo_list = clof.filterTodos(options, todo_list)

console.log(filtered_todo_list)