//  This will check wheather student is registered or not !!!
app.directive('registered', function($http) {
      return {
           restrict: 'A',
           require: 'ngModel',
           link: function (scope, element, attrs, ngModel) {
                element.bind('blur', function (e) {
                     ngModel.$setValidity('taken', true);
                     $http.get("/api/student" , {student_id:element.val()}).success(function(data) {
                     	console.log(data);
                          if (!data) {
                              ngModel.$setValidity('taken', false);
                          }
                     });
                });
           }
      };
});