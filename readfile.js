var fs= require('fs');
var https= require('http');
https.createServer(function(req,res){
  fs.readFile("demofs.html",function(err,data){
    res.writeHead(200,{'contant-type':'text/html'});
    res.write('data');
    res.end();
  });
}).listen(8080);
console.log('appended content ');