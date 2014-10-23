var express = require('express');
var app = express();
var fs = require('fs');
var string = fs.readFileSync("index.html", "utf8");

app.set('port', (process.env.PORT || 8080));
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/fonts', express.static(__dirname + '/fonts'));
app.use('/images', express.static(__dirname + '/images'));

app.get('/', function(request, response) {
  response.send(string);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
