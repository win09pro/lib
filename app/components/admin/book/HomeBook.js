import React from 'react';
import AddBook from './AddBook';
import ListBooks from './ListBooks';

class Home extends React.Component {
  render() {
    return (

		<div className='container-fluid'>
			<div className='col-md-12'>
				<AddBook />
			</div>

			<div className='col-md-12'>
				<ListBooks />
			</div>
			<div className='clearfix'></div>
		</div>

	);
  }
}

export default Home;