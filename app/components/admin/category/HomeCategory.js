import React from 'react';

import AddCategory from './AddCategory';
import CategoryList from './CategoryList';
// import DocumentTypeListAction from '../../../actions/admin/documenttype/DocumentTypeListAction';
// import DocumentTypeListStore from '../../../stores/admin/documenttype/DocumentTypeListStore';

// import {Link} from 'react-router';

class HomeCategory extends React.Component {
	constructor(props) {
		super(props);
		//this.state
		// this.docState = DocumentTypeListStore.getState();
		this.onChange = this.onChange.bind(this);
	}
	componentDidMount() {
		// listBooksStore.listen(this.onChange);
		// listBooksActions.get();
		// DocumentTypeListAction.get();
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
					<AddCategory />
				</div>

				<div className='col-md-12'>
					<CategoryList />
				</div>
				<div className='clearfix'></div>
			</div>

		);
	}
}

export default HomeCategory;
