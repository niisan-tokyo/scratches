'use strict'

const http = require('http');
const fs   = require('fs');
const ws   = require('websocket.io');

const view = fs.readFileSync('views/index.html');


const server = http.createServer(function (req, res) {
  res.end(view);
});

let master = null;

const wserver = ws.listen(8888);

wserver.on('connection', socket => {
  if (master === null) {
    master = socket;
    socket.send('master');
  }

  socket.on('message', data => {
    if (socket != master) return false;
    console.log(data);
    wserver.clients.forEach(client => {
      if (client != master) client.send(data);
    });
  });

  socket.on('close', () => {
    if (socket === master) {
      master = null;
    }
  })
});

server.listen(3000);
