import React from 'react';
import ListTransitionAction from '../../../actions/admin/transition/ListTransitionAction';
import ListTransitionStore from '../../../stores/admin/transition/ListTransitionStore';
import Datetime from 'react-datetime';

class AddTransition extends React.Component {
	constructor(props)
	  {
	  	super(props);
	  	this.state = ListTransitionStore.getState();
	  	this.onChange = this.onChange.bind(this);
	  }
	componentDidMount() {
	    ListTransitionStore.listen(this.onChange);
	}

	  componentWillUnmount() {
	    ListTransitionStore.unlisten(this.onChange);
	  }

	  onChange(state) {
	    this.setState(state);
	  }
	  handleSubmitTransition(event){
	  	event.preventDefault();
    	var idTrans = this.state.id;
    	var username = this.state.username;
    	var barcode = this.state.barcode;
    	var bookname = this.state.bookname;
    	var numDate = this.state.numDate;
    	var dateBorrow = this.state.dateBorrow;
    	var dateReturn = this.state.dateReturn;
    	var status = this.state.status;
    	if(!username){
    		ListTransitionAction.invalidUsername();
    		this.refs.usernameTextField.focus();
    	}
    	if(!barcode){
    		ListTransitionAction.invalidBarcode();
    		this.refs.BarcodeTextField.focus();
    	}
    	if(!bookname){
    		ListTransitionAction.invalidBookName();
    		this.refs.bookNameTextField.focus();
    	}
    	
    	if(!dateBorrow){
    		ListTransitionAction.invalidDateBorrow();
    		this.refs.dateBorrowTextField.focus();
    	}
    	if(!dateReturn){
    		ListTransitionAction.invalidDateReturn();
    		this.refs.dateReturnTextField.focus();
    	}
    	if(status == 0){
    		ListTransitionAction.invalidStatus();
    		this.refs.statusTextField.focus();
    	}
    	if(username && barcode && bookname && numDate && dateBorrow && dateReturn && status){
    		ListTransitionAction.addTransition({id: idTrans, username:username, barcode:barcode,
    		bookname:bookname, dateBorrow: dateBorrow, dateReturn: dateReturn, status:status});
    	}
    }

	  render(){
	  	
	      return(
	      	<div className='container-fluid'>
		        <div className='row'>
		          <div className=''>
		            <div className='panel panel-default'>
		              <div className='panel-heading'>Thêm Giao dịch mượn trả sách</div>
		              <div className='panel-body'>
		                <form onSubmit={this.handleSubmitTransition.bind(this)}>

		                  <div className={'form-group ' + this.state.usernameValidationState}>
		                    <label className='control-label'>Username người mượn sách</label>
		                    <input type='text' className='form-control' ref='usernameTextField' value={this.state.username}
		                           onChange={ListTransitionAction.updateUsername} autoFocus/>

		                    <span className='help-block'>{this.state.helpBlockUserName}</span>
		                  </div>
		                  <div className={'form-group ' + this.state.barcodeValidationState}>
		                    <label className='control-label'>Barcode sách</label>
		                    <input type='number' className='form-control' ref='BarcodeTextField' value={this.state.barcode}
		                           onChange={ListTransitionAction.updateBarcode}/>
		                    <span className='help-block'>{this.state.helpBlockBarcode}</span>
		                  </div>
		                  <div className={'form-group ' + this.state.bookNameValidationState}>
		                    <label className='control-label'>Tên sách</label>
		                    <input type='text' className='form-control' ref='bookNameTextField' value={this.state.bookname}
		                           onChange={ListTransitionAction.updateBookName}/>
		                    <span className='help-block'>{this.state.helpBlockBookName}</span>
		                  </div>

		                  <div className={'form-group ' + this.state.dateBorrowValidationState}>
		                    <label className='control-label'>Ngày mượn</label>
		                    	<Datetime value ={this.state.dateBorrow} onChange={ListTransitionAction.updateDateBorrow}/>
		                    <span className='help-block'>{this.state.helpBlockDateBorrow}</span>
		                  </div>
		                  
		                  <div className={'form-group ' + this.state.dateReturnValidationState}>
		                    <label className='control-label'>Ngày trả</label>
		                    	<Datetime value ={this.state.dateReturn} ref='dateReturnTextField' onChange={ListTransitionAction.updateDateReturn}/>
		                    <span className='help-block'>{this.state.helpBlockDateReturn}</span>
		                  </div>
		                  <div className={'form-group ' + this.state.statusValidationState}>
		                    <label className='control-label'>Trạng thái</label>
		                    <select className='form-control' ref='statusTextField' value={this.state.status} onChange={ListTransitionAction.updateStatus}>
		                          <option value='0'>-- Chọn trạng thái --</option>
		                          <option value='1'>Trống</option>
		                          <option value='2'>Đang chờ</option>
		                          <option value='3'>Đang mượn</option>
		                      </select>
		                    <span className='help-block'>{this.state.helpBlockStatus}</span>
		                  </div>

		                  <button type='submit' className='btn btn-primary'>Thêm</button>
		                </form>
		              </div>
		            </div>
		          </div>
		        </div>
      		</div>
	      );
	  }

}
export default AddTransition;