// This is simple webserver to render a webpage consisting of an 'About, Not Found, homepage page

var http = require('http');
    // normalize url by removing querystring, optional
    // trailing slash, and making it lowercase.
http.createServer(function(req, res){
      // normalize url by removing querystring, optional
      // trailing slash, and making it lowercase.
      var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
      switch(path){ // This switches the path to the normalized version.
        case '':
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end('Homepage');
                break;
        case '/about':
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end('About');
                break;
       default:
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end('Not Found');
                break; 
      }
}).listen(3000);

console.log('Server started on localhost:3000; press Cltr-C to abort...');

