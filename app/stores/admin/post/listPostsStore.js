import alt from '../../../alt';
import listPostsActions from '../../../actions/admin/post/listPostsActions';

class listPostsStore {
  constructor() {
    this.bindActions(listPostsActions);
    this.posts = [];
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
  onGetPostsuccess(data)
  {
  	this.posts = data;    
    console.log(data);
  }
  onGetPostfail(jqXhr) {
    toastr.error(jqXhr.responseJSON.message);
  }
  onDeletesuccess(message)
  {
    this.deletemessage=message;
    listPostsActions.get();   
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
export default alt.createStore(listPostsStore);