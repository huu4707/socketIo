var app = require('express')();
var http = require('http').Server(app);
io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

var socket =  require('./socketio');


http.listen(4000, function(){
  console.log('listening on *:3000');
});

