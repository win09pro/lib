import React from 'react';
import {Link} from 'react-router';
import NavbarStore from '../../stores/NavbarStore';
import NavbarActions from '../../actions/NavbarActions';

class Navbar extends React.Component {
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

    $(document).ajaxStart(() => {
      NavbarActions.updateAjaxAnimation('fadeIn');
    });

    $(document).ajaxComplete(() => {
      setTimeout(() => {
        NavbarActions.updateAjaxAnimation('fadeOut');
      }, 750);
    });
  }
   componentWillUnmount() {
    NavbarStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }
   handleSubmit(event) {
    event.preventDefault();

    let searchQuery = this.state.searchQuery.trim();

    if (searchQuery) {
      NavbarActions.findCharacter({
        searchQuery: searchQuery,
        searchForm: this.refs.searchForm,
        history: this.props.history
      });
    }
  }

  render() {
    return (
       <header className="main-header">      
        <a href="http://localhost:3000/admin" className="logo">       
          <span className="logo-mini"><b>BK</b></span>         
          <span className="logo-lg"><b>Admin</b> BKL</span>

        </a>      
        <nav className="navbar navbar-static-top" role="navigation">        
          <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
            <span className="sr-only">Toggle navigation</span>
          </a>         
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">   
               <li className="dropdown messages-menu">             
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-users"></i>
                   <span className="label label-info">{this.state.onlineUsers}</span>
                </a>               
              </li>         
              <li className="dropdown messages-menu">             
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-envelope-o"></i>
                  <span className="label label-success">4</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="header">You have 4 messages</li>
                  <li>                   
                    <ul className="menu">
                      <li>
                        <a href="#">
                          <div className="pull-left">                          
                            <img src="/uploads/avatar.jpg" className="img-circle" alt="User Image" />
                          </div>                        
                          <h4>
                            Support Team
                            <small><i className="fa fa-clock-o"></i> 5 mins</small>
                          </h4>                         
                          <p>Why not buy a new awesome theme?</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="footer"><a href="#">See All Messages</a></li>
                </ul>
              </li>          
              <li className="dropdown notifications-menu">                
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-bell-o"></i>
                  <span className="label label-warning">10</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="header">You have 10 notifications</li>
                  <li>                   
                    <ul className="menu">
                      <li>
                        <a href="#">
                          <i className="fa fa-users text-aqua"></i> 5 new members joined today
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="footer"><a href="#">View all</a></li>
                </ul>
              </li>            
              <li className="dropdown tasks-menu">              
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-flag-o"></i>
                  <span className="label label-danger">9</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="header">You have 9 tasks</li>
                  <li>                   
                    <ul className="menu">
                      <li>
                        <a href="#">                       
                          <h3>
                            Design some buttons
                            <small className="pull-right">80%</small>
                          </h3>                        
                          <div className="progress xs">                            
                            <div className="progress-bar progress-bar-aqua" style={{'width': '80%'}} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                              <span className="sr-only">80% Complete</span>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="footer">
                    <a href="#">View all tasks</a>
                  </li>
                </ul>
              </li>              
              <li className="dropdown user user-menu">                
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">               
                  <img src="/uploads/avatar.jpg" className="user-image" alt="User Image" />                
                  <span className="hidden-xs">Admin</span>
                </a>
                <ul className="dropdown-menu">                 
                  <li className="user-header">
                    <img src="/uploads/avatar.jpg" className="img-circle" alt="User Image" />
                    <p>
                      Admin-Library webpage
                      <small>Member since Nov. 2012</small>
                    </p>
                  </li>                 
                  <li className="user-body">
                    <div className="col-xs-4 text-center">
                      <a href="#">Followers</a>
                    </div>
                    <div className="col-xs-4 text-center">
                      <a href="#">Sales</a>
                    </div>
                    <div className="col-xs-4 text-center">
                      <a href="#">Friends</a>
                    </div>
                  </li>
                    <li className="user-footer">
                    <div className="pull-left">
                      <a href="#" className="btn btn-default btn-flat">Profile</a>
                    </div>
                    <div className="pull-right">
                      <a href="#" className="btn btn-default btn-flat">Sign out</a>
                    </div>
                  </li>
                </ul>
              </li>
             
              <li>
                <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;