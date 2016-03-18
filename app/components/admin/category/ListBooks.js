import React from 'react';
import AddBookAction from '../../../actions/AddBookAction'
import listBooksStore from '../../../stores/listBooksStore';
import listBooksActions from '../../../actions/listBooksActions';
import ActionBar from '../../../shared/ActionBar';
import Addbook from './Addbook';
import bookActions from '../../../actions/bookActions';
import {Link} from 'react-router';
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
  // handleClick() {
  //   console.log("clicked");
  // }
  onChange(state) {
    this.setState(state);   
  }
  
  render() {
    let bookList = this.state.books.map((book, index) => {
      return (
        
        <tr key ={index} >
        
          <td> {index+1} </td>
          <td><Link to={'/category/book/' + book._id}>{book.name}</Link></td>
          <td>{book.director}</td>
          <td><ActionBar editAction={AddBookAction} deleteAction={listBooksActions} item={book} /></td>

        </tr>
        
      );
    });
    return (    
      <div className='container-fluid'>
        <div className='col-md-12'>
         <Addbook  />
        </div>
        
        <div className='col-md-12'>
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
        <div className='clearfix'></div>
      </div>

    );
  }
}
export default ListBooks;