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

var re=dao.putChitGroupData(req.body);

 dao.putChitGroupData(req.body,function(err, data) {
             if (err) {
               console.log("Error", err);
               res.send({status:'Error',message:err});
             } else {
               console.log("Success", data);
               res.send({status:'Success',message:data});
             }
           });
});

module.exports = router;