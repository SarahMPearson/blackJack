'use strict';

module.exports = function(data){
  var socket = this;
  socket.emit('bAddRoom', data);
  socket.broadcast.emit('bAddRoom', data);
};
