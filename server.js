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
var Transition = require('./models/Transition');
var User = require('./models/User');

var config = require('./config');

mongoose.connect(config.database);

console.log(config.database);

mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});

//=================SRC-SERVER===================
var Postserver = require('./src-server/admin/post/Postserver');
var CategoryServer = require('./src-server/admin/category/CategoryServer');
var DocumenttypeServer = require('./src-server/admin/documenttype/DocumenttypeServer');
var Userserver = require('./src-server/admin/user/Userserver');
//==============================================

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
// var  options = {
//             dest: '/public/uploads/test',
//             rename: function (fieldname, filename) {
//                 return filename + Date.now();
//             },
//             onFileUploadStart: function (file) {
//                 console.log(file.originalname + ' is starting ...');
//             },
//             onFileUploadComplete: function (file) {
//                 console.log(file.fieldname + ' uploaded to  ' + file.path);
//             }
//         };

// var upload = multer(options);
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

Postserver(app);
Userserver(app);




/**
 * POST /api/book
 * Adds new book to the database.
 */

app.post('/api/book', function (req, res, next) {
  var bookname = req.body.name;
  var bookdirector = req.body.director;
  var bookcode = req.body.code;
  var bookBarCode = req.body.borrowBarcode;
  var bookimageUrl = req.body.imageUrl;
  var bookcateId = req.body.cateId;
  var bookcateName = req.body.cateName;

  var id = req.body.id;
   Book.findOne({ _id: id }, function(err, book) {
  if ( (err)|| (!book) )
  {
    try{
         var book = new Book({
                    name: bookname ,
                    director:bookdirector ,
                    code : bookcode,
                    borrowBarcode : bookBarCode,
                    imageUrl : bookimageUrl  ,
                    cateId : bookcateId,
                    cateName :bookcateName,     
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
        book.update({ $set: { name: bookname,director: bookdirector ,code :bookcode,borrowBarcode : bookBarCode,imageUrl : bookimageUrl,cateId : bookcateId, cateName :bookcateName} }, function(err) {
            if (err) return next(err);
            res.send({ message: bookname + ' has been updated successfully!' });
          });


  }})
   });

/**
 * GET /api/book/:id
 * Get a book from the database.
<<<<<<< HEAD
 */  
app.get('/api/book/:id', function (req, res, next) {s
  var id = req.params.id;
  Book.findOne({ _id: id }, function(err, book) {
    if (err) return next(err);

    if (!book) {
      return res.status(404).send({ message: 'Book not found.' });
    }
    res.send(book);s
  });
});


/**
 * POST /api/deletebook
 * Delete a book from the database.
 */
app.post('/api/deletebook', function (req, res, next) {
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

app.get('/api/book', function (req, res, next) {
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


app.post('/api/tran', function (req, res, next) {
  var bookId = req.body.bookId;
  var bookName = req.body.bookName;
  var dateBorrow = req.body.dateBorrow;
  var dateReturn = req.body.dateReturn;
  var timeBorrow = req.body.timeBorrow;
  var id = req.body.id;
   Transition.findOne({ _id: id }, function(err, tran) {
  if ( (err)|| (!tran) )
  {
    try{ 
         var tran1 = new Transition({           
                    bookId: bookId ,
                    bookName:bookName ,
                    dateBorrow : dateBorrow,
                    dateReturn : dateReturn,
                    timeBorrow : timeBorrow           
                  });   
         tran1.save(function(err) {
         if (err) return next(err);     
         res.send({ message: bookName + ' has been added successfully!' });
         });
         } catch (e) {
            res.status(e).send({ message: bookName+ ' error when add new book' });
        }
  }
  else
  {
        tran.update({ $set: { bookId: bookId,bookName: bookName ,dateBorrow :dateBorrow,dateReturn : dateReturn,timeBorrow : timeBorrow} }, function(err) {
            if (err) return next(err);
            res.send({ message: bookName + ' has been updated successfully!' });
          });
             
          
  }})
   });
     
/**
 * GET /api/book/:id
 * Get a book from the database.
 */      
  app.get('/api/tran/:id', function (req, res, next) {
  var id = req.params.id;
  Transition.findOne({ _id: id }, function(err, tran) {
    if (err) return next(err);

    if (!tran) {
      return res.status(404).send({ message: 'Transition not found.' });
    }     
    res.send(tran);
  });
});


/**
 * POST /api/deletebook
 * Delete a book from the database.
 */
app.post('/api/deletetran', function (req, res, next) {
  var tranId = req.body.id;
  Transition.remove({bookId:''});
  Transition.findOne({ _id: tranId }, function (err, tran) {
    if (err) return next(err);

    if (!tran) {
      return res.status(404).send({ message: 'Transition not found.' });
    }   
      tran.remove();
      res.send({ message: tran.bookName + ' has been deleted.' });

 
  });
});
app.post('api/deletetranbookid',function (req,res,next){
  var reqBookId =req.body.bookId;
  Transition.remove({bookId :''});
  Transition.findOne({bookId : reqBookId}, function (err,tran){
    if(err) return next(err);
    if(!tran){
      return res.status(404).send({message : 'Transition Not Found'});
    }
    tran.remove();
    console.log('Delete action successfully');
    res.send({message : tran.bookName + 'has been deleted'});
  });
});
/**
 * GET /api/book
 * Return books from the database.
 */

app.get('/api/tran', function(req, res, next) {
  try{
   Transition
   .find()
   .exec(function(err,trans){
    if(err) next(err);
    res.send(trans);    
   })
      } catch (e) {
      res.status(e).send({ message: 'Error when GET TRAN ' });
          }
        });  

/*
Category
*/
CategoryServer(app);

/*
Documenttype Server
*/
DocumenttypeServer(app);


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
