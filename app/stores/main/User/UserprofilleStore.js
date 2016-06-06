import alt from '../../../alt';
import UserprofilleActions from '../../../actions/main/User/UserprofilleActions';
import LoginActions from '../../../actions/main/Login/LoginActions';
import localStorage from 'localStorage';
//import listUsersActions from '../../../actions/admin/usermanage/listUsersActions';
class UserprofilleStore {
  constructor() {
      this.bindActions(UserprofilleActions);
      this.id='';
      this.userName = '';
      this.setlogout=false;
      this.userNamecheck=true;
      this.oldpasscheck=false;
      this.oldpassword='';
      this.passWord = '';
      this.repassWord = '';
      this.firstName= '';
      this.lastName= '';
      this.Type ='';
      this.fileAvatar ={};
      this.imagePreviewUrl='';
      this.imageUrl='';
      this.trans =[];

      this.user ={};
      this.userfullname ={};

      this.userNameValidationState='';
      this.oldpasswordValidation='';
      this.passWordValidationState='';
      this.repassWordValidationState='';
      this.fistNameValidationState='';
      this.lastNameValidationState='';
      this.typeValidationState='';

      this.helpBlockuserName='';
      this.helpBlockoldpassword=''
      this.helpBlockpassword='';
      this.helpBlockrepassword='';
      this.helpBlockfirstName='';
      this.helpBlocklastName='';
      this.helpBlocktype='';
      this.helpBlockUpload ='';
      }

      onGetTransSuccess(data)
      {
        console.log(data);
        this.trans =data;
      }
      onGetTransFail(mesage)
      {
        this.trans =[];
      }  

      onUpdatepasswordUserSuccess()
      {
        this.setlogout=true;        
        this.oldpassword= '';        
        this.passWord = '';
        this.repassWord = '';         
       
        this.passWordValidationState='has-success';
        this.repassWordValidationState='has-success';
      
        this.oldpasswordValidation='has-success';

        this.helpBlockoldpassword='';     
        this.helpBlockpassword='';
        this.helpBlockrepassword='';       
      }
      onOldpasswordCorrect(){
        this.oldpasswordValidation='has-success';
        this.helpBlockoldpassword='';
        this.oldpasscheck=true;

      }
      onOldpasswordUncorrect(){
        this.oldpasswordValidation='has-error';
        this.helpBlockoldpassword='Mật khẩu cũ không chính xác';
        this.oldpasscheck=false;

      }
      onUpdateoldpassword(event){
        this.oldpassword=event.target.value;
        this.helpBlockoldpassword='';
        this.oldpasswordValidation='';
      }
      onAlreadyHaduser(message)
      {
         this.userNamecheck = false;
         this.helpBlockuserName=message;
         this.userNameValidationState='has-error';
         this.helpBlockuserName=this.userName + ' đã tồn tại';        
      }
      usernameok()
      {
         this.userNamecheck = true;
         this.helpBlockuserName='Tên đăng nhập có thể sử dụng';
         this.userNameValidationState='has-success';
      }
      onHandleUpload()
      {
       this.helpBlockUpload ="Đang tải lên....";
      }
      onGetUserSuccess(data)
      {
      this.user = data;
      this.userfullname = data.name;
      this.id=data._id;
      this.userName = data.username;
      this.passWord ='';
      this.repassWord = '';
      this.firstName= data.name.first;
      this.lastName= data.name.last
      this.Type=data.type;
      this.imagePreviewUrl = data.avatar;
      this.imageUrl=data.avatar;

      this.userNameValidationState='';
      this.passWordValidationState='';
      this.repassWordValidationState='';
      this.fistNameValidationState='';
      this.lastNameValidationState='';
      this.typeValidationState='';

      this.helpBlockuserName='';
      this.helpBlockpassword='';
      this.helpBlockrepassword='';
      this.helpBlockfirstName='';
      this.helpBlocklastName='';
      this.helpBlocktype='';

      }
      onGetUserFail(jqXhr)
      {
      toastr.error(jqXhr.responseJSON.message);
      }


      onAddUserSuccess(SuccessMessage)
      {
        localStorage.setItem('username', this.lastName);
        localStorage.setItem('avatar', this.imageUrl);
        this.oldpassword= '';
        this.id='';
        this.userName = '';
        this.passWord = '';
        this.repassWord = '';
        this.firstName= '';
        this.lastName= '';
        this.Type='';
        this.fileAvatar={};           
        this.userNameValidationState='has-success';
        this.passWordValidationState='has-success';
        this.repassWordValidationState='has-success';
        this.fistNameValidationState='has-success';
        this.lastNameValidationState='has-success';
        this.typeValidationState='has-success';
        this.oldpasswordValidation='has-success';

        this.helpBlockoldpassword='';
        this.helpBlockuserName='';
        this.helpBlockpassword='';
        this.helpBlockrepassword='';
        this.helpBlockfirstName='';
        this.helpBlocklastName='';
        this.helpBlocktype=SuccessMessage;           

      }

