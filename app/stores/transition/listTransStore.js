import alt from '../../alt';
import listTransActions from '../../actions/transition/listTransActions';

class listTransStore {
  constructor() {
    this.bindActions(listTransActions);
    this.trans = [];
    this.deletemessage='';
    
  }
  onGetTransuccess(data)
  {
  	this.trans = data;
  }
  onGetTranfail(jqXhr) {
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
export default alt.createStore(listTransStore);