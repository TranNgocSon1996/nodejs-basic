var http = require('http');
var fs = require('fs');

http.createServer(function(request, response){
    response.writeHead(200,{'Content-Type': 'text/html'})
    fs.readFile('index.html','utf8',function(err,data){
        if (err) throw err;
        response.write(data);
        response.end();
    })
}).listen(8000);
