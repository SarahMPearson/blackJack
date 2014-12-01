'use strict';

module.exports = function(data){
  var socket = this;
  socket.emit('globalChat', data); // sends this out to you
  socket.broadcast.emit('globalChat', data); // sending this out to everyone else on the same socket except for you
};
