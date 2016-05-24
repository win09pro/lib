import alt from '../../../alt';
import ListTransitionAction from '../../../actions/admin/transition/ListTransitionAction';

class ListTransitionStore{
	constructor() {
	    this.bindActions(ListTransitionAction);
	    this.LoginModalisOpen = false;
	    this.dateBorrow = new Date();
	    this.numDate = 7;
	    
  	}  
  	onUpdateNumDate(event){
  		this.numDate = event.target.value;
  	}
  	onSetOpenModal(boolean)
  	{
		this.LoginModalisOpen = boolean;
		this.dateBorrow = new Date();
		this.dateReturn = new Date();
		this.numDate = 7;
		dateReturn.setDate(dateReturn.getDate()+numDate);
  	}
}