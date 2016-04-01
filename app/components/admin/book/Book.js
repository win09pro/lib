import React from 'react';
import bookStore from '../../../stores/bookStore';
import bookActions from '../../../actions/bookActions';
import ActionBar from '../../../shared/ActionBar';


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
              <div className='panel-heading'>VIEW</div>
                <div className='panel-body'>
                <label className='control-label'>NAME BOOK</label>
                <p className='text-success'>{this.state.book.name}</p>
                <label className='control-label'>DIRECTOR</label>
                 <p className='text-success'> {this.state.book.director}</p>
                 <label className='control-label'>CODE</label>
                 <p className='text-success'> {this.state.book.code}</p>
                 <label className='control-label'>BARCODE</label>
                 <p className='text-success'> {this.state.book.borrowBarcode}</p>
                 <label className='control-label'>IMAGE URL</label>
                 <p className='text-success'> {this.state.book.imageUrl}</p>
                 <label className='control-label'>DOCTYPE</label>
                 <p className='text-success'> {this.state.book.doctype}</p>
               </div>
       </div>
      </div>    
      </div>

    );
  }
}

export default Book;