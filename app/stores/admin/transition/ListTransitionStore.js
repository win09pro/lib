import alt from '../../../alt';
import ListTransitionAction from '../../../actions/admin/transition/ListTransitionAction';

class ListTransitionStore{
	constructor() {
	    this.bindActions(ListTransitionAction);
	    this.id='';
	    this.username = '';
	    this.barcode = '';
	    this.bookname = '';
	    this.status = 0;
	    this.dateBorrow = new Date();
	    this.numDate = '';
	    this.dateReturn = new Date();
	    this.dateReturn = this.dateReturn.setDate(this.dateBorrow.getDate() + 7);
	    this.helpBlockUserName = '';
	    this.helpBlockBarcode = '';
	    this.helpBlockBookName = '';
	    this.helpBlockDateBorrow = '';
	    this.helpBlockNumDateBorrow = '';
	    this.helpBlockDateReturn = '';
	    this.helpBlockStatus = '';

	    this.LoginModalisOpen = false;
	    
	    this.trans = [];
	    this.deletemessage='';
	    this.arrayIDtoDel=[];
	    this.modalIsOpen=false;
  	}  
  	onUpdateArrayId(id)
	  {
	    this.arrayIDtoDel.push(id);
	  }
	onRemoveArrayId(id)
	  {
	    var index = this.arrayIDtoDel.indexOf(id);   
	    this.arrayIDtoDel.splice(index,1);    
	  }
	onOpenModal()
	  {
	    if (this.arrayIDtoDel.length > 0)
	      this.modalIsOpen=true;
	  }
	onCloseModal()
	  {
	      this.modalIsOpen=false;
	  }
	onDeleteTranSuccess(message)
	{
		this.deletemessage = message;
		ListTransitionAction.get();
	}
	onDeleteTranFail(jqXhr)
	{
		toastr.error(jqXhr.responseJSON.message);
	}
  	onGetAllTransitionSuccess(data){
  		this.trans = data;
  	}
  	onGetAllTransitionFail(jqXhr){
  		toastr.error(jqXhr.responseJSON.message);
  	}
  	onGetTransitionSuccess(data){
  		this.id=data._id;
  		
	   	this.username = data.username;
	    this.barcode = data.barcode;
	    this.bookname = data.bookname;
	    this.status = data.status;
	    this.dateBorrow = data.dateBorrow;
	    this.dateReturn = data.dateReturn;
  	}
  	onGetTransitionFail(jqXhr)
	   {
	     toastr.error(jqXhr.responseJSON.message);
	   }
  	onUpdateNumDate(event){
  		this.numDate = event.target.value;
  	}
  	onSetOpenModal(boolean)
  	{
		this.LoginModalisOpen = boolean;
		this.dateBorrow = new Date();
		this.dateReturn = new Date();
		this.numDate = '';
		this.dateReturn.setDate(this.dateReturn.getDate()+ this.numDate);
  	}

