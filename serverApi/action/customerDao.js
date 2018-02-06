var ddb= require('./connection');
const TABNAME="CUSTOMER_MST"

function putCustomerData(data){
    var params={
        TableName:TABNAME,
        Item:{
        'customerCode':{S:data.customerCode},
        'customerName':{S:data.customerName},
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

function getCustomer(cCode,cName){
var params = {
  Key: {
   "customerCode": {
     S:cCode
    },"customerName": {
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

function scanCustomerAll(callBk){
var params = {
 ExpressionAttributeValues: {
  ":topic": {
    S: "."
   }
 },
 FilterExpression: "not contains (customerCode, :topic)",
 ProjectionExpression: "customerCode, customerName,address,phone,email",
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
        putCustomerData:putCustomerData,
        getCustomer:getCustomer,
        scanCustomerAll:scanCustomerAll
};