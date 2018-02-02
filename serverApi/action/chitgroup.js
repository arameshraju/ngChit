var express = require('express');
var router = express.Router();

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});


// Define the home page route
router.get('/action/chitgroup', function(req, res) {
  res.send('home for chit Group page');
});

// Define the about route
router.post('/action/chitgroup', function(req, res) {
  res.send('About us');
});


module.exports = router;