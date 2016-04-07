import React from 'react';
import AddDocStore from '../../../stores/admin/documenttype/AddDocStore';
import AddDocumentTypeAction from '../../../actions/admin/documenttype/AddDocumentTypeAction';


class AddDocumentType extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = AddDocStore.getState();
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {    
    AddDocStore.listen(this.onChange);
  }

  componentWillUnmount() {
     AddDocStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmitDoc(event)
  {
    event.preventDefault();
    var id = this.state.id;
    var name = this.state.name.trim();
    var description = this.state.description;

    if (!name) {
      AddDocumentTypeAction.invalidName();
      this.refs.nameTextField.focus();
    }

    if (!description) {
      AddDocumentTypeAction.invalidDescription();
      this.refs.DescriptionTextField.focus();
    }

    if (name && description) {
      AddDocumentTypeAction.addDocumentType(id, name, description);
    }
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row flipInX animated'>
          <div className=''>
            <div className='panel panel-default'>
              <div className='panel-heading'>Add Document Type</div>
              <div className='panel-body'>
                <form onSubmit={this.handleSubmitDoc.bind(this)}>

                  <div className={'form-group ' + this.state.nameValidationState}>
                  <label className='control-label'>Name</label>
                  <input type='text' className='form-control' ref='nameTextField' value={this.state.name}
                  onChange={AddDocumentTypeAction.updateName} autoFocus/>

                  <span className='help-block'>{this.state.helpBlockName}</span>
                  </div>
                  <div className={'form-group ' + this.state.descriptionValidationState}>
                  <label className='control-label'>Description</label>
                  <input type='text' className='form-control' ref='DescriptionTextField' value={this.state.description}
                  onChange={AddDocumentTypeAction.updateDescription}/>
                  <span className='help-block'>{this.state.helpBlockDescription}</span>                    
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

export default AddDocumentType;