var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
expressRest = require('express-rest');
var app = express();
var rest = expressRest(app);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/')));


var mongoose = require('mongoose');
mongoose.connect('mongodb://192.168.1.131/library');

var borrowers = mongoose.model('borrowers', { name: String, role : String, id : String, booksIssued : [{ name : String, accessionNumber: String, issuedOn : String }] });
var books = mongoose.model('books', { name: String, accessionNumber : Number, category : String, author : String, publication : String, edition : String, status : String });

rest.post('/api/registerbook/', function(req, res) {
    var book = new books(req.body);
    book.save(function (err) {
        if (err) {
            console.log('Error occured while registering new book.'+err);
            res.badRequest();
        } else {
            res.created();
        }
    });
});


rest.post('/api/registerborrower/', function(req, res) {
    var borrower = new borrowers(req.body);
    borrower.save(function (err) {
        if (err) {
            console.log('Error occured while registering new borrower.'+err);
            res.badRequest();
        } else {
            console.log('Registration Successful.');
            res.created();
        }
    });
});

rest.post('/api/issuebook/', function(req, res) {
    var bid = req.body.bid;
    var accessionNumber = req.body.accessionNumber;


    borrowers.findOne({ 'id' : bid }, function (err, borrower) {
        if (err) {
            console.log("Borrower not found.");
            res.badRequest();
        } else {
            books.findOne({ "accessionNumber": accessionNumber }, function (err, book) {
                if (err || book == null) {
                    console.log("Book not found.");
                    res.badRequest();
                } else {
                    var datetime = new Date();
                    borrower.booksIssued = { "accessionNumber" : accessionNumber, "issuedOn" : datetime };
                    borrower.save(function (err) {
                        if (err) {
                            console.log('Error occured while issuing book.'+err);
                            res.badRequest();
                        } else {
                            res.created();
                        }
                    });
                }
            });
        }
    });
});

rest.post('/api/returnbook/', function(req, res) {
    var bid = req.body.bid;
    var accessionNumber = req.body.accessionNumber;


    borrowers.findOne({ 'id' : bid }, function (err, borrower) {
        if (err) {
            console.log("Borrower not found.");
            res.badRequest();
        } else {
            books.findOne({ "accessionNumber": accessionNumber }, function (err, book) {
                if (err || book == null) {
                    console.log("Book not found.");
                    res.badRequest();
                } else {
                    borrower.booksIssued = null;
                    borrower.save(function (err) {
                        if (err) {
                            console.log('Error occured while returning book.'+err);
                            res.badRequest();
                        } else {
                            res.created();
                        }
                    });
                    var datetime = new Date();
                    book.history = { 'bid' : borrower.id, 'returnDate' : datetime };
                    book.save(function (err) {
                        if (err) {
                            console.log('Error occured while returning book.'+err);
                            res.badRequest();
                        } else {
                            res.created();
                        }
                    });
                }
            });
        }
    });
});




app.use('/', routes);
app.use('/users', users);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});




module.exports = app;
