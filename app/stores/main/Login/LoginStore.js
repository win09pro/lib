import alt from '../../../alt';
import LoginActions from '../../../actions/main/Login/LoginActions';

class LoginStore {
  constructor() {
    this.bindActions(LoginActions);
    this.LoginModalisOpen=false;
    this.user ='';
    this.password ='';
    this.helpBlock='Ban đầu';
    
  }  
  onLoginSuccess(data)
  {
  	this.helpBlock='Đăng nhập thành công';
  }
  onLoginUserFail(message)
   {
   		this.helpBlock=message;
   }
  onUpdateuser(event)
  {
  	this.user = event.target.value;
  }
  onUpdatepassword(event)
  {
  	this.password = event.target.value;  
  }
  onSetOpenModal(boolean)
  {
      this.LoginModalisOpen = boolean;
   
  }
}
export default alt.createStore(LoginStore);