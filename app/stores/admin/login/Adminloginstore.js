import alt from '../../../alt';
import localStorage from 'localStorage';
import AdminloginActions from '../../../actions/admin/login/AdminloginActions';

class Adminloginstore {
  constructor() {
    this.bindActions(AdminloginActions);  
    this.adminlogin=false; 
    this.user ='';
    this.password ='';
    this.userValidationState='';
    this.passwordValidationState='';
    this.helpBlock='';
    
  }  
  onAdminLogout()
  {
  	localStorage.removeItem('adminusername');
    localStorage.removeItem('adminavatar');
  	this.user ='';
    this.password ='';
    this.helpBlock='';
    window.location.reload();
  }
  onAdminloginSuccess(data)
  {  	
  if (data.type ==1){
  	localStorage.setItem('adminusername', data.name.last);
    localStorage.setItem('adminavatar', data.avatar);    
    this.helpBlock='Đăng nhập thành công';  
    window.location.reload();
    this.adminlogin=true; 
    }
  else{
    this.helpBlock='Bạn không có quyền truy cập vào trang này';  
    this.adminlogin=false; 
  }
  }
  onAdminloginFail(message)
   {
   		this.helpBlock=message;
   }
  onUpdateadminusername(event)
  {    
  	this.user = event.target.value;
    this.helpBlock='';   
    this.userValidationState='';
    this.passwordValidationState='';

  }
  onUpdateadminpassword(event)
  {
  	this.password = event.target.value;  
    this.helpBlock='';  
    this.userValidationState='';
    this.passwordValidationState='';
  }
  onInvalidpass()
  {
    this.passwordValidationState='has-error';
    this.helpBlock='Vui lòng nhập mật khẩu';
  }
  onInvalidusername()
  {
    this.userValidationState = 'has-error';
    this.helpBlock='Vui lòng nhập tên đăng nhập';
  }

}
export default alt.createStore(Adminloginstore);