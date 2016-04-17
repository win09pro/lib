import alt from '../../../alt';
import AddPostCategoryActions from '../../../actions/admin/post/AddPostCategoryActions';
import listPostsCateActions from '../../../actions/admin/post/listPostsCateActions';
import moment from 'moment';

class AddPostCategoryStore {
  constructor() {
      this.bindActions(AddPostCategoryActions);
      this.id='';
      this.nameCate ='';
      this.Type ='';      

      this.helpBlockNameCate='';
      this.helpBlocktype='';
      
      this.nameCateValidation ='';
      this.typeValidationState='';     
    
    } 
  
    onUpdateNameCate(event)
    {
      this.nameCate = event.target.value;
      this.nameCateValidation ='';
      this.helpBlockNameCate ='';
    }
    onUpdateType(event)
    {     
      this.Type = event.target.value;
      this.typeValidationState ='';
      this.helpBlocktype ='';
    }  
    onInvalidnameCate()
    {
      this.nameCateValidation ='has-error';
      this.helpBlockNameCate ='Chưa nhập danh mục bài viết';    
    }
    onInvalidType()
    {
      this.typeValidationState ='has-error';
      this.helpBlocktype ='Chưa chọn kiểu danh mục';
    }    
    onAddPostCateSuccess(SuccessMessage)
      {
        this.typeValidationState ='has-success';
        this.nameCateValidation='has-success';   

        this.id='';
        this.nameCate ='';
        this.Type ='';      

        this.helpBlockNameCate='';
        this.helpBlocktype=SuccessMessage;
        listPostsCateActions.get();
      }
    onAddPostCateFail(errorMessage)
      {
        this.typeValidationState ='has-error';
        this.nameCateValidation='has-error';   

        this.id='';
        this.nameCate ='';
        this.Type ='';      

        this.helpBlockNameCate=errorMessage;
        this.helpBlocktype=errorMessage;
      }      
      onGetPostSuccess(data)
      {      
        this.id=data._id;
        this.nameCate =data.nameCate;
        this.Type =data.Type;      

        this.helpBlockNameCate='';
        this.helpBlocktype='';
      
        this.nameCateValidation ='';
        this.typeValidationState='';     
      }
      onGetPostFail(jqXhr)
      {
      toastr.error(jqXhr.responseJSON.message);
      }
      onResetAll()
      {
      this.id='';
      this.nameCate ='';
      this.Type ='';      

      this.helpBlockNameCate='';
      this.helpBlocktype='';
      
      this.nameCateValidation ='';
      this.typeValidationState='';     
      }
      onClearAll()
      {
      this.nameCate ='';
      this.Type ='';      

      this.helpBlockNameCate='';
      this.helpBlocktype='';
      
      this.nameCateValidation ='';
      this.typeValidationState='';     
      }


}
export default alt.createStore(AddPostCategoryStore);
