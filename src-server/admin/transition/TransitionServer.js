var transition = require('../../../models/transition');

function TransitionServer(app){

app.post('/api/addtransition', function(req, res, next) {
	var barcode = req.body.barcode;
	var username = req.body.username;
	var bookname = req.body.bookname;
	var dateBorrow = req.body.dateBorrow;
	var dateReturn = req.body.dateReturn;
	var status = req.body.status;

	try{
		var trans = new transition({
			barcode : barcode,
			username : username,
			bookname: bookname,
			dateBorrow : dateBorrow,
			dateReturn : dateReturn,
			status: status
		});
		trans.save(function(err){
			if(err) return next(err);
			res.send({message: 'Them giao dich muon thanh cong!'});
		});
	}
	catch(e){
		res.status(e).send({ message: 'Co loi xay ra.' });
	}
});

app.get('/api/alltransition', function(req, res, next){
	try{
	    transition
	    .find()
	    .exec(function(err, listtrans){
	      if(err) next(err);

	      res.send(listtrans);
	    })
  	} catch(e){
    	res.status(e).send({ message: 'Error when get list Transition'});
  	}
});

// get transition by id
app.get('/api/tran/:id', function(req, res, next){
  var id = req.params.id;
  transition.findOne({ _id: id })
  .exec(function(err, tran) {
    if (err) return next(err);

    if (!tran) {
      return res.status(404).send({ message: 'Transition not found.' });
    }   
     res.send(tran);
    });
    
});
// end get transition by id

}

module.exports = TransitionServer;