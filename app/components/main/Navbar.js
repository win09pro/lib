import React from 'react';
import {Link} from 'react-router';
import {Modal} from 'react-bootstrap';
class Navbar extends React.Component {
  constructor(props) {
    super(props);    
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {  
  }

  onChange(state) {
    this.setState(state);
  }
  
  render() {   
    return (
     <header className="library-header">
        <div className="container">
          <div className="header-container">
            <div className="row">
              <div className="col-md-3 col-sm-2">
                <div className="logo">
                  <a href="index.html"><img src="img/logo.png" alt="logo" /></a>
                </div>
              </div>
              <div className="col-md-9">
                <div className="menu">
                  <div className="top-menu">
                    <div className="site_info">
                      Chào mừng đến với thư viện đại học Bách Khoa
                    </div>
                    <div className="user">
                      <ul>
                        <li><a href="#" type="button" name="button"> <i className="fa fa-user" /> Đăng nhập</a></li>
                        <li><a href="#" type="button" name="button"> <i className="fa fa-pencil-square-o" /> Đăng ký</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="main-menu">
                  <ul>
                    <li><a href="#">TRANG CHỦ</a></li>
                    <li> <a href="#">GIỚI THIỆU</a>
                      <ul>
                        <li> <a href="#">tổng quan</a> </li>
                        <li> <a href="#">giờ mở cửa</a> </li>
                        <li> <a href="#">nguồn lực thông tin</a> </li>
                        <li> <a href="#">chính sách thư viện</a> </li>
                        <li> <a href="#">Sơ đồ thư viện</a> </li>
                        <li> <a href="#">Đường đến thư viện</a> </li>
                      </ul>
                    </li>
                    <li> <a href="#">Tra cứu</a>
                      <ul>
                        <li><a href="#">Mục lục trực tuyến</a></li>
                        <li><a href="#">Tra cứu trong DHQG</a></li>
                        <li><a href="#">Tài liệu toàn văn</a></li>
                        <li><a href="#">Cơ sở dữ liệu online</a></li>
                        <li><a href="#">Bộ sưu tập số</a></li>
                        <li><a href="#">Bộ sưu tập chuyên đề</a></li>
                      </ul>
                    </li>
                    <li className="last"><a href="#">DỊCH VỤ</a>
                      <ul>
                        <li><a href="#">Lưu hành</a></li>
                        <li><a href="#">Cung cấp thông tin</a></li>
                        <li><a href="#">Cung cấp thông tin</a></li>
                        <li><a href="#">In ấn sao chụp</a></li>
                      </ul>
                    </li>
                    <li className="last"><a href="#">THÔNG BÁO</a>
                      <ul>
                        <li> <a href="#">Thông báo</a> </li>
                        <li> <a href="#">Thông báo</a> </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;