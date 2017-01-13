app.controller('AuthCtrl', function ($scope, AuthService, $state,$rootScope) {
  	'use strict';
    function init(){
        $rootScope.login();
    };
    $scope.login ={
      userName :'anand@gmail.com',
      passWord: 'welcome'
    };
    
    $scope.loginForm = function(){
        $rootScope.login();
    };

    $rootScope.login = function(){
        AuthService.signIn($scope.login.userName,$scope.login.passWord);
    };

    $rootScope.logout = function(){
      $state.go('login');
    };
  	init();
});
  