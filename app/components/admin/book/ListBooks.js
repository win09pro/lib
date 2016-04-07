import React from 'react';
import AddBookAction from '../../../actions/AddBookAction'
import listBooksStore from '../../../stores/listBooksStore';
import listBooksActions from '../../../actions/listBooksActions';
import BookActionBar from '../../../shared/BookActionBar';
import Addbook from './Addbook';
import bookActions from '../../../actions/bookActions';
import Upload  from '../../uploadimage/Upload';
class ListBooks extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = listBooksStore.getState();
    this.onChange = this.onChange.bind(this);
  }
 componentDidMount() {
    listBooksStore.listen(this.onChange);
    listBooksActions.get();
  }

  componentWillUnmount() {
    listBooksStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);   
  }
  
  render() {
    let bookList = this.state.books.map((book, index) => {
      return (
        <tr key ={index}>
          <td>{index+1}</td>
          <td>{book.name}</td>
          <td>{book.director}</td>
          <td>{book.code}</td>
          <td>{book.borrowBarcode}</td>
          <td>{book.imageUrl}</td>
          <td>{book.cate}</td>
          <td><BookActionBar viewAction={bookActions} editAction={AddBookAction} deleteAction={listBooksActions} item={book} /></td>
        </tr>
      );
    });
    return (    
      <div className='container-fluid'>
        <div className ="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
           <Addbook  />
          </div>
          <div className ="col-lg-4 col-md-4 col-sm-4">
            <Upload />
          </div>
        </div>
        
        <div className='row  animated'>
          <div className='col-lg-12 col-md-12 col-sm-12'>
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
        </div>
      </div>
    );
  }
}
export default ListBooks;