import alt from '../../../alt';

class ListTransitionAction {
	constructor() {
    this.generateActions(
       'setOpenModal',
       'updateDateBorrow',
       'updateDateReturn',
       'updateNumDate',
       'getAllTransitionSuccess',
       'getAllTransitionFail'
       
    );
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