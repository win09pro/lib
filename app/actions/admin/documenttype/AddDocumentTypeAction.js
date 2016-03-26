import alt from '../../../alt';

class AddDocumentTypeAction {
  constructor() {
    this.generateActions(
      'addDocSuccess',
      'addDocFail',
      'updateName',
      'updateDescription',
      'invalidName',
      'invalidDescription',
      'getDocSuccess',
      'getDocFail',
      'resetState'
     
    );
  }
  getById(docid){
    $.ajax({
      url: '/api/document-type/'+ docid})
    .done((data) =>{
      this.actions.getDocSuccess(data);
    })
    .fail((jqXhr) =>{
      this.actions.getDocFail(jqXhr.responseJSON.message);
    });
        
  }

  addDocumentType(id , name, description) {
    $.ajax({
      type: 'POST',
      url: '/api/document-type',
      data: {id:id, name: name, description: description }
    })
      .done((data) => {
        this.actions.addDocSuccess(data.message);
      })
      .fail((jqXhr) => {
        this.actions.addDocFail(jqXhr.responseJSON.message);
      });
  }

}
export default alt.createActions(AddDocumentTypeAction);