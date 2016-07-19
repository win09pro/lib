import React from 'react';
import {Link} from 'react-router';
import {animateScroll}  from  'react-scroll'; 
import NavbarStore from '../../stores/NavbarStore';
import NavbarActions from '../../actions/NavbarActions';


class Footer extends React.Component {
   constructor(props) {
    super(props);
    this.state = NavbarStore.getState();
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() { 
     NavbarStore.listen(this.onChange);
    let socket = io.connect();

    socket.on('onlineUsers', (data) => {
      NavbarActions.updateOnlineUsers(data);
    });

  }
   componentWillUnmount() {
      NavbarStore.unlisten(this.onChange);
  }

  onChange(state) {
   this.setState(state);
  }
  render() {


    return (
        <div className="main-library-footer">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <h3>THƯ VIỆN ĐẠI HỌC BÁCH KHOA TP HỒ CHÍ MINH</h3>
            <h5><i className="fa fa-map-marker" /> 268, Lý Thường Kiệt, Quận 10, TP Hồ Chí Minh</h5>
            <h5><i className="fa fa-phone" /> (84.8) 647256</h5>
            <h5><i className="fa fa-envelope-o" /> thuviendhbk@hcmut.edu.vn</h5>
            <h5>Copyright © Thư Viện Đại Học Bách Khoa Tp.HCM</h5>
          </div>
          <div className="col-md-3 col-sm-12">
            <h3>THỐNG KÊ</h3>
            <h5><i className="fa fa-user" /> Đang trực tuyến: <strong style={{color: 'yellow'}}>{this.state.onlineUsers}</strong></h5>
            <h5><i className="fa fa-users" /> Tổng lượt truy cập: <strong style={{color: 'yellow'}}>41231</strong></h5>
          </div>
          <div className="col-md-3 col-sm-12 col-xs-12">
        <h3>LIÊN KẾT NGOÀI</h3>
          <div className="content">
            <div className="row">
              <div className="col-md-4 col-sm-2 col-xs-2">
                <div className="picture">
                  <a href="http://wiki.hcmut.edu.vn/" title="BK wiki"><img className="rotate" src="/img/iconconnect/bkwiki_logo.png" alt="icon" /></a>
                </div>
              </div>
              <div className="col-md-4 col-sm-2 col-xs-2">
                <div className="picture">
                  <a href="http://www.vnulib.edu.vn/" title="Thư viện trung tâm"><img className="rotate" src="/img/iconconnect/thuvientrungtam-logo.png" alt="icon" /></a>
                </div>
              </div>
              <div className="col-md-4 col-sm-2 col-xs-2">
                <div className="picture">
                  <a href="http://www.glib.hcmuns.edu.vn/" title="Thư viện Khoa Học Tự Nhiên"><img className="/rotate" src="/img/iconconnect/logo-khtn.png" alt="icon" /></a>
                </div>
              </div>
              <div className="col-md-4 col-sm-2 col-xs-2">
                <div className="picture">
                  <a href="http://lib.uel.edu.vn/" title="Thư viện Kinh Tế Luật"><img className="rotate" src="/img/iconconnect/logo-ktl.png" alt="icon" /></a>
                </div>
              </div>
              <div className="col-md-4 col-sm-2 col-xs-2">
                <div className="picture">
                  <a href="http://lib.hcmussh.edu.vn/" title="Thư viện Khoa Học xã hội và Nhân văn"><img className="rotate" src="/img/iconconnect/USSH.jpg" alt="icon" /></a>
                </div>
              </div>
              <div className="col-md-4 col-sm-2 col-xs-2">
                <div className="picture">
                  <a href="http://thuvien.uit.edu.vn/" title="Thư viện ĐH Công nghệ thông tin"><img className="rotate" src="/img/iconconnect/uit2.jpg" alt="icon" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        </div>
        <button  id ="maintoTopbutton"
          onClick={animateScroll.scrollToTop}><i className="fa fa-arrow-up" aria-hidden="true"></i></button>
      </div>
    );
  }
}

export default Footer;