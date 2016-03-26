import alt from '../../../alt';
import DocumentTypeAction from '../../../actions/admin/documenttype/DocumentTypeAction';

class DocumentTypeStore {
  constructor() {
    this.bindActions(DocumentTypeAction);
    this.doc ={};
    this.helpMessage = '';   
  }
  onGetDocSuccess(data)
  {
    this.doc =data;
    this.helpMessage = '';  
  }
  onGetDocFail(jqXhr)
  {
    toastr.error(jqXhr.responseJSON.message);
  }     
}
export default alt.createStore(DocumentTypeStore);