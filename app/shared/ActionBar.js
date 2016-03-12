import React from 'react';
import {Link} from 'react-router';

export default class ActionBar extends React.Component {
  delete() {
    this.props.deleteAction.delete(this.props.itembook);
    this.props.deleteAction.getBook();
  }
  edit() {   
    this.props.editAction.getBook(this.props.itembook._id); 
  }
  showProfile(){   

  }
  render() {
    return (
      <div className="action">
        <span className="action-buttons">
          <button
            className="btn btn-success">
            <Link to={'/book/'+this.props.itembook._id}>View</Link>
          </button>                  
          <button
            className="btn btn-warning"
            onClick={this.edit.bind(this)}>Edit         
            </button>  
          <button
            className="btn btn-danger"   
            onClick={this.delete.bind(this)}>Delete</button>
        </span>
      </div>
    );
  }
}
