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
  	event.preventDefault();
    var id = this.state.id;
    var bookId = this.state.bookId;
    var bookName = this.state.bookName;
    var dateBorrow = this.state.dateBorrow;
    var dateReturn =this.state.dateReturn;
    var timeBorrow = this.state.timeBorrow;

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
      AddTranAction.addTran(id,bookId, bookName,dateBorrow , dateReturn,timeBorrow);
    }
  }

  render() {
    let bookList = this.state.books.map((book, index) => {

      return (
        <option value={book._id}>{book.name}</option>
      );
    });
    return (
      <div className='container'>
        <div className='row flipInX animated'>
          <div className='col-sm-6'>
            <div className='panel panel-default'>
              <div className='panel-heading'>ADD TRANSITION</div>
              <div className='panel-body'>
                <form onSubmit={this.handleSubmitTran.bind(this)}>

                  
                  <div className={'form-group ' + this.state.bookNameValidationState}>
                    <label className='control-label'>BOOK NAME</label>
                    <select className="form-control" value={this.state.bookId} ref="nameTextField"onChange={AddTranAction.updateBookName}>
                      {bookList}
                    </select>
                    <span className='help-block'>{this.state.helpBlockBookName}</span>                    
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
 // <input type='text' className='form-control' ref='DirectorTextField' value={this.state.bookName}
 // onChange={AddTranAction.updateBookName}/>
export default AddTran;
