var express = require('express');
const app = express();
app.use(express.json());

app.get('/', function(req, res) {
    console.log('get request received');
    res.send('<h1>Welcome to our homepage.</h1>')
})

app.post('/about', function(req,res) {
    console.log("Post request received");
    res.send('<h1>Hello this is about us page</h1>')
})

app.delete('/delete', function(req, res) {
    console.log("delete received");
    res.send('<h1>this is a delete page</h1>')
}) 

app.listen(3000);
console.log('server is running on port: 3000');