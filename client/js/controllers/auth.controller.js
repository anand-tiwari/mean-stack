app.controller('AuthCtrl', function ($scope, AuthService, $state,$rootScope) {
  	'use strict';
    function init(){
        $scope.userName = 'anand@gmail.com';
        $scope.passWord = 'welcome';
        $rootScope.login();
    };
    $rootScope.login = function(){
        AuthService.signIn($scope.userName,$scope.passWord);
    };

    $rootScope.logout = function(){
      $state.go('login');
    };
  	init();
});
  