var express = require('express');
var app = express();


app.get('/', function(req, res) {
  res.send('root is called from testapp')
});

app.get('/user', function (req, res) {
  res.send('Hello User! Version 3 -testapp');
});

app.get('/healthcheck', function (req, res) {
  res.send('checking health... OK!');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
