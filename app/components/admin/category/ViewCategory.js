import React from 'react';

import CategoryAction from '../../../actions/admin/category/CategoryAction';
import CategoryStore from '../../../stores/admin/category/CategoryStore';

class ViewCategory extends React.Component {
  constructor(props)
  {
  	super(props);
  	this.state = CategoryStore.getState();
  	this.onChange = this.onChange.bind(this);
  }
   componentDidMount() {
    CategoryStore.listen(this.onChange);
    CategoryAction.getCate(this.props.params.id);
  }

  componentWillUnmount() {
    CategoryStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);   
  }
  render() {  	
    return (    

      <div className='container'>
       <div className='row flipInX animated'>
       <div className='panel panel-default'>
              <div className='panel-heading'>View Category</div>
                <div className='panel-body'>
                <label className='control-label'>Name: </label>
                <p className='text-success'>{this.state.category.name}</p>
                <label className='control-label'>Description: </label>
                 <p className='text-success'> {this.state.category.description}</p>

                 <label className='control-label'>Document Type: </label>
                 <p className='text-success'> {this.state.category._documenttype}</p>
                 

               </div>
       </div>
      </div>    
      </div>

    );
  }
}

export default ViewCategory;