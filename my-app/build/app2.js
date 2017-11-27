const express = require('express');
const path = require('path');
const app = express();

const port = process.env.port || 3031;
app.use(express.static(__dirname + '/'));
app.use(function(req, res){
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, function () {
	console.log('Server is running at port ' + port);
});
