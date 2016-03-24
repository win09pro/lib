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
            className="btn btn-success"
            onClick={this.edit.bind(this)}><i className="fa fa-pencil"></i>        
            </button>  
           <button
              className="btn btn-danger"
            onClick={this.delete.bind(this)}><i className="fa fa-times"></i> </button>  
        </span>
      </div>
    );
  }
}
