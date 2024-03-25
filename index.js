// const express = require('express');
// const { createServer } = require('node:http');
// const { join } = require('node:path');
// const { Server } = require('socket.io');

// const app = express();
// const server = createServer(app);
// const io = new Server(server);

// app.get('/', (req, res) => {
//   res.sendFile(join(__dirname, 'index.html'));
// });

// io.on('connection', (socket) => {
//   socket.on('chat message', (msg) => {
//     io.emit('chat message', msg);
//   });
// });

// server.listen(4000, () => {
//   console.log('server running at http://localhost:4000');
// });

var net = require('net');
var client = new net.Socket();

client.connect(8000, "127.0.0.1", function() {
  console.log('Connected')
  client.write("Hello from feng")
})

client.on('data', function(data) {
  console.log("Received " + data);
})

client.on('close', function() {
  console.log("Closed");
})