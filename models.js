'use strict';

const mongoose = require("mongoose");

/* Database schema */
const productSchema = mongoose.Schema({
    name: String,
    category: String,
		description: String,
		quantity: Number,
		originalPrice: Number,
		discountedPrice: Number,
		isInStock: Boolean,
		isOnSale: Boolean,
		forSaleDate: { type: Date, default: Date.now },
		onSaleData: { type: Date, default: Date.now }
});
const Product = mongoose.model('Product', productSchema);

module.exports.Product = Product;
