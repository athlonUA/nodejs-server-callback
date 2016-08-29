var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/endpoint', function(req, res){
	var obj = {};
	console.log('Body: ' + JSON.stringify(req.body));
	res.send(req.body);
});

app.listen(3000);
