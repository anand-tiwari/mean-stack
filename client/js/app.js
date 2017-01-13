var app = angular.module('app', ['ui.router','ngResource','ngAnimate', 'ngSanitize','ui.bootstrap']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('login', {
        url: '/',
        templateUrl: 'client/views/login.html',
        controller: 'AuthCtrl'
    })
      .state('home', {
        url: '/home',
        templateUrl: 'client/views/book.html',
        controller: 'appController'
    })
      .state('student', {
        url: '/student',
        templateUrl: 'client/views/student.html',
        controller: 'studentController'
    })
      .state('addstudent', {
        url: '/addstudent',
        templateUrl: 'client/views/studentEntryForm.html',
        controller: 'studentController'
    });

}]);
