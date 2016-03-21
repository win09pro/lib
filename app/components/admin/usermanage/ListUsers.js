import React from 'react';
import {Link} from 'react-router';
import AddUserAction from '../../../actions/admin/usermanage/AddUserActions';
import listUsersStore from '../../../stores/admin/usermanage/listUsersStore';
import listUsersActions from '../../../actions/admin/usermanage/listUsersActions';
import ActionBar from '../../../shared/ActionBar';
import AddUser from './AddUser';
class ListBooks extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = listUsersStore.getState();
    this.onChange = this.onChange.bind(this);
  }
 componentDidMount() {
    listUsersStore.listen(this.onChange);
    listUsersActions.get();
  }

  componentWillUnmount() {
    listUsersStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);   
  }
   getComponent(event) {      
    console.log('a');    
  }
  
  render() {   
    function Type_User(type)
  {
    if (type == 1)
      return "Admin1";
    else if (type ==2)
      return "Admin2";
    else return "User3";
  } 
    let userList = this.state.users.map((user, index) => {
      return (
        <tr key ={index} onClick = {this.getComponent.bind(this)}>
          <td><img src ={user.avatar} width = "35px" height ="35px" /></td>
          <td><Link to={'/admin/user/'+user._id}>{user.username}</Link></td>          
          <td>{user.password}</td>
          <td>{user.name.first}</td>
          <td>{user.name.last}</td>
          <td>{user.barcode}</td>
          <td>{Type_User(user.type)}</td>
          <td><ActionBar viewAction={AddUserAction} editAction={AddUserAction} deleteAction={listUsersActions} item={user} /></td>
        </tr>             
      );
    });
    return (    
      <div className='container'>
        <div className='row flipInX animated'>
          <div className='col-sm-12'>
            <div className='panel panel-default'>
              <div className='panel-heading'>List books</div>
              <div className='panel-body'>
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>UserName</th>                      
                      <th>Password</th>        
                      <th>Firstname</th>  
                      <th>LastName</th>
                      <th>Barcode</th> 
                      <th>Type</th> 
                      <th>Status</th> 
                    </tr>
                  </thead>
                  <tbody>                       
                    {userList}
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
export default ListBooks;