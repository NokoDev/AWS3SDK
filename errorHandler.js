const errorHandler = (error, response) =>{
    if(error){
        console.log(error, error.stack)
    }
    else {
        console.log(response)
    }
}

module.exports.errorHandler