angular.module('website.about', [

])
  .config(function ($routeProvider) {
    $routeProvider.
      when('/about', {templateUrl: 'about/about.tpl.html', controller: 'AboutCtrl'})
  })

  .controller('AboutCtrl', function ($scope, StateService) {
    $scope.title = 'About Page';
    $scope.body = 'This is the about page body';

    $scope.message = StateService.getMessage();

    $scope.updateMessage = function (m) {
      StateService.setMessage(m);
    };
  })
;
