import alt from '../alt';
import listBooksActions from '../actions/listBooksActions';

class listBooksStore {
  constructor() {
    this.bindActions(listBooksActions);
    this.books = [];
    this.deletemessage='';
    
  }
  onGetBooksuccess(data)
  {
  	this.books = data;
  }
  onGetBookfail(jqXhr) {
    toastr.error(jqXhr.responseJSON.message);
  }
  onDeletesuccess(message)
  {
     this.deletemessage=message;
  }
   onDeletefail(jqXhr)
  {
    toastr.error(jqXhr.responseJSON.message);
  }
}
export default alt.createStore(listBooksStore);