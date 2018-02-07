var ddb= require('./connection');
var attr = require('dynamodb-data-types').AttributeValue;


function putChitGroupData(data){
    var params={
        TableName:'CHITGROUP_MST',
        Item:{
        'groupcode':{S:data.groupcode},
        'groupName':{S:data.groupName},
        'chitValue':{N:data.chitValue+''},
        'months':{N:data.months+''},
        'subscription':{N:data.subscription+''}
            }
    };
    console.log("##### :: " + params )
    ddb.putItem(params, function(err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data);
      }
    });
}

function getChitGroup(gcode,gname){
var params = {
  Key: {
   "groupcode": {
     S:gcode
    },"groupName": {
           S: gname
          }
  },
  TableName: "CHITGROUP_MST"
 };
 ddb.getItem(params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data);           // successful response

});

};

function scanChitGroupAll(callBk){
var params = {
 ExpressionAttributeValues: {
  ":topic": {
    S: "."
   }
 },
 FilterExpression: "not contains (groupcode, :topic)",
 ProjectionExpression: "groupcode, groupName,chitValue,months,subscription",
 TableName: "CHITGROUP_MST"
};
ddb.scan(params, function(err, data) {
var pdata=[];
  if (err) {
    console.log("Error", err);
            callBk([]);
  } else {
    data.Items.forEach(function(element, index, array) {
      pdata.push(attr.unwrap(element));
    });
            callBk({listdata:pdata}) ;
     }
});


}

module.exports={
        putChitGroupData:putChitGroupData,
        getChitGroup:getChitGroup,
        scanChitGroupAll:scanChitGroupAll
};