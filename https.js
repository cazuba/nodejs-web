const fs = require('fs');
const server = require("https").createServer({
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
    //pfx: 
});
const PORT = 443;

// Hello World! V2 - HTTPS
server.on('request', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text-plain' });
    res.end('Hello World!\n');
});

server.listen(PORT, () => console.log('Secure server connection started...'));