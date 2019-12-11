
io.on('connection', function(socket){
    socket.auth = false;
    socket.on('authenticate', function(data){
      if(data.token!='') { // tuy cách veryfy token
        socket.auth = true;
      }
    })

    setTimeout(function(){
        if (!socket.auth) {
          console.log("Disconnecting socket ", socket.id);
          socket.disconnect('unauthorized');
        }
    }, 1000); 

    mainSocket(socket);
  });

function mainSocket(socket) {
    sendMessage(socket);
    // joinoinRoom(socket);
}

function sendMessage(socket) {
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
}

// function joinoinRoom(socket){
//     socket.on('room', function(room) {
//         console.log('room', room)
//         socket.join(room);
//     });
// };
