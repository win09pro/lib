import React from 'react';
import {Link} from 'react-router';
import {Modal} from 'react-bootstrap';

export default class ActionBar extends React.Component {
constructor(props)
  {
    super(props);
    this.state = {modalIsOpen : false };
    this.onChange = this.onChange.bind(this);
  }
  close() { 
    this.setState( {modalIsOpen: false});
  }
  open() {
    this.setState({modalIsOpen: true});
  }
  onChange(state) {
    this.setState(state);
  }
  delete() {
    this.props.deleteAction.delete(this.props.item._id);
    this.props.deleteAction.get();
    this.close();

  }
  edit() {     
    this.props.editAction.getById(this.props.item._id); 
  }
  showProfile(){   

  }
  render() {
     let style={'text-align':'center'};
    return (
      <div className="action">
        <span className="action-buttons">
          <button className ="btn btn-warning">
            <Link to={'/admin/book/'+this.props.item._id}>
            <i className ="fa fa-pencil"></i>
            </Link>
          </button>                      
          <button
            className="btn btn-success"
            onClick={this.edit.bind(this)}><i className="fa fa-pencil"></i>        
            </button>  
           <button
              className="btn btn-danger"
            onClick={this.open.bind(this)}><i className="fa fa-times"></i> </button>   
        </span>
      </div>
    );
  }
}
