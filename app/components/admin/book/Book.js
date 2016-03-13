import React from 'react';
import bookStore from '../stores/bookStore';
import bookActions from '../actions/bookActions';
import ActionBar from '../shared/ActionBar';


class Book extends React.Component {
  constructor(props)
  {
  	super(props);
  	this.state = bookStore.getState();
  	this.onChange = this.onChange.bind(this);
  }
   componentDidMount() {
    bookStore.listen(this.onChange);
    bookActions.getBook(this.props.params.id);
  }

  componentWillUnmount() {
    bookStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);   
  }
  render() {  	
    return (    

      <div className='container'>
       <div className='row flipInX animated'>
       <div className='panel panel-default'>
              <div className='panel-heading'>View</div>
                <div className='panel-body'>
                <label className='control-label'>Tên</label>
                <p className='text-success'>{this.state.book.name}</p>
                <label className='control-label'>Tác giả</label>
                 <p className='text-success'> {this.state.book.director}</p>
               </div>
       </div>
      </div>    
      </div>

    );
  }
}

export default Book;