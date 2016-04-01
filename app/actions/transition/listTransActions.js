import alt from '../../alt';

class listTransActions {
  constructor() {
    this.generateActions(
      'getTransuccess',
      'getTranfail', 
      'deletesuccess',
      'deletefail'     
    );
  }
  delete(tran)
 {
    $.ajax({
      type: 'POST',
      url: '/api/deletetran',
      data: { id: tran._id}
    })
      .done((data) => {
        this.actions.deletesuccess(data.message);
      })
      .fail((jqXhr) => {
        this.actions.deletefail(jqXhr.responseJSON.message);
      });
  }
  get() {
    $.ajax({    
      url: '/api/tran'      
    })
      .done((data) => {
        this.actions.getTransuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getTranfail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(listTransActions);