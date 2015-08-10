angular.module('app.controllers', ['angElectron'])

.controller('MainController', ['$scope', 'electron',
function($scope, electron) {

  $scope.doFace = function() {

    var options = {
      type: 'error',
      buttons: ['Cancel','Awesome!'],
      title: "Amy is Awesome!",
      message: "Do you think Amy is Awesome?",
      detail: "This Electron dialog was opened from AngularJS controller. The response will be sent back to AngularJS. Amy said so."
    }

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
