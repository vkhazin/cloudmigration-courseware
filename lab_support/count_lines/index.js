const http = require('http');

const port = process.argv[2] || 10000;
const producer_url = process.argv[3] || 'localhost:9000';

http.createServer( (req, res) => {
  console.info('Request received at ' + (new Date().toISOString()) );
  http.get('http://' + producer_url, (resp) => {
    let counter = 0;

    // A chunk of data has been received.
    resp.on('data', (chunk) => {
      let a_chunk = chunk + '';
      counter += (a_chunk.match(/\n/g) || []).length; 
    });
    
    // The whole response has been received.
    resp.on('end', () => {
      res.setHeader('Content-type', 'application/json' );
      let data = {
        counter : counter,
        timestamp : new Date().toISOString()
      };
      res.end(JSON.stringify(data, null, 2) + '\n');
    });

  }).on("error", (err) => {
    let error = err.message;
    res.statusCode = 500;
    let data = {
      message : error
    }
    res.end(JSON.stringify(data, null, 2) + '\n');
    console.log("Error: " + error);
  });
}).listen(parseInt(port));

console.log(`Server listening on port ${port}`);