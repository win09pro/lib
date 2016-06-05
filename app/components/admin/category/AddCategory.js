import React from 'react';
import AddCategoryStore from '../../../stores/admin/category/AddCategoryStore';
import AddCategoryAction from '../../../actions/admin/category/AddCategoryAction';
import DocumentTypeListAction from '../../../actions/admin/documenttype/DocumentTypeListAction';
import DocumentTypeListStore from '../../../stores/admin/documenttype/DocumentTypeListStore';


class AddCategory extends React.Component {
  constructor(props)
  {
  	super(props);
  	this.state = {state1:AddCategoryStore.getState(),state2:DocumentTypeListStore.getState()};
  	this.onChange = this.onChange.bind(this);
  }

   componentDidMount() {
    AddCategoryStore.listen(this.onChange);
    DocumentTypeListStore.listen(this.onChange);
    DocumentTypeListAction.get();
  }

  componentWillUnmount() {
    AddCategoryStore.unlisten(this.onChange);
    DocumentTypeListStore.unlisten(this.onChange);

  }

  onChange(state) {
    this.setState({state1:AddCategoryStore.getState(),state2:DocumentTypeListStore.getState()});
  }


  handleSubmitCategory(event)
  {
  	event.preventDefault();
    var id = this.state.state1.id;
    var name = this.state.state1.name.trim();
    var description = this.state.state1.description;
    var _documenttype = this.state.state1._documenttype;

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
    let documentTypeList = this.state.state2.documentTypes.map((documentType, index) => {
      if(this.state.state1._documenttype == documentType._id){
      return (
        
          <option value={documentType._id} key ={index+1} selected>
            {documentType.name}
          </option>
          );
          // console.log();
        }
        else{
          return (
          <option value={documentType._id} key ={index+1}>
              {documentType.name}
          </option>
          );
        }
      
    });

    return (
      <div className='container-fluid'>
        <div className='row flipInX animated'>
          <div className=''>
            <div className='panel panel-default'>
              <div className='panel-heading'>Thêm Danh Mục</div>
              <div className='panel-body'>
                <form onSubmit={this.handleSubmitCategory.bind(this)}>

                  <div className={'form-group ' + this.state.state1.nameValidationState}>
                    <label className='control-label'>Tên</label>
                    <input type='text' className='form-control' ref='nameTextField' value={this.state.state1.name}
                           onChange={AddCategoryAction.updateName} autoFocus/>

                    <span className='help-block'>{this.state.state1.helpBlockName}</span>
                  </div>
                  <div className={'form-group ' + this.state.state1.descriptionValidationState}>
                    <label className='control-label'>Mô tả</label>
                    <textarea className='form-control' ref='DescriptionTextField' value={this.state.state1.description}
                           onChange={AddCategoryAction.updateDescription}></textarea>
                    <span className='help-block'>{this.state.state1.helpBlockDescription}</span>
                  </div>

                  <div className={'form-group ' + this.state.state1.documentTypeValidationState}>
                    <label className='control-label'>Thể Loại</label>
                    <select className='form-control' ref='DocumentTypeSelectField' value={this.state.state1._documentType} onChange={AddCategoryAction.updateDocumentType}>
                      <option value='0'>--Select document type--</option>
                      {documentTypeList}
                    </select>
                    <span className='help-block'>{this.state.state1.helpBlockDocumentType}</span>
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

export default AddCategory;
