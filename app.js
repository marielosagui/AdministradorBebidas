var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');

var app = express();
mongoose.Promise = global.Promise;

 mongoose.connect('mongodb://localhost/buscador-bebidas', { useNewUrlParser: true })
.then(()=> { console.log("La conexion con la base de datos fue exitosa")})
.catch((err)=>{console.log("Hubo un error en la conexion con la base: " + err)}); 


/* mongoose.connect ("mongodb+srv://user:user@cluster0-ygtqr.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true })
.then(()=> { console.log("La conexion con la base de datos fue exitosa")})
.catch((err)=>{console.log("Hubo un error en la conexion con la base: " + err)});
 */



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

 app.use('/', indexRouter);
app.use('/api/Buscadorbebidas',apiRouter);

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
