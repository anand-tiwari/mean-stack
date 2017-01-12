var mongoose = require('mongoose');

module.exports = mongoose.model('Transaction', {
  student_id:String,
  student_name: String,
  book_id: String,
  book_name:String,
  due_date:Date
});