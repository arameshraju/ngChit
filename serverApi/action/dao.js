var AWS = require('aws-sdk');
// Set the region ap-south-1
//AWS.config.update({region: 'dynamodb-local-mumbai'});
// Create DynamoDB service object
AWS.config.update({ accessKeyId: "myKeyId", secretAccessKey: "secretKey", region: "us-east-1" });
var ddb= new AWS.DynamoDB({ endpoint: new AWS.Endpoint('http://localhost:8000') });

//var ddb = new AWS.DynamoDB({apiVersion: '2018-01-01'});

var chitgorup = {
  AttributeDefinitions: [
    {
      AttributeName: 'groupcode',
      AttributeType: 'S'
    },
    {
      AttributeName: 'groupName',
      AttributeType: 'S'
    }

  ],
  KeySchema: [
    {
      AttributeName: 'groupcode',
      KeyType: 'HASH'
    },
    {
      AttributeName: 'groupName',
      KeyType: 'RANGE'
    }

  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1
  },
  TableName: 'CHITGROUP_MST',
  StreamSpecification: {
    StreamEnabled: false
  }
};
ddb.createTable(chitgorup, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Table Created", data);
  }
});

var customer = {
  AttributeDefinitions: [
    {
      AttributeName: 'customerCode',
      AttributeType: 'S'
    },
    {
      AttributeName: 'customerName',
      AttributeType: 'S'
    }
  ],
  KeySchema: [
    {
      AttributeName: 'customerCode',
      KeyType: 'HASH'
    },
    {
      AttributeName: 'customerName',
      KeyType: 'RANGE'
    }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1
  },
  TableName: 'CUSTOMER_MST',
  StreamSpecification: {
    StreamEnabled: false
  }
};
ddb.createTable(customer, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Table Created", data);
  }
});

var employee = {
  AttributeDefinitions: [
    {
      AttributeName: 'employeeCode',
      AttributeType: 'S'
    },
    {
      AttributeName: 'employeeName',
      AttributeType: 'S'
    }
  ],
  KeySchema: [
    {
      AttributeName: 'employeeCode',
      KeyType: 'HASH'
    },
    {
      AttributeName: 'employeeName',
      KeyType: 'RANGE'
    }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1
  },
  TableName: 'EMPLOYEE_MST',
  StreamSpecification: {
    StreamEnabled: false
  }
};
ddb.createTable(employee, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Table Created", data);
  }
});
