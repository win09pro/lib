import React from 'react';

import CategoryListStore from '../../../stores/admin/category/CategoryListStore';
import CategoryListAction from '../../../actions/admin/category/CategoryListAction';
import AddCategoryAction from '../../../actions/admin/category/AddCategoryAction';
import ActionBar from '../../../shared/ActionBar';

import {Link} from 'react-router';
import {Modal} from 'react-bootstrap';

class CategoryList extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = CategoryListStore.getState();
    this.onChange = this.onChange.bind(this);
  }
 componentDidMount() {
    CategoryListStore.listen(this.onChange);
    CategoryListAction.get();
  }

  componentWillUnmount() {
    CategoryListStore.unlisten(this.onChange);
  }
  // handleClick() {
  //   console.log("clicked");
  // }
  onChange(state) {
    this.setState(state);   
  }

  handleChange(e)
  {
    var id = e.target.attributes['data-ref'].value;
    if (e.target.checked )
    {
        CategoryListAction.updateArrayId(id);
    }
    else
    {
     CategoryListAction.removeArrayId (id);
    }
  //   console.log(this.state.arrayIDtoDel);

  }

  deleteGroup()
   {
      this.state.arrayIDtoDel.map((idcate,index) =>
      {
        CategoryListAction.delete(idcate);
      });
      CategoryListAction.closeModal();
   }
  
  render() {
    let style={'text-align':'center'};
    let categoryList = this.state.listcategory.map((category, index) => {

      if(category._documenttype == null){
        return (        
          <tr key ={index} >        
            <td> {index+1} </td>
            <td><Link to={'/admin/category/' + category._id} >{category.name}</Link></td>
            <td>{category.description}</td>
            <td>''</td>
            <td><ActionBar editAction={AddCategoryAction} deleteAction={CategoryListAction} item={category} /></td>
            <td>
              <input type ='checkbox' data-ref ={category._id} onClick = {this.handleChange.bind(this)} />
            </td>
          </tr>
          
        );
      } else{
        return (        
          <tr key ={index} >        
            <td> {index+1} </td>
            <td><Link to={'/admin/category/' + category._id} >{category.name}</Link></td>
            <td>{category.description}</td>
            <td>{category._documenttype.name}</td>
            <td><ActionBar editAction={AddCategoryAction} deleteAction={CategoryListAction} item={category} /></td>
            <td>
              <input type ='checkbox' data-ref ={category._id} onClick = {this.handleChange.bind(this)} />
            </td>
          </tr>
          
        );
      }
    });
    return (    
      

          <div className=''>
            <div className='panel panel-default'>
              <div className='panel-heading'>Danh sách thể loại</div>
              <div className='panel-body'>
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Tên</th>
                      <th>Mô tả</th>
                      <th>Thể loại</th>
                      <th>Hành động</th>
                      <th><a className ="deletegroup" onClick ={CategoryListAction.openModal} > <i className="fa fa-trash fa-danger fa-fa2x"></i></a></th>                                   
                    </tr>
                  </thead>
                  <tbody>                       
                    {categoryList}
                  </tbody>
                       
                </table>       
              </div>
            </div>
            <Modal style ={style} show={this.state.modalIsOpen} onHide ={CategoryListAction.closeModal}>
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
                    onClick={CategoryListAction.closeModal}><i className="fa fa-times"> Hủy bỏ</i> </button>
                  <button
                      className="btn btn-success"
                    onClick={this.deleteGroup.bind(this)}><i className="fa fa-check"> Xóa</i> </button>
              </Modal.Footer>
            </Modal>
          </div>


    );
  }
}
export default CategoryList;