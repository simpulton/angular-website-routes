
var homeCount = 1;

console.log("First time!");

function MainCtrl($scope) {
    $scope.$on('$routeChangeError', function(current, previous, rejection) {
        console.log("routeChangeError", currrent, previous, rejection);
    });

    $scope.$on('$routeChangeStart', function(next, current) {
        console.log("routeChangeStart");
        console.dir(next);
        console.dir(current);
    });

    $scope.$on('$routeChangeSuccess', function(current, previous) {
        console.log("routeChangeSuccess");
        console.dir(current);
        console.dir(previous);
    });

    $scope.$on('$routeUpdate', function(rootScope) {
        console.log("routeUpdate", rootScope);
    });
}

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
    $scope.body = 'This is the about home body ' + homeCount++;
}

function PageCtrl($scope, $routeParams, alias) {
    console.log('page called', $routeParams);
    $scope.title = alias;
    $scope.body = "This is a alias page for " + alias;
}

function resolveAlias($q, $route, $timeout) {
    var alias = $route.current.params.alias;
    var deferred = $q.defer();
    deferred.resolve(alias);
    return deferred.promise;
}

function TestService() {
    console.log("test service");
    return { test: 'test' };
}

    var basic = '<h1>{{title}}</h1><p>{{body}}</p>';

    var app = angular.module('website', []);

    app.config( function($routeProvider, $locationProvider) {
        $routeProvider.
            when('/', { template: basic, controller: HomeCtrl, reloadOnSearch: false }).
            when('/about', { template: basic, controller: AboutCtrl, reloadOnSearch: false }).
            when('/experiments', { template: basic, controller: ExperimentsCtrl, reloadOnSearch: false }).
            when('/:alias', { template: basic, controller: PageCtrl, reloadOnSearch: false, resolve: { alias: resolveAlias } }).
            otherwise({ redirectTo: '/' });

        $locationProvider.html5Mode('true');
    } );

app.factory('TestService', TestService);

HomeCtrl.$inject = ['$scope', 'TestService'];
PageCtrl.$inject = ['$scope', '$routeParams', 'alias'];