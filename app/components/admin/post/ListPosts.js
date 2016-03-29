import React from 'react';
import {Link} from 'react-router';
import AddPostActions from '../../../actions/admin/post/AddPostActions';
import listPostsStore from '../../../stores/admin/post/listPostsStore';
import listPostsActions from '../../../actions/admin/post/listPostsActions';
import ActionBar from '../../../shared/ActionBar';
import AddPost from './AddPost';
import moment from 'moment';
import {Modal} from 'react-bootstrap';
class ListBooks extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = listPostsStore.getState();
    this.onChange = this.onChange.bind(this);

  }
 componentDidMount() {
    listPostsStore.listen(this.onChange);
    listPostsActions.get();  
    console.log('aa');
  }

  componentWillUnmount() {
    listPostsStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);   
  }
  handleChange(e)
  {
    var id = e.target.attributes['data-ref'].value;
    if (e.target.checked )
    { 
        listPostsActions.updateArrayId(id);       
    } 
    else
    {
     listPostsActions.removeArrayId (id);
    }  
  //   console.log(this.state.arrayIDtoDel);
   
  }
  deleteGroup()
   {
      this.state.arrayIDtoDel.map((idpost,index) =>
      {
        listPostsActions.delete(idpost);
      });
      listPostsActions.closeModal();
   }
   
  render() {    
    let style={'text-align':'center'};
    let postlist = this.state.posts.map((post, index) => {      
      let checked=false;
      return (
        <tr key ={index}>   
          <td>{index}</td>   
          <td><Link to={'/admin/user/'+post._id}>{post.title}</Link></td>          
          <td>{post.introduce}</td>
          <td>{moment(post.dateStart).format('DD-MM-YYYY H:MM A')}</td>
          <td>{post.content.substr(0,100)+'...'}</td>        
          <td><ActionBar viewAction={AddPostActions} editAction={AddPostActions} deleteAction={listPostsActions} item={post} /></td>
          <td>            
            <input type ='checkbox' data-ref ={post._id} onClick = {this.handleChange.bind(this)} />             
          </td>
        </tr>             
      );
    });
  
    return (    
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>  
            <div className='panel panel-default'>
              <div className='panel-heading'>List books</div>
              <div className='panel-body'>
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Chủ đề</th>                      
                      <th>Giới thiệu</th>        
                      <th>Ngày bắt đầu</th>  
                      <th>Nội dung</th>
                      <th>Hành động</th>  
                      <th><a className ="deletegroup" onClick ={listPostsActions.openModal} > <i className="fa fa-trash fa-danger fa-fa2x"></i></a></th>                   
                    </tr>
                  </thead>
                  <tbody>                       
                    {postlist}
                  </tbody>                    
                </table>       
              </div>
            </div>
          </div>
        </div>
      <Modal style ={style} show={this.state.modalIsOpen} onHide ={listPostsActions.closeModal}>
      <Modal.Header>
        <Modal.Title style={style}>
        <i className="fa fa-check-square-o fa-2x"></i>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div style={style}>
      <h3 style ={{'color':'green'}}>Đồng ý xóa ?</h3>
      </div>
      </Modal.Body>      
      <Modal.Footer>
          <button
              className="btn btn-warning"
            onClick={listPostsActions.closeModal}><i className="fa fa-times"> Hủy bỏ</i> </button>          
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