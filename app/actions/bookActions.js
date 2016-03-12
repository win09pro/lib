import alt from '../alt';

class bookActions {
  constructor() {
    this.generateActions(
      'getBookSuccess',
      'getBookFail'     
    );
  }

  getBook(bookid) {
    $.ajax({
      url: '/api/book/'+bookid})
      .done((data) => {
        this.actions.getBookSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getBookFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(bookActions);