var express = require('express');
var app = express();



app.use(bodyParser.urlencoded({
  extended: true
}))
///server for the buyer
var PORT2 = process.env.PORT || 8080;
const express = require('express');
const sequelize = require('./config/connection');



const router = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));




//CORS https://stackoverflow.com/questions/32500073/request-header-field-access-control-allow-headers-is-not-allowed-by-itself-in-pr
//https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
router.use(function(req, res, next) {
  res.writeHead(200,{
    "Content-Type": 'application/json',
    "Access-Control-Allow_Origin": "*",
  });
  next()
})

//sequalize
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening', PORN));
  app.listen(PORT2, () => console.log('Now listening', PORT2));
});





