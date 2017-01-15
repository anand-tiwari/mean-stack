app.controller('appController', function ($scope, $resource, $http, $state, $rootScope) {
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
		"available":"yes",
	};
	var min = 10000;
	var max = 99999;
	$scope.addBook = function(isValid){
		if(isValid){
			$scope.book["book_id"] = $scope.book.name+ Math.floor(Math.random() * (max - min + 1)) + min;
			$http.post('/api/book', $scope.book)
			.success(function(data) {
				console.log(data);
				$scope.TotalBooks.push(data);
			})
			.error(function(data) {
		    	console.log('Error: ' + data);
			});	
		}	
	};
	/* End of Adding book section ... */

	/* Issue book to the Student */
	$scope.issue = {};
	$scope.open = function(name, Id) {
		$scope.issue.student_id = "";
		$scope.issue.student_name = "";
		$scope.book_name = name;
		$scope.book_id = Id;
	};
	$scope.issueBook = function(){
		var newdate = new Date();
		newdate.setDate(newdate.getDate() + 3);

		$scope.issue["book_name"] = $scope.book_name;
		$scope.issue["book_id"] = $scope.book_id;
		$scope.issue["due_date"] = newdate;
		$scope.issue["available"] = "no";
		$scope.issue["increment"]= 1;

		$http.post('/api/transaction', $scope.issue)
		.success(function(data) {
			$scope.initiate();			
			console.log(data);
		})
		.error(function(data) {
	    	console.log('Error: ' + data);
		});
	};
	/* End of Issue Book section ..*/

	/* Remove Transaction */
	$scope.submitBook = function(book_id){
		$http.get('/api/transaction', {"book_id":book_id})
		.success(function(data) {
			$scope.updateTransaction(data[0].student_id,book_id);
		})
		.error(function(data) {
	    	console.log('Error: ' + data);
		});
	};
	$scope.updateTransaction = function(student_id, book_id){
		$http.post('/api/transaction', {"book_id":book_id,"student_id":student_id,"available":"yes","increment":1})
		.success(function(data) {
			$scope.initiate();
		})
		.error(function(data) {
	    	console.log('Error: ' + data);
		});	
	};
	/*end of Remove Transaction*/

	$rootScope.authenticated = true;
	
    $rootScope.logout = function(){
      $rootScope.authenticated = false;
      $state.go('login');
    };
});