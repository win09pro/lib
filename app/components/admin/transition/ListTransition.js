import React from 'react';
import ListTransitionStore from '../../../stores/admin/transition/ListTransitionStore';
import ListTransitionAction from '../../../actions/admin/transition/ListTransitionAction';

import {Link} from 'react-router';
import {Modal} from 'react-bootstrap';
import ActionBar from '../../../shared/ActionBar';

class ListTransition extends React.Component {
    constructor(props) {
        super(props);
        this.state = ListTransitionStore.getState();
    	this.onChange = this.onChange.bind(this);
    }
    componentDidMount() {
    	ListTransitionStore.listen(this.onChange);
    	ListTransitionAction.get();
	}

	componentWillUnmount() {
		ListTransitionStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);   
	}
    handleChange(e)
	  {
	    var id = e.target.attributes['data-ref'].value;
	    if (e.target.checked )
	    { 
	        ListTransitionAction.updateArrayId(id);       
	    } 
	    else
	    {
	     ListTransitionAction.removeArrayId (id);
	    }  
	  }

	deleteGroup()
	{
	  this.state.arrayIDtoDel.map((tranid,index) =>
	  {
	    ListTransitionAction.delete(tranid);
	  });
	  ListTransitionAction.closeModal();
	}

    render() {
    	function Status(st){
    		if(st == 1)
    			return 'Trống';
    		else if(st == 2)
    			return 'Đang chờ';
    		else if(st == 3)
    			return 'Đang mượn';
    	}
    	console.log(this.state.trans);
    	let tranList = this.state.trans.map((tran, index) => {
    		let dtBorrow = tran.dateBorrow.substr(0, 10);
    		let dtReturn = tran.dateReturn.substr(0, 10);
	      return (
	        <tr key ={index}>
	          <td><Link to={'/admin/tran/' + tran._id} >{index+1}</Link></td>
	          <td>{tran.username} </td>
	          <td>{tran.barcode} </td>
	          <td>{tran.bookname}</td>
	          <td>{dtBorrow}</td>
	          <td>{dtReturn}</td>
	          <td>{Status(tran.status)}</td>
	          <td><ActionBar editAction={ListTransitionAction} deleteAction={ListTransitionAction} item={tran} /></td>
	          <td>            
	            <input type ='checkbox' data-ref ={tran._id} onClick = {this.handleChange.bind(this)} />             
	          </td>
	        </tr>
	      );
	    });

    	let style ={'background-color':'#00bfff',  'border-radius': '15px 15px 0px 0px', 'color': '#fff','padding':'10px'};
        return (

        	<div className=''>
	            <div className='panel panel-default'>
	              <div className='panel-heading'>Danh sách mượn</div>
	              <div className='panel-body'>
	                <table className="table">
	                  <thead>
	                    <tr>
	                      <th>STT</th>
	                      <th>Username người mượn</th>
	                      <th>Barcode sách</th>  
	                      <th>Tên sách</th>      
	                      <th>Ngày mượn</th> 
	                      <th>Ngày trả</th>
	                      <th>Tình trạng</th>
	                      <th>Hành động</th> 
	                      <th><a className ="deletegroup" onClick ={ListTransitionAction.openModal} > <i className="fa fa-trash fa-danger fa-fa2x"></i></a></th>                                  
	                    </tr>
	                  </thead>
	                  <tbody>                       
	                    {tranList}
	                  </tbody>
	                </table>       
	              </div>
	            </div>

	            <Modal show={this.state.modalIsOpen} onHide ={ListTransitionAction.closeModal}>
	              <Modal.Header>
	                <Modal.Title>
	                <i className="fa fa-check-square-o fa-2x"></i>
	                </Modal.Title>
	              </Modal.Header>
	              <Modal.Body>
	              <div>
	              <h3 style ={{'color':'green'}}>Đồng ý xóa ?</h3>
	              </div>
	              </Modal.Body>      
	              <Modal.Footer>
	                  <button
	                      className="btn btn-warning"
	                    onClick={ListTransitionAction.closeModal}><i className="fa fa-times"> Hủy bỏ</i> </button>          
	                  <button
	                      className="btn btn-success"
	                    onClick={this.deleteGroup.bind(this)}><i className="fa fa-check"> Xóa</i> </button>          
	              </Modal.Footer>
	            </Modal>

          	</div>

			
        );
    }
}

export default ListTransition;
