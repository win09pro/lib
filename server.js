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
var multiparty = require('multiparty');
var fs = require('fs');


var async = require('async');
var request = require('request');
var xml2js = require('xml2js');

var mongoose = require('mongoose');
var Book = require('./models/Book');
var User = require('./models/User');
var config = require('./config');

mongoose.connect(config.database);

console.log(config.database);

mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});
var app = express();



app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
/**UPLOAD**/
app.post('/api/imageupload',function(req,res,next) {
  var file = req.body.file;
  
  fs.readFile(path, function(err, data)
  {    
    var newPath  = __dirname + "uploads/"+path;
    fs.writeFile(newPath, data, function (err) {
  
 })
  });  
});


/**USER**/
/**
 * POST /api/user
 * Adds new user to the database.
 */

app.post('/api/user', function(req, res, next) {
  var userID = req.body.id;
  var userName = req.body.userName;
  var password = req.body.password;
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var barcode = req.body.barcode;
  var type = req.body.type;
  
   User.findOne({ _id: userID }, function(err, user) {
  if ( (err)|| (!user) )
  {
    User.findOne({username:userName}, function(err1, alreadyUser)
    {
        if((err1)||(!alreadyUser))
        {
          try{ 
         var user = new User({           
                    username: userName ,
                    password:password,
                    name:{first:firstName,last:lastName} ,
                    barcode:barcode,
                    type:type           
                  });   
         user.save(function(err) {
         if (err) return next(err);     
         res.send({ message: userName + ' has been added successfully!' });
         });
         } catch (e) {
            res.status(e).send({ message: userName + ' error when add new user' });
        }
        }
        else
        {
           res.send({ message: userName + 'đã có trong hệ thống, thử tên khác' });
        }
    })    
  }
  else
  {
        user.update({ $set: {
                    username: userName ,
                    password:password,
                    name:{first:firstName,last:lastName} ,
                    barcode:barcode,
                    type:type           
        } }, function(err) {
            if (err) return next(err);
            res.send({ message: userName + ' has been updated successfully!' });
          });
             
          
  }})
   });

/**
 * GET /api/user/:id
 * Get a user from the database.
 */      
  app.get('/api/user/:id', function(req, res, next) {
  var id = req.params.id;
  User.findOne({ _id: id }, function(err, user) {
    if (err) return next(err);

    if (!user) {
      return res.status(404).send({ message: 'User not found.' });
    }     
    res.send(user);
  });
});

/**
 * POST /api/deleteuser
 * Delete a User from the database.
 */
app.post('/api/deleteuser', function(req, res, next) {
  var userId = req.body.id;
  User.remove({name:''})  ;
  User.findOne({ _id: userId }, function(err, user) {
    if (err) return next(err);

    if (!user) {
      return res.status(404).send({ message: 'user not found.' });
    }   
      user.remove();
      res.send({ message: user.userName + ' has been deleted.' });

 
  });
});


/**
 * GET /api/user
 * Return users from the database.
 */

app.get('/api/user', function(req, res, next) {
  try{
   User
   .find()
   .exec(function(err,users){
    if(err) next(err);
    res.send(users);    
   })
      } catch (e) {
      res.status(e);
          }
        });  

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