const http = require('http');
const fs = require('fs');

const port = process.argv[2] || 9000;

http.createServer( (req, res) => {
  console.info('Request received at ' + (new Date().toISOString()) );
  fs.readFile('./book.txt', (err, data) => {
      if(err){
        var errorMessage = `Error getting the book.txt file: ${err}.`;
        res.statusCode = 500;
        res.end(errorMessage);
        console.error(errorMessage);
      } else {
        res.setHeader('Content-type', 'text/plain' );
        res.end(data);
      }
    });
}).listen(parseInt(port));

console.log(`Server listening on port ${port}`);