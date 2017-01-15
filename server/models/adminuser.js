var mongoose = require('mongoose');

module.exports = mongoose.model('Admin', {
  user_name: String,
  name: String,
  email: String,
  password:String,
  contact: String
});