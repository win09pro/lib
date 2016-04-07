import React from 'react';

import CategoryAction from '../../../actions/admin/category/CategoryAction';
import CategoryStore from '../../../stores/admin/category/CategoryStore';

import DocumentTypeStore from '../../../stores/admin/documenttype/DocumentTypeStore';
import DocumentTypeAction from '../../../actions/admin/documenttype/DocumentTypeAction';

class ViewCategory extends React.Component {
  constructor(props)
  {
  	super(props);
  	this.state = CategoryStore.getState();
    // this.state = { state1: CategoryStore.getState(), state2: DocumentTypeStore.getState() };
  	this.onChange = this.onChange.bind(this);
  }
   componentDidMount() {
    CategoryStore.listen(this.onChange);
    CategoryAction.getCate(this.props.params.id);
    // DocumentTypeStore.listen(this.onChange);
    // DocumentTypeAction.getDoc(this.state.state1.category._documenttype);
    // console.log(this.state.state1.category._documenttype);
  }

  componentWillUnmount() {
    CategoryStore.unlisten(this.onChange);
    // DocumentTypeStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);   
  }
  render() {  	
    return (    

      <div className='container'>
       <div className='row flipInX animated'>
       <div className='panel panel-default'>
              <div className='panel-heading'>Chi tiết danh mục</div>
                <div className='panel-body'>
                <label className='control-label'>Tên: </label>
                <span className='text-success'> {this.state.category.name}</span>
                <br/>
                <label className='control-label'>Mô tả: </label>
                 <span className='text-success'> {this.state.category.description}</span>
                 <br/>
                 <label className='control-label'>Thể loại: </label>
                 <span className='text-success'> {this.state.doctype.name}</span>
               </div>
       </div>
      </div>    
      </div>

    );
  }
}

export default ViewCategory;