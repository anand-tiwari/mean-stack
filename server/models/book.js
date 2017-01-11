var mongoose = require('mongoose');

module.exports = mongoose.model('Book', {
  book_id:String,
  name: String,
  author: String,
  issue_date: Date,
  user_id:String
});