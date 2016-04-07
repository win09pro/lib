import React from 'react';

import AddDocumentType from './AddDocumentType';
import ListDocumentType from './ListDocumentType';

import {Link} from 'react-router';

class HomeDocumentType extends React.Component {
	constructor(props) {
		super(props);
		//this.state
		this.onChange = this.onChange.bind(this);
	}
	componentDidMount() {
		// listBooksStore.listen(this.onChange);
		// listBooksActions.get();
	}

	componentWillUnmount() {
		// listBooksStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);   
	}
	render() {
		
		return (

			<div className='container-fluid'>
				<div className='col-md-12'>
					<AddDocumentType  />
				</div>

				<div className='col-md-12'>
					<ListDocumentType />
				</div>
				<div className='clearfix'></div>
			</div>

		);
	}
}

export default HomeDocumentType;