      onAddUserFail(errorMessage)
      {

            this.userNameValidationState='has-error';
            this.passWordValidationState='has-error';
            this.repassWordValidationState='has-error';
            this.fistNameValidationState='has-error';
            this.lastNameValidationState='has-error';
            this.typeValidationState='has-error';
            this.oldpasswordValidation='has-error';


            this.id='';
            this.userName = '';
            this.passWord = '';
            this.repassWord = '';
            this.firstName= '';
            this.lastName= '';
            this.oldpassword='';           
            this.fileAvatar={};        

            this.helpBlockuserName=errorMessage;
            this.helpBlockpassword=errorMessage;
            this.helpBlockrepassword=errorMessage;
            this.helpBlockfirstName=errorMessage;
            this.helpBlocklastName=errorMessage;
            this.helpBlocktype=errorMessage;
            this.helpBlockoldpassword=errorMessage;
      }

      onUpdateuserName(event)
      {
        this.userName = event.target.value;
        this.userNameValidationState = '';
        this.helpBlockuserName = '';    
        this.userNamecheck = true;  
      }

      onUpdatepassword(event)
      {
            this.passWord = event.target.value;
            this.passWordValidationState = '';
            this.helpBlockpassword = '';
      }
      onUpdaterepassword(event)
      {
            this.repassWord = event.target.value;
            this.repassWordValidationState = '';
            this.helpBlockrepassword = '';
      }

      onUpdatefirstName(event)
      {
            this.firstName = event.target.value;
            this.fistNameValidationState = '';
            this.helpBlockfirstName = '';
      }

      onUpdatelastName(event)
      {
            this.lastName = event.target.value;
            this.lastNameValidationState = '';
            this.helpBlocklastName = '';
      }
      onUpdateType(event)
      {
      this.Type = event.target.value;
      this.typeValidationState = '';
      this.helpBlocktype = '';
      }
      onUpdateImagepreview(imgURL)
      {
            this.imagePreviewUrl = imgURL;
      }
      onUpdateImagefile(file)
      {
            this.fileAvatar = file;
      }
      onInvaliduserName()
      {
            this.userNameValidationState ='has-error';
            this.helpBlockuserName ='Vui lòng nhập tên đăng nhập';
      }
      onInvalidpassword()
      {
            this.passWordValidationState= 'has-error';
            this.helpBlockpassword= 'Vui lòng nhập mật khẩu';
      }
      onInvalidrepassword()
      {
            this.repassWordValidationState= 'has-error';
            this.helpBlockrepassword= 'Vui lòng nhập đúng mật khẩu';
      }
      onInvalidfirstName()
      {
            this.fistNameValidationState = 'has-error';
            this.helpBlockfirstName = 'Vui lòng nhập họ lót';
      }
      onInvalidlastName()
      {
            this.lastNameValidationState = 'has-error';
            this.helpBlocklastName ="Vui lòng nhập tên";
      }
      onInvalidType()
      {
            this.typeValidationState='has-error';
            this.helpBlocktype='Vui lòng chọn kiểu người dùng';
      }
      onInvalidOldpassword(){
            this.oldpasswordValidation='has-error';
            this.helpBlockoldpassword='Vui lòng nhập mật khẩu cũ';
      }
      onPasswordNotSame()
      {
            this.passWord = '';
            this.repassWord = '';
            this.repassWordValidationState= 'has-error';
            this.helpBlockrepassword= 'Mật khẩu không đúng. Vui lòng nhập lại';

      }
      onClearAll()
      {        
        this.userName = '';
        this.oldpassword='';
        this.passWord = '';
        this.repassWord = '';
        this.firstName= '';
        this.lastName= '';
        this.Type ='';
        this.fileAvatar ={};
        this.imagePreviewUrl= this.user.avatar;
        this.imageUrl=this.user.avatar;
        this.userNameValidationState='';
        this.passWordValidationState='';
        this.repassWordValidationState='';
        this.fistNameValidationState='';
        this.lastNameValidationState='';
        this.typeValidationState='';

        this.helpBlockuserName='';
        this.helpBlockpassword='';
        this.helpBlockrepassword='';
        this.helpBlockfirstName='';
        this.helpBlocklastName='';
        this.helpBlocktype='';
        this.helpBlockUpload ='';
      }
      onResetAll()
      {
        this.id='';
        this.userName = '';
        this.passWord = '';
        this.repassWord = '';
        this.firstName= '';
        this.lastName= '';
        this.Type ='';
        this.fileAvatar ={};
        this.imagePreviewUrl='/uploads/avatar.jpg';
        this.imageUrl='/uploads/avatar.jpg';
        this.userNameValidationState='';
        this.passWordValidationState='';
        this.repassWordValidationState='';
        this.fistNameValidationState='';
        this.lastNameValidationState='';
        this.typeValidationState='';

        this.helpBlockuserName='';
        this.helpBlockpassword='';
        this.helpBlockrepassword='';
        this.helpBlockfirstName='';
        this.helpBlocklastName='';
        this.helpBlocktype='';
        this.helpBlockUpload ='';
      }
      onUploadSuccess(link)
      {
          this.helpBlockUpload ="Tải lên thành công";
          this.imageUrl=link;
          console.log(this.imageUrl);
      }
      onUploadFail(jqXhr)
      {
       this.helpBlockUpload ="Quá trình tải thất bại";
       toastr.error(jqXhr.responseJSON.message);
      }
}
export default alt.createStore(UserprofilleStore);
