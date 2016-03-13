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

    if (!name) {
      AddBookAction.invalidName();
      this.refs.nameTextField.focus();
    }

    if (!director) {
      AddBookAction.invalidDirector();
      this.refs.DirectorTextField.focus();
    }

    if (name && director) {
      AddBookAction.addBook(id,name, director);
    }
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row flipInX animated'>
          <div className=''>
            <div className='panel panel-default'>
              <div className='panel-heading'>Add BOOK</div>
              <div className='panel-body'>
                <form onSubmit={this.handleSubmitBook.bind(this)}>

                  <div className={'form-group ' + this.state.nameValidationState}>
                    <label className='control-label'>Name</label>
                    <input type='text' className='form-control' ref='nameTextField' value={this.state.name}
                           onChange={AddBookAction.updateName} autoFocus/>

                    <span className='help-block'>{this.state.helpBlockName}</span>
                  </div>
                  <div className={'form-group ' + this.state.directorValidationState}>
                    <label className='control-label'>Director</label>
                    <input type='text' className='form-control' ref='DirectorTextField' value={this.state.director}
                           onChange={AddBookAction.updateDirector}/>
                    <span className='help-block'>{this.state.helpBlockDirector}</span>                    
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