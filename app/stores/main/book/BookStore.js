import alt from '../../../alt';
import BookAction from '../../../actions/main/book/BookAction';

class BookStore{
	constructor() {
	    this.bindActions(BookAction);
      // rating
      this.rating = 0;
      this.numOfRate = 0;
      this.averageRate = 0;
      this.bookIdtoGetRate = '';

	    this.bookhome = [];
	    this.listallbook = [];
      this.listbookcate = [];
      this.relatedbooks = [];
      this.booknews = [];
	    this.detailBook ={};
      this.cate = {};
      this.cateOne = {};
      this.documenttype = {};

      this.showAlert ="aaaaaaa";

      this.listbookdoc = [];
      this.doc = {};

      this.numpostview=9;
      this.numpage=0;
      this.currentpage=1;
      this.numpost=0;

      this.charcount = 400;
      this.commentContent = '';
      this.helpBlockComment = '';

      this.comments = [];

      this.textFind = '';
      this.listBookSearch = [];
  	}
    onPreviouspage(){
      if (this.currentpage>1)
     this.currentpage--;   
    }

    onNextpage()
    {
      if (this.currentpage<this.numpage)
       this.currentpage++;   
    }

    //update text tim kiem
    onUpdateTextFind(e){
      this.textFind = e.target.value;
    }
    onSearchTextSuccess(data){
      console.log(data);
      this.listBookSearch = data;
    }
    onSearchTextFail(jqXhr){
      toastr.error(jqXhr.responseJSON.message);
    }

    onUpdateCharCount(e){
      this.charcount = 400 - e.target.value.length;
      this.commentContent = e.target.value;
    }
    onInvalidComment()
    {
      this.helpBlockComment='Vui lòng nhập nội dung'; 
    }
    onAddCommentSuccess(data){
      this.charcount = 0;
      this.commentContent = '';
      this.helpBlockComment = '';
      BookAction.getComment(data._bookId);
    }
    onAddCommentFail(){
      this.charcount = 0;
      this.commentContent = '';
      this.helpBlockComment = 'Đã xảy ra lỗi, vui lòng thử lại';
    }
    onGetCommentSuccess(data){
      this.comments = data;
    }
    onGetCommentFail(jqXhr){
      toastr.error(jqXhr.responseJSON.message);
    }
    
    onGetBookHomeSuccess(data){
      this.bookhome = data;
    }
    onGetBookHomeFail(){

    }
    onGetBookNewSuccess(data){
      this.booknews = data;
    }
    onGetBookNewFail(){

    }
     onAddtransSuccess(message)
     {
      this.showAlert = message;     
     }
     onAddtransFail()
     {
     }
  	onGetDetailBookSuccess(data){
  		this.detailBook = data.book;
      this.cate = data.cate;
      this.documenttype = data.documenttype;
  	}
  	onGetDetailBookFail(jqXhr){
  		this.detailBook = {name: 'Khong tim thay du lieu'};
  	}
    onGetRelatedBookSuccess(data){
      this.relatedbooks = data;
    }
    onGetRelatedBookFail(jqXhr){
      toastr.error(jqXhr.responseJSON.message);
    }
    onGetListBookCateSuccess(data){
      this.listbookcate = data.bookcates;
      this.cateOne = data.cate;
      this.documenttype = data.documenttype;
    }
    onGetListBookCateFail(jqXhr){
      toastr.error(jqXhr.responseJSON.message);
    }
    onGetListBookDocSuccess(data){
      console.log(data);
      this.listbookdoc = data.bookdocs;
      this.doc = data.doc;
    }
    onGetListBookDocFail(jqXhr){
      toastr.error(jqXhr.responseJSON.message);
    }
  	onGetListAllBookSuccess(data){
  		this.listallbook = data;
      this.numpost=data.length;
      this.numpage=Math.ceil(this.numpost/Number(this.numpostview));
  	}
  	onGetListAllBookFail(){
  		toastr.error(jqXhr.responseJSON.message);
  	}

    // rating action
    onRateBookSuccess(data){
      this.numOfRate = data.numOfRate;
      this.averageRate = data.averageRate;
      // this.bookIdtoGetRate = data.bookId;
      // BookAction.getRateOfABook(data.bookId);
    }
    onRateBookFail(jqXhr){
      toastr.error(jqXhr.responseJSON.message);
    }
    onGetRateOfABookSuccess(data){
      this.numOfRate = data.numOfRate;
      this.averageRate = data.averageRate;
      this.rating = data.averageRate;
    }
    onGetRateOfABookFail(jqXhr){
      toastr.error(jqXhr.responseJSON.message);
    }
    
}

export default alt.createStore(BookStore);