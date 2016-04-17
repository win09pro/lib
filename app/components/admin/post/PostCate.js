import React from 'react';
import AddPostcategory from './AddPostcategory';
import ListCategorys from './ListCategorys';
class PostCate extends React.Component {
  render() {
    return (
    	<div className= 'container'>
      <div claasName='row'>
          <div className='col-sm-12'>
	    	    <AddPostcategory />
          </div>
          <div className='col-sm-12'>
	    	    <ListCategorys/>
          </div>
    	</div>
      </div>
	);
  }
}

export default PostCate;
