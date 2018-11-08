const fs = require("fs");
const server = require("http").createServer();

const PORT = process.env.PORT || 8000;
const data = { text: 'Hello World!' }; // JSON response Mock

server.on('request', (req, res) => {
    switch(req.url) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text-plain' });
            res.end('Hello World!\n');
            break;
        case '/api':
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(data));
            break;
        case '/home':
        case '/about':
            res.writeHead(200, { 'Content-Type': 'text-plain' });
            res.end(fs.readFileSync(`.${req.url}.html`));
            break;
        case '/not-found':
            res.writeHead(404, { 'Content-Type': 'text-plain' });
            res.end('Page not found!\n');
            break;
        default:
            res.writeHead(301, { 'Location': '/home' });
            res.end();
            break;
    }
});

server.listen(PORT, () => {
    console.log(`Listening port ${PORT}`);
  });
  