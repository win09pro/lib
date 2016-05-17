import React from 'react';
import {Link} from 'react-router';
import AdminloginActions from '../../../actions/admin/login/AdminloginActions';
import Adminloginstore from '../../../stores/admin/login/Adminloginstore';
class Adminlogin extends React.Component {
constructor(props)
  {
    super(props);
    this.state = Adminloginstore.getState();
    this.onChange = this.onChange.bind(this);
  }
   componentDidMount() {  
    Adminloginstore.listen(this.onChange);      
    if (localStorage.getItem('adminusername'))
    {
      this.context.router.push('/admin/');
    } 
  }
  componentWillUnmount() {
    Adminloginstore.unlisten(this.onChange);     
  }
  onChange(state) {
    this.setState(state);
  } 
  handleloginAdmin(event)
  {
    var username = this.state.user;
    var password = this.state.password;
    if (!password)
    {
      AdminloginActions.invalidpass();
      this.refs.passwordTextField.focus();
    }
    if (!username)
    {
      AdminloginActions.invalidusername();
      this.refs.userTextField.focus();      
    }
    if (password && username)
    {
      AdminloginActions.adminlogin({
        username:username,
        password:password
      });
    }   
    event.preventDefault();
   }

  render() {

    return(
    <div className="background">
      <div className='adminlogin'>
        <div className="row">
            <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-4 ">
              <div className="login-panel panel panel-primary">
                <div className="panel-heading adminlogin-header">
                  <i className="fa fa-lock"/> Đăng nhập <span>ADMIN</span>
                </div>
                <div className="panel-body">
                  <form className="form-horizontal" role="form" onSubmit={this.handleloginAdmin.bind(this)}>
                    <fieldset>
                      <div className={'form-group ' + this.state.userValidationState}>
                        <label className="control-label col-sm-3" htmlFor="username">Tên đăng nhập</label>
                        <div className="col-sm-9">                   
                          <input type="text" className="form-control" id="username" ref='userTextField' placeholder="Nhập tên đăng nhập" 
                          onChange={AdminloginActions.updateadminusername} value = {this.state.user} />
                        </div>
                      </div>
                      <div className={'form-group ' + this.state.passwordValidationState}>
                        <label className="control-label col-sm-3" htmlFor="pwd">Mật khẩu:</label>
                        <div className="col-sm-9">
                          <input type="password" className="form-control" id="pwd" ref='passwordTextField' placeholder="Nhập mật khẩu" 
                           onChange={AdminloginActions.updateadminpassword}  value = {this.state.password} />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-sm-offset-3 col-sm-10">
                          <span className="adminlogin-helpblock">
                          {this.state.helpBlock}
                          </span>
                        </div>
                      </div>                
                        <div className="pull-right">
                          <button type="submit" name="btn-adminlogin" className="btn btn-primary">Login</button>                    
                       </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )    
}
};
Adminlogin.contextTypes = {
  router: React.PropTypes.object.isRequired
};
export default Adminlogin ;
