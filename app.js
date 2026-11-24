const httpp = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from Node.js in   Docker!\n);
});

 server.listen(port, () => {
   console.log('Server runnning at http://localhost:${port}/
});
