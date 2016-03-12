import alt from '../alt';
import bookActions from '../actions/bookActions';

class bookStore {
  constructor() {
    this.bindActions(bookActions);
    this.book ={};
    this.helpMessage = '';   
  }
  onGetBookSuccess(data)
  {
    this.book =data;
    this.helpMessage = '';  
  }
  onGetBookFail(jqXhr)
  {
    toastr.error(jqXhr.responseJSON.message);
  }     
}
export default alt.createStore(bookStore);