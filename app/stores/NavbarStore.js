import alt from '../alt';
import NavbarActions from '../actions/NavbarActions';

class NavbarStore {
  constructor() {
    this.bindActions(NavbarActions);
    this.totalCharacters = 0;
    this.onlineUsers = 0;
    this.searchQuery = '';
    this.ajaxAnimationClass = '';
    this.openModal =true;
    this.listTransition=[];
    this.tranExpire =[];
  }

  onFindCharacterSuccess(payload) {
    payload.history.pushState(null, '/characters/' + payload.characterId);
  }

  onFindCharacterFail(payload) {
    payload.searchForm.classList.add('shake');
    setTimeout(() => {
      payload.searchForm.classList.remove('shake');
    }, 1000);
  }
  onGetListTranSuccess(data){
    this.listTransition =data;
    var datenow = Date.now();
    var i= 0;
    for(i= 0;i<this.listTransition.length; i++){
      var datereturn = new Date(this.listTransition[i].dateReturn);
      if(datereturn < datenow){
        this.tranExpire.push(this.listTransition[i]);
      }
    }
    console.log(this.listTransition);
    console.log(this.tranExpire);
  }
  onGetListTranFail(jqXhr){
    toastr.error(jqXhr.responseJSON.message);
  }
  onUpdateOnlineUsers(data) {
    this.onlineUsers = data.onlineUsers;
  }

  onUpdateAjaxAnimation(className) {
    if(className =='fadeIn')
    {
       this.openModal =true;
    }
    else {
      this.openModal =false;
    }
    this.ajaxAnimationClass = className; //fadein or fadeout
  }

  onUpdateSearchQuery(event) {
    this.searchQuery = event.target.value;
  }

  onGetCharacterCountSuccess(data) {
    this.totalCharacters = data.count;
  }

  onGetCharacterCountFail(jqXhr) {
    toastr.error(jqXhr.responseJSON.message);
  }
}

export default alt.createStore(NavbarStore);