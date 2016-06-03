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
    //MainnavbarActions.getIntroduceCategory();
    MainnavbarActions.getServiceCategory();
    //MainnavbarActions.getHelpCategory();
    
  }

  onChange(state) {
   this.setState(state); 
  } 
   render() {         
    let introducetab = this.state.IntroduceCate.map((IntroduceCate,index) =>
      {
        return(
           <li key={index}> <a href={IntroduceCate.link}>{IntroduceCate.title}</a> </li>
        )});
    let servicetab = this.state.listPostService.map((PostService,index) =>
    {
      return (        
         <li key={index}><a href={PostService.link}>{PostService.title}</a></li>        
        )
    });
    let helptab = this.state.HelpCate.map((helpcategory,index)=>
    {
      return(
        <li key={index}> <a href={helpcategory.link}>{helpcategory.title}</a> </li>
        )
    })
    let userName = localStorage.getItem('username');
    let Navbarusers =<div></div>;
    if (!userName)
      {
      Navbarusers  =(
            <div className="user">
                      <ul>
                        <li className="icon-nav last">
                          <a href="javascript:void(0);" onclick="myFunction()"><i className="fa fa-bars" aria-hidden="true"></i></a>
                          <ul>
                            <li>
                              <a href="#">Giới thiệu</a>
                              <a href="#">Tra cứu</a>
                              <a href="#">Dịch vụ</a>
                              <a href="#">Thông báo</a>
                              <div className="division"></div>
                              <a href="#" type="button" name="button" onClick ={LoginActions.openLoginModal} > <i className="fa fa-user" /> Đăng nhập</a>
                              <a href="#" type="button" name="button" onClick ={RegisterActions.openRegisterModal}> <i className="fa fa-pencil-square-o" /> Đăng ký</a>
                            </li>
                          </ul>
                        </li>
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
                        <li className="icon-nav last">
                          <a href="javascript:void(0);" onclick="myFunction()"><i className="fa fa-bars" aria-hidden="true"></i></a>
                          <ul>
                            <li>
                              <a href="#">Giới thiệu</a>
                              <a href="#">Tra cứu</a>
                              <a href="#">Dịch vụ</a>
                              <a href="#">Thông báo</a>
                              <div className="division"></div>
                              <a href="/user/profile">
                                  <img src={localStorage.getItem('avatar')}></img>
                                  {userName}
                              </a>  
                              <a href="#" type="button" name="button" onClick ={LoginActions.logout}> <i className="fa fa-sign-out" /> Thoát</a>                              
                            </li>
                          </ul>
                        </li>
                        <li><a href="#" type="button" name="button" onClick ={LoginActions.logout}> <i className="fa fa-sign-out" /> Thoát</a></li>
                        <li><a href="/user/profile" type="button" name="button"> {userName} </a></li>   
                        <li><img className='img-responsive' src={localStorage.getItem('avatar')}></img></li>                    
                      </ul>
            </div>
            )
    }
   

    return (
     <header id="library-header" className="library-header">
        <div id="library-header-container" className="container">
          <div className="header-container">
            <div className="row">
              <div id="logo-header" className="col-md-3 col-sm-12">
                <div className="logo">
                  <a href="/"><img src="http://localhost:3000/img/logo.png" alt="logo" /></a>
                  <p>BK LIBRARY</p>
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
                  <ul className="list-main-menu">
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
                    {Navbarusers}
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