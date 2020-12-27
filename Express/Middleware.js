var express = require('express');

var app = express();

app.use(function(req, res, next) {
    console.log("A new request received at "+ Date.now());

    next();
})

app.listen(3000);
console.log("server is lising on port: 3000")

