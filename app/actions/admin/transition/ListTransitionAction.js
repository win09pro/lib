import alt from '../../../alt';

class ListTransitionAction {
	constructor() {
    this.generateActions(
       'setOpenModal',
       'updateUsername',
       'updateBarcode',
       'updateBookName',
       'updateDateBorrow',
       'updateDateReturn',
       'updateNumDate',
       'updateStatus',
       'addTranSuccess',
       'addTranFail',
       'invalidUsername',
       'invalidBarcode',
       'invalidBookName',
       'invalidNumDate',
       'invalidDateBorrow',
       'invalidDateReturn',
       'invalidStatus',
       'getAllTransitionSuccess',
       'getAllTransitionFail',
       'getTransitionSuccess',
       'getTransitionFail',

       'openModal',
      'closeModal'
       
    );
  }
  get() {
    $.ajax({    
      url: '/api/alltransition'      
    })
      .done((data) => {
        this.actions.getAllTransitionSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getAllTransitionFail(jqXhr.responseJSON.message);
      });
  }
  getById(tranid) {
    $.ajax({
      url: '/api/transition/'+tranid})
      .done((data) => {
        this.actions.getTransitionSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getTransitionFail(jqXhr.responseJSON.message);
      });
  }

  updateTrans(payload){
  	$.ajax({
  		url: '/api/updatetransition',
  		type: 'POST',
  		data: {id: payload.id, dateBorrow: payload.dateBorrow, dateReturn: payload.dateReturn},
  	})
  	.done(function() {
  		console.log("success");
  	})
  	.fail(function() {
  		console.log("error");
  	})
  }

  addTransition(payload){
    $.ajax({
      url: '/api/addtransition',
      type: 'POST',
      data: {id: payload.idTrans, barcode: payload.barcode , username: payload.username, dateBorrow: payload.dateBorrow, 
        dateReturn: payload.dateReturn, status: payload.status}
    })
    .done((data) => {
     this.actions.addTranSuccess(data.message);
    })
    .fail((jqXhr) => {
     this.actions.addTranFail(jqXhr.responseJSON.message);
    });
  }   
	 
  openLoginModal()
  {
  	this.actions.setOpenModal(true);
  }
  closeLoginModal()
  {
  	this.actions.setOpenModal(false);
  }

}
export default alt.createActions(ListTransitionAction);