import alt from '../../../alt';
import RegisterActions from '../../../actions/main/Register/RegisterActions';

class RegisterStore {
  constructor() {
    this.bindActions(RegisterActions);
    this.RegisterModalisOpen=false;
    this.username='';
    this.password='';
    this.repassword='';
    this.fname='';
    this.lname='';
    this.type=3;

    this.usernameValidationState='';
    this.passwordValidationState='';
    this.repasswordValidationState='';
    this.nameValidationState='';

    this.helpBlock='';
    
	} 
	onAlreadyHaduser(message)
	{
		this.helpBlock=message;
		this.usernameValidationState='has-error';
	}
	onUsernameok()
	{
		this.helpBlock='Tên truy cập có thể sử dụng';
		this.usernameValidationState='has-success';
	}
   onAddUserSuccess(message)
   {
  	this.username='';
    this.password='';
    this.repassword='';
    this.fname='';
    this.lname='';

    this.usernameValidationState='has-success';
    this.passwordValidationState='has-success';
    this.repasswordValidationState='has-success';
    this.nameValidationState='has-success';

    this.helpBlock='Đăng ký thành công';
   	setTimeout(function() {
		RegisterActions.setOpenRegisterModal(false);
	}, 1000);
   } 
   onInvaliduserName()
   {   
   		this.usernameValidationState='has-error';
   		this.helpBlock='Chưa điền tên đăng nhập';
   }
   onInvalidpassword()
   {   	
   		this.passwordValidationState='has-error';
   		this.helpBlock='Chưa nhập mật khẩu';
   }
   onInvalidrepassword()
   {   	
   		this.repasswordValidationState='has-error';
   		this.helpBlock='Chưa nhập lại mật khẩu';
   }
   onInvalidfirstName()
   {   	
   		this.nameValidationState='has-error';
   		this.helpBlock='Chưa nhập họ';
   }
   onInvalidlastName()
   {   	
	   	this.nameValidationState='has-error';
	   	this.helpBlock='Chưa nhập tên';
   }
    onPasswordNotSame()
    {
		this.passwordValidationState='has-error';
		this.repasswordValidationState='has-error';
		this.helpBlock='Mật khẩu không giống nhau';
		this.password='';
		this.repassword='';
    }
  onUpdateusername(event)
  {
  	this.usernameValidationState='';
  	this.helpBlock='';
  	this.username = event.target.value;
  	RegisterActions.checkUserName(this.username);
   		
  }
  onUpdatepassword(event)
  {
  	this.passwordValidationState='';
  	this.helpBlock='';
  	this.password = event.target.value;
  }
   onUpdaterepassword(event)
  {
  	this.repasswordValidationState='';
  	this.helpBlock='';
  	this.repassword = event.target.value;
  }  
   onUpdatefname(event)
   {
   	this.nameValidationState='';
  	this.helpBlock='';
   	this.fname = event.target.value;
   }
   onUpdatelname(event)
   {
   	this.nameValidationState='';
  	this.helpBlock='';
   	this.lname = event.target.value;
   }
  onSetOpenRegisterModal(boolean)
  {
  
    this.RegisterModalisOpen = boolean;
   
  }
}
export default alt.createStore(RegisterStore);