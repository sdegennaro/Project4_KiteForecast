var express = require('express'),
    router = express.Router(),
    /*
      'path' is needed because relative paths ../../ are considered malicious
      when importing modules in node. Example: importing routes in index.js
    */
    path = require('path');

router.get('/', function(req, res, next) {
  res.sendFile( path.resolve('client/public/views/index.html') );
});

router.get('/key',function(req,res,next){
  res.json({API_KEY: process.env.WEATHER_API_KEY})
})

module.exports = router;
