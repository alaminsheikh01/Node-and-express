var express = require('express');
var app = express();


//require from things.js file 
var things = require('./things.js');
app.use('/things', things);

app.get('/', function(req, res) {
    res.send('Welcome to our homepage');
})

app.get('/about', function(req, res) {
    res.send('welcome to about us page');
})

var server = app.listen(3000, function() {
    console.log("server is running on port: 3000 ")
})