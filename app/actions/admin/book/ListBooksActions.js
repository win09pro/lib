import alt from '../../../alt';
// import listTransActions from './transition/listTransActions';

class ListBooksActions {
  constructor() {
    this.generateActions(
      'getBookSuccess',
      'getBookFail', 
      'deleteSucess',
      'deleteFail'     
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
        this.actions.deleteSucess(data.message);
        listTransActions.deleteTranByBookId(temp);
        listTransActions.get();
      })
      .fail((jqXhr) => {
        this.actions.deleteFail(jqXhr.responseJSON.message);
      });
  }
  get() {
    $.ajax({    
      url: '/api/book'      
    })
      .done((data) => {
        this.actions.getBookSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getBookFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(ListBooksActions);