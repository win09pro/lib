import alt from '../../../alt';
import ListBooksActions from '../../../actions/admin/book/ListBooksActions';

class ListBooksStore {
  constructor() {
    this.bindActions(ListBooksActions);
    this.books = [];
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
     ListBooksActions.get();
  }
   onDeleteFail(jqXhr)
  {
    toastr.error(jqXhr.responseJSON.message);
  }
}
export default alt.createStore(ListBooksStore);