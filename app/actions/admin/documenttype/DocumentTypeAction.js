import alt from '../../../alt';

class DocumentTypeAction {
  constructor() {
    this.generateActions(
      'getDocSuccess',
      'getDocFail'     
    );
  }

  getDoc(docid) {
    $.ajax({
      url: '/api/document-type/'+ docid})
      .done((data) => {
        this.actions.getDocSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getDocFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(DocumentTypeAction);