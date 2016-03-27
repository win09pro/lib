import alt from '../../../alt';

class CategoryListAction {
  constructor() {
    this.generateActions(
      'getCategoryListSuccess',
      'getCategoryListFail', 
      'deleteCateSucess',
      'deleteCateFail'     
    );
  }
  delete(id)
 {
    $.ajax({
      type: 'POST',
      url: '/api/delete-category',
      data: { id: id}
    })
      .done((data) => {
        this.actions.deleteCateSucess(data.message);
      })
      .fail((jqXhr) => {
        this.actions.deleteCateFail(jqXhr.responseJSON.message);
      });
  }
  get() {
    $.ajax({ 
      type: 'GET',   
      url: '/api/category'      
    })
      .done((data) => {
        this.actions.getCategoryListSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getCategoryListFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(CategoryListAction);