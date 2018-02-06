var ddb= require('./connection');
const TABNAME="EMPLOYEE_MST"

function putEmployeeData(data){
    var params={
        TableName:TABNAME,
        Item:{
        'employeeCode':{S:data.employeeCode},
        'employeeName':{S:data.employeeName},
        'address':{S:data.address},
        'phone':{S:data.phone},
        'email':{S:data.email}
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

function getEmployee(cCode,cName){
var params = {
  Key: {
   "employeeCode": {
     S:cCode
    },"employeeName": {
           S: cName
          }
  },
  TableName: TABNAME
 };
 ddb.getItem(params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data);           // successful response

});

};

function scanEmployeeAll(callBk){
var params = {
 ExpressionAttributeValues: {
  ":topic": {
    S: ".."
   }
 },
 FilterExpression: "not contains (employeeCode, :topic)",
 ProjectionExpression: "employeeCode, employeeName,address,phone,email",
 TableName: TABNAME
};


ddb.scan(params, function(err, data) {
var pdata=[];
  if (err) {
    console.log("Error", err);
    callBk([]);
  } else {
     data.Items.forEach(function(element, index, array) {
         pdata.push(element);
       });
               callBk(pdata) ;
  }
});


}

module.exports={
        putEmployeeData:putEmployeeData,
        getEmployee:getEmployee,
        scanEmployeeAll:scanEmployeeAll
};