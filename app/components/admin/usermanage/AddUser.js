import React from 'react';
import Dropzone from 'react-dropzone';
import FormData from 'form-data';
import ReactDOM from 'react-dom';
import AddUserStore from '../../../stores/admin/usermanage/AddUserStore';
import AddUserActions from '../../../actions/admin/usermanage/AddUserActions';
import ImgUpload from '../../../shared/ImgUpload';



class AddUser extends React.Component {
  constructor(props)
  {
  	super(props);
  	this.state = AddUserStore.getState();
  	this.onChange = this.onChange.bind(this);
  }
   componentDidMount() {
    AddUserStore.listen(this.onChange);
  }

  componentWillUnmount() {
    AddUserStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  upload(event)
  {
      var imgfile = this.state.fileAvatar;
         var imgURL = this.state.imagePreviewUrl;
          AddUserActions.handleUpload();
          AddUserActions.uploadImage(imgfile);
           console.log(this.state.imageUrl);
  }
   detele(event)
  {

           console.log(this.state.imageUrl);
  }
  handleSubmitUser(event)
  {

    var id = this.state.id;
    var username = this.state.userName.trim();
    var password = this.state.passWord;
    var repassword = this.state.repassWord;
    var firstname = this.state.firstName;
    var lastname = this.state.lastName;
    var barcode = '';
    var type = this.state.Type;
    if (!type) {
      AddUserActions.invalidType();
      //this.refs.typeTextField.focus();
    }
    if (!lastname) {
      AddUserActions.invalidlastName();
      this.refs.lastNameTextField.focus();
    }
    if (!firstname) {
      AddUserActions.invalidfirstName();
      this.refs.firstNameTextField.focus();
    }
    if (!repassword) {
      AddUserActions.invalidrepassword();
      this.refs.repasswordTextField.focus();
    }
    if (!password) {
      AddUserActions.invalidpassword();
      this.refs.passwordTextField.focus();
    }
    if (!username) {
      AddUserActions.invaliduserName();
      this.refs.userNameTextField.focus();
    }
    if(repassword != password)
    {
      AddUserActions.passwordNotSame();
      this.refs.repasswordTextField.focus();
    }
    if (username && repassword && password &&firstname &&lastname &&type) {
          AddUserActions.addUser({
            id:id,
            userName:username,
            pass:password,
            firstName:firstname,
            lastName:lastname ,
            barcode:barcode,
            type: Number(type),
            avatar:this.state.imageUrl
          });
    }
     event.preventDefault();
  }
  render() {
  var styles = {
      '.quill': {
          'border': '1px solid #d5d5d5'
      },
      '.ql-toolbar': {
          'box-shadow': '0 1px 10px rgba(0, 0, 0, .1)'
      },
      '.quill-contents ': {
          'height': '250px'
      }
  };
    return (
      <div className='container'>
        <div className='row flipInX animated'>
          <div className='col-sm-8'>
            <div className='panel panel-danger'>
              <div className='panel-heading'><strong>Thêm người dùng</strong></div>
              <div className='panel-body'>
                <form onSubmit={this.handleSubmitUser.bind(this)}  enctype="multipart/form-data">
                  <div className={'form-group ' + this.state.userNameValidationState}>
                    <label className='control-label'>Tên đăng nhập</label>
                    <input type='text' className='form-control' ref='userNameTextField' value={this.state.userName}
                           onChange={AddUserActions.updateuserName} autoFocus/>
                    <span className='help-block'>{this.state.helpBlockuserName}</span>
                  </div>

                  <div className={'form-group ' + this.state.passWordValidationState}>
                    <label className='control-label'>Mật khẩu</label>
                    <input type='password' className='form-control' ref='passwordTextField' value={this.state.passWord}
                           onChange={AddUserActions.updatepassword}/>
                    <span className='help-block'>{this.state.helpBlockpassword}</span>
                  </div>

                   <div className={'form-group ' + this.state.repassWordValidationState}>
                    <label className='control-label'>Nhập lại mật khẩu</label>
                    <input type='password' className='form-control' ref='repasswordTextField' value={this.state.repassWord}
                           onChange={AddUserActions.updaterepassword}/>
                    <span className='help-block'>{this.state.helpBlockrepassword}</span>
                  </div>

                  <div className={'form-group ' + this.state.fistNameValidationState}>
                    <label className='control-label'>Họ</label>
                    <input type='text' className='form-control' ref='firstNameTextField' value={this.state.firstName}
                           onChange={AddUserActions.updatefirstName}/>
                    <span className='help-block'>{this.state.helpBlockfirstName}</span>
                  </div>

                  <div className={'form-group ' + this.state.lastNameValidationState}>
                    <label className='control-label'>Tên</label>
                    <input type='text' className='form-control' ref='lastNameTextField' value={this.state.lastName}
                           onChange={AddUserActions.updatelastName}/>
                    <span className='help-block'>{this.state.helpBlocklastName}</span>
                  </div>

                  <div className={'form-group ' + this.state.typeValidationState}>
                    <label className='control-label'>Kiểu người dùng</label>
                     <select className='form-control' value ={this.state.Type} onChange ={AddUserActions.updateType} >
                      <option value =''>-Chọn kiểu người dùng-</option>
                      <option value ='1'>Admin1</option>
                      <option value ='2'>Admin2</option>
                      <option value ='3'>User</option>
                      </select>
                    <span className='help-block'>{this.state.helpBlocktype}</span>
                  </div>
                  <div className='form-group has-success'>
                   <label className='control-label'>Chọn ảnh đại diện</label>
                   <div className ="clear-both"></div>
                    <div className="avatar-photo">
                      <ImgUpload actions ={AddUserActions} />
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
                   <div className ="clear-both"></div>

                  <input type="button" className='btn btn-warning' onClick =  {AddUserActions.clearAll} value ='Reset'/>
                  <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default AddUser;
