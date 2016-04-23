import React from 'react';
import {Link} from 'react-router';
import AddPostCategoryActions from '../../../actions/admin/post/AddPostCategoryActions';
import listPostCatesStore from '../../../stores/admin/post/listPostCatesStore';
import listPostsCateActions from '../../../actions/admin/post/listPostsCateActions';
import ActionBar from '../../../shared/ActionBar';
import {Modal} from 'react-bootstrap';
class ListCategorys extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = listPostCatesStore.getState();
    this.onChange = this.onChange.bind(this);

  }
 componentDidMount() {
    listPostCatesStore.listen(this.onChange);
    listPostsCateActions.get();
  }

  componentWillUnmount() {
    listPostCatesStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }
  handleChange(e)
  {
    var id = e.target.attributes['data-ref'].value;
    if (e.target.checked )
    {
        listPostsCateActions.updateArrayId(id);
    }
    else
    {
        listPostsCateActions.removeArrayId (id);
    } 

  }
  deleteGroup()
   {
      this.state.arrayIDtoDel.map((idpostcate,index) =>
      {
        listPostsCateActions.delete(idpostcate);
      });
      listPostsCateActions.closeModal();
   }

  render() {
    let style={'text-align':'center'};
    let Type = function (num) {
       switch (num) {
        case 1:
           return 'Giới thiệu';
           break;
        case 2:
           return 'Dịch vụ';
           break;
        case 3:
           return 'Trợ giúp';
           break;
        case 4:
           return 'Tin tức';
           break;
       }
    }
    let postCatelist = this.state.postCates.map((postCate, index) => {
      let checked=false;
      return (
        <tr key ={index}>
          <td>{index}</td>
          <td><Link to={'/admin/post/'+postCate._id}>{postCate.nameCate.substr(0,20) +' ...'}</Link></td>
          <td>{Type(postCate.Type)}</td>          
          <td><ActionBar viewAction={AddPostCategoryActions} editAction={AddPostCategoryActions} deleteAction={listPostsCateActions} item={postCate} /></td>
          <td>
            <input type ='checkbox' data-ref ={postCate._id} onClick = {this.handleChange.bind(this)} />
          </td>
        </tr>
      );
    });

    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='panel panel-default'>
              <div className='panel-heading'>List books</div>
              <div className='panel-body'>
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Tên</th>
                      <th>Loại</th>                    
                      <th>Hành động</th>
                      <th><a className ="deletegroup" onClick ={listPostsCateActions.openModal} > <i className="fa fa-trash fa-danger fa-fa2x"></i></a></th>
                    </tr>
                  </thead>
                  <tbody>
                    {postCatelist}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Modal style ={style} show={this.state.modalIsOpen} onHide ={listPostsCateActions.closeModal}>
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
                onClick={listPostsCateActions.closeModal}><i className="fa fa-times"> Hủy bỏ</i> </button>
              <button
                  className="btn btn-success"
                onClick={this.deleteGroup.bind(this)}><i className="fa fa-check"> Xóa</i> </button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default ListCategorys;
