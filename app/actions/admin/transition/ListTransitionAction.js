import alt from '../../../alt';

class ListTransitionAction {
	constructor() {
    this.generateActions(
       'setOpenModal',
       'updateDateBorrow',
       'updateDateReturn',
       'updateNumDate'
       
    );
    updateTrans(payload){
    	$.$.ajax({
    		url: '/api/updatetransition',
    		type: 'POST',
    		data: {dateBorrow: payload.dateBorrow, dateReturn: payload.dateReturn},
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