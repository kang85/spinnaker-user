var express = require('express');
var app = express();


app.get('/', function(req, res) {
  console.log("test log")
  res.send('recent root is called from testapp')
});

app.get('/user', function (req, res) {
  console.log("test log")
  res.send('changed Hello User! Version 3 -testapp');
});

app.get('/healthcheck', function (req, res) {
  res.send('checking health... OK!');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});