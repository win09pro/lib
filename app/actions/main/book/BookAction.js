import alt from '../../../alt';

class BookAction {
	constructor(){
		this.generateActions(
			'getBookHomeSuccess',
			'getBookHomeFail',

			'getBookNewSuccess',
			'getBookNewFail',

			'getListAllBookSuccess',
			'getListAllBookFail',

			'getListBookCateSuccess',
			'getListBookCateFail',

			'getListBookDocSuccess',
			'getListBookDocFail',

			'getDetailBookSuccess',
			'getDetailBookFail',

			'addtransSuccess',
			'addtransFail',

			'getRelatedBookSuccess',
			'getRelatedBookFail',

			'nextpage',
      		'previouspage',

      		'updateCharCount',
      		'invalidComment' ,
      		'addCommentSuccess',
      		'addCommentFail'  ,
      		'getCommentSuccess',
      		'getCommentFail',

      		'updateTextFind',
      		'searchTextSuccess',
      		'searchTextFail'
		);
	}
	getBookHome(){
		$.ajax({
			url: '/api/bookhome',
			type: 'GET',
		})
		.done((data) => {
			this.actions.getBookHomeSuccess(data);
		})
		.fail((jqXhr) => {
			this.actions.getBookHomeFail(jqXhr.responseJSON.message);
		});
		
	}
	getListAllBook(){
		$.ajax({
			url: '/api/listbook',
			type: 'GET'
		})
		.done((data) => {
			this.actions.getListAllBookSuccess(data);
			console.log(data);
		})
		.fail((jqXhr) => {
			this.actions.getListAllBookFail(jqXhr.responseJSON.message);
		});
	}
	//lay cac sach theo ten category
	getListBookCate(catename){
		console.log(catename);
		$.ajax({
			url: '/api/bookcate/' + catename,
			type: 'GET',
		})
		.done((data) => {
			this.actions.getListBookCateSuccess(data);
		})
		.fail((jqXhr) => {
			this.actions.getListBookCateFail(jqXhr.responseJSON.message);
		});
	}
	//lay cac sach theo ten documenttype
	getListBookDoc(docname){
		// console.log(catename);
		$.ajax({
			url: '/api/bookdoc/' + docname,
			type: 'GET',
		})
		.done((data) => {
			this.actions.getListBookDocSuccess(data);
		})
		.fail((jqXhr) => {
			this.actions.getListBookDocFail(jqXhr.responseJSON.message);
		});
	}
	getDetailBook(bookid){
		$.ajax({
			url: '/api/book/' + bookid,
			type: 'GET',
		})
		.done((data) => {
			this.actions.getDetailBookSuccess(data);
		})
		.fail((jqXhr) => {
			this.actions.getDetailBookFail(jqXhr.responseJSON.message);
		});
	}
	getRelatedBook(bookid){
		$.ajax({
			url: '/api/relatedbook/' + bookid,
			type: 'GET',
		})
		.done((data) => {
			console.log(data);
			this.actions.getRelatedBookSuccess(data);
		})
		.fail((jqXhr) => {
			this.actions.getRelatedBookFail(jqXhr.responseJSON.message);
		});
	}
	getBookNew(){
		$.ajax({
			url: '/api/booknew',
			type: 'GET'
		})
		.done((data) => {
			this.actions.getBookNewSuccess(data);
			console.log(data);
		})
		.fail((jqXhr) => {
			this.actions.getBookNewFail(jqXhr.responseJSON.message);
		});
	}
	addTransition(payload){
		$.ajax({
			url: '/api/addtransition',
			type: 'POST',
			data: {barcode: payload.barcode , bookname: payload.bookname, username: payload.username, dateBorrow: payload.dateStart, dateReturn: payload.dateEnd}
		})
		.done((data) => {
			this.actions.addtransSuccess(data.message);
		})
		.fail((jqXhr) => {
			this.actions.addtransFail(jqXhr);
		});
	}
	addComment(payload){
		$.ajax({
			url: '/api/addComment',
			type: 'POST',
			data: {_bookId: payload.bookId , _userId: payload.userId, content: payload.content, date: payload.date}
		})
		.done((data) => {
			this.actions.addCommentSuccess(data);
		})
		.fail((jqXhr) => {
			this.actions.addCommentFail(jqXhr.responseJSON.message);
		});
	}
	getComment(bookId){
		$.ajax({
			url: '/api/getComment/' + bookId,
			type: 'GET',
		})
		.done((data) => {
			this.actions.getCommentSuccess(data);
		})
		.fail((jqXhr) => {
			this.actions.getCommentFail(jqXhr.responseJSON.message);
		});
	}
	searchText(textFind){
		$.ajax({
			url: '/api/search/' + textFind,
			type: 'GET',
		})
		.done((data) => {
			this.actions.searchTextSuccess(data);
		})
		.fail((jqXhr) => {
			this.actions.searchTextFail(jqXhr.responseJSON.message);
		});
	}
}

export default alt.createActions(BookAction);