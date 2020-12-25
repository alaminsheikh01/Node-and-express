var fs = require ('fs');


//file write
fs.writeFile('text.txt', 'Hello this is my demo text file!', function(err){
    if(err){
        console.log(err);
    }
    console.log("file write succesfully.");
})

//file read
fs.readFile('text.txt', 'utf8', function(err, data){
    if(err) throw err;
    console.log(data);
})

//delete file
fs.unlink('text.txt', function(err){
    if(err) throw err;
    console.log("file delete succesfully");
})