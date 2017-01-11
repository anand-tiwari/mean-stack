app.controller('appController',
	function ($scope, $resource, $http, $modal, $log, $document) {
    $scope.navbarCollapsed = true;
	
	$scope.TotalBooks = [];
	$scope.initiate = function(){
		$http.get('/api/book')
		.success(function(data) {
			console.log(data);
			$scope.TotalBooks = data;
		})
		.error(function(data) {
	    	console.log('Error: ' + data);
		});
	};

	/* Adding Book section */
	$scope.book = {
		"issue_date":null,
		"user_id":null
	};
	var min = 10000;
	var max = 99999;
	$scope.addBook = function(){
		$scope.book["book_id"] = $scope.book.name+ Math.floor(Math.random() * (max - min + 1)) + min;
		$http.post('/api/book', $scope.book)
		.success(function(data) {
			console.log(data);
			$scope.TotalBooks.push(data);
		})
		.error(function(data) {
	    	console.log('Error: ' + data);
		});
	};

	/* End of Adding book section ... */

	/* Issue book to the Student */
	$scope.issue = {
		book_id:$scope.bookName,
		id:$scope.id
	};
	$scope.issueBook = function(){
		$http.put('/api/book', $scope.issue)
		.success(function(data) {
			console.log(data);
		})
		.error(function(data) {
	    	console.log('Error: ' + data);
		});
	};
	/* End of Issue Book section ..*/
	$scope.open = function(bookName, Id) {
		$scope.bookName = bookName;
		$scope.id = Id;
		modalInstance = $modal.open({
          templateUrl: 'client/views/popup.html',
          // controller: 'ModalController'
        });
	};

});

app.controller('studentController',
	function ($scope, $resource, $http, $uibModal, $log, $document) {

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

	$scope.TotalStudents = [];
	$scope.student = {
		totalCapacity:3,
		already_issued:0
	};
	$scope.addStudent = function(){
		$scope.student["student_id"] = $scope.student.rollnumber+$scope.student.branch+ new Date().getFullYear();
		$http.post('/api/student', $scope.student)
		.success(function(data) {
			console.log(data);
			$scope.TotalStudents.push(data);
		})
		.error(function(data) {
	    	console.log('Error: ' + data);
		});
	};
	$scope.getStudent();
});

app.controller('ModalController', function($scope, $modalInstance) {
    $scope.cancel = function() {
      $modalInstance.close('cancel');
    };
});

