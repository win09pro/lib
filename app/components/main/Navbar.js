import React from 'react';
import Router from 'react-router';
import localStorage from 'localStorage';
import { Route, RouteHandler, DefaultRoute, State, Link, Redirect } from 'react-router';
import {Modal} from 'react-bootstrap';
import MainnavbarActions from '../../actions/main/MainnavbarActions';
import Mainnavbarstore from '../../stores/main/Mainnavbarstore';
import Login from './Login/Login';
import LoginActions from '../../actions/main/Login/LoginActions';
import RegisterActions from '../../actions/main/Register/RegisterActions';
import Register from './Register/Register';

class Navbar extends React.Component {
  constructor(props) {
    super(props);  
    this.state =Mainnavbarstore.getState();  
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {  
    Mainnavbarstore.listen(this.onChange);
    MainnavbarActions.getIntroduceCategory();
    MainnavbarActions.getServiceCategory();
    MainnavbarActions.getHelpCategory();
  }

  onChange(state) {
   this.setState(state); 
  } 
   render() {     

    let introducetab = this.state.IntroduceCate.map((IntroduceCate,index) =>
      {
        return(
           <li> <a href="#">{IntroduceCate.nameCate}</a> </li>
        )});
    let servicetab = this.state.ServiceCate.map((ServiceCate,index) =>
    {
      return (
         <li><a href="#">{ServiceCate.nameCate}</a></li>
        )
    });
    let helptab = this.state.HelpCate.map((helpcategory,index)=>
    {
      return(
        <li> <a href="#">{helpcategory.nameCate}</a> </li>
        )
    })
    let userName = localStorage.getItem('username');
    let Navbarusers =<div></div>;
    if (!userName)
      {
      Navbarusers  =(
            <div className="user">
                      <ul>
                        <li><a href="#" type="button" name="button" onClick ={LoginActions.openLoginModal} > <i className="fa fa-user" /> Đăng nhập</a></li>
                        <li><a href="#" type="button" name="button" onClick ={RegisterActions.openRegisterModal}> <i className="fa fa-pencil-square-o" /> Đăng ký</a></li>
                      </ul>
            </div>
            )
      }
      else
      {
      Navbarusers= (
            <div className="user-login">
                      <ul>
                        <li><a href="#" type="button" name="button" onClick ={LoginActions.logout}> <i className="fa fa-sign-out" /> Thoát</a></li>
                        <li><a href="#" type="button" name="button"> {userName} </a></li>   
                        <li><img className='img-responsive' src={localStorage.getItem('avatar')}></img></li>                    
                      </ul>
            </div>
            )
    }
   

    return (
     <header className="library-header">
        <div className="container">
          <div className="header-container">
            <div className="row">
              <div className="col-md-3 col-sm-2">
                <div className="logo">
                  <a href="/"><img src="http://localhost:3000/img/logo.png" alt="logo" /></a>
                </div>
              </div>
              <div className="col-md-9">
                <div className="menu">
                  <div className="top-menu">
                    <div className="site_info">
                      Chào mừng đến với thư viện đại học Bách Khoa
                    </div>  
                   {Navbarusers}
                  </div>
                </div>
                <div className="main-menu">
                  <ul>
                    <li><a href="/">TRANG CHỦ</a></li>
                    <li> <a href="#">GIỚI THIỆU</a>
                      <ul>
                       {introducetab}
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
                      {servicetab}
                      </ul>
                    </li>
                    <li className="last"><a href="#">TRỢ GIÚP</a>
                      <ul>
                        {helptab}                        
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Login />   
        <Register />
      </header>
    );
  }
}

export default Navbar;