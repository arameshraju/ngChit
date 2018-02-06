var AWS = require('aws-sdk');
// Set the region ap-south-1
//AWS.config.update({region: 'dynamodb-local-mumbai'});
// Create DynamoDB service object
AWS.config.update({ accessKeyId: "myKeyId", secretAccessKey: "secretKey", region: "us-east-1" });
var ddb= new AWS.DynamoDB({ endpoint: new AWS.Endpoint('http://localhost:8000') });

//var ddb = new AWS.DynamoDB({apiVersion: '2018-01-01'});
ddb.listTables(function (err, data)
{
   console.log('listTables',err,data);
});
//var params = {
//  TableName: "CHITGROUP_MST"
// };
// ddb.describeTable(params, function(err, data) {
//   if (err) console.log(err, err.stack); // an error occurred
//   else     console.log(data);           // successful response
//
// });

//var params = {
//  TableName: "CHITGROUP_MST"
// };
// ddb.deleteTable(params, function(err, data) {
//   if (err) console.log(err, err.stack); // an error occurred
//   else     console.log(data);           // successful response
//
// });