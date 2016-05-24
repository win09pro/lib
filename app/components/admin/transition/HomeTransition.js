import React from 'react';
import ListTransition from './ListTransition';

class HomeTransition extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
	        <div className='container-fluid'>
				<div className='col-md-12'>
					<ListBooks />
				</div>
				<div className='clearfix'></div>
			</div>
        );
    }
}

export default HomeTransition;
