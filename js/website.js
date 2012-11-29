var basic = '<h1>{{title}}</h1><p>{{body}}</p>';

var app = angular.module('website', []);

app.config(function($routeProvider) {
        $routeProvider.
            when('/about', { template: basic, controller: AboutCtrl }).
            when('/experiments', { template: basic, controller: ExperimentsCtrl }).
            when('/home', { template: basic, controller: HomeCtrl }).
            otherwise({ redirectTo: '/home' });
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