import alt from '../../../alt';
import listPostsCateActions from '../../../actions/admin/post/listPostsCateActions';

class listPostCatesStore {
  constructor() {
    this.bindActions(listPostsCateActions);
    this.postCates = [];
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
  onGetPostCatesuccess(data)
  {
  	this.postCates = data;    
    console.log('ok');
  }
  onGetPostCatefail(jqXhr) {
    toastr.error(jqXhr.responseJSON.message);
  }
  onDeletesuccess(message)
  {
    this.deletemessage=message;
    listPostsCateActions.get();   
  }
   onDeletefail(jqXhr)
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
export default alt.createStore(listPostCatesStore);