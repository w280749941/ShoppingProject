'use strict';

/* Adding required modules */
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const myLogger = require("morgan");
const express = require('express');
const routes = require("./routes");
const path = require('path');
const fs = require('fs');
const app = express();

/* Use required modules */
app.set('port', process.env.PORT || 8080);
app.use(express.static(__dirname + '/'));
app.use(myLogger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* Database setup */
mongoose.connect('mongodb://localhost:27017/myFirstDB', error => {
	if (error) console.error('Database connecting error:', error);
})
const db = mongoose.connection;
db.on('error', (err) => {
	console.error.bind(console, 'connection error:');
});
db.once('open', () => {
	console.log('Database connection successful');
});

/* Passing routes to routes handler */
app.use('/products', routes);

/* catch 404 and forward to error handler */
app.use((req, res, next) => {
	const err = new Error("Not Found");
	err.status = 404;
	next(err);
});

/* Error Handler */
app.use((err, req, res, next) => {
	res.status(err.status || 500);
	res.json({
		error: {
			message: err.message
		}
	});
});

/* Start server */
app.listen(app.get('port'), () => {
  console.log('Server is listening at:', app.get('port'));
});
