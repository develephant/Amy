angular.module('app.routes', ['ngRoute'])
.config(['$routeProvider',
function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: "client/tpl/main.html"
  })
  .otherwise('/');
}]);
