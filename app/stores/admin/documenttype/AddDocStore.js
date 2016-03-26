import alt from '../../../alt';
import AddDocumentTypeAction from '../../../actions/admin/documenttype/AddDocumentTypeAction';
import DocumentTypeListAction from '../../../actions/admin/documenttype/DocumentTypeListAction';

class AddDocStore {
  constructor() {
    this.bindActions(AddDocumentTypeAction);
    this.id='';
    this.name = '';
    this.description = '';
    this.helpBlockName = '';
    this.helpBlockDescription = '';
    this.nameValidationState = '';
    this.descriptionValidationState = '';
  }  
  onResetState()
  {
    this.id='';
    this.name = '';
    this.description = '';
    this.helpBlockName = '';
    this.helpBlockDescription = '';
    this.nameValidationState = '';
    this.descriptionValidationState = '';
  }
   onGetDocSuccess(data)
   {
      this.id=data._id;
      this.name = data.name;
      this.description = data.description;      
      this.helpBlockName = '';
      this.helpBlockDescription = '';
      this.nameValidationState = '';
      this.descriptionValidationState = '';
   }
   onGetDocFail(jqXhr)
   {
     toastr.error(jqXhr.responseJSON.message);
   }

   onAddDocSuccess(SuccessMessage)
   {
   	this.nameValidationState='has-success';
    this.descriptionValidationState='has-success';   	
   	this.helpBlockDescription = SuccessMessage;
    this.id='';
    this.name = '';
    this.description = '';
    DocumentTypeListAction.get();
   }

    onAddDocFail(errorMessage)
    {
    this.nameValidationState='has-error';
    this.descriptionValidationState='has-error';
    this.id='';
    this.name = '';
    this.description = '';
   	this.helpBlockName=errorMessage;	
   	this.helpBlockDescription=errorMessage;
    }
 

    onUpdateName(event)
    {
    	this.name = event.target.value;
    	this.nameValidationState = '';
   		this.helpBlockName = '';
      this.helpBlockDescription = '';
    }

    onUpdateDescription(event)
    {
    	this.description = event.target.value;
    	this.descriptionValidationState = '';
    	this.helpBlockName = '';
      this.helpBlockDescription = '';
    }

    onInvalidName()
    {
    	this.nameValidationState='has-error';
    	this.helpBlockName='Please enter Name of Document Type';	
    }
    onInvalidDescription()
    {
    	this.descriptionValidationState='has-error';
    	this.helpBlockDescription='Please enter Description';	
    }
}
export default alt.createStore(AddDocStore);