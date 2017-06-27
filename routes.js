'use strict';

const express = require("express");
const router = express.Router();
const app = express();

// All Products
router.get('/', (req,res) => {
  res.json({
    message: 'Welcome to products'
  });
});

// New Products
router.get('/newarrivals', (req,res) => {
  res.json({
    message: 'Welcome to NEW Arrivals'
  });
});

// Hot Products
router.get('/hotproducts', (req,res) => {
  res.json({
    message: 'Welcome to HOT products'
  });
});

module.exports = router;
