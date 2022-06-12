// Require the AWS Module, this will require the whole module but not only the S3.
const AWS = require("aws-sdk")

// Require the Express module
const express = require("express")
const app = express()

// This will running locally
const port = "3000"


// Invoke the S3 module from the overall package
const S3 = new AWS.S3()

// Create an S3 bucket
app.put("/creates3", (req, res) =>{

    const params = {
        Bucket: "bucketnames3",
        ACL: "public-read",
        CreateBucketConfiguration: {
            LocationConstraint: "sa-east-1"
        }
    }

    S3.createBucket(params, (error, response) => {
        if (error){
            console.log(error, error.stack)
        }
        else{
            console.log(response)
        }
    })
})








// Initiate the server
app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
})