var express = require('express'),
    router = express.Router(),
    /*
      'path' is needed because relative paths ../../ are considered malicious
      when importing modules in node. Example: importing routes in index.js
    */
    path = require('path');

var request = require('request');

router.get('/', function(req, res, next) {
  res.sendFile( path.resolve('client/public/views/index.html') );
});

router.get('/weatherapi',function(req,res,next){
    request('http://api.worldweatheronline.com/premium/v1/marine.ashx?format=json&tide=yes&q='+req.query.long+','+req.query.lat+'&key='+process.env.WEATHER_API_KEY, function(error,response,body){
      if(error){
        console.log(error);
      } else{
        res.json(body);
      }
    })
})

module.exports = router;
