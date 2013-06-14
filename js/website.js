angular.module('website', []).
    config(function ($routeProvider) {
        $routeProvider.
            when('/about', {templateUrl: 'partials/about.html', controller: 'AboutCtrl'}).
            when('/experiments', {templateUrl: 'partials/experiments.html', controller: 'ExperimentsCtrl'}).
            when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'}).
            otherwise({redirectTo: '/home'});
    })
    .controller('AboutCtrl', ['$scope', 'StateService', function ($scope, StateService) {
        $scope.title = 'About Page';
        $scope.body = 'This is the about page body';

        $scope.message = StateService.getMessage();

        $scope.updateMessage = function (m) {
            StateService.setMessage(m);
        };
    }])
    .controller('ExperimentsCtrl', ['$scope', 'StateService', function ($scope, StateService) {
        $scope.title = 'Experiments Page';
        $scope.body = 'This is the about experiments body';

        $scope.message = StateService.getMessage();

        $scope.updateMessage = function (m) {
            StateService.setMessage(m);
        };
    }])
    .controller('HomeCtrl', ['$scope', 'StateService', function ($scope, StateService) {
        $scope.title = 'Home Page';
        $scope.body = 'This is the about home body';

        $scope.message = StateService.getMessage();

        $scope.updateMessage = function (m) {
            StateService.setMessage(m);
        };
    }])
    .factory('StateService', function () {
        var message = 'Hello Message';
        var getMessage = function() {
            return message;
        };
        var setMessage = function(m) {
            message = m;
        };

        return {
            getMessage: getMessage,
            setMessage: setMessage
        }
    });