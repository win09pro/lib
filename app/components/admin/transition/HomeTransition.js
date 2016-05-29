import React from 'react';
import ListTransition from './ListTransition';
import AddTransition from './AddTransition';

class HomeTransition extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
	        <div className='container-fluid'>
				<div className='col-md-12'>
                    <AddTransition />
					<ListTransition />
				</div>
				<div className='clearfix'></div>
			</div>
        );
    }
}

export default HomeTransition;
