var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Welcome to our homepage');
})

app.route('/about').get(function(req, res) {
    res.send('welcome to about us page');
})

var server = app.listen(3000, function() {
    console.log("server is running on port: 3000 ")
})