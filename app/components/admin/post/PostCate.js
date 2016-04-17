import React from 'react';
import AddPostcategory from './AddPostcategory';
import ListCategorys from './ListCategorys';
class Post extends React.Component {
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

export default Post;
