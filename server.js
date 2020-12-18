var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var shortId = require('shortid');

app.use(bodyParser.urlencoded({
  extended: true
}))

var port = process.env.PORT || 8080;
var router = express.Router();


//CORS https://stackoverflow.com/questions/32500073/request-header-field-access-control-allow-headers-is-not-allowed-by-itself-in-pr
//https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
router.use(function(req, res, next) {
  res.writeHead(200,{
    "Content-Type": 'application/json',
    "Access-Control-Allow_Origin": "*",
  });
  next()
})

router.use(function(req, res, next){
  console.log('\nReceived', {
    url: req.originalUrl,
    body: req.body,
    query: req.query,
  })
  next();
})



