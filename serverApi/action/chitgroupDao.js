var ddb= require('./connection');



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

function scanChitGroupAll(){
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
  if (err) {
    console.log("Error", err);
  } else {
    data.Items.forEach(function(element, index, array) {
      console.log(element.groupcode.S + " (" + JSON.stringify(element) + ")");
    });
  }
});

}

module.exports={
        putChitGroupData:putChitGroupData,
        getChitGroup:getChitGroup,
        scanChitGroupAll:scanChitGroupAll
};