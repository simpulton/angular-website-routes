angular.module('website.home', [

])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {templateUrl: 'home/home.tpl.html', controller: 'HomeCtrl'})
      .otherwise({redirectTo: '/home'});
  })

  .controller('HomeCtrl', function ($scope, StateService) {
    $scope.title = 'Home Page';
    $scope.body = 'This is the about home body';

    $scope.message = StateService.getMessage();

    $scope.updateMessage = function (m) {
      StateService.setMessage(m);
    };
  })
;
