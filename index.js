let http = require('http');
let url = require('url');
var fs = require('fs');


http.createServer(function(req,res) {
  let q = url.parse(req.url, true);
  let filename = "." + q.pathname;


})