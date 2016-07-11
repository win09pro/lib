var book = require('../../../models/book');
var category = require('../../../models/category');
var documenttype = require('../../../models/documenttype');
var ObjectId = require('mongodb').ObjectID;
var comment = require('../../../models/comment');
var rating = require('../../../models/rating');

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
    .sort({_id:-1})
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

//get list book theo category
app.get('/api/bookcate/:name', function(req, res, next) {
  var name = req.params.name;

  category.findOne({ name:name})
  .exec( function(err, cate){
    if (err) return next(err);
    documenttype
    .findOne({_id: cate._documenttype})
    .exec(function(err2, documenttype){
      if(err2) next(err2);
      book
      .find({ _cateId:cate._id})
      .populate('_cateId')
      .exec(function(err1, bookcates){
        if(err1) next(err1);

        res.send({cate:cate, bookcates:bookcates, documenttype:documenttype});
      });
    });
    
  });
    
  
});
//end get list category

//get list book theo documenttype
app.get('/api/bookdoc/:name', function(req, res, next) {
  var name = req.params.name;

  documenttype.findOne({ name:name})
  .exec( function(err, doc){
    if (err) return next(err);
    category
    .find({_documenttype: doc._id})

    .exec(function(err2, cates){
      if(err2) next(err2);
      // console.log(cates);
      var _query = [];

      cates.forEach(function(e){
        _query.push(e._id);
      });

      book
      .find({ _cateId: { $in : _query } })
    
      .exec(function(err1, bookdocs){
        if(err1) next(err1);
        res.send({cates:cates, bookdocs:bookdocs, doc:doc});
      });

    });
   
  });
    
  
});
//end get list documenttype

//tim kiem sach
app.get('/api/search/:text', function(req, res, next) {
  var text = req.params.text;
    console.log(new RegExp(text, "i"))
      book
      // .find( { name: { $regex: new RegExp(text, "i") }}  )
      .find( {$or: [{ name: { $regex: new RegExp(text, "i") } }, { author: { $regex: new RegExp(text, "i") } }, { publisher: { $regex: new RegExp(text, "i") } }, { tagSearch: { $regex: new RegExp(text, "i") } } ]} )
      .populate('_cateId')
      .exec(function(err, bookresults){
        if(err) next(err);

        res.send( bookresults);
      });    
  
});
//end tim kiem sach

app.get('/api/relatedbook/:id', function(req, res, next){
  var id = req.params.id;
  book.findOne({_id: id})
  .exec(function(err, book1){
    if(err) return next(err);
    category.findOne( {_id: book1._cateId}, function(err1, cate){
      console.log(book1._id);
      if(err1) return next(err1);
      book
      .find( {$and: [{ _cateId:cate._id}, { _id: {$ne: ObjectId(book1._id)} }]})
      .sort({_id:-1})
      .limit(3)
      .exec(function(err2, relatedbooks){
        if(err2) next(err2);
        res.send(relatedbooks);
      });
    });
  });
});

//get book by id
app.get('/api/book/:id', function(req, res, next){
  var id = req.params.id;
  book.findOne({ _id: id })
  .populate('_cateId')
  .exec(function(err, book) {
    if (err) return next(err);

    if (!book) {
      return res.status(404).send({ message: 'Không tìm thấy sách.' });
    }   
    category.findOne( {_id: book._cateId}, function(err1, cate){

      if (err1) return next(err1);

      if (!cate) {
        return res.status(405).send({ message: 'Không tìm thấy danh mục.' });
      } 
      documenttype
      .findOne({_id: cate._documenttype})
      .exec(function(err2, documenttype){
        if(err2) next(err2);
        res.send({book:book, cate:cate, documenttype:documenttype});
      });
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
  var tagSearch = req.body.tagSearch;
  

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
        _cateId: _cateId ,
        tagSearch: tagSearch           
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
          _cateId: _cateId ,
          tagSearch: tagSearch
            } }, function(err) {
        if (err) return next(err);
        res.send({ message: bookname + ' has been updated successfully!' });
      });
    }
  });
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
app.get('/api/booknew', function(req, res, next){
  
    book
    .find()
    .sort({_id:-1})
    .limit(3)
    .populate('_cateId')
    .exec(function(err, booknews){
      if(err) next(err);

      res.send(booknews);
    });
  
});

