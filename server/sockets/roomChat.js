'use strict';

module.exports = function(data){
  var socket = this;
  socket.to(data.roomId).emit('roomChat', data); // effectivly does a broadcast to all the people in that room
  socket.emit('roomChat', data); // this sends it back to you because .to doesn't do that
};
