app.controller('studentController', function ($scope, $resource, $http,$state) {
	$scope.TotalStudents = [];
	$scope.getStudent = function(){
		$http.get('/api/student')
		.success(function(data) {
			console.log(data);
			$scope.TotalStudents = data;
		})
		.error(function(data) {
	    	console.log('Error: ' + data);
		});
	};

	$scope.student = {
		capacity:3,
		issued:0
	};
	$scope.addStudent = function(){
		$scope.student["student_id"] = $scope.student.rollnumber+$scope.student.branch+ new Date().getFullYear();
		$http.post('/api/student', $scope.student)
		.success(function(data) {
			console.log(data);
			$state.go('student');
		})
		.error(function(data) {
	    	console.log('Error: ' + data);
		});
	};
});