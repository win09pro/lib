import React from 'react';
import AddBookStore from '../../../stores/AddBookStore';
import AddBookAction from '../../../actions/AddBookAction';


class Addbook extends React.Component {
  constructor(props)
  {
  	super(props);
  	this.state = AddBookStore.getState();
  	this.onChange = this.onChange.bind(this);
  }
   componentDidMount() {    
    AddBookStore.listen(this.onChange);
  }

  componentWillUnmount() {
    AddBookStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmitBook(event)
  {
  	event.preventDefault();
    var id = this.state.id;
    var name = this.state.name.trim();
    var director = this.state.director;
    var code = this.state.code;
    var barcode =this.state.borrowBarcode;
    var imageUrl = this.state.imageUrl;
    var doctype =this.state.doctype;

    if (!name) {
      AddBookAction.invalidName();
      this.refs.nameTextField.focus();
    }

    if (!director) {
      AddBookAction.invalidDirector();
      this.refs.DirectorTextField.focus();
    }
    if(!code){
      AddBookAction.invalidCode();
      this.refs.CodeTextField.focus();
    }
    if(!barcode){
      AddBookAction.invalidBarcode();
      this.refs.BarcodeTextField.focus();
    }
    if(!imageUrl){
      AddBookAction.invalidImageUrl();
      this.refs.ImageUrlTextField.focus();
    }
    if(!doctype){
      AddBookAction.invalidDoctype();
      this.refs.DoctypeTextField.focus();
    }
    if (name && director && code && barcode &&imageUrl &&doctype) {
      AddBookAction.addBook(id,name, director,code , barcode,imageUrl,doctype);
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='row flipInX animated'>
          <div className='col-sm-6'>
            <div className='panel panel-default'>
              <div className='panel-heading'>ADD BOOK</div>
              <div className='panel-body'>
                <form onSubmit={this.handleSubmitBook.bind(this)}>

                  <div className={'form-group ' + this.state.nameValidationState}>
                    <label className='control-label'>NAME</label>
                    <input type='text' className='form-control' ref='nameTextField' value={this.state.name}
                           onChange={AddBookAction.updateName} autoFocus/>
                    <span className='help-block'>{this.state.helpBlockName}</span>
                  </div>
                  <div className={'form-group ' + this.state.directorValidationState}>
                    <label className='control-label'>DIRECTOR</label>
                    <input type='text' className='form-control' ref='DirectorTextField' value={this.state.director}
                           onChange={AddBookAction.updateDirector}/>
                    <span className='help-block'>{this.state.helpBlockDirector}</span>                    
                  </div> 
                  <div className={'form-group ' + this.state.codeValidationState}>
                    <label className='control-label'>CODE</label>
                    <input type='number' className='form-control' ref='CodeTextField' value={this.state.code}
                           onChange={AddBookAction.updateCode}/>
                    <span className='help-block'>{this.state.helpBlockCode}</span>                    
                  </div> 
                  <div className={'form-group ' + this.state.borrowBarcodeValidationState}>
                    <label className='control-label'>BARCODE</label>
                    <input type='text' className='form-control' ref='BarcodeTextField' value={this.state.borrowBarcode}
                           onChange={AddBookAction.updateBarcode}/>
                    <span className='help-block'>{this.state.helpBlockBorrowBarcode}</span>                    
                  </div> 
                  <div className={'form-group ' + this.state.imageUrlValidationState}>
                    <label className='control-label'>IMAGE URL</label>
                    <input type='text' className='form-control disable' ref='ImageUrlTextField' value={this.state.imageUrl}/>
                    <span className='help-block'>{this.state.helpBlockImageUrl}</span>                    
                  </div>  
                  <div className={'form-group ' + this.state.doctypeValidationState}>
                    <label className='control-label'>DOCTYPE</label>
                    <input type='text' className='form-control' ref='DoctypeTextField' value={this.state.doctype}
                           onChange={AddBookAction.updateDoctype}/>
                    <span className='help-block'>{this.state.helpBlockDoctype}</span>                    
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

export default Addbook;