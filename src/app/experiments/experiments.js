angular.module('website.experiments', [

])
  .config(function ($routeProvider) {
    $routeProvider.
      when('/experiments', {templateUrl: 'experiments/experiments.tpl.html', controller: 'ExperimentsCtrl'})
  })

  .controller('ExperimentsCtrl', function ($scope, StateService) {
    $scope.title = 'Experiments Page';
    $scope.body = 'This is the about experiments body';

    $scope.message = StateService.getMessage();

    $scope.updateMessage = function (m) {
      StateService.setMessage(m);
    };
  })
;
