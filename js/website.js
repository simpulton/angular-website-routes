angular.module('website', ['ui.router', 'ngAnimate'])
  .value('animations', {
    fade: {
      enter: function (element, done) {
        TweenMax.to(element, 0.5, {autoAlpha: 1, onComplete: done, ease:Linear.easeNone});
      },
      leave: function (element, done) {
        TweenMax.to(element, 0.5, {autoAlpha: 0, onComplete: done, ease:Linear.easeNone});
      }
    },
    slide: {
      enter: function (element, done) {
        TweenMax.fromTo(element, 0.5, {autoAlpha: 0, left: -element[0].clientWidth}, {autoAlpha: 1, left: 0, onComplete: done, ease:Bounce.easeIn});
      },
      leave: function (element, done) {
        TweenMax.to(element, 0.5, {autoAlpha: 0, left: -element[0].clientWidth, onComplete: done, ease:Linear.easeNone});
      }
    }
  })
  .animation('.main', function (animations) {
    return animations.fade;
    // return animations.slide;
  })
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'partials/about.html',
        controller: 'AboutCtrl'
      })
      .state('experiments', {
        url: '/experiments',
        templateUrl: 'partials/experiments.html',
        controller: 'ExperimentsCtrl'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      });
  })
  .controller('AboutCtrl', function($scope, StateService) {
    $scope.title = 'About Page';
    $scope.body = 'This is the about page body';

    $scope.message = StateService.getMessage();

    $scope.updateMessage = function(m) {
      StateService.setMessage(m);
    };
  })
  .controller('ExperimentsCtrl', function($scope, StateService, ExperimentsService) {
    $scope.title = 'Experiments Page';
    $scope.body = 'This is the about experiments body';

    $scope.message = StateService.getMessage();
    $scope.experiments = ExperimentsService.getExperiments();

    $scope.updateMessage = function(m) {
      StateService.setMessage(m);
    };
  })
  .controller('HomeCtrl', function($scope, StateService) {
    $scope.title = 'Home Page';
    $scope.body = 'This is the about home body';

    $scope.message = StateService.getMessage();

    $scope.updateMessage = function(m) {
      StateService.setMessage(m);
    };
  })
  .factory('StateService', function() {
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
  })
  .service('ExperimentsService', function() {
    var service = this,
      experiments = [{
        name: 'Experiment 1',
        description: 'This is an experiment',
        completed: 0
      }, {
        name: 'Experiment 2',
        description: 'This is an experiment',
        completed: 0
      }, {
        name: 'Experiment 3',
        description: 'This is an experiment',
        completed: 0
      }, {
        name: 'Experiment 4',
        description: 'This is an experiment',
        completed: 0
      }];

    service.getExperiments = function() {
      return experiments;
    };
  })
  .directive('experiment', function() {
    var linker = function(scope, element, attrs) {
      element.on('click', function() {
        scope.doExperiment();
      })
    };

    var controller = function($scope) {
      $scope.doExperiment = function() {
        $scope.$apply(function() {
          $scope.experiment.completed++;
        });
      };
    };

    return {
      scope: true,
      restrict: 'E',
      template: '<div class="experiment">' +
        '<h3>{{experiment.name}}</h3>' +
        '<p>{{experiment.description}}</p>' +
        '<p><strong>{{experiment.completed}}</strong></p>' +
        '</div>',
      link: linker,
      controller: controller
    }
  });
