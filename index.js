let http = require('http');
let url = require('url');
var fs = require('fs');


http.createServer(function(req,res) { // creating basic server client side
  let q = url.parse(req.url, true); // use parse to read parts of URL

  let filename = (q.pathname === '/') ? "./index.html" : "." + q.pathname + ".html";

   fs.readFile(filename, function(err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found");
      } 
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });

}).listen(8080)