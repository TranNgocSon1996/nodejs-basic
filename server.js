var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (request, response) {
    var parse = url.parse(request.url, true);
    var path = parse.path;
    if (path == '/') {
        fs.readFile('files/home.html', 'utf8', function (err, data) {
            if (err) throw err;
            response.write(data);
            response.end();
        })
    } else { //ngược lại nếu truyền tham số lên url thì sẽ load trang tương ứng
        var load = "files" + path + '.html';
        fs.readFile(load, function (error, data) {
            if (error) {
                response.writeHead('404', { 'Content-Type': 'text/html' });
                response.end('<h1>404 not found</h1>');
            } else {
                response.writeHead('200', { 'Content-Type': 'text/html' });
                response.end(data);
            }

        })
    }
}).listen(8000);
