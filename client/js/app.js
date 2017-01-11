var app = angular.module('app', ['ui.router','ngResource','ngAnimate', 'ngSanitize','ui.bootstrap']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'client/views/book.html',
        controller: 'appController'
    })
      .state('student', {
        url: '/student',
        templateUrl: 'client/views/student.html',
        controller: 'studentController'
    });

  }]);
