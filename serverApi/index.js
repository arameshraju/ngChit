var express = require('express')
var app = express()

var myLogger = function (req, res, next) {
  console.log('LOGGED')
   res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
}

app.use(myLogger)

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.use(require('./action/customer'));
app.use(require('./action/chitgroup'));
app.use(require('./action/employee'));

app.listen(3000)