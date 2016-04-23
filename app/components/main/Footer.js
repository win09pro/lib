import React from 'react';
import {Link} from 'react-router';
//import FooterStore from '../../stores/FooterStore'
//import FooterActions from '../../actions/FooterActions';

class Footer extends React.Component {

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
          <div className="col-md-6 col-sm-12">
            <h3>THỐNG KÊ</h3>
            <h5><i className="fa fa-user" /> Đang trực tuyến: <strong style={{color: 'yellow'}}>3</strong></h5>
            <h5><i className="fa fa-users" /> Tổng lượt truy cập: <strong style={{color: 'yellow'}}>12313</strong></h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;