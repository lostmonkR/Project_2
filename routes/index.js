const router = require('express').Router();

const sellerInformation = require('./sellerRoutes.js');
const buyerInformation = require('./buyerRoutes.js');
const transactionInformation = require('transactionRoutes.js');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/transactionRoutes', transactionInformation);
router.use('/buyerRoutes', buyerInformation);
router.use('/sellerRoutes', sellerInformation)

module.exports = router;