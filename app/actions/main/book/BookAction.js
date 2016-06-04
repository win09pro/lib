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

			'getDetailBookSuccess',
			'getDetailBookFail',

			'getRelatedBookSuccess',
			'getRelatedBookFail',

			'nextpage',
      		'previouspage',

      		'updateCharCount',
      		'invalidComment' ,
      		'addCommentSuccess',
      		'addCommentFail'  ,
      		'getCommentSuccess',
      		'getCommentFail'
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
		});
		// .done((data) => {
		// 	this.actions.getDetailBookSuccess(data);
		// })
		// .fail((jqXhr) => {
		// 	this.actions.getDetailBookFail(jqXhr.responseJSON.message);
		// });
	}
	addComment(payload){
		$.ajax({
			url: '/api/addComment',
			type: 'POST',
			data: {_bookId: payload.bookId , _userId: payload.userId, content: payload.content, date: payload.date}
		})
		.done((data) => {
			this.actions.addCommentSuccess(data.message);
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
}

export default alt.createActions(BookAction);