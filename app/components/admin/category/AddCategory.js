import React from 'react';
import AddCategoryStore from '../../../stores/admin/category/AddCategoryStore';
import AddCategoryAction from '../../../actions/admin/category/AddCategoryAction';
import DocumentTypeListAction from '../../../actions/admin/documenttype/DocumentTypeListAction';
import DocumentTypeListStore from '../../../stores/admin/documenttype/DocumentTypeListStore';


class AddCategory extends React.Component {
  constructor(props)
  {
  	super(props);
  	this.state = AddCategoryStore.getState();
    // this.docState = DocumentTypeListStore.getState();
  	this.onChange = this.onChange.bind(this);

  }
  
   componentDidMount() {    
    AddCategoryStore.listen(this.onChange);
    // DocumentTypeListStore.listen(this.onChange);
    AddCategoryAction.get();
  }

  componentWillUnmount() {
    AddCategoryStore.unlisten(this.onChange);
    // DocumentTypeListStore.unlisten(onChange);
  }

  onChange(state) {
    this.setState(state);
    // this.setState(docState);
  }
  

  handleSubmitCategory(event)
  {
  	event.preventDefault();
    var id = this.state.id;
    var name = this.state.name.trim();
    var description = this.state.description;
    var _documenttype = this.state._documenttype;

    if (!name) {
      AddCategoryAction.invalidName();
      this.refs.nameTextField.focus();
    }

    if (!description) {
      AddCategoryAction.invalidDescription();
      this.refs.DescriptionTextField.focus();
    }

    if (_documenttype == 0) {
      AddCategoryAction.invalidDocumentType();
      this.refs.DocumentTypeSelectField.focus();
    }

    if (name && description && _documenttype) {
      AddCategoryAction.addCategory(id, name, description, _documenttype);
    }
  }

  render() {
    // DocumentTypeListAction.get();
    let documentTypeList = this.state.documentTypesC.map((documentType, index) => {
      return (
        
        <option value={documentType._id} key ={index+1}>
            {documentType.name}
        </option>
        
      );
    });
    
    return (
      <div className='container-fluid'>
        <div className='row flipInX animated'>
          <div className=''>
            <div className='panel panel-default'>
              <div className='panel-heading'>Add Category</div>
              <div className='panel-body'>
                <form onSubmit={this.handleSubmitCategory.bind(this)}>

                  <div className={'form-group ' + this.state.nameValidationState}>
                    <label className='control-label'>Name</label>
                    <input type='text' className='form-control' ref='nameTextField' value={this.state.name}
                           onChange={AddCategoryAction.updateName} autoFocus/>

                    <span className='help-block'>{this.state.helpBlockName}</span>
                  </div>
                  <div className={'form-group ' + this.state.descriptionValidationState}>
                    <label className='control-label'>Description</label>
                    <input type='text' className='form-control' ref='DescriptionTextField' value={this.state.description}
                           onChange={AddCategoryAction.updateDescription}/>
                    <span className='help-block'>{this.state.helpBlockDescription}</span>                    
                  </div>

                  <div className={'form-group ' + this.state.documentTypeValidationState}>
                    <label className='control-label'>Document Type</label>
                    <select className='form-control' ref='DocumentTypeSelectField' value={this.state._documentType} onChange={AddCategoryAction.updateDocumentType}>
                      <option value='0'>--Select document type--</option>
                      {documentTypeList}
                    </select>
                    <span className='help-block'>{this.state.helpBlockDocumentType}</span>                    
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

export default AddCategory;