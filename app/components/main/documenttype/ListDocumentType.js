import React from 'react';
import AddDocumentTypeAction from '../../../actions/admin/documenttype/AddDocumentTypeAction';
import ActionBar from '../../../shared/ActionBar';
import DocumentTypeListStore from '../../../stores/admin/documenttype/DocumentTypeListStore';
import DocumentTypeListAction from '../../../actions/admin/documenttype/DocumentTypeListAction';

import {Link} from 'react-router';

class ListDocumentType extends React.Component {
	constructor(props) {
		super(props);
		this.state = DocumentTypeListStore.getState();
		this.onChange = this.onChange.bind(this);
	}
	componentDidMount() {
		DocumentTypeListStore.listen(this.onChange);
		DocumentTypeListAction.get();
	}

	componentWillUnmount() {
		DocumentTypeListStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);   
	}
	render() {
		let documentTypeList = this.state.documentTypes.map((documentType, index) => {
			return (

				<tr key ={index} >

				<td> {index+1} </td>
				<td><Link to={'/admin/document-type/' + documentType._id}>{documentType.name}</Link></td>
				<td>{documentType.description}</td>
				<td><ActionBar editAction={AddDocumentTypeAction} deleteAction={DocumentTypeListAction} item={documentType} /></td>

				</tr>

				);
		});
		return (

			
					<div className=''>
						<div className='panel panel-default'>
							<div className='panel-heading'>List Document Type</div>
							<div className='panel-body'>
								<table className="table">
									<thead>
										<tr>
										<th>#</th>
										<th>Name</th>
										<th>Description</th>        
										<th>Action</th>                                   
										</tr>
									</thead>
									<tbody>                       
										{documentTypeList}
									</tbody>

								</table>       
							</div>
						</div>
					</div>
				

		);
	}
}

export default ListDocumentType;
