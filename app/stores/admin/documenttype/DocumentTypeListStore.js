import alt from '../../../alt';
import DocumentTypeListAction from '../../../actions/admin/documenttype/DocumentTypeListAction';

class DocumentTypeListStore {
  constructor() {
    this.bindActions(DocumentTypeListAction);
    this.documentTypes = [];
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
     DocumentTypeListAction.get();
  }
  onDeleteDocFail(jqXhr)
  {
    toastr.error(jqXhr.responseJSON.message);
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
  
}
export default alt.createStore(DocumentTypeListStore);