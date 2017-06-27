'use strict';

const Product = require("./models").Product;
const express = require("express");
const router = express.Router();
const app = express();

/* GET All Products */
router.get('/', (req,res,next) => {
  Product.find({}).exec(function(err, products){
    if(err) return next(err);
    res.json(products);
  });
});

/* POST New Products */
router.post("/", function(req, res, next){
	const product = new Product(req.body);
	product.save(function(err, product){
		if(err) return next(err);
		res.status(201);
		res.json(product);
	});
});

/* New Products */
router.get('/newarrivals', (req,res) => {
  res.json({
    message: 'Welcome to NEW Arrivals'
  });
});

/* Hot Products */ 
router.get('/hotproducts', (req,res) => {
  res.json({
    message: 'Welcome to HOT products'
  });
});

module.exports = router;
