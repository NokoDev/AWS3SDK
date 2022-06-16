// Require the AWS Module, this will require the whole module but not only the S3.
const AWS = require("aws-sdk")

// Require the Express module
const express = require("express")
const app = express()

// This will running locally
const port = "3000"

const errorHandler = require("./errorHandler")


// Invoke the S3 module from the overall package
const S3 = new AWS.S3()

// Create an S3 bucket
app.post("/creates3", (req, res) => {

    const params = {
        Bucket: "bucketnames3",
        ACL: "public-read",
        CreateBucketConfiguration: {
            LocationConstraint: "sa-east-1"
        }
    }

    S3.createBucket(params, (error, response) => {
        if (error) {
            console.log(error, error.stack)
        }
        else {
            console.log("Bucket has been created", response)
        }
    })
})


// Get all buckets
app.get("/", (req, res) => {

    const params = {}
    S3.listBuckets(params, (error, response) => {
        if (!error) {
            console.log("Buckets:")
            console.log(response)
        }
        else {
            console.log(error, error.stack)
        }
    })
})


//Delete a provided bucket name
app.post("/deletebucket", (req, res) =>{
    //The values to be included here can be retrieved from the post request from the interface
    const params = {
        Bucket: "BucketName",

    }
    S3.deleteBucket(params, (error, response) =>{
        if(error){
            console.log(error, error.stack)
        }
        else {
            console.log(response)
        }
    })
})

//Get Bucket location



app.post("/locatebucket", (req, res) =>{
    const params = {
        Bucket: "BucketName"
    }

    S3.getBucketLocation(params, errorHandler)
})






// Initiate the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})