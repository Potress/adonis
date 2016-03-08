var express = require('express')
  , app = express();

app.use('/static', express.static(__dirname + '/static'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(3000, function() {
  console.log('Server Start');
});