'use strict';

const formidable = require('formidable');

/* Adding required modules */
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const myLogger = require("morgan");
const express = require('express');
const routes = require("./routes");
const cors = require('cors')

//const path = require('path');
const app = express();
process.env.TZ = "America/New_York";
const corsOptions = {
  origin: 'http://localhost:3000',//'http://108.2.105.162:3000', 
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

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
	const err = new Error("Not Found Page");
	err.status = 404;
	next(err);
});

/* Error Handler */
app.use((err, req, res, next) => {
	res.status(err.status || 500);
	res.json({
		error: {
			status: err.status,
			message: err.message
		}
	});
});

/* Start server */
const server = app.listen(app.get('port'), () => {
  console.log('Server is listening at:', app.get('port'));
});

/*
app.get('/', (req,res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
});
app.post('/fileupload', (req,res) => {
	    var form = new formidable.IncomingForm();
	    form.parse(req, function (err, fields, files) {
	      var oldpath = files.filetoupload.path;
	      var newpath = __dirname + '/productImages/' + files.filetoupload.name;
	      fs.rename(oldpath, newpath, function (err) {
	        if (err) throw err;
	        res.write('File uploaded and moved!');
	        res.end();
	      });
	 });
});
*/
