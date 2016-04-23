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
  render() {

    return (     
        <Modal show={this.state.LoginModalisOpen} onHide ={LoginActions.closeLoginModal}>
          <Modal.Header  >
           <div style ={{'textAlign':'center'}}>
            <Modal.Title><i className="fa fa-check-square-o"></i>Đăng nhập</Modal.Title>
            </div>
          </Modal.Header>
          <Modal.Body>
              <form className="form-horizontal" role="form">
                <div className="form-body">
                  <div className="form-group">
                    <label htmlFor="inputName" className="col-md-3 control-label">Tên truy cập</label>
                    <div className="col-md-9">
                      <div className="input-icon right-inner-addon">
                        <i className="fa fa-user" />
                        <input type="text" className="form-control" name="uname" placeholder="Tên đăng nhập" required />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputPassword" className="col-md-3 control-label">Mật khẩu</label>
                    <div className="col-md-9">
                      <div className="input-icon right-inner-addon control-label">
                        <i className="fa fa-lock" />
                        <input type="password" className="form-control" name="pass" placeholder="Mật khẩu" required />
                      </div>
                    </div>
                  </div>
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
              <button
                  className="btn btn-warning"
                onClick={LoginActions.closeLoginModal}><i className="fa fa-times"> Hủy bỏ</i> </button>                  
                <button className="btn btn-green" name="btn-login"><i className="fa fa-sign-in" /> Đăng nhập</button>              
          </Modal.Footer>
        </Modal>
    );
  }
}
