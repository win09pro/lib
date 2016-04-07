import alt from '../alt';
import listTransActions from './transition/listTransActions';
class listBooksActions {
  constructor() {
    this.generateActions(
      'getBooksuccess',
      'getBookfail', 
      'deletesucess',
      'deletefail'     
    );
  }
  delete(book){  
    var temp =book;
    $.ajax({
      type: 'POST',
      url: '/api/deletebook',
      data: { id: book._id}
    })
      .done((data) => {
        this.actions.deletesucess(data.message);
        listTransActions.deleteTranByBookId(temp);
        listTransActions.get();
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