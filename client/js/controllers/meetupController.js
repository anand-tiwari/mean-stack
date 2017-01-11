app.controller('appController', ['$scope', '$resource','$http', 
	function ($scope, $resource, $http) {

	$scope.meetups = [];
	
	$scope.init = function(){
		$http.get('/api/meetups')
		.success(function(data) {
		      $scope.meetups = data;
		})
		  .error(function(data) {
		      console.log('Error: ' + data);
		});
	};

	$scope.createMeetup = function(){
		$http.post('/api/meetups')
		.success(function(data) {
	      	$scope.meetups.push($scope.meetupName);
	      	$scope.meetupName = '';
		})
		.error(function(data) {
	    	console.log('Error: ' + data);
		});
	};

	$scope.init();
}]);