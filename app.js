var http = require('http');

http.createServer(function(request, response){
    response.writeHead(200,{'Content-Type': 'text/html'})
    response.write('rep');
    var param = request.url;
    response.write(param);
    response.end();
}).listen(8000);
