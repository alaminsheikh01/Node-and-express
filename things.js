var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('This is a GET method');
})

router.post('/', function(req, res) {
    res.send('this is a POST method');
})

module.exports = router;