import React from 'react';
import {Link} from 'react-router';

export default class ActionBar extends React.Component {
  delete() {
    this.props.deleteAction.delete(this.props.item);
    this.props.deleteAction.get();
  }
  edit() {   
    this.props.editAction.getById(this.props.item._id); 
  }
  showProfile(){   

  }
  render() {
    return (
      <div className="action">
        <span className="action-buttons">
                          
          <button
            className="btn btn-warning"
            onClick={this.edit.bind(this)}>Edit         
            </button>  
          <a   
            onClick={this.delete.bind(this)}><i className="glyphicon glyphicon-trash"></i></a>
        </span>
      </div>
    );
  }
}
