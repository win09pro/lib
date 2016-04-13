import alt from '../../alt';

class AddTranAction {
  constructor() {
    this.generateActions(
      'addTranSuccess',
      'addTranFail',

      'updateBookId',
      'updateBookName',
      'updateDateBorrow',
      'updateDateReturn',
      'updateTimeBorrow',
      'updateUser',
      
      'invalidUser',      
      'invalidBookId',
      'invalidBookName',
      'invalidDateBorrow',
      'invalidDateReturn',
      'invalidTimeBorrow',
      'invalidDateTimeTransition',
      'getBooksuccessReference',
      'getBookfailReference',
      'getTranSuccess',
      'getTranFail',

      'getTranListCurrentSuccess',
      'getTranListCurrentFail',
      'getUsersuccess',
      'getUserfail',
      'resetState'
     
    );
  }
   getTranId(tranid) {
    $.ajax({
      url: '/api/tran/'+tranid})
      .done((data) => {
        this.actions.getTranSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getTranFail(jqXhr.responseJSON.message);
      });
  }
  getListTranCurrent() {
    $.ajax({    
      url: '/api/tran'      
    })
      .done((data) => {
        this.actions.getTranListCurrentSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getTranListCurrentFail(jqXhr.responseJSON.message);
      });
  }

  getListUser(){
    $.ajax({    
      url: '/api/user'      
    })
      .done((data) => {
        this.actions.getUsersuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getUserfail(jqXhr.responseJSON.message);
      });
  }

  getBooks() {
    $.ajax({    
      url: '/api/book'      
    })
      .done((data) => {
        this.actions.getBooksuccessReference(data);
      })
      .fail((jqXhr) => {
        this.actions.getBookfailReference(jqXhr.responseJSON.message);
      });
  }
  
  addTran(id , bookId, bookName ,userId , userName ,dateBorrow , dateReturn , timeBorrow ) {
    $.ajax({
      type: 'POST',
      url: '/api/tran',
      data: {id:id, bookId: bookId, bookName: bookName ,userid :userId , userName : userName ,dateBorrow :dateBorrow , dateReturn: dateReturn , timeBorrow :timeBorrow }
    })
      .done((data) => {
        this.actions.addTranSuccess(data.message);
      })
      .fail((jqXhr) => {
        this.actions.addTranFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(AddTranAction);