
// The below policy only applies for the specified user to be able to upload objects into the specified object.
// More actions can be added onto the policy

const policy = "{\"Version\": \"2012-10-17\", \"Statement\": [{\"Sid\": \"id-1\", \"Effect\": \"Allow\", \"Principal\": {\"AWS\": \"arn:aws:iam::ACCOUNTID:IAMUSERNAME\"}, \"Action\": [\"s3:PutObjectAcl\"], \"Resource\": [\"arn:aws:s3:::BUCKETNAME/*\"]}]}"

module.exports.policy