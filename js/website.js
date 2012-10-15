angular.module('website', []).
    config(function($routeProvider) {
        $routeProvider.
            when('/about', {templateUrl:'partials/basic-template.html', controller:AboutCtrl}).
            when('/experiments', {templateUrl:'partials/basic-template.html', controller:ExperimentsCtrl   }).
            when('/home', {templateUrl:'partials/basic-template.html', controller:HomeCtrl   }).
            otherwise({redirectTo:'/home'});
    });

function AboutCtrl($scope) {
    $scope.title = 'About Page';
    $scope.body = 'This is the about page body';
}

function ExperimentsCtrl($scope) {
    $scope.title = 'Experiments Page';
    $scope.body = 'This is the about experiments body';
}

function HomeCtrl($scope) {
    $scope.title = 'Home Page';
    $scope.body = 'This is the about home body';
}