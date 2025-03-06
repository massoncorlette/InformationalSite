let http = require('http');
let url = require('url');
var fs = require('fs');


http.createServer(function(req,res) { // creating basic server client side
  let q = url.parse(req.url, true); // use parse to read parts of URL

  let filename = "." + (q.pathname = '/') ? "./index.html" : q.pathname;

  console.log(filename);

}).listen(8080)