  	onAddTranSuccess(message){
  		this.usernameValidationState = 'has-success';
  		this.barcodeValidationState = 'has-success';
  		this.dateBorrowValidationState = 'has-success';
  		this.numDateBorrowValidationState = 'has-success';
  		this.dateReturnValidationState = 'has-success';
  		this.statusValidationState = 'has-success';

  		this.helpBlockStatus = message;
  		this.id='';
	    this.username = '';
	    this.barcode = '';
	    this.bookname = '';
	    this.status = 0;
	    this.dateBorrow = new Date();
	    this.numDate = '';
	    this.dateReturn = new Date();

	    ListTransitionAction.get();
  	}
  	onAddTranFail(message){
  		this.usernameValidationState = 'has-error';
  		this.barcodeValidationState = 'has-error';
  		this.dateBorrowValidationState = 'has-error';
  		this.numDateBorrowValidationState = 'has-error';
  		this.dateReturnValidationState = 'has-error';
  		this.statusValidationState = 'has-error';

  		this.helpBlockStatus = message;
  		this.id='';
	    this.username = '';
	    this.barcode = '';
	    this.bookname = '';
	    this.status = 0;
	    this.dateBorrow = new Date();
	    this.numDate = '';
	    this.dateReturn = new Date();

	    this.helpBlockUserName = message;
	    this.helpBlockBarcode = message;
	    this.helpBlockBookName = message;
	    this.helpBlockDateBorrow = message;
	    this.helpBlockNumDateBorrow = message;
	    this.helpBlockDateReturn = message;
	    this.helpBlockStatus = message;
  	}
  	onUpdateUsername(event){
  		this.username = event.target.value;
  		this.usernameValidationState = '';
  		this.helpBlockUserName = '';
	    this.helpBlockBarcode = '';
	    this.helpBlockBookName = '';
	    this.helpBlockDateBorrow = '';
	    this.helpBlockNumDateBorrow = '';
	    this.helpBlockDateReturn = '';
	    this.helpBlockStatus = '';
  	}
  	onUpdateBarcode(event){
  		this.barcode = event.target.value;
  		this.barcodeValidationState = '';
  		this.helpBlockUserName = '';
	    this.helpBlockBarcode = '';
	    this.helpBlockBookName = '';
	    this.helpBlockDateBorrow = '';
	    this.helpBlockNumDateBorrow = '';
	    this.helpBlockDateReturn = '';
	    this.helpBlockStatus = '';
  	}
  	onUpdateBookName(event){
  		this.bookname = event.target.value;
  		this.bookNameValidationState = '';
  		this.helpBlockUserName = '';
	    this.helpBlockBarcode = '';
	    this.helpBlockBookName = '';
	    this.helpBlockDateBorrow = '';
	    this.helpBlockNumDateBorrow = '';
	    this.helpBlockDateReturn = '';
	    this.helpBlockStatus = '';
  	}
  	onUpdateDateBorrow(date){
  		this.dateBorrow = date._d;
  		this.dateReturn = this.dateBorrow;
  		this.dateBorrowValidationState = '';
  		this.helpBlockUserName = '';
	    this.helpBlockBarcode = '';
	    this.helpBlockBookName = '';
	    this.helpBlockDateBorrow = '';
	    this.helpBlockNumDateBorrow = '';
	    this.helpBlockDateReturn = '';
	    this.helpBlockStatus = '';
  	}
  	onUpdateNumDate(e){
  		this.dateReturn = this.dateBorrow;
  		console.log(this.dateReturn);
  		this.numDate = e.target.value;
  		this.dateReturn = this.dateReturn.setDate(this.dateBorrow.getDate() + Number(this.numDate));
  		this.numDateBorrowValidationState = '';
  		this.helpBlockUserName = '';
	    this.helpBlockBarcode = '';
	    this.helpBlockBookName = '';
	    this.helpBlockDateBorrow = '';
	    this.helpBlockNumDateBorrow = '';
	    this.helpBlockDateReturn = '';
	    this.helpBlockStatus = '';
  	}
  	onUpdateDateReturn(date){
  		this.dateReturn = date._d;
  		this.dateReturnValidationState = '';
  		this.helpBlockUserName = '';
	    this.helpBlockBarcode = '';
	    this.helpBlockBookName = '';
	    this.helpBlockDateBorrow = '';
	    this.helpBlockNumDateBorrow = '';
	    this.helpBlockDateReturn = '';
	    this.helpBlockStatus = '';
  	}
  	onUpdateStatus(e){
  		this.status = e.target.value;
  		this.statusValidationState = '';
  		this.helpBlockUserName = '';
	    this.helpBlockBarcode = '';
	    this.helpBlockBookName = '';
	    this.helpBlockDateBorrow = '';
	    this.helpBlockNumDateBorrow = '';
	    this.helpBlockDateReturn = '';
	    this.helpBlockStatus = '';
  	}
  	onInvalidUsername(){
  		this.usernameValidationState = 'has-error';
  		this.helpBlockUserName = 'Please enter correct username';
  	}
  	onInvalidBarcode(){
  		this.barcodeValidationState = 'has-error';
  		this.helpBlockBarcode = 'Please enter correct barcode';
  	}
  	onInvalidBookName(){
  		this.bookNameValidationState = 'has-error';
  		this.helpBlockBookName = 'Please enter correct book name';
  	}
  	onInvalidNumDate(){
  		this.numDateBorrowValidationState = 'has-error';
  		this.helpBlockNumDateBorrow = 'Please enter correct number of date borrow';
  	}
  	onInvalidDateBorrow(){
  		this.dateBorrowValidationState = 'has-error';
  		this.helpBlockDateBorrow = 'Please enter correct date borrow';
  	}
  	onInvalidDateReturn(){
  		this.dateReturnValidationState = 'has-error';
  		this.helpBlockDateReturn = 'Please enter correct date return';
  	}
  	onInvalidStatus(){
  		this.statusValidationState = 'has-error';
  		this.helpBlockStatus = 'Please select status';
  	}
}
export default alt.createStore(ListTransitionStore);