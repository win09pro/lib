import React from 'react';
import AddDocumentTypeAction from '../../../actions/admin/documenttype/AddDocumentTypeAction';
import ActionBar from '../../../shared/ActionBar';
import DocumentTypeListStore from '../../../stores/admin/documenttype/DocumentTypeListStore';
import DocumentTypeListAction from '../../../actions/admin/documenttype/DocumentTypeListAction';

import {Link} from 'react-router';
import {Modal} from 'react-bootstrap';

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

	handleChange(e)
	{
		var id = e.target.attributes['data-ref'].value;
		if (e.target.checked )
		{
			DocumentTypeListAction.updateArrayId(id);
		}
		else
		{
			DocumentTypeListAction.removeArrayId(id);
		}
		//   console.log(this.state.arrayIDtoDel);

	}

	deleteGroup()
	{
		this.state.arrayIDtoDel.map((iddoc,index) =>
		{
			DocumentTypeListAction.delete(iddoc);
		});
		DocumentTypeListAction.closeModal();
	}

	render() {
		let style={'text-align':'center'};
		let documentTypeList = this.state.documentTypes.map((documentType, index) => {
			return (

				<tr key ={index} >

					<td> {index+1} </td>
					<td><Link to={'/admin/document-type/' + documentType._id}>{documentType.name}</Link></td>
					<td>{documentType.description}</td>
					<td><ActionBar editAction={AddDocumentTypeAction} deleteAction={DocumentTypeListAction} item={documentType} /></td>
					<td>
			            <input type ='checkbox' data-ref ={documentType._id} onClick = {this.handleChange.bind(this)} />
			         </td>
				</tr>

				);
		});
		return (

			
					<div className=''>
						<div className='panel panel-default'>
							<div className='panel-heading'>Danh sách thể loại</div>
							<div className='panel-body'>
								<table className="table">
									<thead>
										<tr>
										<th>#</th>
										<th>Tên</th>
										<th>Mô tả</th>        
										<th>Hành động</th>
										<th><a className ="deletegroup" onClick ={DocumentTypeListAction.openModal} > <i className="fa fa-trash fa-danger fa-fa2x"></i></a></th>                                   
										</tr>
									</thead>
									<tbody>                       
										{documentTypeList}
									</tbody>

								</table>       
							</div>
						</div>
						<Modal style ={style} show={this.state.modalIsOpen} onHide ={DocumentTypeListAction.closeModal}>
			              <Modal.Header>
			                <Modal.Title style={style}>
			                <i className="fa fa-check-square-o fa-2x"></i>
			                </Modal.Title>
			              </Modal.Header>
			              <Modal.Body>
			              <div style={style}>
			              <h3 style ={{'color':'green'}}>Đồng ý xóa ?</h3>
			              </div>
			              </Modal.Body>
			              <Modal.Footer>
			                  <button
			                      className="btn btn-warning"
			                    onClick={DocumentTypeListAction.closeModal}><i className="fa fa-times"> Hủy bỏ</i> </button>
			                  <button
			                      className="btn btn-success"
			                    onClick={this.deleteGroup.bind(this)}><i className="fa fa-check"> Xóa</i> </button>
			              </Modal.Footer>
			            </Modal>
					</div>
				

		);
	}
}

export default ListDocumentType;
