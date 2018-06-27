var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var login = require('./routes/login');
var register = require('./routes/register');
var insert_questions = require('./routes/insert_questions');
var get_questions = require('./routes/get_questions');
var admin_login = require('./routes/admin_login');
var get_classes = require('./routes/get_classes');
var get_subjects = require('./routes/get_subjects');
var inset_answers = require('./routes/insert_answer');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/login',login);
app.use('/register',register);
app.use('/insert_questions',insert_questions);
app.use('/get_questions',get_questions);
app.use('/admin_login',admin_login);
app.use('/get_class',get_classes);
app.use('/get_subject',get_subjects);
app.use('/insert_answer',inset_answers);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
