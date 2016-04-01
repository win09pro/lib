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
    console.log(data);
    this.books=data;
   }
   onGetBookfailReference(jqXhr){
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

      this.id='';
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
      console.log(this.books);
      var i=0;
      for (i =0 ;i< this.books.length ; i++){
        if(this.books[i]._id ===this.bookId){
          this.bookName =this.books[i].name;
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
    	this.helpBlockBookId='Please enter BookID';	
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
}
export default alt.createStore(AddTranStore);