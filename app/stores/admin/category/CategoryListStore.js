import alt from '../../../alt';
import CategoryListAction from '../../../actions/admin/category/CategoryListAction';

class CategoryListStore {
  constructor() {
    this.bindActions(CategoryListAction);
    this.listcategory = [];
    this.deletemessage='';
    
  }
  onGetCategoryListSuccess(data)
  {
  	this.listcategory = data;
  }
  onGetCategoryListFail(jqXhr) {
    toastr.error(jqXhr.responseJSON.message);
  }
  onDeleteCateSucess(message)
  {
     this.deletemessage=message;
  }
   onDeleteCateFail(jqXhr)
  {
    toastr.error(jqXhr.responseJSON.message);
  }
}
export default alt.createStore(CategoryListStore);