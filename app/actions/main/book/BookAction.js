import alt from '../../../alt';

class BookAction {
	constructor(){
		this.generateActions(
			'getBookHomeSuccess',
			'getBookHomeFail',

			'getListAllBookSuccess',
			'getListAllBookFail',

			'getDetailBookSuccess',
			'getDetailBookFail',

			'getRelatedBookSuccess',
			'getRelatedBookFail'
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
	addTransition(payload){
		$.ajax({
			url: '/api/addtransition',
			type: 'POST',
			data: {_bookId: payload.idBook , _userId: payload.idUser, dateBorrow: payload.dateStart, dateReturn: payload.dateEnd}
		});
		// .done((data) => {
		// 	this.actions.getDetailBookSuccess(data);
		// })
		// .fail((jqXhr) => {
		// 	this.actions.getDetailBookFail(jqXhr.responseJSON.message);
		// });
	}
}

export default alt.createActions(BookAction);