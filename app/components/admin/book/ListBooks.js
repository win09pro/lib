import React from 'react';
import AddBookAction from '../../../actions/admin/book/AddBookAction'
import ListBooksStore from '../../../stores/admin/book/ListBooksStore';
import ListBooksActions from '../../../actions/admin/book/ListBooksActions';
import BookActionBar from '../../../shared/BookActionBar';

import {Link} from 'react-router';
import ActionBar from '../../../shared/ActionBar';

import bookActions from '../../../actions/admin/book/bookActions';
// import Upload  from '../../../uploadimage/Upload';
class ListBooks extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = ListBooksStore.getState();
    this.onChange = this.onChange.bind(this);
  }
 componentDidMount() {
    ListBooksStore.listen(this.onChange);
    ListBooksActions.get();
  }

  componentWillUnmount() {
    ListBooksStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);   
  }
  
  render() {
    let bookList = this.state.books.map((book, index) => {
      return (
        <tr key ={index}>
          <td>{index+1}</td>
          <td><Link to={'admin/book/' + book._id} >{book.name} </Link></td>
          <td>{book.author}</td>
          <td>{book.publisher}</td>
          <td>{book.code}</td>
          <td>{book.status}</td>
          <td>{book.description}</td>
          <td>{book.imageUrl}</td>
          <td>{book._cateId.name}</td>
          <td><ActionBar editAction={AddBookAction} deleteAction={ListBooksActions} item={book} /></td>
        </tr>
      );
    });
    return (    
      
          <div className=''>
            <div className='panel panel-default'>
              <div className='panel-heading'>List books</div>
              <div className='panel-body'>
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Director</th>        
                      <th>Code</th> 
                      <th>Barcode</th>
                      <th>ImageUrl</th>        
                      <th>Category</th> 
                      <th>Functions</th>                                  
                    </tr>
                  </thead>
                  <tbody>                       
                    {bookList}
                  </tbody>
                       
                </table>       
              </div>
            </div>
          </div>
        
    );
  }
}
export default ListBooks;