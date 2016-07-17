var transition = require('../../../models/transition');

function TransitionServer(app){

app.post('/api/addtransition', function(req, res, next) {
	var id = req.body.id;
	var barcode = req.body.barcode;
	var username = req.body.username;
	var bookname = req.body.bookname;
	var dateBorrow = req.body.dateBorrow;
	var dateReturn = req.body.dateReturn;
	var status = req.body.status;
	transition.findOne({ _id: id}, function(err, trans) {
	    if (err) return next(err);
	    if (!trans) {
	      	
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
					res.send({message: 'Success'});
				});
	    }   
	    else
	    	{
	    		trans.update({ $set: { barcode : barcode,
					username : username,
					bookname: bookname,
					dateBorrow : dateBorrow,
					dateReturn : dateReturn,
					status: status } }, function(err) {
			     	if (err) return next(err);
			      	res.send({ message: 'Cập nhật thành công!' });
			    });
	    	}
	});
    

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
    	res.status(e).send({ message: 'Lỗi khi tìm giao dịch mượn trả.'});
  	}
});

// get transition by id
app.get('/api/transition/:id', function(req, res, next){
  var id = req.params.id;
  transition.findOne({ _id: id })
  .exec(function(err, tran) {
    if (err) return next(err);

    if (!tran) {
      return res.status(404).send({ message: 'Không tìm thấy.' });
    }   
     res.send(tran);
    });
    
});
// get transition by usrename
app.get('/api/transition/:userName', function(req, res, next){
  var userName = req.params.userName;
  transition.find({ username: userName })
  .exec(function(err, trans) {
    if (err) return next(err);

    if (!trans) {
      return res.status(404).send({ message: 'Không tìm thấy.' });
    }   
     res.send(trans);
    });
    
});
// end get transition by id

// DELETE tran
app.post('/api/delete-tran', function(req, res, next) {
  var id = req.body.id;
  transition.remove({name:''})  ;
  transition.findOne({ _id: id }, function(err, tran) {
    if (err) return next(err);

    if (!tran) {
      return res.status(404).send({ message: 'Không tìm thấy.' });
    }   
    tran.remove();
    res.send({ message: tran.name + ' đã xóa.' });

    
  });
});

}

module.exports = TransitionServer;
