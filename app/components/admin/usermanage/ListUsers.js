import React from 'react';
import {Link} from 'react-router';
import AddUserAction from '../../../actions/admin/usermanage/AddUserActions';
import listUsersStore from '../../../stores/admin/usermanage/listUsersStore';
import listUsersActions from '../../../actions/admin/usermanage/listUsersActions';
import ActionBar from '../../../shared/ActionBar';
import AddUser from './AddUser';
import {Modal} from 'react-bootstrap';
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
   handleChange(e)
  {
    var id = e.target.attributes['data-ref'].value;
    if (e.target.checked )
    { 
        listUsersActions.updateArrayId(id);       
    } 
    else
    {
     listUsersActions.removeArrayId (id);
    }  
  //   console.log(this.state.arrayIDtoDel);
   
  }
   deleteGroup()
   {
      this.state.arrayIDtoDel.map((iduser,index) =>
      {
        listUsersActions.delete(iduser);
      });
      listUsersActions.closeModal();
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
          <td>            
            <input type ='checkbox' data-ref ={user._id} onClick = {this.handleChange.bind(this)} />             
          </td>
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
                      <th><a className ="deletegroup" onClick ={listUsersActions.openModal} > <i className="fa fa-trash fa-danger fa-fa2x"></i></a></th>
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
      <Modal show={this.state.modalIsOpen} onHide ={listUsersActions.closeModal}>
      <Modal.Header>
        <Modal.Title>
        <i className="fa fa-check-square-o fa-2x"></i>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div>
      <h3 style ={{'color':'green'}}>Đồng ý xóa ?</h3>
      </div>
      </Modal.Body>      
      <Modal.Footer>
          <button
              className="btn btn-warning"
            onClick={listUsersActions.closeModal}><i className="fa fa-times"> Hủy bỏ</i> </button>          
          <button
              className="btn btn-success"
            onClick={this.deleteGroup.bind(this)}><i className="fa fa-check"> Xóa</i> </button>          
      </Modal.Footer>
    </Modal>
      </div>
    );
  }
}
export default ListBooks;