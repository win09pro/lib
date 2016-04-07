var documenttype = require('../../../models/documenttype');

function DocumenttypeServer(app){
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

}
module.exports = DocumenttypeServer;