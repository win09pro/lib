import React from 'react';
import AddPost from './AddPost';
import ListPosts from './ListPosts';
class Post extends React.Component {
  render() {
    return (
    	<div>    		
	    	<AddPost />
	    	<ListPosts/>
    	</div>
	);
  }
}

export default Post;