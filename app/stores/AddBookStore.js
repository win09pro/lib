import alt from '../alt';
import AddBookAction from '../actions/AddBookAction';
import listBooksActions from '../actions/listBooksActions';
class AddBookStore {
  constructor() {
    this.bindActions(AddBookAction);
    this.id='';
    this.name = '';
    this.director = '';
    this.helpBlockName = '';
    this.helpBlockDirector = '';
    this.nameValidationState = '';
    this.directorValidationState = '';
  }  
   onGetBookSuccess(data)
   {
      this.id=data._id;
      this.name = data.name;
      this.director = data.director;      
      this.helpBlockName = '';
      this.helpBlockDirector = '';
      this.nameValidationState = '';
      this.directorValidationState = '';
   }
   onGetBookFail(jqXhr)
   {
     toastr.error(jqXhr.responseJSON.message);
   }

   onAddBookSuccess(SuccessMessage)
   {
   	this.nameValidationState='has-success';
    this.directorValidationState='has-success';   	
   	this.helpBlockDirector=SuccessMessage;
    this.id='';
    this.name = '';
    this.director = '';
    listBooksActions.getBook();
   }

    onAddBookFail(errorMessage)
    {
    this.nameValidationState='has-error';
    this.directorValidationState='has-error';
    this.id='';
    this.name = '';
    this.director = '';
   	this.helpBlockName=errorMessage;	
   	this.helpBlockDirector=errorMessage;
    }
 

    onUpdateName(event)
    {
    	this.name = event.target.value;
    	this.nameValidationState = '';
   		this.helpBlockName = '';
      this.helpBlockDirector = '';
    }

    onUpdateDirector(event)
    {
    	this.director = event.target.value;
    	this.directorValidationState = '';
    	this.helpBlockName = '';
      this.helpBlockDirector = '';
    }

    onInvalidName()
    {
    	this.nameValidationState='has-error';
    	this.helpBlockName='Please enter BookName';	
    }
    onInvalidDirector()
    {
    	this.directorValidationState='has-error';
    	this.helpBlockDirector='Please enter Director';	
    }
    onResetState(){
      this.id='';
      this.name = '';
      this.director = '';
      this.helpBlockName = '';
      this.helpBlockDirector = '';
      this.nameValidationState = '';
      this.directorValidationState = '';
    }
}
export default alt.createStore(AddBookStore);