(function(){
  'use strict';

  angular.module('hapi-auth')
    .controller('RoomsListCtrl', ['$rootScope', '$scope', '$state', function($rootScope, $scope, $state){

      $scope.chat = function(msg){
        msg = $scope.rootuser.username + ': ' + msg;
        //debugger;
        socket.emit('globalChat', msg);
        //msg = '';
      };

      socket.on('bGlobalChat', function(data){
        $('#messages').append('<div>' + data + '</div>');
          //$('#messages').val('');
      });


    }]);
})();
