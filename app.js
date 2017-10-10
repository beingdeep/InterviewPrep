const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

var index = require('./routes/index');
var questions = require('./routes/questions');

var app = express();

// port
var port = 5000;

// view engine
app.set('Views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// static folder
app.use(express.static(path.join(__dirname, 'client')));

// body parser middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', index);
app.use('/api', questions);

app.listen(port, function() {
    console.log('server started on port :' + port);
});