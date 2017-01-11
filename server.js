var express           = require('express'),
    app               = express();
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'),
    meetupsController = require('./server/controllers/meetups-controller');

mongoose.connect('mongodb://localhost:27017/library');

app.use(bodyParser());
app.use(express.static(__dirname));
// app.get('/', function (req, res) {
//   res.sendfile(__dirname + '/client/views/index.html');
// });

app.use('/js', express.static(__dirname + '/client/js'));

app.get('/api/book', meetupsController.getbook);
app.post('/api/book', meetupsController.addbook);
app.put('/api/book', meetupsController.updateEntry);

app.get('/api/student', meetupsController.getStudent);
app.post('/api/student', meetupsController.addStudent);


app.listen(3000, function() {
  console.log('I\'m Listening...');
});