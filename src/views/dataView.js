
exports.showResultsFromArray = function showResultsFromArray(array){
    
    array.map((obj) =>{
        console.log("------------------------------------------------------------------")
        console.log(`Title: ${obj.title}`)
        console.log(`Status: ${obj.completed === true ? "Completed" : "Not completed"}`)

    })

}