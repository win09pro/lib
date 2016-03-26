import alt from '../../../alt';

class AddCategoryAction {
  constructor() {
    this.generateActions(
      'addCategorySuccess',
      'addCategoryFail',
      'updateName',
      'updateDescription',
      'updateDocumentType',
      'invalidName',
      'invalidDescription',
      'invalidDocumentType',
      'getCategorySuccess',
      'getCategoryFail',
      'resetState'
     
    );
  }
   getById(cateid) {
    $.ajax({
      url: '/api/category/'+cateid})
      .done((data) => {
        this.actions.getCategorySuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getCategoryFail(jqXhr.responseJSON.message);
      });
  }

  addCategory(id , name, description, _documenttype) {
    $.ajax({
      type: 'POST',
      url: '/api/category',
      data: {id:id, name: name, description: description, _documenttype:_documenttype }
    })
      .done((data) => {
        this.actions.addCategorySuccess(data.message);
      })
      .fail((jqXhr) => {
        this.actions.addCategoryFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(AddCategoryAction);