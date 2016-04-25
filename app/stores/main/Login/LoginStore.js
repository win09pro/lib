import alt from '../../../alt';
import LoginActions from '../../../actions/main/Login/LoginActions';

class LoginStore {
  constructor() {
    this.bindActions(LoginActions);
    this.LoginModalisOpen=false;
    
  }  
  onOpenLoginModal()
  {
      this.LoginModalisOpen = true;
   
  }
  onCloseLoginModal()
  {
      this.LoginModalisOpen = false;
   
  }
 
}
export default alt.createStore(LoginStore);