import alt from '../../../alt';
import localStorage from 'localStorage';
import LoginActions from '../../../actions/main/Login/LoginActions';

class LoginStore {
  constructor() {
    this.bindActions(LoginActions);
    this.LoginModalisOpen=false;
    this.user ='';
    this.password ='';
    this.helpBlock='';
    
  }  
  onLogout()
  {
  	localStorage.removeItem('username');
  	this.user ='';
    this.password ='';
    this.helpBlock='';
  }
  onLoginSuccess(data)
  {  	
  	console.log(data);
	localStorage.setItem('username', data.name.last);
  localStorage.setItem('avatar', data.avatar);
  this.helpBlock='Đăng nhập thành công';
	setTimeout(function() {
		LoginActions.setOpenModal(false);
	}, 1000);	
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
      this.user ='';
      this.password ='';   
  }
}
export default alt.createStore(LoginStore);