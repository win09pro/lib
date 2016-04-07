import alt from '../../alt';
import AddTranAction from '../../actions/transition/AddTranAction';
import listTransActions from '../../actions/transition/listTransActions';

function getDateString(date){
  var time,date1,month,year;
  time = new Date(date);
  date1=time.getDate();
  month =time.getMonth()+1;
  if(month<10) month ='0'+month;
  year =time.getFullYear();

  return year+'-'+month+'-'+date1;

}

class AddTranStore {
  constructor() {
    this.bindActions(AddTranAction);
    this.id='';
    this.bookId = '';
    this.bookName = '';
    this.books=[];
    this.listTran=[];
    this.filteredbooks=[];
    this.dateBorrow = '';
    this.dateReturn = '';
    this.timeBorrow = '';

    this.helpBlockBookId = '';
    this.helpBlockBookName = '';
    this.helpBlockDateBorrow = '';
    this.helpBlockDateReturn = '';
    this.helpBlockTimeBorrow = '';
   

    this.bookIdValidationState = '';
    this.bookNameValidationState = '';
    this.dateBorrowValidationState = '';
    this.dateReturnValidationState = '';
    this.timeBorrowValidationState = '';

  }

  onResetState()
  {
    this.id='';
    this.bookId = '';
    this.bookName = '';
    this.dateBorrow = '';
    this.dateReturn = '';
    this.timeBorrow = '';

    this.helpBlockBookId = '';
    this.helpBlockBookName = '';
    this.helpBlockDateBorrow = '';
    this.helpBlockDateReturn = '';
    this.helpBlockTimeBorrow = '';

    this.bookIdValidationState = '';
    this.bookNameValidationState = '';
    this.dateBorrowValidationState = '';
    this.dateReturnValidationState = '';
    this.timeBorrowValidationState = '';
  }
   onGetTranSuccess(data)
   {
      this.id=data._id;
      this.bookId = data.bookId;
      this.bookName = data.bookName;   
      this.dateBorrow = getDateString(data.dateBorrow);
      this.dateReturn = getDateString(data.dateReturn);
      this.timeBorrow =data.timeBorrow;
      

      this.helpBlockBookId = '';
      this.helpBlockBookName = '';
      this.helpBlockDateBorrow = '';
      this.helpBlockDateReturn = '';
      this.helpBlockTimeBorrow = '';

      this.bookIdValidationState = '';
      this.bookNameValidationState = '';
      this.dateBorrowValidationState = '';
      this.dateReturnValidationState = '';
      this.timeBorrowValidationState = '';
   }
   onGetTranFail(jqXhr)
   {
     toastr.error(jqXhr.responseJSON.message);
   }
  
   onGetBooksuccessReference(data){
      this.books=data;
   }
   onGetBookfailReference(jqXhr){
    toastr.error(jqXhr.responseJSON.message);
   }
   onGetTranListCurrentSuccess(data){
      this.listTran =data;
      console.log(this.listTran);
      var i=0,j=0;

      var listTranLenght= this.listTran.length;
      var booksLength =this.books.length;
      var filter1=this.books;
      while(this.filteredbooks.length){
        this.filteredbooks.pop();
      }
      if(this.listTran.length!=0){
        for(i=0;i<listTranLenght ;i++){
          for(j=0;j<filter1.length;j++){
            if(this.listTran[i].bookId==filter1[j]._id){
                filter1.splice(j,1);
                console.log(filter1.length);
            }
          }
        }
        this.filteredbooks= filter1;
      }else{
        this.filteredbooks=this.books;
      }
      if(this.filteredbooks.length ==0){
        this.bookId ='';
        this.bookName ='';

      }else{

        this.bookId =this.filteredbooks[0]._id;
        this.bookName =this.filteredbooks[0].name;

      }

   }
   onGetTranListCurrentFail(jqXhr){
    toastr.error(jqXhr.responseJSON.message);
   }
   onAddTranSuccess(SuccessMessage)
   {

    this.bookIdValidationState = 'has-success';
    this.bookNameValidationState = 'has-success';
    this.dateBorrowValidationState = 'has-success';
    this.dateReturnValidationState = 'has-success';
    this.timeBorrowValidationState = 'has-success';

    this.helpBlockBookId = SuccessMessage;
    this.helpBlockBookName = SuccessMessage;
    this.helpBlockDateBorrow = SuccessMessage;
    this.helpBlockDateReturn = SuccessMessage;
    this.helpBlockTimeBorrow = SuccessMessage;


    this.id='';
    this.bookId = '';
    this.bookName = '';
    this.dateBorrow = '';
    this.dateReturn = '';
    this.timeBorrow = '';

    listTransActions.get();
   }

