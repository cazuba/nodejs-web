const server = require("http").createServer();
const PORT = process.env.PORT || 8000;

// // Hello World! V1 - Plain response
// server.on('request', (req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text-plain' });
//     res.end('Hello World!\n');
// });

// Hello World! V1.1 - Streaming
server.on("request", (req, res) => {
  res.writeHead(200, { "Content-Type": "text-plain" });
  // BASIC STREAMING HTTP SERVER using .write
  res.write("Hello\n");

  setTimeout(() => {
    res.write("World\n");
  }, 2000);

  setTimeout(() => {
    res.write("!\n");
  }, 4000);
});

// Optional: Set the server timeout (Applies for all the requests)
server.timeout = 4000;

server.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});
