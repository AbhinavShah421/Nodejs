var http=require('http');
var dt = require('./myfirstmodule');
http.createServer(function(req,res){
  res.writeHead(200,{'content':'text/html'});
  res.end('hello world \n'+dt.myDateTime());
}).listen(8080);
