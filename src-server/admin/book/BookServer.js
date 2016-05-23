var book = require('../../../models/book');
var category = require('../../../models/category');

function BookServer(app){

//get list book
app.get('/api/book', function(req, res, next) {
	try{
    book
    .find()
    .populate('_cateId')
    .exec(function(err, books){
      if(err) next(err);

      res.send(books);
    })
  } catch(e){
    res.status(e).send({ message: 'Error when get list book'});
  }
});
app.get('/api/listbook', function(req, res, next) {
  try{
    book
    .find()
    .populate('_cateId')
    .exec(function(err, books){
      if(err) next(err);

      res.send(books);
    })
  } catch(e){
    res.status(e).send({ message: 'Error when get list book'});
  }
});
//end get list book

//get book by id
app.get('/api/book/:id', function(req, res, next){
  var id = req.params.id;
  book.findOne({ _id: id }, function(err, book) {
    if (err) return next(err);

    if (!book) {
      return res.status(404).send({ message: 'Book not found.' });
    }   
    category.findOne( {_id: book._cateId}, function(err1, cate){

      if (err1) return next(err1);

    if (!cate) {
      return res.status(405).send({ message: 'category not found.' });
    } 
     res.send({book:book, cate:cate});
    });
  });  
});
//end get book by id

// add book
app.post('/api/book', function(req, res, next) {
  var id = req.body.id;
  //category name
  var bookname = req.body.name;
  //category description
  var author = req.body.author;
  //category doctype
  var publisher = req.body.publisher;
  var code = req.body.code;
  var status = req.body.status;
  var description = req.body.description;
  var imageUrl = req.body.imageUrl;
  var _cateId = req.body._cateId;

  

  book.findOne({ _id: id }, function(err, bookRes) {
    if ( (err)|| (!bookRes) )
    {
      try{ 
       var bookRes = new book({           
        name: bookname ,
        author: author,
        publisher: publisher,
        code: code,
        status: status,
        description: description,
        imageUrl: imageUrl,
        _cateId: _cateId            
      });   
       bookRes.save(function(err) {
         if (err) return next(err);     
         res.send({ message: bookname + ' has been added successfully!' });
       });
     } catch (e) {
      res.status(e).send({ message: bookname+ 'error when add new.' });
    }
  }
  else
  {
    bookRes.update({ $set: { name: bookname ,
        author: author,
        publisher: publisher,
        code: code,
        status: status,
        description: description,
        imageUrl: imageUrl,
        _cateId: _cateId   } }, function(err) {
      if (err) return next(err);
      res.send({ message: bookname + ' has been updated successfully!' });
    });
    
    
  }});
});
// end add book

// DELETE book
app.post('/api/deletebook', function(req, res, next) {
  var bookId = req.body.id;
  book.remove({name:''})  ;
  book.findOne({ _id: bookId }, function(err, bookRes) {
    if (err) return next(err);

    if (!bookRes) {
      return res.status(404).send({ message: 'Book not found.' });
    }   
    bookRes.remove();
    res.send({ message: bookRes.name + ' has been deleted.' });

    
  });
});
// end Add API for Category
app.get('/api/bookhome', function(req, res, next){
  try{
    book
    .find()
    .sort({_id:-1})
    .limit(6)
    .populate('_cateId')
    .exec(function(err, bookhome){
      if(err) next(err);

      res.send(bookhome);
    })
  } catch(e){
    res.status(e).send({ message: 'Error when get list book'});
  }
});

}

module.exports = BookServer;