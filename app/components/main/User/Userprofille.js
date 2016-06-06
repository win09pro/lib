import React from 'react';
import {Link} from 'react-router';
import {animateScroll}  from  'react-scroll'; 
import localStorage from 'localStorage';
import UserprofilleActions from '../../../actions/main/User/UserprofilleActions';
import UserprofilleStore from '../../../stores/main/User/UserprofilleStore';
import moment from 'moment';

class Userprofille extends React.Component {
   constructor(props)
  {
    super(props);
    this.state = UserprofilleStore.getState();
    this.onChange = this.onChange.bind(this);
  }
   componentDidMount() {  
    UserprofilleStore.listen(this.onChange);     
      if (!localStorage.getItem('userid'))
    {
      this.context.router.push('/');
    }  
     else{
      UserprofilleActions.getUserById(localStorage.getItem('userid'));
      UserprofilleActions.getTransbyUser(localStorage.getItem('username'));
     }

  }
  componentWillUnmount() {   
     UserprofilleStore.unlisten(this.onChange);     
  }
  onChange(state) {
    this.setState(state);
  } 
  render() {
     function Type_User(type)
      {
        if (type == 1)
          return "Admin1";
        else if (type ==2)
          return "Admin2";
        else return "Thường";
      }
      function Status(st){
        if(st == 1)
          return 'Trống';
        else if(st == 2)
          return 'Đang chờ';
        else if(st == 3)
          return 'Đang mượn';
      }
    return (
     <div className="user-profile-content">
        <div className="container">
          <div className="user-profile-header">
            <ol className="breadcrumb page-breadcrumb pull-left">
              <li><i className="fa fa-home" /><a href="/"> Trang chủ</a></li>
              <li className="active">Trang cá nhân</li>
            </ol>
          </div>
          <div className="user-profile">
            <div className="user-profile-title">
              <h2>Thông tin cá nhân</h2>
            </div>
            <div className="clear-both">
            </div>
            <div className="row">
              <div className="col-sx-12 col-md-5 col-sm-12">
                <div className="form-avatar">
                  <div className="fileupload-image">
                    <img src={localStorage.getItem('avatar')} alt="avatar" />
                  </div>
                </div>
              </div>
              <div className="col-sx-12 col-md-7 col-sm-12">
                <div className="user-profile-info">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td className="none-top">Tên đăng nhập</td>
                        <td className="none-top">{this.state.user.username}</td>
                      </tr>
                      <tr>
                        <td>Họ tên</td>
                        <td>{this.state.userfullname.first + " "+ this.state.userfullname.last}</td>
                      </tr>                      
                      <tr>
                        <td>Mã số</td>
                        <td>51202574</td>
                      </tr>
                      <tr>
                        <td>Loại tài khoản</td>
                        <td>{Type_User(this.state.user.type)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="clear-both">
                </div>
                <div className="rows">
                <div className="col-xs-12 col-md-6">
                  <Link to='/user/profile/edit' type="button" className="user-editprofile" name="button"><b>Sửa thông tin</b></Link>
                </div>
                <div className="col-xs-12 col-md-6">
                  <Link to='/user/profile/editpassword' className="user-changepassword" name="button"><b>Đổi mật khẩu</b></Link>
                </div>
                </div>
              </div>
            </div>
            <div className="clear-both">
            </div>
            <div className="user-transaction-history">
              <div className="h2-title">
                <h2>Lịch sử mượn sách thư viện</h2>
              </div>
              <div className="user-profile-info">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="none-top">#</th>                      
                      <th className="none-top">Mã sách</th>
                      <th className="none-top">Tên sách</th>
                      <th className="none-top">Ngày mượn</th>
                      <th className="none-top">Ngày trả</th>
                      <th className="none-top">Tình trạng</th>
                    </tr></thead>
                  <tbody>
                    {this.state.trans.map((tran,index) =>
                      {    
                        return(
                          <tr key={index}>
                            <td>{index}</td>
                            <td>{tran.barcode}</td>
                            <td>{tran.bookname}</td>
                            <td>{moment(tran.dateBorrow).format('DD/MM/YYYY')}</td>
                            <td>{moment(tran.dateReturn).format('DD/MM/YYYY')}</td>                            
                            <td>{Status(tran.status)}</td>
                          </tr>
                          );
                      }) 
                      }          
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Userprofille.contextTypes = {
  router: React.PropTypes.object.isRequired
};
export default Userprofille;