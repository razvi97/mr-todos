

const { program } = require('commander');


exports.getTodos = async function getTodos(){
    try {
        const response = await fetch(process.env.URL_DATA, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
    
        if (!response.ok) {
            // Handle non-successful response
            throw program.error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
        // Handle the error or rethrow it if needed
        throw err;
    }
}