    onAddTranFail(errorMessage)
    {
      
      this.bookIdValidationState = 'has-error';
      this.bookNameValidationState = 'has-error';
      this.dateBorrowValidationState = 'has-error';
      this.dateReturnValidationState = 'has-error';
      this.timeBorrowValidationState = 'has-error';

      this.id = '';
      this.bookId = '';
      this.bookName = '';
      this.dateBorrow = '';
      this.dateReturn = '';
      this.timeBorrow = '';

      this.helpBlockBookId = errorMessage;
      this.helpBlockBookName = errorMessage;
      this.helpBlockDateBorrow = errorMessage;
      this.helpBlockDateReturn = errorMessage;
      this.helpBlockTimeBorrow = errorMessage;

    }
 

    onUpdateBookId(event)
    {
    	this.bookId = event.target.value;

    	this.bookIdValidationState = '';

   		this.helpBlockBookId = '';
      this.helpBlockBookName = '';
      this.helpBlockDateBorrow = '';//khong su dung nua !!!
      this.helpBlockDateReturn = '';
      this.helpBlockTimeBorrow = '';
    }

    onUpdateBookName(event)
    {

      this.bookId= event.target.value;
      if(this.bookId!==''){
        var i=0;
        for (i =0 ;i< this.books.length ; i++){
            if(this.books[i]._id ===this.bookId){
              this.bookName =this.books[i].name;
            }
          }
      }
      console.log(this.bookId);
      console.log(this.bookName);

    	this.bookNameValidationState = '';
    	this.helpBlockBookId = '';
      this.helpBlockBookName = '';
      this.helpBlockDateBorrow = '';
      this.helpBlockDateReturn = '';
      this.helpBlockTimeBorrow = '';
    }
     onUpdateDateBorrow(event)
    {
      this.dateBorrow = event.target.value;
      this.dateBorrowValidationState = '';
      this.helpBlockBookId = '';
      this.helpBlockBookName = '';
      this.helpBlockDateBorrow = '';
      this.helpBlockDateReturn = '';
      this.helpBlockTimeBorrow = '';
    }
     onUpdateDateReturn(event)
    {
      this.dateReturn = event.target.value;
      this.dateReturnValidationState = '';
      this.helpBlockBookId = '';
      this.helpBlockBookName = '';
      this.helpBlockDateBorrow = '';
      this.helpBlockDateReturn = '';
      this.helpBlockTimeBorrow = '';
    }
     onUpdateTimeBorrow(event)
    {
      this.timeBorrow = event.target.value;
      this.timeBorrowValidationState = '';
      this.helpBlockBookId = '';
      this.helpBlockBookName = '';
      this.helpBlockDateBorrow = '';
      this.helpBlockDateReturn = '';
      this.helpBlockTimeBorrow = '';
    }
    onInvalidBookId()
    {
    	this.bookIdValidationState='has-error';
    	this.helpBlockBookId="We don't have anymore book to borrow";	
    }
    onInvalidBookName(){
      this.bookNameValidationState ='has-error';
      this.helpBlockBookName ='Please Enter BOOK NAME';
    }
    onInvalidDateBorrow()
    {
    	this.dateBorrowValidationState='has-error';
    	this.helpBlockDateBorrow='Please enter Date Borrow';	
    }
    onInvalidDateReturn(){
      this.dateReturnValidationState ='has-error';
      this.helpBlockDateReturn ='Please Enter Date Return';
    }
    
    onInvalidTimeBorrow(){
      this.timeBorrowValidationState ='has-error';
      this.helpBlockTimeBorrow ='Please Enter Number TimeBorrow';
    }
    onInvalidDateTimeTransition(){
      this.dateBorrowValidationState ='has-error';
      this.helpBlockDateBorrow = 'Please enter correct time !';
      this.dateReturnValidationState ="har-error";
      this.helpBlockDateReturn = 'Please enter correct time !';
    }
}
export default alt.createStore(AddTranStore);