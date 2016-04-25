import alt from '../../../alt';
import LoginActions from '../../../actions/main/Login/LoginActions';

class LoginStore {
  constructor() {
    this.bindActions(LoginActions);
    this.LoginModalisOpen=false;
    
  }  
  onSetOpenModal(boolean)
  {
      this.LoginModalisOpen = boolean;
   
  }
}
export default alt.createStore(LoginStore);