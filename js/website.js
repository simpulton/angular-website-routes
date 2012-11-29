function AboutCtrl($scope) {
    console.log('about called');
    $scope.title = 'About Page';
    $scope.body = 'This is the about page body';
}

function ExperimentsCtrl($scope) {
    console.log('exp called');
    $scope.title = 'Experiments Page';
    $scope.body = 'This is the about experiments body';
}

function HomeCtrl($scope, TestService) {
    console.log('home called', arguments);
    $scope.title = 'Home Page';
    $scope.body = 'This is the about home body';
}

function TestService() {
    console.log("test service");
    return { test: 'test' };
}

var basic = '<h1>{{title}}</h1><p>{{body}}</p>';

var app = angular.module('website', []);

app.config( function($routeProvider) {
    $routeProvider.
        when('/about', { template: basic, controller: AboutCtrl }).
        when('/experiments', { template: basic, controller: ExperimentsCtrl }).
        when('', { template: basic, controller: HomeCtrl }).
        otherwise({ redirectTo: '' });
} );

app.factory('TestService', TestService);

HomeCtrl.$inject = ['$scope', 'TestService'];