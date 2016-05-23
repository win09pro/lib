import React from 'react';
import {Link} from 'react-router';
import {Modal} from 'react-bootstrap';
import LoginActions from '../../../actions/main/Login/LoginActions';
import Loginstore from '../../../stores/main/Login/Loginstore';
export default class Login extends React.Component {
constructor(props)
  {
    super(props);
    this.state = Loginstore.getState();
    this.onChange = this.onChange.bind(this);
  }
   componentDidMount() {  
    Loginstore.listen(this.onChange);   
  }
  componentWillUnmount() {
    Loginstore.unlisten(this.onChange);
  }
  onChange(state) {
    this.setState(state);
  } 
  handleLoginUser(event)
  {
    var username = this.state.user;
    var password = this.state.password;
    if (!password)
    {
      this.refs.passwordTextField.focus();
    }
    if (!username)
    {
      this.refs.userTextField.focus();      
    }
    if (password && username)
    {
      LoginActions.login({
        username:username,
        password:password
      });
    }
    event.preventDefault();
  }

  render() {
    let style ={'background-color':'#00bfff',  'border-radius': '15px 15px 0px 0px', 'color': '#fff','padding':'10px'};
    return (     
        <Modal show={this.state.LoginModalisOpen} onHide ={LoginActions.closeLoginModal}>
          <Modal.Header style ={style}  >
           <div style ={{'textAlign':'center'}}>
            <Modal.Title bsClass='ModalLogin'><i className="fa fa-check-square-o"></i> Đăng nhập</Modal.Title>
            </div>
          </Modal.Header>
          <Modal.Body>
              <form className="form-horizontal" role="form" onSubmit={this.handleLoginUser.bind(this)}>
                <div className="form-body">
                  <div className="form-group">
                    <label htmlFor="inputName" className="col-md-3 control-label">Tên truy cập</label>
                    <div className="col-md-9">
                      <div className="input-icon right-inner-addon">
                        <i className="fa fa-user" />
                        <input type="text" ref='userTextField' className="form-control" value ={this.state.user} onChange ={LoginActions.updateuser}
                         id="inputName" placeholder="Tên đăng nhập" required />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputpass" className="col-md-3 control-label">Mật khẩu</label>
                    <div className="col-md-9">
                      <div className="input-icon right-inner-addon">
                        <i className="fa fa-lock" />
                        <input type="password" ref='passwordTextField' className="form-control" value ={this.state.password} onChange ={LoginActions.updatepassword}
                        id="inputpass" placeholder="Mật khẩu" required />
                      </div>
                    </div>
                  </div>
                  <button type ="submit" style={{'display':'none'}}></button>
                 {/* <div className="form-group">
                    <label className="col-md-3 control-label" />
                    <div className="col-md-9">
                      <input type="checkbox" name="remember" defaultValue={1} /> Nhớ đến tôi?
                    </div>
                  </div>  */}              
                </div>
              </form>
          </Modal.Body>      
          <Modal.Footer>
              <label className='pull-left helpblock-login-register'>{this.state.helpBlock}</label>
              <button
                  className="btn btn-warning"
                onClick={LoginActions.closeLoginModal}><i className="fa fa-times"> Hủy bỏ</i> </button>                  
                <button className="btn btn-green" name="btn-login" onClick={this.handleLoginUser.bind(this)}><i className="fa fa-sign-in" /> Đăng nhập</button>              
          </Modal.Footer>
        </Modal>
    );
  }

}
