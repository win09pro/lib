var transition = require('../../../models/transition');

function TransitionServer(app){

app.post('/api/addtransition', function(req, res, next) {
	var _bookId = req.body._bookId;
	var _userId = req.body._userId;
	var dateBorrow = req.body.dateBorrow;
	var dateReturn = req.body.dateReturn;

	try{
		var trans = new transition({
			_bookId : _bookId,
			_userId : _userId,
			dateBorrow : dateBorrow,
			dateReturn : dateReturn
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
	    .populate('_bookId')
	    .populate('_userId')
	    .exec(function(err, listtrans){
	      if(err) next(err);

	      res.send(listtrans);
	    })
  	} catch(e){
    	res.status(e).send({ message: 'Error when get list Transition'});
  	}
});

}

module.exports = TransitionServer;