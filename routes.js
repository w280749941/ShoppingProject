'use strict';

const Product = require("./models").Product;
const express = require("express");
const fs = require('fs');
const router = express.Router();
const app = express();
// For saving image.
const imagePath = __dirname + '/productImages/';

/* Parsing Product ID */
router.param("pID", (req,res,next,id) => {
	Product.findById(id, (err, doc) => {
		if(err) return next(err);
		if(!doc) {
			err = new Error("Not Found Product");
			err.status = 404;
			return next(err);
		}
		req.product = doc;
		next();
	});
});

// Parsing Image ID
router.param("iID", (req,res,next,id) => {
	req.imagePath = imagePath + id;
  next();
});

router.post("/postnewproduct", function(req, res){
  const imageUrl = req.headers.host + '/productImages/';
  req.body.imageUrl = imageUrl + req.body.imageUrl;
  console.log(req.body);
	const product = new Product(req.body);
	product.save(function(err, product){
		if(err) return next(err);
		res.status(201);
		res.json(product);
	});
});

// Send Image File (This is for testing purpose || Can be deleted)
router.get('/productImages/:iID', (req,res) => {
  res.sendFile(req.imagePath);
});

/* GET All Products */
router.get('/', (req,res,next) => {
  Product.find({}).sort({forSaleDate: 1})
		.exec((err, products) => {
    if(err) return next(err);
    res.json(products);
  });
});

/* New Products in the last 5 days */
router.get('/newarrivals', (req,res,next) => {
  const tenDays =  new Date();
  tenDays.setDate(tenDays.getDate() - 5);
  Product.find({ 'forSaleDate': { $gte: tenDays } })
		.sort({forSaleDate: -1})
    .exec((err, products) => {
      if(err) return next(err);
      res.json(products);
  });
});

/* Hot Products above average soldQuantity is considered hot*/
router.get('/hotproducts', (req,res,next) => {
  Product.find({})
		.exec((err, products) => {
    const total = products.reduce((acc, cur) => {
      return acc + cur.soldQuantity;
    },0);
    const threshold = Math.ceil(total/products.length);
    Product.find({ 'soldQuantity': { $gt: threshold } })
			.sort({soldQuantity: -1})
      .exec((err, products) => {
        if(err) return next(err);
        res.json(products);
      });
  });
});

/* On sale Products */
router.get('/onsale', (req,res) => {
	Product.find({ 'isOnSale': true }).exec((err, products) => {
		if(err) return next(err);
		res.json(products);
	});
});

// Admin Panel

/* Modify An Existing Product */
router.put('/modifyproduct/:pID', (req,res) => {
  req.product.update(req.body, (err, result) => {
		if(err) return next(err);
		res.json(result);
	});
})

/* Delete Products */
router.delete('/deleteproduct/:pID', (req,res) => {
  req.product.remove((err) => {
		req.product.save((err, product) => {
			if(err) return next(err);
			res.json(product);
		});
	});
})

/*
Implement this later.
POST New Products
*/
router.post('/postnewpr32oduct', (req,res) => {
	    const form = new formidable.IncomingForm();
	    form.parse(req, (err, fields, files) => {
	      const oldpath = files.filetoupload.path;
	      const newpath = __dirname + '/productImages/' + files.filetoupload.name;
	      fs.rename(oldpath, newpath, (err) => {
	        if(err) return next(err);
          // Redirect user here. res.send({redirect: '/'});
	        res.write('File uploaded and moved!');
	        res.end();
	      });
	 });
});
module.exports = router;

/*
router.post("/postnewproduct", function(req, res){
  const imageUrl = req.headers.host + '/productImages/';
  req.body.imageUrl = imageUrl + req.body.imageUrl;
  console.log(req.body);
	const product = new Product(req.body);
	product.save(function(err, product){
		if(err) return next(err);
		res.status(201);
		res.json(product);
	});
});
*/
