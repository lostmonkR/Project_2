var express = require('express');
var app = express();



app.use(bodyParser.urlencoded({
  extended: true
}))

var port = process.env.PORT || 8080;
const express = require('express');
const sequelize = require('./config/connection');

const Buyer = require('./models/Buyer');
const Seller = require('./models/Seller');
const Transaction = require('./models/transaction');

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


sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});





