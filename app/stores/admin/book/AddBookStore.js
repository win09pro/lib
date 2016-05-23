import alt from '../../../alt';
import AddBookAction from '../../../actions/admin/book/AddBookAction';
import ListBooksActions from '../../../actions/admin/book/ListBooksActions';
class AddBookStore {
  constructor() {
    this.bindActions(AddBookAction);
    this.id='';
    this.name = '';
    this.author = '';
    this.publisher = '';
    this.code = '';
    this.status = 0;
    this.description = '';
    this.imageUrl ='';
    this._cateId='';

    this.fileAvatar ={};
    this.imagePreviewUrl='/uploads/avatar.jpg';
    this.imageUrl='/uploads/avatar.jpg';

    this.helpBlockName = '';
    this.helpBlockAuthor = '';
    this.helpBlockPublisher = '';
    this.helpBlockCode = '';
    this.helpBlockStatus = '';
    this.helpBlockDescription = '';
    this.helpBlockCate = '';

    this.nameValidationState = '';
    this.authorValidationState = '';
    this.publisherValidationState = '';

    this.codeValidationState = '';
    this.statusValidationState = '';
    this.descriptionValidationState = '';
    this.cateValidationState = '';
  }  

  
  onResetState()
  {
    this.id='';
    this.name = '';
    this.author = '';
    this.publisher = '';
    this.code = '';
    this.status = 0;
    this.description = '';
    this.imageUrl ='';
    this._cateId='';

    this.fileAvatar ={};
    this.imagePreviewUrl='/uploads/avatar.jpg';
    this.imageUrl='/uploads/avatar.jpg';

    this.helpBlockName = '';
    this.helpBlockAuthor = '';
    this.helpBlockPublisher = '';
    this.helpBlockCode = '';
    this.helpBlockStatus = '';
    this.helpBlockDescription = '';
    this.helpBlockCate = '';

    this.nameValidationState = '';
    this.authorValidationState = '';
    this.publisherValidationState = '';

    this.codeValidationState = '';
    this.statusValidationState = '';
    this.descriptionValidationState = '';
    this.cateValidationState = '';
  }
   onGetBookSuccess(data)
   {
      this.id=data._id;
      this.name = data.name;
      this.author = data.author;  
      this.publisher = data.publisher; 
      this.code = data.code;
      this.status = data.status;
      this.description = data.description;
      this.imageUrl =data.imageUrl;
      this._cateId =data._cateId;


      this.helpBlockName = '';
      this.helpBlockAuthor = '';
      this.helpBlockPublisher = '';
      this.helpBlockCode = '';
      this.helpBlockStatus = '';
      this.helpBlockDescription = '';
      this.helpBlockCate = '';

      this.nameValidationState = '';
      this.authorValidationState = '';
      this.publisherValidationState = '';

      this.codeValidationState = '';
      this.statusValidationState = '';
      this.descriptionValidationState = '';
      this.cateValidationState = '';
   }
   onGetBookFail(jqXhr)
   {
     toastr.error(jqXhr.responseJSON.message);
   }
      
  
   onAddBookSuccess(SuccessMessage)
   {
    this.id='';
    this.name = '';
    this.author = '';
    this.publisher = '';
    this.code = '';
    this.status = 0;
    this.description = '';
    this.imageUrl ='';
    this._cateId='';

    this.fileAvatar ={};
    this.imagePreviewUrl='/uploads/avatar.jpg';
    this.imageUrl='/uploads/avatar.jpg';

   	this.nameValidationState='has-success';
    this.authorValidationState='has-success';   	
    this.publisherValidationState = 'has-success';
    this.codeValidationState = 'has-success';
    this.cateValidationState = 'has-success';

    this.helpBlockName = SuccessMessage;
    this.helpBlockAuthor=SuccessMessage;
    this.helpBlockPublisher = SuccessMessage;
    this.helpBlockCode = SuccessMessage;
    this.helpBlockDescription = SuccessMessage;
    this.helpBlockStatus = SuccessMessage;
    this.helpBlockCate = SuccessMessage;

    ListBooksActions.get();
   }

