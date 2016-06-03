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
  	}
  	onGetListAllBookFail(){
  		toastr.error(jqXhr.responseJSON.message);
  	}
}

export default alt.createStore(BookStore);