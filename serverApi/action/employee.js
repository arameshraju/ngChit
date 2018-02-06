var express = require('express');
var router = express.Router();
var dao = require('./employeeDao');
//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});


// Define the home page route
router.get('/action/employee', function(req, res) {

  dao.scanEmployeeAll(function(data){ res.send(  data);});
});

// Define the about route
router.post('/action/employee', function(req, res) {
  res.send('About us');
});


module.exports = router;