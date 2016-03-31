import React from 'react';
import AddPost from './AddPost';
import ListPosts from './ListPosts';
class Post extends React.Component {
  render() {
    return (
    	<div className= 'container'>
      <div claasName='row'>
          <div className='col-sm-12'>
	    	    <AddPost />
          </div>
          <div className='col-sm-12'>
	    	    <ListPosts/>
          </div>
    	</div>
      </div>
	);
  }
}

export default Post;
