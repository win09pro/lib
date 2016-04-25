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
    let style ={'background-color':'#00bfff',  'border-radius': '15px 15px 0px 0px', 'color': '#fff','padding':'10px'};
    return (     
        <Modal show={this.state.LoginModalisOpen} onHide ={LoginActions.closeLoginModal}>
          <Modal.Header style ={style}  >
           <div style ={{'textAlign':'center'}}>
            <Modal.Title bsClass='ModalLogin'><i className="fa fa-check-square-o"></i> Đăng nhập</Modal.Title>
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
                        <input type="text" className="form-control" id="inputName" placeholder="Tên đăng nhập" required />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputpass" className="col-md-3 control-label">Tên truy cập</label>
                    <div className="col-md-9">
                      <div className="input-icon right-inner-addon">
                        <i className="fa fa-lock" />
                        <input type="password" className="form-control" id="inputpass" placeholder="Mật khẩu" required />
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
