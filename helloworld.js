var http = require("http");

http.createServer(function(request, response){
  response.writeHead(200,{'Content-Type': 'text/plain'});

  response.end("Hello World!! Eddy!\n");
}).listen(8081);

console.log("Sever running at http://126.0.0.1:8081")