    onAddBookFail(errorMessage)
    {
      this.nameValidationState='has-error';
      this.authorValidationState='has-error';
      this.codeValidationState = 'has-error';
      this.borrowBarcodeValidationState = 'has-error';
      this.imageUrlValidationState = 'has-error';
      this.cateValidationState = 'has-error';

      this.id='';
      this.name = '';
      this.author = '';
      this.publisher = '';
      this.code = '';
      this.status = 0;
      this.description = '';
      this._cateId='';
      this.fileAvatar={};
      this.imagePreviewUrl='/uploads/avatar.jpg';
      this.imageUrl='/uploads/avatar.jpg';

      this.helpBlockName = errorMessage;
      this.helpBlockAuthor = errorMessage;
      this.helpBlockPublisher = errorMessage;
      this.helpBlockStatus = errorMessage;
      this.helpBlockCode = errorMessage;
      this.helpBlockDescription = errorMessage;
      this.helpBlockCate = errorMessage;
    }
 

    onUpdateName(event)
    {
    	this.name = event.target.value;
    	this.nameValidationState = '';
   		this.helpBlockName = '';
      this.helpBlockAuthor = '';
      this.helpBlockPublisher = '';
      this.helpBlockStatus = '';
      this.helpBlockCode = '';
      this.helpBlockDescription = '';
      this.helpBlockCate = '';
    }

    onUpdateAuthor(event)
    {
    	this.author = event.target.value;
    	this.authorValidationState = '';
    	this.helpBlockName = '';
      this.helpBlockAuthor = '';
      this.helpBlockPublisher = '';
      this.helpBlockStatus = '';
      this.helpBlockCode = '';
      this.helpBlockDescription = '';
      this.helpBlockCate = '';
    }
    onUpdatePublisher()
    {
      this.publisher = event.target.value;
      this.publisherValidationState = '';
      this.helpBlockPublisher = '';
    }
     onUpdateCode(event)
    {
      this.code = event.target.value;
      this.codeValidationState = '';
      this.helpBlockName = '';
      this.helpBlockAuthor = '';
      this.helpBlockPublisher = '';
      this.helpBlockStatus = '';
      this.helpBlockCode = '';
      this.helpBlockDescription = '';
      this.helpBlockCate = '';
    }
     onUpdateStatus(event)
    {
      this.status = event.target.value;
      this.statusValidationState = '';
      this.helpBlockName = '';
      this.helpBlockAuthor = '';
      this.helpBlockPublisher = '';
      this.helpBlockStatus = '';
      this.helpBlockCode = '';
      this.helpBlockDescription = '';
      this.helpBlockCate = '';
    }
    onUpdateDescription()
    {
      this.description = event.target.value;
      this.descriptionValidationState = '';
      this.helpBlockDescription = '';
    }
    onUpdateImagepreview(imgURL)
    {
          this.imagePreviewUrl = imgURL;
    }
    onUpdateImagefile(file)
    {
          this.fileAvatar = file;
    }
     onUpdateCate(event)
    {
      this._cateId = event.target.value;
      this.helpBlockName = '';
      this.helpBlockAuthor = '';
      this.helpBlockPublisher = '';
      this.helpBlockStatus = '';
      this.helpBlockCode = '';
      this.helpBlockDescription = '';
      this.helpBlockCate = '';
    }
    onInvalidName()
    {
    	this.nameValidationState='has-error';
    	this.helpBlockName='Please enter BookName';	
    }
    onInvalidAuthor()
    {
    	this.authorValidationState='has-error';
    	this.helpBlockAuthor='Please enter Author';	
    }
    onInvalidPublisher()
    {
      this.publisherValidationState='has-error';
      this.helpBlockPublisher='Please enter Publisher'; 
    }

    onInvalidBarcode(){
      this.codeValidationState ='has-error';
      this.helpBlockCode ='Please Enter Barcode';
    }
    onInvalidStatus()
    {
      this.statusValidationState = 'has-error';
      this.helpBlockStatus = 'Please select status';
    }
    onInvalidDescription()
    {
      this.descriptionValidationState = 'has-error';
      this.helpBlockDescription = 'Please enter description';
    }

    onInvalidCate(){
      this.cateValidationState ='has-error';
      this.helpBlockCate ='Please select cate';
    }


    onHandleUpload()
    {
     this.helpBlockUpload ="Đang tải lên....";
    }
    onUploadImageSuccess(){
        this.helpBlockUpload ="Tải lên thành công";
        console.log(this.imageUrl);
    }
    onUploadImageFail(jqXhr){
        this.helpBlockUpload ="Quá trình tải thất bại";
        toastr.error(jqXhr.responseJSON.message);
    }
}
export default alt.createStore(AddBookStore);