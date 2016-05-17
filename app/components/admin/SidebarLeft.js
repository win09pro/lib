import React from 'react';
import {Link} from 'react-router';
import localStorage from 'localStorage';
import AddUserActions from '../../actions/admin/usermanage/AddUserActions';
import AddPostActions from '../../actions/admin/post/AddPostActions';
//import SidebarLeftStore from '../../stores/SidebarLeftStore';
// import SidebarLeftActions from '../../actions/SidebarLeftActions';

class SidebarLeft extends React.Component {
  constructor(props) {
    super(props);
    //this.state = SidebarLeftStore.getState();
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    //SidebarLeftStore.listen(this.onChange);
  }
  componentWillUnmount() {
    //SidebarLeftStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }
  // handleSubmit(event) {
  //   event.preventDefault();

  //   let searchQuery = this.state.searchQuery.trim();

  //   if (searchQuery) {
  //     SidebarLeftActions.findCharacter({
  //       searchQuery: searchQuery,
  //       searchForm: this.refs.searchForm,
  //       history: this.props.history
  //     });
  //   }
  // }
  render(){
    let adminname = localStorage.getItem('adminusername');
    if (adminname)
    {
      adminname = adminname.toString().toUpperCase();
    }
    let avatar = localStorage.getItem('adminavatar');    
    return(
            <aside className="main-sidebar">
        <section className="sidebar">
          <div className="user-panel">
            <div className="pull-left image">
              <img src={avatar} className="img-circle" alt="User Image" />
            </div>
            <div className="pull-left info">
              <p>{adminname}</p>
              <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
            </div>
          </div>
          <form action="#" method="get" className="sidebar-form">
            <div className="input-group">
              <input type="text" name="q" className="form-control" placeholder="Search..." />
              <span className="input-group-btn">
                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i></button>
              </span>
            </div>
          </form>

        <ul className="sidebar-menu">
            <li className="header">Quản lý</li>
            <li className="active"><a href="#"><i className="fa fa-link"></i> <span>Link</span></a></li>
            <li onClick =  {AddPostActions.resetAll}><Link to="/admin/post"><i className="fa fa-file-text"></i>
                    <span>Tin tức</span>
                    <small className="label pull-right bg-green">4</small>
                </Link>
            </li>
            <li onClick =  {AddUserActions.resetAll}><Link to="/admin/user/view"><i className="fa fa-user"  ></i><span>Người dùng</span></Link></li>
            <li><Link to='/admin/document-type'><i className="fa fa-book"></i><span> Thể loại </span></Link></li>
            <li><Link to='/admin/category'><i className="fa fa-bars"></i><span> Danh mục </span> </Link></li>
            <li className="treeview">
              <a href="#"><i className="fa fa-link"></i> <span>Books and Transitions</span> <i className="fa fa-angle-left pull-right"></i></a>
              <ul className="treeview-menu">
                <li><Link to="/admin/book"><i className="fa fa-book"></i><span>Books</span></Link></li>
                <li><Link to="/admin/listTrans"><i className="fa fa-link"></i><span>Transitions</span></Link></li>
              </ul>
            </li>
              <li><a href="#"><i className="fa fa-link"></i> <span>Another Link</span></a></li>
              <li><a href="#"><i className="fa fa-link"></i> <span>Another Link</span></a></li>
          </ul>
        </section>
      </aside>
          );
}
}
export default SidebarLeft;
