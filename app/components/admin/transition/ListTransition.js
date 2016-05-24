import React from 'react';
import ListTransitionStore from '../../../stores/admin/transition/ListTransitionStore';
import ListTransitionAction from '../../../actions/admin/transition/ListTransitionAction';

import ActionBar from '../../../shared/ActionBar';
import {Modal} from 'react-bootstrap';

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

    handleEditTransition(event){
    	var idTrans = this.state.id;
    	var numDate = this.state.numDate;
    	var dateBorrow = this.state.dateBorrow;
    	var dateReturn = this.state.dateReturn;
    	if(!numDate){
    		this.refs.numDateBorrowTextField.focus();
    	}
    	if(!dateBorrow){
    		this.refs.dateBorrowTextField.focus();
    	}
    	if(!dateReturn){
    		this.refs.dateReturnTextField.focus();
    	}
    	if(numDate && dateBorrow && dateReturn){
    		ListTransitionAction.updateTrans({id: idTrans, dateBorrow: dateBorrow, dateReturn: dateReturn});
    	}
    }

    render() {
    	let style ={'background-color':'#00bfff',  'border-radius': '15px 15px 0px 0px', 'color': '#fff','padding':'10px'};
        return (

			<Modal show={this.state.LoginModalisOpen} onHide ={ListTransitionAction.closeLoginModal}>
				<Modal.Header style ={style}  >
				<div style ={{'textAlign':'center'}}>
				<Modal.Title bsClass='ModalLogin'><i className="fa fa-check-square-o"></i> Cập nhật Transition</Modal.Title>
				</div>
				</Modal.Header>
				<Modal.Body>
					<form className="form-horizontal" role="form" onSubmit={this.handleEditTransition.bind(this)}>
						<div className="form-body">
							<div className="form-group">
								<label htmlFor="username" className="col-md-3 control-label">Người dùng</label>
								<div className="col-md-9">
									<div className="input-icon right-inner-addon">
										<i className="fa fa-user" />
										<input type="text" ref='usernameTextField' className="form-control" value ={this.state.user}
								id="username" readonly />
									</div>
								</div>
							</div>
							<div className="form-group">
								<label htmlFor="bookname" className="col-md-3 control-label">Tên sách</label>
								<div className="col-md-9">
									<div className="input-icon right-inner-addon">
										<i className="fa fa-lock" />
										<input type="text" ref='booknameTextField' className="form-control" value ={this.state.password} 
										id="bookname" readonly />
									</div>
								</div>
							</div>
							<div className="form-group">
								<label htmlFor="dateBorrow" className="col-md-3 control-label">Số ngày mượn</label>
								<div className="col-md-9">
									<div className="input-icon right-inner-addon">
										<i className="fa fa-lock" />
										<input type="number" ref='numDateBorrowTextField' className="form-control" value ={this.state.password} 
										id="numDateBorrow" />
									</div>
								</div>
							</div>
							<div className="form-group">
								<label htmlFor="dateBorrow" className="col-md-3 control-label">Ngày bắt đầu mượn</label>
								<div className="col-md-9">
									<div className="input-icon right-inner-addon">
										<i className="fa fa-lock" />
										<input type="text" ref='dateBorrowTextField' className="form-control" value ={this.state.password} 
										id="dateBorrow" />
									</div>
								</div>
							</div>
							<div className="form-group">
								<label htmlFor="dateReturn" className="col-md-3 control-label">Ngày đến hạn trả</label>
								<div className="col-md-9">
									<div className="input-icon right-inner-addon">
										<i className="fa fa-lock" />
										<input type="text" ref='dateReturnTextField' className="form-control" value ={this.state.password} 
										id="dateReturn" />
									</div>
								</div>
							</div>
						{/* <div className="form-group">
						<label className="col-md-3 control-label" />
						<div className="col-md-9">
						<input type="checkbox" name="remember" defaultValue={1} /> Nhớ đến tôi?
						</div>
						</div>  */}              
						</div>
					</form>
				</Modal.Body>      
				<Modal.Footer>
					<label className='pull-left helpblock-login-register'>{this.state.helpBlock}</label>
					<button
					className="btn btn-warning"
					onClick={ListTransitionAction.closeLoginModal}><i className="fa fa-times"> Hủy bỏ</i> </button>                  
					<button className="btn btn-green" name="btn-login" onClick={this.handleLoginUser.bind(this)}><i className="fa fa-sign-in" /> Đăng nhập</button>              
				</Modal.Footer>
			</Modal>
        );
    }
}

export default ListTransition;
