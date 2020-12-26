var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);



app.get('/', function(req, res){
    res.type('text/plain');
    res.send('This is homepage!')
})

app.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404- not found');
})

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('text/type');
    res.status(500);
    res.send('500 - server error');
})
app.listen(app.get('port'), function(){
    console.log('Express started on http://loclahost:'+ app.get('port')+ '; press ctrl-c to terminate.')
})