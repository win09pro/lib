import alt from '../../../alt';
import BookAction from '../../../actions/main/book/BookAction';

class BookStore{
	constructor() {
	    this.bindActions(BookAction);
	    this.bookhome = [];
	    this.listallbook = [];
      this.listbookcate = [];
      this.relatedbooks = [];
      this.booknews = [];
	    this.detailBook ={};
      this.cate = {};
      this.cateOne = {};
      this.documenttype = {};

      this.numpostview=9;
      this.numpage=0;
      this.currentpage=1;
      this.numpost=0;

      this.charcount = 0;
      this.commentContent = '';
      this.helpBlockComment = '';

      this.comments = [];
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
    onUpdateCharCount(e){
      this.charcount = 400 - e.target.value.length;
      this.commentContent = e.target.value;
    }
    onInvalidComment()
    {
      this.helpBlockComment='Vui lòng nhập nội dung'; 
    }
    onAddCommentSuccess(message){
      this.charcount = 0;
      this.commentContent = '';
      this.helpBlockComment = '';
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
  	onGetListAllBookSuccess(data){
  		this.listallbook = data;
      this.numpost=data.length;
      this.numpage=Math.ceil(this.numpost/Number(this.numpostview));
  	}
  	onGetListAllBookFail(){
  		toastr.error(jqXhr.responseJSON.message);
  	}
}

export default alt.createStore(BookStore);