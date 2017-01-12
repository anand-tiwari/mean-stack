var mongoose = require('mongoose');

module.exports = mongoose.model('Book', {
  book_id:String,
  name: String,
  author: String,
  available:String,
});