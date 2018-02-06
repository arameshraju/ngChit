 var AWS = require('aws-sdk');
 // Set the region ap-south-1
 //AWS.config.update({region: 'dynamodb-local-mumbai'});
 // Create DynamoDB service object
 AWS.config.update({ accessKeyId: "myKeyId", secretAccessKey: "secretKey", region: "us-east-1" });

module.exports = new AWS.DynamoDB({ endpoint: new AWS.Endpoint('http://localhost:8000') });