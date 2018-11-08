const server = require('http').createServer();
const PORT = process.env.PORT || 8000;
// Hello World!
server.on('request', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text-plain' });
    res.end('Hello World!');
});

server.listen(PORT, () => {
    console.log(`Listening port ${PORT}`)
});