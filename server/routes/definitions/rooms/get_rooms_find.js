'use strict';

var Joi  = require('joi'),
    Room = require('../../../models/room');

module.exports = {
  description: 'Join a Room',
  tags:['rooms'],
  validate: {
    params: {
      roomId: Joi.string().regex(/^[a-f0-9]{24}$/).required()
    }
  },
  handler: function(request, reply){
    Room.findOne({_id:request.params.roomId}).populate('creator').exec(function(err, room){
      room.password = room.creator.password = null;
      reply(room);
    });
  }
};
