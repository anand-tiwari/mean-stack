//  This will check wheather student is registered or not !!!
app.directive('registered', function($http) {
      return {
           restrict: 'A',
           require: 'ngModel',
           link: function (scope, element, attrs, ngModel) {
                element.bind('blur', function (e) {
                     ngModel.$setValidity('taken', true);
                     var d = {};
                     d["student_id"] = element.val();
                     $http.get("/api/student",d).success(function(data) {
                     	console.log(data);
                          if (!data) {
                              ngModel.$setValidity('taken', false);
                          }
                     });
                });
           }
      };
});