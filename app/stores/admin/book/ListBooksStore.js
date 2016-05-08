import alt from '../../../alt';
import ListBooksActions from '../../../actions/admin/book/ListBooksActions';

class ListBooksStore {
  constructor() {
    this.bindActions(ListBooksActions);
    this.books = [];
    this.deletemessage='';
    
  }
  onGetBookSuccess(data)
  {
  	this.books = data;
  }
  onGetBookFail(jqXhr) {
    toastr.error(jqXhr.responseJSON.message);
  }
  onDeleteSuccess(message)
  {
     this.deletemessage=message;
  }
   onDeleteFail(jqXhr)
  {
    toastr.error(jqXhr.responseJSON.message);
  }
}
export default alt.createStore(ListBooksStore);