import alt from '../../../alt';
import CategoryListAction from '../../../actions/admin/category/CategoryListAction';

class CategoryListStore {
  constructor() {
    this.bindActions(CategoryListAction);
    this.listcategory = [];
    this.deletemessage='';
    this.arrayIDtoDel=[];
    this.modalIsOpen=false;
  }
  onUpdateArrayId(id)
  {
    this.arrayIDtoDel.push(id);
  }
  onRemoveArrayId(id)
  {
    var index = this.arrayIDtoDel.indexOf(id);   
    this.arrayIDtoDel.splice(index,1);    
  }
  onGetCategoryListSuccess(data)
  {
  	this.listcategory = data;
    console.log(data);
  }
  onGetCategoryListFail(jqXhr) {
    toastr.error(jqXhr.responseJSON.message);
  }
  onDeleteCateSucess(message)
  {
     this.deletemessage=message;
     CategoryListAction.get();
  }
   onDeleteCateFail(jqXhr)
  {
    toastr.error(jqXhr.responseJSON.message);
  }
  onOpenModal()
  {
    if (this.arrayIDtoDel.length > 0)
      this.modalIsOpen=true;
  }
  onCloseModal()
  {
      this.modalIsOpen=false;
  }
}
export default alt.createStore(CategoryListStore);