import alt from '../../../alt';

class DocumentTypeListAction {
  constructor() {
    this.generateActions(
      'getDocListSuccess',
      'getDocListFail', 
      'deleteDocSucess',
      'deleteDocFail'     
    );
  }
  delete(doc)
   {
      $.ajax({
        type: 'POST',
        url: '/api/deleteDoc',
        data: { id: doc._id}
      })
        .done((data) => {
          this.actions.deleteDocSucess(data.message);
        })
        .fail((jqXhr) => {
          this.actions.deleteDocFail(jqXhr.responseJSON.message);
        });
    }
  get() {
    $.ajax({
      type: 'GET',    
      url: '/api/document-type'      
    })
      .done((data) => {
        this.actions.getDocListSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getDocListFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(DocumentTypeListAction);