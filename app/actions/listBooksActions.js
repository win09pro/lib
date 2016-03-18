import alt from '../alt';

class listBooksActions {
  constructor() {
    this.generateActions(
      'getBooksuccess',
      'getBookfail', 
      'deletesucess',
      'deletefail'     
    );
  }
  delete(book)
 {
    $.ajax({
      type: 'POST',
      url: '/api/deletebook',
      data: { id: book._id}
    })
      .done((data) => {
        this.actions.deletesucess(data.message);
      })
      .fail((jqXhr) => {
        this.actions.deletefail(jqXhr.responseJSON.message);
      });
  }
  get() {
    $.ajax({    
      url: '/api/book'      
    })
      .done((data) => {
        this.actions.getBooksuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getBookfail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(listBooksActions);