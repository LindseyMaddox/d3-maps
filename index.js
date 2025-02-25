
var express = require('express');
var app = express();

var path = require('path');
app.use(express.static(path.resolve(__dirname + '/public')));

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/choropleth', function(req,res){
  res.sendFile(path.join(__dirname+'/choropleth-pop.html'));
});

app.listen(process.env.PORT || 8080, function () {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);;
});