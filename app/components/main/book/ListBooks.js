import React from 'react';
import AddBookAction from '../actions/AddBookAction'
import listBooksStore from '../stores/listBooksStore';
import listBooksActions from '../actions/listBooksActions';
import ActionBar from '../shared/ActionBar';
import Addbook from './Addbook';
import bookActions from '../actions/bookActions';
class ListBooks extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = listBooksStore.getState();
    this.onChange = this.onChange.bind(this);
  }
 componentDidMount() {
    listBooksStore.listen(this.onChange);
    listBooksActions.get2();
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
          <td><ActionBar viewAction={bookActions} editAction={AddBookAction} deleteAction={listBooksActions} item={book} /></td>
        </tr>
      );
    });
    return (    
      <div className='container'>
        <div>
         <Addbook  />
        </div>
        <div className='row flipInX animated'>
          <div className='col-sm-8'>
            <div className='panel panel-default'>
              <div className='panel-heading'>List books</div>
              <div className='panel-body'>
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Director</th>        
                      <th>Status</th>                                   
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