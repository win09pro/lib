import alt from '../../alt';

class ViewTranAction {
  constructor() {
    this.generateActions(
      'getTranSuccess',
      'getTranFail'     
    );
  }

  getTran(tranid) {
    $.ajax({
      url: '/api/tran/'+tranid})
      .done((data) => {
        this.actions.getTranSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getTranFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(ViewTranAction);