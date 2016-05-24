import React from 'react';
import AddBookAction from '../../../actions/admin/book/AddBookAction'
import ListBooksStore from '../../../stores/admin/book/ListBooksStore';
import ListBooksActions from '../../../actions/admin/book/ListBooksActions';

import {Link} from 'react-router';
import ActionBar from '../../../shared/ActionBar';
import {Modal} from 'react-bootstrap';

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

  handleChange(e)
  {
    var id = e.target.attributes['data-ref'].value;
    if (e.target.checked )
    { 
        ListBooksActions.updateArrayId(id);       
    } 
    else
    {
     ListBooksActions.removeArrayId (id);
    }  
  }

  deleteGroup()
   {
      this.state.arrayIDtoDel.map((bookid,index) =>
      {
        ListBooksActions.delete(bookid);
      });
      ListBooksActions.closeModal();
   }
  
  render() {
    let bookList = this.state.books.map((book, index) => {
      console.log(book);
      return (
        <tr key ={index}>
          <td>{index+1}</td>
          <td><Link to={'admin/book/' + book._id} >{book.name} </Link></td>
          <td>{book.author}</td>
          <td>{book.publisher}</td>
          <td>{book.code}</td>
          <td>{book.status}</td>
          <td>{book.description}</td>
          <td>{book._cateId.name}</td>
          <td><img src ={book.imageUrl} width = "35px" height ="35px" /></td>
          <td><ActionBar editAction={AddBookAction} deleteAction={ListBooksActions} item={book} /></td>
          <td>            
            <input type ='checkbox' data-ref ={book._id} onClick = {this.handleChange.bind(this)} />             
          </td>
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
                      <th>Tên</th>
                      <th>Tác giả</th>  
                      <th>Nhà xuất bản</th>      
                      <th>Mã</th> 
                      <th>Tình trạng</th>
                      <th>Mô tả</th>
                      <th>Danh mục</th>
                      <th>Ảnh</th>
                      <th>Hành động</th> 
                      <th><a className ="deletegroup" onClick ={ListBooksActions.openModal} > <i className="fa fa-trash fa-danger fa-fa2x"></i></a></th>                                  
                    </tr>
                  </thead>
                  <tbody>                       
                    {bookList}
                  </tbody>
                       
                </table>       
              </div>
            </div>

            <Modal show={this.state.modalIsOpen} onHide ={ListBooksActions.closeModal}>
              <Modal.Header>
                <Modal.Title>
                <i className="fa fa-check-square-o fa-2x"></i>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <div>
              <h3 style ={{'color':'green'}}>Đồng ý xóa ?</h3>
              </div>
              </Modal.Body>      
              <Modal.Footer>
                  <button
                      className="btn btn-warning"
                    onClick={ListBooksActions.closeModal}><i className="fa fa-times"> Hủy bỏ</i> </button>          
                  <button
                      className="btn btn-success"
                    onClick={this.deleteGroup.bind(this)}><i className="fa fa-check"> Xóa</i> </button>          
              </Modal.Footer>
            </Modal>
          </div>
        
    );
  }
}
export default ListBooks;