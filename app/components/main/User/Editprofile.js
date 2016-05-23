import React from 'react';
import {Link} from 'react-router';
import {animateScroll}  from  'react-scroll'; 
import localStorage from 'localStorage';
import UserprofilleActions from '../../../actions/main/User/UserprofilleActions';
import UserprofilleStore from '../../../stores/main/User/UserprofilleStore';
import ImgUpload from '../../../shared/ImgUpload';
import MainnavbarActions from '../../../actions/main/MainnavbarActions';
class Editprofile extends React.Component {
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
     console.log(this.state.userNamecheck);
  }
  componentWillUnmount() {   
     UserprofilleStore.unlisten(this.onChange);     
  }
  onChange(state) {
    this.setState(state);
  } 
  checkusername(event){    
    var username = event.target.value;
    if((username != this.state.user.username)&&(username)){       
      UserprofilleActions.checkUserName(username);      
    }    
  }
  handleSubmitUser(event)
  {   
    var id = this.state.id;
    var username = this.state.userName.trim();  
    var checkusername =this.state.userNamecheck;  
    var firstname = this.state.firstName;
    var lastname = this.state.lastName;
    var barcode = '51202574';
    var type = this.state.Type;      
    if (!lastname) {
      UserprofilleActions.invalidlastName();
      this.refs.lastNameTextField.focus();
    }
    if (!firstname) {
      UserprofilleActions.invalidfirstName();      
      this.refs.firstNameTextField.focus();
    }
    if(!checkusername){
      UserprofilleActions.alreadyHaduser("Tên đã được sử dụng");    
      this.refs.userNameTextField.focus();
    }
    if (!username) {
      UserprofilleActions.invaliduserName();
      this.refs.userNameTextField.focus();
    }
    if (username && firstname &&lastname &&type&&checkusername) {
          UserprofilleActions.updateimformationUser({
            id:id,
            userName:username,           
            firstName:firstname,
            lastName:lastname ,
            barcode:barcode,
            type: Number(type),
            avatar:this.state.imageUrl
          });
      MainnavbarActions.updatenavbar();
      this.context.router.push('/user/profile');
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
               <div className="row col-sx-offset-4 col-md-offset-2 col-sm-offset-4" style={{'marginTop':'40px'}}>                            
                   <div className ="clear-both"></div>
                    <div className="avatar-photo">
                      <ImgUpload actions ={UserprofilleActions} />
                      <div className="avatar-edit">
                      <i className="fa fa-camera"></i>
                      </div>
                      <img src ={this.state.imagePreviewUrl} height ="200px" width="200px" alt = "avatar"/>
                    </div>
                    <div className ="clear-both"></div>
                    <div>
                     <button type='button' className = 'btn btn-success'onClick = {this.upload.bind(this)} ><i className="fa fa-check"></i>Tải lên</button>                     
                    <span className='help-block'>{this.state.helpBlockUpload}</span>
                   </div>  
                </div>             
              </div>
              <div className="col-sx-12 col-md-7 col-sm-12">
                <div className="user-profile-info">
                  <form onSubmit={this.handleSubmitUser.bind(this)}  enctype="multipart/form-data">
                  <div className={'form-group ' + this.state.userNameValidationState}>
                    <label className='control-label'>Tên đăng nhập</label>
                    <input type='text' className='form-control' ref='userNameTextField' value={this.state.userName}
                           onChange={UserprofilleActions.updateuserName} onBlur={this.checkusername.bind(this)} autoFocus/>
                    <span className='help-block'>{this.state.helpBlockuserName}</span>
                  </div>
                  <div className={'form-group ' + this.state.fistNameValidationState}>
                    <label className='control-label'>Họ</label>
                    <input type='text' className='form-control' ref='firstNameTextField' value={this.state.firstName}
                           onChange={UserprofilleActions.updatefirstName}/>
                    <span className='help-block'>{this.state.helpBlockfirstName}</span>
                  </div>

                  <div className={'form-group ' + this.state.lastNameValidationState}>
                    <label className='control-label'>Tên</label>
                    <input type='text' className='form-control' ref='lastNameTextField' value={this.state.lastName}
                           onChange={UserprofilleActions.updatelastName}/>
                    <span className='help-block'>{this.state.helpBlocklastName}</span>
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
                    <button type="button" className="user-editprofile" name="button" onClick =  {UserprofilleActions.clearAll}><b>Làm sạch</b></button>
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
Editprofile.contextTypes = {
  router: React.PropTypes.object.isRequired
};
export default Editprofile;