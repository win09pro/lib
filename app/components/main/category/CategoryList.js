import React from 'react';

import CategoryListStore from '../../../stores/admin/category/CategoryListStore';
import CategoryListAction from '../../../actions/admin/category/CategoryListAction';
import AddCategoryAction from '../../../actions/admin/category/AddCategoryAction';
import ActionBar from '../../../shared/ActionBar';

import {Link} from 'react-router';


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
  
  render() {
    let categoryList = this.state.listcategory.map((category, index) => {
      return (
        
        <tr key ={index} >
        
          <td> {index+1} </td>
          <td><Link to={'/category/' + category._id}>{category.name}</Link></td>
          <td>{category.description}</td>
          <td><ActionBar editAction={AddCategoryAction} deleteAction={CategoryListAction} item={category} /></td>

        </tr>
        
      );
    });
    return (    
      

          <div className=''>
            <div className='panel panel-default'>
              <div className='panel-heading'>List Category</div>
              <div className='panel-body'>
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Description</th>        
                      <th>Action</th>                                   
                    </tr>
                  </thead>
                  <tbody>                       
                    {categoryList}
                  </tbody>
                       
                </table>       
              </div>
            </div>
          </div>


    );
  }
}
export default CategoryList;