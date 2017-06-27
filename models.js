'use strict';

const mongoose = require("mongoose");

/* Database schema */
const productSchema = mongoose.Schema({
    name: String,
    category: String,
		description: String,
    imageUrl: String,
		quantity: Number,
    soldQuantity: { type: Number, default: 0 },
		originalPrice: Number,
		discountedPrice: Number,
		isInStock: Boolean,
		isOnSale: { type: Boolean, default: false },
		forSaleDate: { type: Date, default: Date.now },
		onSaleDate: Date,
    modifyDate: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', productSchema);

module.exports.Product = Product;
