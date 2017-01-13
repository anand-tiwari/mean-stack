app.factory('AuthService', function ($http,$state,$rootScope) {
    function signIn(uname,pass) {

        $.ajax({
            crossDomain: true,
            type: 'POST',
            cache: false,
            url: "api/login",
            data: {
                userid: uname,
                password: pass,
            },
            dataType: 'json',
            success: function (response) {
                localStorage.setItem('_Account',response.session.token);
                localStorage.setItem('UserName',response.session.username);
                $rootScope.isAuthenticated = true;
                $state.go('home');
            },
            error: function (errorType, textStatus, errorThrown) {
            }
        });
        $state.go('home');
    };
  return {
      signIn: signIn
  };

});