const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Prod = require('../models/product');
var Product = require('../models/product.js');

// Get products

router.get('/', function(req, res, next){
  Product.find(function(err, docs){
    res.render('src/app/components/product2', {title: 'List of Products from DB test', products: docs})
  });
});  

module.exports = router;

// router.get('/product2', (req, res, next) => {
//   let prod2 = new Prod({
//     name: req.body.name,
//     description: req.body.description,
//   });
//   res.json(config);
// });

// module.exports = router;