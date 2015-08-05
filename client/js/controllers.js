angular.module('app.controllers', ['angElectron'])

.controller('MainController', ['$scope', 'electron',
function($scope, electron) {

  $scope.doFace = function() {

    var options = {
      type: 'error',
      buttons: ['cancel','Awesome'],
      title: "Ohhhhh",
      message: "Are you kidding me?",
      detail: "Make sure to check your pants."
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
