import alt from '../../../alt';
import AddCategoryAction from '../../../actions/admin/category/AddCategoryAction';
import CategoryListAction from '../../../actions/admin/category/CategoryListAction';
// import listBooksActions from '../actions/listBooksActions';
class AddCategoryStore {
  constructor() {
    this.bindActions(AddCategoryAction);
    this.id='';
    this.name = '';
    this.description = '';
    this._documenttype = 0;
    this.helpBlockName = '';
    this.helpBlockDescription = '';
    this.helpBlockDocumentType = '';
    this.nameValidationState = '';
    this.descriptionValidationState = '';
    this.documentTypeValidationState = '';

  }  
  onResetState()
  {
    this.id='';
    this.name = '';
    this.description = '';
    this._documenttype = 0;
    this.helpBlockName = '';
    this.helpBlockDescription = '';
    this.helpBlockDocumentType = '';
    this.nameValidationState = '';
    this.descriptionValidationState = '';
    this.documentTypeValidationState = '';
  }
   onGetCategorySuccess(data)
   {
      this.id=data._id;
      this.name = data.name;
      this.description = data.description;
      this._documenttype = data._documenttype;      
      this.helpBlockName = '';
      this.helpBlockDescription = '';
      this.helpBlockDocumentType = '';
      this.nameValidationState = '';
      this.descriptionValidationState = '';
      this.documentTypeValidationState = '';
   }
   onGetCategoryFail(jqXhr)
   {
     toastr.error(jqXhr.responseJSON.message);
   }

   onAddCategorySuccess(SuccessMessage)
   {
   	this.nameValidationState='has-success';
    this.descriptionValidationState='has-success'; 
    this.documentTypeValidationState = 'has-success';  	
   	this.helpBlockDescription = SuccessMessage;
    this.id='';
    this.name = '';
    this.description = '';
    this._documenttype = 0;
    CategoryListAction.get();
   }

    onAddCategoryFail(errorMessage)
    {
    this.nameValidationState='has-error';
    this.descriptionValidationState='has-error';
    this.documentTypeValidationState = 'has-error';
    this.id='';
    this.name = '';
    this.description = '';
    this._documenttype = 0;
   	this.helpBlockName=errorMessage;	
   	this.helpBlockDescription=errorMessage;
    this.helpBlockDocumentType = errorMessage;
    }
 

    onUpdateName(event)
    {
    	this.name = event.target.value;
    	this.nameValidationState = '';
   		this.helpBlockName = '';
      this.helpBlockDescription = '';
      this.helpBlockDocumentType = '';
    }

    onUpdateDescription(event)
    {
    	this.description = event.target.value;
    	this.descriptionValidationState = '';
    	this.helpBlockName = '';
      this.helpBlockDescription = '';
      this.helpBlockDocumentType = '';
    }

    onUpdateDocumentType(event)
    {
      this._documenttype = event.target.value;
      this.documenttypeValidationState = '';
      this.helpBlockName = '';
      this.helpBlockDescription = '';
      this.helpBlockDocumentType = '';
    }

    onInvalidName()
    {
    	this.nameValidationState='has-error';
    	this.helpBlockName='Please enter Category name';	
    }
    onInvalidDescription()
    {
    	this.descriptionValidationState='has-error';
    	this.helpBlockDescription='Please enter description';	
    }
    onInvalidDocumentType()
    {
      this.documentTypeValidationState='has-error';
      this.helpBlockDocumentType='Please select Document Type'; 
    }

    onGetDocListSuccessC(data)
    {
      this.documentTypesC = data;
    }
    onGetDocListFailC(jqXhr) {
      toastr.error(jqXhr.responseJSON.message);
    }
}
export default alt.createStore(AddCategoryStore);