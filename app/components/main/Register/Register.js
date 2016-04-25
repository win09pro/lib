import React from 'react';
import {Link} from 'react-router';
import {Modal} from 'react-bootstrap';
import RegisterActions from '../../../actions/main/Register/RegisterActions';
import RegisterStore from '../../../stores/main/Register/RegisterStore';

export default class Register extends React.Component {
constructor(props)
  {
    super(props);
    this.state = RegisterStore.getState();
    this.onChange = this.onChange.bind(this);
  }
   componentDidMount() {  
    RegisterStore.listen(this.onChange);   
  }
  componentWillUnmount() {
    RegisterStore.unlisten(this.onChange);
  }
  onChange(state) {
    this.setState(state);
  } 
  render() {
    let style ={'backgroundColor':'#1a75ff',  'borderRadius': '15px 15px 0px 0px', 'color': '#fff','padding':'10px'};
    return (     
        <Modal show={this.state.RegisterModalisOpen} onHide ={RegisterActions.closeRegisterModal}>
          <Modal.Header style ={style}  >
           <div style ={{'textAlign':'center'}}>
            <Modal.Title bsClass='ModalLogin'><i className="fa fa-pencil"></i> ĐĂNG KÝ </Modal.Title>
            </div>
          </Modal.Header>
          <Modal.Body>
              <form className="form-horizontal" role="form">
                <div className="form-body">
                  <div className="form-group">
                    <label htmlFor="uname" className="col-md-3 control-label">Tên truy cập</label>
                    <div className="col-md-9">
                      <div className="input-icon right-inner-addon">
                        <i className="fa fa-user" />
                        <input type="text" className="form-control" id="uname" placeholder="Tên đăng nhập" required />
                      </div>
                    </div>
                  </div> 
                  <div className="form-group">
                    <label htmlFor="pass" className="col-md-3 control-label">Mật khẩu</label>
                    <div className="col-md-9">
                      <div className="input-icon right-inner-addon">
                        <i className="fa fa-lock" />
                        <input type="password" className="form-control" id="pass" placeholder="Mật khẩu" required />
                      </div>
                    </div>
                  </div> 
                  <div className="form-group">
                    <label htmlFor="repass" className="col-md-3 control-label">Nhập lại mật khẩu</label>
                    <div className="col-md-9">
                      <div className="input-icon right-inner-addon">
                        <i className="fa fa-lock" />
                        <input type="password" className="form-control" id="repass" placeholder="Nhập lại mật khẩu" required />
                      </div>
                    </div>
                  </div> 
                     <div className="form-group">
                    <label htmlFor="fname" className="col-md-3 control-label">Họ lót</label>
                    <div className="col-md-5">
                      <div className="input-icon right-inner-addon">                      
                        <input type="text" className="form-control" name="fname" placeholder="Họ lót" required />
                      </div>
                    </div>
                    <label htmlFor="lname" className="col-md-1 control-label">Tên</label>
                    <div className="col-md-3">
                      <div className="input-icon right-inner-addon">                       
                        <input type="text" className="form-control" name="lname" placeholder="Tên" required />
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
                <button className="btn btn-danger"
                onClick={RegisterActions.closeRegisterModal}><i className="fa fa-times"> Hủy bỏ</i> </button>                  
                <button className="btn btn-primary"><i className="fa fa-check-square-o"> Đăng ký</i> </button>              
          </Modal.Footer>
        </Modal>
    );
  }
}
