/*
  Category
  */
  var category = require('../../../models/category');
  var documenttype = require('../../../models/documenttype');

  function CategoryServer(app){
// Add API for Category

//get List Category
app.get('/api/category', function(req, res, next) {
  try{
    category
    .find()
    .populate('_documenttype')
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
    documenttype.findOne( {_id: cate._documenttype}, function(err1, doctype){

      if (err1) return next(err1);

    if (!doctype) {
      return res.status(405).send({ message: 'Document type not found.' });
    } 
     res.send({cate:cate, doctype:doctype});
    });
    
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
      res.send({ message: catename + ' has been updated successfully!' });
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
}
module.exports = CategoryServer;
