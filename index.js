var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello coucou!');
});
app.get('/coucou/*', function(req, res) {
    res.send('hello coucou');
});

app.get('/*', function(req, res) {
    res.send('cette page n\'existe pas');
});

app.listen(5000, function() {
    console.log('Example app listening on port 5000!');
});