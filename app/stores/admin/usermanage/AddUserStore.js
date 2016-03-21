import alt from '../../../alt';
import AddUserActions from '../../../actions/admin/usermanage/AddUserActions';
import listUsersActions from '../../../actions/admin/usermanage/listUsersActions';
class AddUserStore {
  constructor() {
      this.bindActions(AddUserActions);
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
      }

      onGetUserSuccess(data)
      {
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
            this.id='';
            this.userName = '';
            this.passWord = '';
            this.repassWord = '';
            this.firstName= '';
            this.lastName= '';
            this.Type='';
            this.fileAvatar={};
            this.imagePreviewUrl='/uploads/avatar.jpg';
            this.imageUrl='/uploads/avatar.jpg';
            this.userNameValidationState='has-success';
            this.passWordValidationState='has-success';
            this.repassWordValidationState='has-success';
            this.fistNameValidationState='has-success';
            this.lastNameValidationState='has-success';
            this.typeValidationState='has-success';


            this.helpBlockuserName='';
            this.helpBlockpassword='';
            this.helpBlockrepassword='';
            this.helpBlockfirstName='';
            this.helpBlocklastName='';
            this.helpBlocktype=SuccessMessage;  
            listUsersActions.get(); 
           
      }

      onAddUserFail(errorMessage)
      {

            this.userNameValidationState='has-error';
            this.passWordValidationState='has-error';
            this.repassWordValidationState='has-error';
            this.fistNameValidationState='has-error';
            this.lastNameValidationState='has-error';
            this.typeValidationState='has-error';

            this.id='';
            this.userName = '';
            this.passWord = '';
            this.repassWord = '';
            this.firstName= '';
            this.lastName= '';
            this.Type=3;
            this.fileAvatar={};
            this.imagePreviewUrl='/uploads/avatar.jpg';
            this.imageUrl='/uploads/avatar.jpg';

            this.helpBlockuserName=errorMessage;
            this.helpBlockpassword=errorMessage;
            this.helpBlockrepassword=errorMessage;
            this.helpBlockfirstName=errorMessage;
            this.helpBlocklastName=errorMessage;
            this.helpBlocktype=errorMessage;
      }

      onUpdateuserName(event)
      {
            this.userName = event.target.value;
            this.userNameValidationState = '';
            this.helpBlockuserName = '';      
      }

      onUpdatepassword(event)
      {
            this.passWord = event.target.value;
            this.directorValidationState = '';    
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
      onUpdateAvatarpreview(imgURL)
      {          
            this.imagePreviewUrl = imgURL;           
      }
      onUpdateAvatarfile(file)
      {
            this.fileAvatar = file;           
      }
      onInvaliduserName()
      {         
            this.userNameValidationState ='has-error';
            this.helpBlockuserName ='Please enter UserName';             
      } 
      onInvalidpassword()
      {
            this.passWordValidationState= 'has-error';
            this.helpBlockpassword= 'Please enter Password';
      }
      onInvalidrepassword()
      {
            this.repassWordValidationState= 'has-error';
            this.helpBlockrepassword= 'Please enter Password';
      }     
      onInvalidfirstName()
      {
            this.fistNameValidationState = 'has-error';
            this.helpBlockfirstName = 'Please enter your firstName';
      }     
      onInvalidlastName()
      {
            this.lastNameValidationState = 'has-error';
            this.helpBlocklastName ="Please enter your lastName";
      }
      onInvalidType()
      {
            this.typeValidationState='has-error';
            this.helpBlocktype='Please choose type'; 
      }
      onPasswordNotSame()
      {
            this.passWord = '';
            this.repassWord = '';
            this.repassWordValidationState= 'has-error'; 
            this.helpBlockrepassword= 'Password not same! Enter again';
            
      }
      onResetAll()
      {
      
      this.userName = '';
      this.passWord = '';
      this.repassWord = '';
      this.firstName= '';
      this.lastName= '';   
      this.Type ='';
      this.fileAvatar={};
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
      }
      onUploadSuccess(link)
      {            
          this.imageUrl = link;
          console.log(this.imageUrl);
      }
      onUploadFail(jqXhr)
      {
       toastr.error(jqXhr.responseJSON.message);
      }
}
export default alt.createStore(AddUserStore);