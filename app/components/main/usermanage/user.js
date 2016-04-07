import React from 'react';
import AddUser from './AddUser';
import ListUsers from './ListUsers';
class user extends React.Component {
  render() {
    return (
    	<div>    		
	    	<AddUser />
	    	<ListUsers/>
    	</div>
	);
  }
}

export default user;