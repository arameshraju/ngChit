var express = require('express');
var router = express.Router();
var dao = require('./chitgroupDao');

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});


// Define the home page route
router.get('/action/chitgroup', function(req, res) {
    dao.scanChitGroupAll(function(data){ res.send(  data);});
});

// Define the about route
router.post('/action/chitgroup', function(req, res) {
  res.send('About us');
});


module.exports = router;