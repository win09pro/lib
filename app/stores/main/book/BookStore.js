import alt from '../../../alt';
import BookAction from '../../../actions/main/book/BookAction';

class BookStore{
	constructor() {
	    this.bindActions(BookAction);
	    this.bookhome = [];
	    this.listallbook = [];
	    this.detailBook ={};
      this.cate = {};
  	}
    onGetBookHomeSuccess(data){
      this.bookhome = data;
    }
    onGetBookHomeFail(){

    }
  	onGetDetailBookSuccess(data){
  		this.detailBook = data.book;
      this.cate = data.cate;
  	}
  	onGetDetailBookFail(jqXhr){
  		this.detailBook = {name: 'Khong tim thay du lieu'};
  	}
  	onGetListAllBookSuccess(data){
  		this.listallbook = data;
  	}
  	onGetListAllBookFail(){
  		toastr.error(jqXhr.responseJSON.message);
  	}
}

export default alt.createStore(BookStore);