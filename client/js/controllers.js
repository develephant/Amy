angular.module('app.controllers', ['ngElectron'])

.controller('MainController', ['$scope', '$rootScope','electron',
function($scope, $rootScope, electron) {

  //listen for host messages
  $rootScope.$on('electron-host', function( evt, data ) {
    console.log( data );
  });

  //Click face handler
  $scope.doFace = function() {

    var options = {
      type: 'error',
      buttons: ['Cancel','Awesome!'],
      title: "Amy is Awesome!",
      message: "Do you think Amy is Awesome?",
      detail: "This Electron dialog was opened from an AngularJS controller. The response will be sent back to AngularJS. Amy said so."
    }

    //Promise
    new Promise(function(resolve, reject) {
      electron.dialog.showMessageBox(null, options, function(r) {
        if ( r > 0 ) {
          resolve(r);
        } else {
          reject(r);
        }
      })
    })
    .then(function(e) {
      console.log(e);
    }, function(x) {
      console.log(x);
    });
  }

}]);
