import React from 'react';
import {Link} from 'react-router';
import {animateScroll}  from  'react-scroll'; 
import localStorage from 'localStorage';
import UserprofilleActions from '../../../actions/main/User/UserprofilleActions';
import UserprofilleStore from '../../../stores/main/User/UserprofilleStore';
import ImgUpload from '../../../shared/ImgUpload';
import MainnavbarActions from '../../../actions/main/MainnavbarActions';
import LoginActions from '../../../actions/main/Login/LoginActions';
class EditPassword extends React.Component {
   constructor(props)
  {
    super(props);
    this.state = UserprofilleStore.getState();
    this.onChange = this.onChange.bind(this);
  }
   componentDidMount() {      
    UserprofilleStore.listen(this.onChange); 

      if (!localStorage.getItem('userid'))
    {
      this.context.router.push('/');
    }  
     else{
      UserprofilleActions.getUserById(localStorage.getItem('userid'));
     }
  }
  componentWillUnmount() {   
     UserprofilleStore.unlisten(this.onChange);     
  }
  onChange(state) {
    this.setState(state);
  } 
  checkOldpassword(event){
    UserprofilleActions.checkOldpassword(this.state.userName,this.state.oldpassword);   
  }
  handleSubmitPassword(event)
  {   
    var id = this.state.id;
    var oldpassword = this.state.oldpassword;
    var password = this.state.passWord;
    var repassword = this.state.repassWord;
    var oldpasscheck = this.state.oldpasscheck;
    if (!repassword) {
      UserprofilleActions.invalidrepassword();
      this.refs.repasswordTextField.focus();
    }
    if (!password) {
      UserprofilleActions.invalidpassword();
      this.refs.passwordTextField.focus();
    }    
    if(repassword != password)
    {
      UserprofilleActions.passwordNotSame();
      this.refs.repasswordTextField.focus();
    }
    if (!oldpassword) {
      UserprofilleActions.invalidOldpassword();
      this.refs.oldpasswordTextField.focus();
    }
     if(!oldpasscheck){
      UserprofilleActions.oldpasswordUncorrect();    
      this.refs.oldpasswordTextField.focus();
    }    
    if (oldpassword && password &&repassword&&(repassword == password)&&oldpasscheck) {
          UserprofilleActions.updatepasswordUser({
            id:id,            
            password:password,           
          });
     LoginActions.logout();          
    }
     event.preventDefault();
  }
    upload(event)
  {
      var imgfile = this.state.fileAvatar;
      var imgURL = this.state.imagePreviewUrl;
          UserprofilleActions.handleUpload();
          UserprofilleActions.uploadImage(imgfile);
  }
   detele(event)
  {

           console.log(this.state.imageUrl);
  }
  render() {
     function Type_User(type)
      {
        if (type == 1)
          return "Admin1";
        else if (type ==2)
          return "Admin2";
        else return "Thường";
      } 
    return (
     <div className="user-profile-content">
        <div className="container">
          <div className="user-profile-header">
            <ol className="breadcrumb page-breadcrumb pull-left">
              <li><i className="fa fa-home" /><a href="/"> Trang chủ</a></li>
              <li className="active">Chỉnh sửa thông tin cá nhân</li>
            </ol>
          </div>
          <div className="user-profile">
            <div className="user-profile-title">
              <h2>Cập nhập thông tin</h2>
            </div>
            <div className="clear-both">
            </div>
            <div className="row">
              <div className="col-sx-12 col-md-5 col-sm-12">
                <div className="form-avatar">
                  <div className="fileupload-image">
                    <img src={localStorage.getItem('avatar')} alt="avatar" />
                  </div>
                </div>
              </div>
              <div className="col-sx-12 col-md-7 col-sm-12">
                <div className="user-profile-info">
                  <form onSubmit={this.handleSubmitPassword.bind(this)}  enctype="multipart/form-data">
                  <div className={'form-group ' + this.state.oldpasswordValidation}>
                    <label className='control-label'>Mật khẩu cũ</label>
                    <input type='password' className='form-control' ref='oldpasswordTextField' value={this.state.oldpassword}
                           onChange={UserprofilleActions.updateoldpassword} onBlur={this.checkOldpassword.bind(this)} autoFocus/>
                    <span className='help-block'>{this.state.helpBlockoldpassword}</span>
                  </div>
                  <div className={'form-group ' + this.state.passWordValidationState}>
                    <label className='control-label'>Mật khẩu mới</label>
                    <input type='password' className='form-control' ref='passwordTextField' value={this.state.passWord}
                           onChange={UserprofilleActions.updatepassword}/>
                    <span className='help-block'>{this.state.helpBlockpassword}</span>
                  </div>

                   <div className={'form-group ' + this.state.repassWordValidationState}>
                    <label className='control-label'>Nhập lại mật khẩu</label>
                    <input type='password' className='form-control' ref='repasswordTextField' value={this.state.repassWord}
                           onChange={UserprofilleActions.updaterepassword}/>
                    <span className='help-block'>{this.state.helpBlockrepassword}</span>
                  </div>
              
              {/*    <div className='form-group has-success'>
                   <label className='control-label'>Chọn ảnh đại diện</label>
                      <div className ="clear-both"></div>
                      <div className="avatar-photo">
                        <ImgUpload actions ={UserprofilleActions} />
                        <div className="avatar-edit">
                           <i className="fa fa-camera"></i>
                        </div>
                        <img src ={this.state.imagePreviewUrl} height ="200px" width="200px" alt = "avatar"/>
                      </div>
                      <div>
                       <button type='button' className = 'btn btn-success'onClick = {this.upload.bind(this)} ><i className="fa fa-check"></i></button>
                       <button type='button' className = 'btn btn-danger' onClick = {this.detele.bind(this)} ><i className="fa fa-times"></i></button>
                        <span className='help-block'>{this.state.helpBlockUpload}</span>
                     </div>
                  </div>
                */}
                   <div className ="clear-both"></div>
                  <div className="rows">
                  <div className="col-xs-12 col-md-6">
                    <button type="reset" className="user-editprofile" name="button" onClick =  {UserprofilleActions.clearAll}><b>Làm sạch</b></button>
                  </div>
                  <div className="col-xs-12 col-md-6">
                    <button type="submit" className="user-changepassword" name="button"><b>Đồng ý</b></button>
                  </div>
                </div>
                </form>
                </div>
                <div className="clear-both"></div>               
              </div>
            </div>
            <div className="clear-both">
            </div>            
          </div>
        </div>
      </div>
    );
  }
}
EditPassword.contextTypes = {
  router: React.PropTypes.object.isRequired
};
export default EditPassword;