import alt from '../alt';
import AddBookAction from '../actions/AddBookAction';
import listBooksActions from '../actions/listBooksActions';
class AddBookStore {
  constructor() {
    this.bindActions(AddBookAction);
    this.id='';
    this.name = '';
    this.director = '';
    this.code = '';
    this.borrowBarcode ='';
    this.imageUrl ='';
    this.doctype ='';

    this.helpBlockName = '';
    this.helpBlockDirector = '';
    this.helpBlockCode = '';
    this.helpBlockBorrowBarcode = '';
    this.helpBlockImageUrl = '';
    this.helpBlockDoctype = '';

    this.nameValidationState = '';
    this.directorValidationState = '';
    this.codeValidationState = '';
    this.borrowBarcodeValidationState = '';
    this.imageUrlValidationState = '';
    this.doctypeValidationState = '';
  }  
  onResetState()
  {
    this.id='';
    this.name = '';
    this.director = '';
    this.code = '';
    this.borrowBarcode ='';
    this.imageUrl ='';
    this.doctype ='';

    this.helpBlockName = '';
    this.helpBlockDirector = '';
    this.helpBlockCode = '';
    this.helpBlockBorrowBarcode = '';
    this.helpBlockImageUrl = '';
    this.helpBlockDoctype = '';

    this.nameValidationState = '';
    this.directorValidationState = '';
    this.codeValidationState = '';
    this.borrowBarcodeValidationState = '';
    this.imageUrlValidationState = '';
    this.doctypeValidationState = '';
  }
   onGetBookSuccess(data)
   {
      this.id=data._id;
      this.name = data.name;
      this.director = data.director;   
      this.code = data.code;
      this.borrowBarcode = data.borrowBarcode;
      this.imageUrl =data.imageUrl;
      this.doctype =data.doctype;   

      this.helpBlockName = '';
      this.helpBlockDirector = '';
      this.helpBlockCode = '';
      this.helpBlockBorrowBarcode = '';
      this.helpBlockImageUrl = '';
      this.helpBlockDoctype = '';

      this.nameValidationState = '';
      this.directorValidationState = '';
      this.codeValidationState = '';
      this.borrowBarcodeValidationState = '';
      this.imageUrlValidationState = '';
      this.doctypeValidationState = '';
   }
   onGetBookFail(jqXhr)
   {
     toastr.error(jqXhr.responseJSON.message);
   }

   onAddBookSuccess(SuccessMessage)
   {
   	this.nameValidationState='has-success';
    this.directorValidationState='has-success';   	
    this.codeValidationState = 'has-success';
    this.borrowBarcodeValidationState = 'has-success';
    this.imageUrlValidationState = 'has-success';
    this.doctypeValidationState = 'has-success';

    this.helpBlockName = SuccessMessage;
    this.helpBlockDirector=SuccessMessage;
    this.helpBlockCode = SuccessMessage;
    this.helpBlockBorrowBarcode = SuccessMessage;
    this.helpBlockImageUrl = SuccessMessage;
    this.helpBlockDoctype = SuccessMessage;

    this.id='';
    this.name = '';
    this.director = '';
    this.code = '';
    this.borrowBarcode = '';
    this.imageUrl ='';
    this.doctype ='';

    listBooksActions.get();
   }

    onAddBookFail(errorMessage)
    {
      this.nameValidationState='has-error';
      this.directorValidationState='has-error';
      this.codeValidationState = 'has-error';
      this.borrowBarcodeValidationState = 'has-error';
      this.imageUrlValidationState = 'has-error';
      this.doctypeValidationState = 'has-error';

      this.id='';
      this.name = '';
      this.director = '';
      this.code = '';
      this.borrowBarcode = '';
      this.imageUrl ='';
      this.doctype ='';

     	this.helpBlockName=errorMessage;	
     	this.helpBlockDirector=errorMessage;
      this.helpBlockCode = errorMessage;
      this.helpBlockBorrowBarcode = errorMessage;
      this.helpBlockImageUrl = errorMessage;
      this.helpBlockDoctype = errorMessage;
    }
 

    onUpdateName(event)
    {
    	this.name = event.target.value;
    	this.nameValidationState = '';
   		this.helpBlockName = '';
      this.helpBlockDirector = '';
      this.helpBlockCode = '';
      this.helpBlockBorrowBarcode = '';
      this.helpBlockImageUrl = '';
      this.helpBlockDoctype = '';
    }

    onUpdateDirector(event)
    {
    	this.director = event.target.value;
    	this.directorValidationState = '';
    	this.helpBlockName = '';
      this.helpBlockDirector = '';
      this.helpBlockCode = '';
      this.helpBlockBorrowBarcode = '';
      this.helpBlockImageUrl = '';
      this.helpBlockDoctype = '';
    }
     onUpdateCode(event)
    {
      this.code = event.target.value;
      this.codeValidationState = '';
      this.helpBlockName = '';
      this.helpBlockDirector = '';
      this.helpBlockCode = '';
      this.helpBlockBorrowBarcode = '';
      this.helpBlockImageUrl = '';
      this.helpBlockDoctype = '';
    }
     onUpdateBarcode(event)
    {
      this.borrowBarcode = event.target.value;
      this.borrowBarcodeValidationState = '';
      this.helpBlockName = '';
      this.helpBlockDirector = '';
      this.helpBlockCode = '';
      this.helpBlockBorrowBarcode = '';
      this.helpBlockImageUrl = '';
      this.helpBlockDoctype = '';
    }
     onUpdateImageUrl(link)
    {
      this.imageUrl = link;
      this.imageUrlValidationState = '';
      this.helpBlockName = '';
      this.helpBlockDirector = '';
      this.helpBlockCode = '';
      this.helpBlockBorrowBarcode = '';
      this.helpBlockImageUrl = '';
      this.helpBlockDoctype = '';
    }
     onUpdateDoctype(event)
    {
      this.doctype = event.target.value;
      this.doctypeValidationState = '';
      this.helpBlockName = '';
      this.helpBlockDirector = '';
      this.helpBlockCode = '';
      this.helpBlockBorrowBarcode = '';
      this.helpBlockImageUrl = '';
      this.helpBlockDoctype = '';
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
    onInvalidCode(){
      this.codeValidationState ='has-error';
      this.helpBlockCode ='Please Enter Number';
    }
    onInvalidBarcode(){
      this.borroBarcodeValidationState ='has-error';
      this.helpBlockBorrowBarcode ='Please Enter Number';
    }
    onInvalidImageUrl(){
      this.codeValidationState ='has-error';
      this.helpBlockImageUrl ='Please Enter Number';
    }
    onInvalidDoctype(){
      this.codeValidationState ='has-error';
      this.helpBlockDoctype ='Please Enter Number';
    }
}
export default alt.createStore(AddBookStore);