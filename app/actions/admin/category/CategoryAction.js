import alt from '../../../alt';

class CategoryAction {
  constructor() {
    this.generateActions(
      'getCategorySuccess',
      'getCategoryFail'     
    );
  }

  getCate(cateid) {
    $.ajax({
      url: '/api/category/'+cateid})
      .done((data) => {
        this.actions.getCategorySuccess(data);
      
      })
      .fail((jqXhr) => {
        this.actions.getCategoryFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(CategoryAction);