// This is simple webserver to render a webpage consisting of an 'About, Not Found, homepage page

var http = require('http');
     fs = require('fs');
      // normalize url by removing querystring, optional
      // trailing slash, and making it lowercase.


// function to server static files.
function serveStaticFile(res, path, contentType, responseCode){
      if (!responseCode) responseCode = 200;
      fs.readFile(__dirname + path, function(err, data){
            if(err) {
                    res.writeHead(500, {'Content-Type': 'text/plain'});
                    res.end('500 - Internal Error');
            } else {
                    res.writeHead(responseCode, 
                                  {'Content-Type': contentType});
                    res.end(data);
            }
      });
}

// Http server ...
http.createServer(function(req, res){
      // normalize url by removing querystring, optional
      // trailing slash, and making it lowercase.
      var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
      switch(path){ // This switches the path to the normalized version.
        case '':
                serveStaticFile(res, '/public/home.html', 'text/html');
                break;
        case '/about':
                serveStaticFile(res, '/public/about.html', 'text/html');
                break;
        case 'img/beautiful.jpeg':
                serveStaticFile(res, '/public/img/beautiful.jpeg', 'image/jpeg');
                break;
        default: 
                serveStaticFile(res, '/public/404.html', 'text/html', 404);
                break;
        }
}).listen(3000);

  
console.log('Server started on localhost:3000; press Cltr-C to abort...');

