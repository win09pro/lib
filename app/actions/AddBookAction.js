import alt from '../alt';

class AddBookAction {
  constructor() {
    this.generateActions(
      'addBookSuccess',
      'addBookFail',
      'updateName',
      'updateDirector',
      'invalidName',
      'invalidDirector',
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

  addBook(id , name, director) {
    $.ajax({
      type: 'POST',
      url: '/api/book',
      data: {id:id, name: name, director: director }
    })
      .done((data) => {
        this.actions.addBookSuccess(data.message);
      })
      .fail((jqXhr) => {
        this.actions.addBookFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(AddBookAction);