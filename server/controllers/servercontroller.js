var Book 		= require('../models/book');
var Student 	= require('../models/student');
var Transaction = require('../models/transaction');
var Admin 		= require('../models/adminuser');


/* Admin user */
module.exports.auth = function(req, res){
	console.log(req.body);
	Admin.find({ 'username': req.body.username,'password':req.body.password }, function(err, results){
		console.log(err, results, "log");
		if (err) {
            console.log('Signup error');
            return done(err);
        }

        //if user found.
        if (results.length!=0) {
        	return res.status(200).json({
        		status: 'Registration successful!'
      		});
        }
	});
};
/* End of Admin user section */


/*Book Collection */
module.exports.getbook = function(req, res){
	Book.find({}, function(err, results){
		res.json(results);
	});
};
module.exports.addbook = function(req, res){
	console.log(req.body);
	var book = new Book(req.body);
	book.save(function(err, result){
		res.json(result);
	});
};
/*End of Book Collection*/


/* Student Collection */
module.exports.addStudent = function(req, res){
	console.log(req.body);
	var student = new Student(req.body);
	student.save(function(err, result){
		res.json(result);
	});
};
module.exports.getStudent = function(req, res){
	console.log(req.body,"anand", req.body.field);
	Student.find(req.body, function(err, results){
		res.json(results);
	});
};
/* End of Student Collection*/


/* Transaction Collection */
module.exports.addTransaction = function(req, res){
	console.log(req.body);
	Student.update({
					student_id: req.body.student_id,
				},
				{ $inc: 
					{'issued': req.body.increment}
				}, function(error, result) {
      				console.dir(result);
    			}
    		);
	Book.update({
					book_id: req.body.book_id,
				},
				{ $set: 
					{'available': req.body.available}
				}, function(error, result) {
      				console.dir(result);
    			}
    		);
	var transaction = new Transaction(req.body);
	transaction.save(function(err, result){
		res.json(result);
	});
};

module.exports.getStudentID = function(req, res){
	console.log(req.body);
	Transaction.find(req.body, function(error, results){
		res.json(results);
	});
};
/* End of Transaction */