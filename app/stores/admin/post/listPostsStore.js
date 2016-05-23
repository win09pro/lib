import alt from '../../../alt';
import listPostsActions from '../../../actions/admin/post/listPostsActions';

class listPostsStore {
  constructor() {
    this.bindActions(listPostsActions);
    this.posts = [];
    this.deletemessage='';   
    this.arrayIDtoDel=[];
    this.numpostview=5;
    this.numpage=0;
    this.currentpage=1;
    this.numpost=0;
    this.modalIsOpen=false;
  }
  onPreviouspage(){
      if (this.currentpage>1)
     this.currentpage--;   
  }

  onNextpage()
  {
    if (this.currentpage<this.numpage)
     this.currentpage++;   
  }
  onUpdatenumpostView(e)
  {
    this.numpostview=e.target.value;   
    this.currentpage=1;
    this.numpage=Math.ceil(this.numpost/Number(this.numpostview)); 
   
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
    this.numpost=data.length;
    this.numpage=Math.ceil(this.numpost/Number(this.numpostview));   
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