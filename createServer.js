var http = require('http');

var server = http.createServer(function(req, res) {
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();

    switch(path){
        case '':
            res.writeHead(200, {'Content-Type': 'text/plain' });
            res.end('This is a Homepage! ');
            break;
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.sendFile("this is a about page");
            break;
 
        default:
            res.writeHead(404, {'content-Type': 'text/plain' });    
            res.end("page not found! ");
            break;
    }
})
server.listen(3000);
console.log("server started on port 3000")