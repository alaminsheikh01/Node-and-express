var express = require('express');

var app = express();

app.get('/:id', function(req, res) {
    res.send('This id you specified is: '+req.params.id);
})

app.listen(3000);
console.log("server is running on port: 3000")