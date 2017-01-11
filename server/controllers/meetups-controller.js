var Book = require('../models/book');
var Student = require('../models/student');

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

module.exports.updateEntry = function(req, res){
	console.log(req.body);
	Book.update({
				_id: req.body.id,
			},
			{ $set: 
				{'user_id': req.body.student_id}
			}, function(error, result) {
				// update student issued book coutn ....
				Student.update({
						student_id: req.body.user_id,
					},
					{ $inc: { "already_issued": 1 }
					}, function(error, result) {
			      		console.dir(result);
			    	}
				);
				//  end of updatin g student issued book....
			res.json(result);	
      		console.dir(result);
    	}
	);
};

module.exports.addStudent = function(req, res){
	console.log(req.body);
	var student = new Student(req.body);
	student.save(function(err, result){
		res.json(result);
	});
};

module.exports.getStudent = function(req, res){
	Student.find(req.body, function(err, results){
		res.json(results);
	});
};