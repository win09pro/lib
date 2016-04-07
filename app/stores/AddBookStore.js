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
    this.cateName ='';
    this.cateId='';
    this.listCate=[];

    this.helpBlockName = '';
    this.helpBlockDirector = '';
    this.helpBlockCode = '';
    this.helpBlockBorrowBarcode = '';
    this.helpBlockImageUrl = '';
    this.helpBlockCate = '';

    this.nameValidationState = '';
    this.directorValidationState = '';
    this.codeValidationState = '';
    this.borrowBarcodeValidationState = '';
    this.imageUrlValidationState = '';
    this.cateValidationState = '';
  }  
  onResetState()
  {
    this.id='';
    this.name = '';
    this.director = '';
    this.code = '';
    this.borrowBarcode ='';
    this.imageUrl ='';
    this.cateName ='';
    this.cateId ='';

    this.helpBlockName = '';
    this.helpBlockDirector = '';
    this.helpBlockCode = '';
    this.helpBlockBorrowBarcode = '';
    this.helpBlockImageUrl = '';
    this.helpBlockCate = '';

    this.nameValidationState = '';
    this.directorValidationState = '';
    this.codeValidationState = '';
    this.borrowBarcodeValidationState = '';
    this.imageUrlValidationState = '';
    this.cateValidationState = '';
  }
   onGetBookSuccess(data)
   {
      this.id=data._id;
      this.name = data.name;
      this.director = data.director;   
      this.code = data.code;
      this.borrowBarcode = data.borrowBarcode;
      this.imageUrl =data.imageUrl;
      this.cateId =data.cateId;
      this.cateName =data.cateName; 

      var i =0;
      for(i=0;i<this.listCate.length;i++){
        if(this.listCate[i].name ===this.cateName){
          this.cateId=this.listCate[i]._id;
        }
      }  

      this.helpBlockName = '';
      this.helpBlockDirector = '';
      this.helpBlockCode = '';
      this.helpBlockBorrowBarcode = '';
      this.helpBlockImageUrl = '';
      this.helpBlockCate = '';

      this.nameValidationState = '';
      this.directorValidationState = '';
      this.codeValidationState = '';
      this.borrowBarcodeValidationState = '';
      this.imageUrlValidationState = '';
      this.cateValidationState = '';
   }
   onGetBookFail(jqXhr)
   {
     toastr.error(jqXhr.responseJSON.message);
   }
      
   onGetCategoryListSuccess(data){
      console.log(data);
      this.listCate = data;
      this.cateId =this.listCate[0]._id;
      this.cateName =this.listCate[0].name;
   }
   onGetCategoryListFail(jqXhr){
     toastr.error(jqXhr.responseJSON.message);
   }
   onAddBookSuccess(SuccessMessage)
   {
   	this.nameValidationState='has-success';
    this.directorValidationState='has-success';   	
    this.codeValidationState = 'has-success';
    this.borrowBarcodeValidationState = 'has-success';
    this.imageUrlValidationState = 'has-success';
    this.cateValidationState = 'has-success';

    this.helpBlockName = SuccessMessage;
    this.helpBlockDirector=SuccessMessage;
    this.helpBlockCode = SuccessMessage;
    this.helpBlockBorrowBarcode = SuccessMessage;
    this.helpBlockImageUrl = SuccessMessage;
    this.helpBlockCate = SuccessMessage;

    this.id='';
    this.name = '';
    this.director = '';
    this.code = '';
    this.borrowBarcode = '';
    this.imageUrl ='';
    this.cateName =this.listCate[0].name;
    this.cateId = this.listCate[0]._id;

    listBooksActions.get();
   }

    onAddBookFail(errorMessage)
    {
      this.nameValidationState='has-error';
      this.directorValidationState='has-error';
      this.codeValidationState = 'has-error';
      this.borrowBarcodeValidationState = 'has-error';
      this.imageUrlValidationState = 'has-error';
      this.cateValidationState = 'has-error';

      this.id='';
      this.name = '';
      this.director = '';
      this.code = '';
      this.borrowBarcode = '';
      this.imageUrl ='';
      this.cateId=this.listCate[0]._id;
      this.cateName =this.listCate[0].name;

     	this.helpBlockName=errorMessage;	
     	this.helpBlockDirector=errorMessage;
      this.helpBlockCode = errorMessage;
      this.helpBlockBorrowBarcode = errorMessage;
      this.helpBlockImageUrl = errorMessage;
      this.helpBlockCate = errorMessage;
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
      this.helpBlockCate = '';
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
      this.helpBlockCate = '';
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
      this.helpBlockCate = '';
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
      this.helpBlockCate = '';
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
      this.helpBlockCate = '';
    }
     onUpdateCate(event)
    {

      this.cateId= event.target.value;
      console.log(this.listCate);
      var i=0;
      for (i =0 ;i< this.listCate.length ; i++){
        if(this.listCate[i]._id ===this.cateId){
          this.cateName = this.listCate[i].name;
        }
      }
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
      this.borrowBarcodeValidationState ='has-error';
      this.helpBlockBorrowBarcode ='Please Enter Number';
    }
    onInvalidImageUrl(){
      this.codeValidationState ='has-error';
      this.helpBlockImageUrl ='Please Enter Number';
    }
    onInvalidCate(){
      this.codeValidationState ='has-error';
      this.helpBlockCate ='Please Enter Number';
    }
}
export default alt.createStore(AddBookStore);