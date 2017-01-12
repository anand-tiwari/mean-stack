var mongoose = require('mongoose');

module.exports = mongoose.model('Student', {
  student_id:String,
  name: String,
  branch: String,
  rollnumber:String,
  email:String,
  capacity:Number,
  issued:Number
});