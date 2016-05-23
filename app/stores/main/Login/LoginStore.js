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
    localStorage.removeItem('userid');
  	localStorage.removeItem('username');
    localStorage.removeItem('avatar');     
  	this.user ='';
    this.password ='';
    this.helpBlock='';
    setTimeout(function() {
    LoginActions.setOpenModal(false);
    window.location.reload();
  }, 500); 
  }
  onLoginSuccess(data)
  {  	
  	console.log(data);
  localStorage.setItem('userid', data._id);
	localStorage.setItem('username', data.name.last);
  localStorage.setItem('avatar', data.avatar);
  this.helpBlock='Đăng nhập thành công';
	setTimeout(function() {
		LoginActions.setOpenModal(false);
    window.location.reload();
	}, 500);	

  }
  onLoginUserFail(message)
   {
   		this.helpBlock=message;
   }
  onUpdateuser(event)
  {
  	this.user = event.target.value;
     this.helpBlock='';
  }
  onUpdatepassword(event)
  {
  	this.password = event.target.value;  
    this.helpBlock='';
  }
  onSetOpenModal(boolean)
  {
      this.LoginModalisOpen = boolean;
      this.user ='';
      this.password ='';   
  }
}

export default alt.createStore(LoginStore);