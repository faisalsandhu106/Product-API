
const route = require('express').Router();
const getProduct = require('../Controller/ProductCollroller.');

route.get('/', getProduct)

module.exports = route; 




// const express = require('express');
// const router = express.Router();
// const getProduct = require('../Controller/ProductCollroller.');

// router.route('/').get(getProduct)

// module.exports = router; 