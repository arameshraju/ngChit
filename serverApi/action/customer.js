var express = require('express');
var router = express.Router();

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});


// Define the home page route
router.get('/action/customer', function(req, res) {
  res.send('home for customer page');
});

// Define the about route
router.post('/action/customer', function(req, res) {
  res.send('About us');
});


module.exports = router;