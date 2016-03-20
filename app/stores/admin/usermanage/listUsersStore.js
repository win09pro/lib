import alt from '../../../alt';
import listUsersActions from '../../../actions/admin/usermanage/listUsersActions';

class listUsersStore {
  constructor() {
    this.bindActions(listUsersActions);
    this.users = [];
    this.deletemessage='';   
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
  }
   onDeletefail(jqXhr)
  {
    toastr.error(jqXhr.responseJSON.message);
  }
}
export default alt.createStore(listUsersStore);