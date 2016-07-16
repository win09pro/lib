import alt from '../../../alt';
import listUsersActions from '../../../actions/admin/usermanage/listUsersActions';

class listUsersStore {
  constructor() {
    this.bindActions(listUsersActions);
    this.users = [];
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
  onGetUsersuccess(data)
  {
  	this.users = data;
  }
  onGetUserfail(jqXhr) {
    toastr.error(jqXhr.responseJSON.message);
  }
  onDeletesuccess(message)
  {
     this.deletemessage=message;
     listUsersActions.get();   
  }
   onDeletefail(jqXhr)
  {
    toastr.error(jqXhr.responseJSON.message);
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

}
export default alt.createStore(listUsersStore);