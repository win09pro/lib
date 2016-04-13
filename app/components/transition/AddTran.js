import React from 'react';
import AddTranStore from '../../stores/transition/AddTranStore';
import AddTranAction from '../../actions/transition/AddTranAction';


class AddTran extends React.Component {
  constructor(props)
  {
  	super(props);
  	this.state = AddTranStore.getState();
  	this.onChange = this.onChange.bind(this);
  }
   componentDidMount() {  
    AddTranAction.getBooks();  
    AddTranAction.getListTranCurrent();
    AddTranAction.getListUser();
    AddTranStore.listen(this.onChange);
  }

  componentWillUnmount() {
    AddTranStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmitTran(event)
  {
  	
    var id = this.state.id;
    var bookId = this.state.bookId;
    var bookName = this.state.bookName;
    var userId  = this.state.userId;
    var userName = this.state.userName;
    var dateBorrow = this.state.dateBorrow;
    var dateReturn =this.state.dateReturn;
    var timeBorrow = this.state.timeBorrow;
    if(!userId){
      AddTranAction.invalidUser();
      this.refs.userTextField.focus();
    }
    if (!bookId) {
      AddTranAction.invalidBookId();
      this.refs.nameTextField.focus();
    }

    if(!dateBorrow){
      AddTranAction.invalidDateBorrow();
      this.refs.CodeTextField.focus();
    }
    if(!dateReturn){
      AddTranAction.invalidDateReturn();
      this.refs.BarcodeTextField.focus();
    }
    
    if(!timeBorrow){
      AddTranAction.invalidTimeBorrow();
      this.refs.ImageUrlTextField.focus();
    }
    if (bookId && bookName && dateBorrow && dateReturn && timeBorrow) {
        var datebr = new Date(dateBorrow);
        var datert = new Date(dateReturn);
        var datenow = Date.now;
        var datenum1 ,datenum2,datenum3;
        datenum1 = Date.parse(datebr);
        datenum2 = Date.parse(datert);
        datenum3 = Date.parse(datenow);
        console.log(datenum1);
        console.log(datenum2);
        console.log(datenum3);
        if(datenum1 > datenum2){
            AddTranAction.invalidDateTimeTransition();
            this.refs.CodeTextField.focus();
            this.refs.BarcodeTextField.focus();

        }
        else if(datenum1>datenum3){
           AddTranAction.invalidDateTimeTransition();
           this.refs.CodeTextField.focus();
           this.refs.BarcodeTextField.focus();
        }
        else if(datenum2<datenum3){
           AddTranAction.invalidDateTimeTransition();
           this.refs.CodeTextField.focus();
           this.refs.BarcodeTextField.focus();
        }
        else{
          AddTranAction.addTran(id,bookId, bookName , userId , userName, dateBorrow , dateReturn ,timeBorrow);
          AddTranAction.getListTranCurrent();
      }
    }
  }

  render() {
    let bookList = this.state.filteredbooks.map((book, index) => {

      return (
        <option value={book._id}>{book.name}</option>

      );
    });
    let userList =this.state.listUser.map((user,index)=>{
      return (
          <option value={user._id}>{user.username}</option>
        );
    });
    return (
      <div className='container-fluid'>
        <div className='row animated'>
          <div className='col-lg-12 col-md-12 col-sm-12'>
            <div className='panel panel-default'>
              <div className='panel-heading'>ADD TRANSITION</div>
              <div className='panel-body'>
                <form onSubmit={this.handleSubmitTran.bind(this)}>

                  <div className={'form-group ' + this.state.userValidationState}>
                    <label className='control-label'>User Borrows</label>
                    <select className="form-control" value={this.state.userId} ref="userTextField"onChange={AddTranAction.updateBookName}>
                      {userList}
                    </select>
                    <span className='help-block'>{this.state.helpBlockUser}</span>                    
                  </div>

                  <div className={'form-group ' + this.state.bookNameValidationState}>
                    <label className='control-label'>BOOK NAME</label>
                    <select className="form-control" value={this.state.bookId} ref="nameTextField"onChange={AddTranAction.updateBookName}>
                      {bookList}
                    </select>
                    <span className='help-block'>{this.state.helpBlock}</span>                    
                  </div> 

                  <div className={'form-group ' + this.state.dateBorrowValidationState}>
                    <label className='control-label'>DATE BORROW</label>
                    <input type='date' className='form-control' ref='CodeTextField' value={this.state.dateBorrow}
                           onChange={AddTranAction.updateDateBorrow}/>
                    <span className='help-block'>{this.state.helpBlockDateBorrow}</span>                    
                  </div> 
                  <div className={'form-group ' + this.state.dateReturnValidationState}>
                    <label className='control-label'>DATE RETURN</label>
                    <input type='date' className='form-control' ref='BarcodeTextField' value={this.state.dateReturn}
                           onChange={AddTranAction.updateDateReturn}/>
                    <span className='help-block'>{this.state.helpBlockDateReturn}</span>                    
                  </div> 
                  <div className={'form-group ' + this.state.timeBorrowValidationState}>
                    <label className='control-label'>TIME BORROW</label>
                    <input type='number' className='form-control' ref='ImageUrlTextField' value={this.state.timeBorrow}
                           onChange={AddTranAction.updateTimeBorrow}/>
                    <span className='help-block'>{this.state.helpBlockTimeBorrow}</span>                    
                  </div>  
                       
                  <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
              </div>
            </div>            
          </div>          
        </div>
      </div>
    );
  }
}
// event.preventDefault();
export default AddTran;
