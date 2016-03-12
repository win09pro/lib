require('babel-register');

var swig  = require('swig');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var routes = require('./app/routes');
var express = require('express');
var path = require('path');
var logger = require('morgan'); //HTTP request logger.
var bodyParser = require('body-parser');  //For parsing POST request data.

var async = require('async');
var request = require('request');
var xml2js = require('xml2js');

var mongoose = require('mongoose');
var Book = require('./models/Book');
var config = require('./config');

mongoose.connect(config.database);
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});
var app = express();



app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

/**
 * POST /api/book
 * Adds new book to the database.
 */

app.post('/api/book', function(req, res, next) {
  var bookdirector = req.body.director;
  var bookname = req.body.name;
  var id=req.body.id;
   Book.findOne({ _id: id }, function(err, book) {
  if ( (err)|| (!book) )
  {
    try{ 
         var book = new Book({           
                    name: bookname ,
                    director:bookdirector            
                  });   
         book.save(function(err) {
         if (err) return next(err);     
         res.send({ message: bookname + ' has been added successfully!' });
         });
         } catch (e) {
            res.status(e).send({ message: bookname+ 'and' +bookdirector + 'error when add new book' });
        }
  }
  else
  {
        book.update({ $set: { name: bookname,director: bookdirector } }, function(err) {
            if (err) return next(err);
            res.send({ message: bookname + ' has been updated successfully!' });
          });
             
          
  }})
   });
     
/**
 * GET /api/book/:id
 * Get a book from the database.
 */      
  app.get('/api/book/:id', function(req, res, next) {
  var id = req.params.id;
  Book.findOne({ _id: id }, function(err, book) {
    if (err) return next(err);

    if (!book) {
      return res.status(404).send({ message: 'Book not found.' });
    }     
    res.send(book);
  });
});


/**
 * POST /api/deletebook
 * Delete a book from the database.
 */
app.post('/api/deletebook', function(req, res, next) {
  var bookId = req.body.id;
  Book.remove({name:''})  ;
  Book.findOne({ _id: bookId }, function(err, book) {
    if (err) return next(err);

    if (!book) {
      return res.status(404).send({ message: 'Book not found.' });
    }   
      book.remove();
      res.send({ message: book.name + ' has been deleted.' });

 
  });
});

/**
 * GET /api/book
 * Return books from the database.
 */

app.get('/api/book', function(req, res, next) {
  try{
   Book
   .find()
   .exec(function(err,books){
    if(err) next(err);
    res.send(books);    
   })
      } catch (e) {
      res.status(e).send({ message: bookname+ 'and' +bookdirector + 'error when add new book' });
          }
        });  


app.use(function(req, res) {
  Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
      var page = swig.renderFile('views/admin/index.html', { html: html });
      res.status(200).send(page);
    } else {
      res.status(404).send('Page Not Found')
    }
  });
});
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var onlineUsers = 0;

io.sockets.on('connection', function(socket) {
  onlineUsers++;

  io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });

  socket.on('disconnect', function() {
    onlineUsers--;
    io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });
  });
});

server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});