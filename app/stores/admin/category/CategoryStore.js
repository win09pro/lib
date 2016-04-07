import alt from '../../../alt';

import CategoryAction from '../../../actions/admin/category/CategoryAction';

class CategoryStore {
  constructor() {
    this.bindActions(CategoryAction);
    this.category ={};
    this.doctype = {};
    this.helpMessage = '';   
  }
  onGetCategorySuccess(data)
  {
    this.category =data.cate;
    this.doctype = data.doctype;

    this.helpMessage = '';  
  }
  onGetCategoryFail(jqXhr)
  {
    toastr.error(jqXhr.responseJSON.message);
  }     
}
export default alt.createStore(CategoryStore);