app.post('/api/addComment', function(req, res, next){
  var _bookId = req.body._bookId;
  var _userId = req.body._userId;
  var content = req.body.content;
  var date = req.body.date;
  var com = new comment({           
        _bookId: _bookId ,
        _userId: _userId,
        content: content,
        date: date         
      });   
       com.save(function(err) {
         if (err) return next(err);     
         res.send(com);
       });
});
/*get comment*/
app.get('/api/getComment/:id', function(req, res, next){
  var id = req.params.id;
  comment
        .find({_bookId: id})
        .populate('_bookId')
        .populate('_userId')
        .sort({_id:-1})
        .exec(function(err, comments){
          if(err) return next(err);
          res.send(comments);
        });
});

// save rating 
app.post('/api/rateBook', function(req, res, next){
  var _bookid = req.body._bookid;
  var _userid = req.body._userid;
  var value = req.body.value;
  var averageRate = 0;

  rating.findOne({ $and: [ {_userid: _userid}, {_bookid: _bookid} ] }, function(err1, rateRes){
    if(err1 || (!rateRes)){
        var rate = new rating({
          _userid: _userid,
          _bookid: _bookid,
          value: value
        });
        rate.save(function(err){
          if(err) return next(err);
          rating.find({_bookid: _bookid}).count(function(err3, numOfRate){
            rating.find({_bookid: _bookid}, function(err7, rateBooks){
              rateBooks.forEach( function(rate){
                  averageRate += (rate.value/numOfRate);
              });
              var averageRate1 = averageRate.toFixed(2);
              res.send({numOfRate: numOfRate, averageRate: averageRate1, bookId: _bookid});
            });
            // res.send({numOfRate: numOfRate, averageRate: averageRate, bookId: _bookid});
          });
        });
    }
    else{
      rateRes.update({ $set: {value: value}}, function(err2){
          if(err2) return next(err2);
          rating.find({_bookid: _bookid}).count(function(err5, numOfRate){
            rating.find({_bookid: _bookid}, function(err7, rateBooks){
              rateBooks.forEach( function(rate){
                  averageRate += (rate.value/numOfRate);
              });
              var averageRate1 = averageRate.toFixed(2);
              res.send({numOfRate: numOfRate, averageRate: averageRate1, bookId: _bookid});
            });
            // res.send({numOfRate: numOfRate, averageRate: averageRate, bookId: _bookid});
          });
      });
    }
  });
});

// get Rate of a book
app.get('/api/getRateOfABook/:id', function(req, res, next){
    var id = req.params.id;
    var averageRate = 0;
    
    rating.find({_bookid: id}).count(function(err, numOfRate){
        if(err || (!numOfRate)) return next(err);
        // console.log(numOfRate);
        rating.find({_bookid: id}, function(err7, rateBooks){
          // console.log(rateBooks);
              var arr = [];
              rateBooks.forEach(function(rate){
                  arr.push(rate.value);
                  // console.log(rate.value);
                  // averageRate += (rate.value/numOfRate);
                  
                  // console.log(arr);
              });
              // console.log(arr);
              for(var i=0; i< arr.length; i++){
                averageRate += (arr[i]/numOfRate);
                console.log(arr[i]/arr.length);
              }
              var averageRate1 = averageRate.toFixed(2);
              console.log(averageRate);
              res.send({numOfRate: numOfRate, averageRate: averageRate1});
            });
        // res.send({numOfRate: numOfRate, averageRate: averageRate});
      });
});

}

module.exports = BookServer;