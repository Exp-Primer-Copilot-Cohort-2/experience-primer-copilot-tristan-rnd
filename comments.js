// Create web server
// Create a web server that listens on port 3000.
// When you visit http://localhost:3000/ in your browser, it should respond with a web page that displays the message "Hello, World!".

// To create a web server in Node.js, you need to require the http module and call the createServer method on it. The createServer method takes a callback function that is called whenever a request is made to the server. The callback function takes two arguments, a request object and a response object. The request object contains information about the incoming request, and the response object is used to send data back to the client.

// Here's an example of how to create a simple web server in Node.js:

// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.end('<h1>Hello, World!</h1>');
// });

// server.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000/');
// });
// In this example, we require the http module and create a server that responds with the message "Hello, World!" when a request is made to it. We listen on port 3000, and log a message to the console when the server is running.

// Your task is to create a web server that listens on port 3000 and responds with the message "Hello, World!" when you visit http://localhost:3000/ in your browser.

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello, World!</h1>');
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/');
});

// When you run your solution, you should see the message "Server is running on http://localhost:3000/" in the console. Visit http://localhost:3000/ in your browser to see the "Hello, World!" message.