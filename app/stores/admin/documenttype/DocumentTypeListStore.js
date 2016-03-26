import alt from '../../../alt';
import DocumentTypeListAction from '../../../actions/admin/documenttype/DocumentTypeListAction';

class DocumentTypeListStore {
  constructor() {
    this.bindActions(DocumentTypeListAction);
    this.documentTypes = [];
    this.deletemessage='';
    
  }
  onGetDocListSuccess(data)
  {
  	this.documentTypes = data;
  }
  onGetDocListFail(jqXhr) {
    toastr.error(jqXhr.responseJSON.message);
  }
  onDeleteDocSucess(message)
  {
     this.deletemessage=message;
  }
  onDeleteDocFail(jqXhr)
  {
    toastr.error(jqXhr.responseJSON.message);
  }
}
export default alt.createStore(DocumentTypeListStore);