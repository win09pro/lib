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

var multer = require('multer');

var path = require('path');

var async = require('async');
var request = require('request');
var xml2js = require('xml2js');

var mongoose = require('mongoose');
var Book = require('./models/Book');
var User = require('./models/User');

var category = require('./models/category');
var documenttype = require('./models/documenttype');

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

var storage = multer.diskStorage({
  destination: __dirname + '/public/uploads/',
  filename: function (req, file, cb) {
    cb(null, path.basename(file.originalname, path.extname(file.originalname)) + Date.now() + path.extname(file.originalname));
  }
})

var upload = multer({ storage: storage });
app.post('/api/imageupload', upload.single('file'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  res.send({link:"/uploads/"+req.file.filename});
 
});
// 
// app.post('/api/imageupload', function (req, res) {
//   console.log
//   // var filename =  upload(req, res, function (err) {
    
//   //   console.log(req.filename);

//   //   // Everything went fine
//   // });
//   res.status(200);
// });



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
  var avatar = req.body.avatar;
  
   User.findOne({ _id: userID }, function(err, user) {
  if ( (err)|| (!user) )
  {
    User.findOne({username:userName}, function(err1, alreadyUser)
    {
        if((err1)||(!alreadyUser))
        {
          try{ 
         var user = new User({           
                    username:userName,
                    password:password,
                    name:{first:firstName,last:lastName} ,
                    barcode:barcode,
                    type:type,
                    avatar:avatar          
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
                    type:type,
                    avatar:avatar      
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

// GET list document type
// 
app.get('/api/document-type', function(req, res, next) {
  try{
    documenttype
    .find()
    .exec(function(err, documentTypes){
      if(err) next(err);
      res.send(documentTypes);
    })
  } catch(e){
    res.status(e).send({ message: 'Error when add new Document Type'});
  }
});
// end get list document type

// get document type by id
app.get('/api/document-type/:id', function(req, res, next){
  var id = req.params.id;
  documenttype.findOne({ _id: id }, function(err, doc) {
    if (err) return next(err);

    if (!doc) {
      return res.status(404).send({ message: 'Document Type not found.' });
    }     
    res.send(doc);
  });
});
// end get document type by id

// add document type
app.post('/api/document-type', function(req, res, next) {
  //document name
  var docname = req.body.name;
  //document description
  var docdescription = req.body.description;
  var id=req.body.id;
   documenttype.findOne({ _id: id }, function(err, doc) {
  if ( (err)|| (!doc) )
  {
    try{ 
         var doc = new documenttype({           
                    name: docname ,
                    description: docdescription            
                  });   
         doc.save(function(err) {
         if (err) return next(err);     
         res.send({ message: docname + ' has been added successfully!' });
         });
         } catch (e) {
            res.status(e).send({ message: docname+ 'and' +docdescription + 'error when add new.' });
        }
  }
  else
  {
        doc.update({ $set: { name: docname, description: docdescription } }, function(err) {
            if (err) return next(err);
            res.send({ message: docname + ' has been updated successfully!' });
          });
             
          
  }})
});
// end add document type

// DELETE document type
app.post('/api/deleteDoc', function(req, res, next) {
  var docId = req.body.id;
  documenttype.remove({name:''})  ;
  documenttype.findOne({ _id: docId }, function(err, doc) {
    if (err) return next(err);

    if (!doc) {
      return res.status(404).send({ message: 'Document Type not found.' });
    }   
      doc.remove();
      res.send({ message: doc.name + ' has been deleted.' });

 
  });
});
//end delete document type

/*
  Category
*/

// Add API for Category

//get List Category
app.get('/api/category', function(req, res, next) {
  try{
    category
    .find()
    .exec(function(err, listcategory){
      if(err) next(err);
      res.send(listcategory);
    })
  } catch(e){
    res.status(e).send({ message: 'Error when get Category'});
  }
});
// end get list category

// get category by id
app.get('/api/category/:id', function(req, res, next){
  var id = req.params.id;
  category.findOne({ _id: id }, function(err, cate) {
    if (err) return next(err);

    if (!cate) {
      return res.status(404).send({ message: 'Category not found.' });
    }     
    res.send(cate);
  });
});
// end get category by id

// add category
app.post('/api/category', function(req, res, next) {
  //category name
  var catename = req.body.name;
  //category description
  var catedescription = req.body.description;
  //category doctype
  var _documenttype = req.body._documenttype;

  var id=req.body.id;

   category.findOne({ _id: id }, function(err, cate) {
  if ( (err)|| (!cate) )
  {
    try{ 
         var cate = new category({           
                    name: catename ,
                    description: catedescription,
                    _documenttype: _documenttype            
                  });   
         cate.save(function(err) {
         if (err) return next(err);     
         res.send({ message: catename + ' has been added successfully!' });
         });
         } catch (e) {
            res.status(e).send({ message: catename+ 'and' +catedescription + 'error when add new.' });
        }
  }
  else
  {
        cate.update({ $set: { name: catename, description: catedescription, _documenttype: _documenttype } }, function(err) {
            if (err) return next(err);
            res.send({ message: docname + ' has been updated successfully!' });
          });
             
          
  }})
});
// end add category

// DELETE category
app.post('/api/delete-category', function(req, res, next) {
  var cateId = req.body.id;
  category.remove({name:''})  ;
  category.findOne({ _id: cateId }, function(err, cate) {
    if (err) return next(err);

    if (!cate) {
      return res.status(404).send({ message: 'Category not found.' });
    }   
      cate.remove();
      res.send({ message: cate.name + ' has been deleted.' });

 
  });
});
// end Add API for Category


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