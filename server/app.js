const http = require('http');

const server = http.createServer( (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
})

server.listen(8080);

console.log('Web server at port 8000 is running..')