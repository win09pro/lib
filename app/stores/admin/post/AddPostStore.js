import alt from '../../../alt';
import AddPostActions from '../../../actions/admin/post/AddPostActions';
import listPostsActions from '../../../actions/admin/post/listPostsActions';
import moment from 'moment';

class AddPostStore {
  constructor() {
      this.bindActions(AddPostActions);
      this.id='';
      this.content ='<div>aaaaaaaaaaaaaa</div>';
      this.title ='';
      this.introduce='';
      this.dateStart =new Date();

      this.helpBlockTitle='';
      this.helpBlockIntroduce='';
      this.helpBlockContent='';
      this.helpBlockDateStart='';

      this.titleValidationState ='';
      this.contentValidationState='';
      this.introduceValidationState='';
      this.dateStartvalidationState='';
     // this.DateEnd = moment(this.DateStart).add(7, 'days');
    }
    onUpdateDateStart(date)
    {             
      this.dateStart = date._d;          
      this.dateStartvalidationState ='';
      this.helpBlockDateStart ='';             
    }
    onUpdateContent(value)
    {      
      console.log("value = " + value);
      this.content = value[0];       
      this.contentValidationState ='';
      this.helpBlockContent ='';             
    }
    onUpdateTitle(event)
    {
      this.title = event.target.value;
      this.titleValidationState ='';
      this.helpBlockTitle ='';                    
    }
    onUpdateIntroduce(event)
    {
      this.introduce = event.target.value;
      this.introduceValidationState ='';
      this.helpBlockIntroduce ='';             
    }
    onInvalidTitle()
    {
      this.titleValidationState ='has-error';
      this.helpBlockTitle ='Chưa nhập chủ đề bài viết';             
    }
    onInvalidIntroduce()
    {
      this.introduceValidationState ='has-error';
      this.helpBlockIntroduce ='Chưa nhập giới thiệu bài viết';             
    }
    onInvalidDateStart()
    {
      this.dateStartvalidationState ='has-error';
      this.helpBlockDateStart ='Chưa cập nhập ngày bắt đầu';             
    }
    onInvalidContent()
    {
      this.contentValidationState ='has-error';
      this.helpBlockContent ='Chưa cập nhập nội dung';             
    }

    onAddPostSuccess(SuccessMessage)
      {        
        this.titleValidationState ='has-success';
        this.contentValidationState='has-success';
        this.introduceValidationState='has-success';
        this.dateStartvalidationState='has-success';
        
        this.id='';
     //   this.content = this.id;
        this.title ='';
        this.introduce='';
        this.dateStart =new Date();

        this.helpBlockTitle='';
        this.helpBlockIntroduce='';
        this.helpBlockContent =SuccessMessage;     
        this.helpBlockDateStart='';
        listPostsActions.get();            
      }
    onAddPostFail(errorMessage)
      {
        this.helpBlockTitle=errorMessage;
        this.helpBlockIntroduce=errorMessage;
        this.helpBlockContent=errorMessage;
        this.helpBlockDateStart=errorMessage;

        this.id='';
        this.content ='';
        this.title ='';
        this.introduce='';
        this.dateStart =new Date();

        this.titleValidationState ='has-error';
        this.contentValidationState='has-error';
        this.introduceValidationState='has-error';
        this.dateStartvalidationState='has-error';
      } 
      onGetPostSuccess(data)
      {
        this.id=data._id;
        this.content = data.content;      
        this.title= data.title;
        this.introduce= data.introduce;
        this.dateStart=new Date(data.dateStart);
      
        this.userNameValidationState='';
        this.passWordValidationState='';
        this.repassWordValidationState='';
        this.fistNameValidationState='';
        this.lastNameValidationState='';
        this.typeValidationState='';

        this.helpBlockuserName='';
        this.helpBlockpassword='';
        this.helpBlockrepassword='';
        this.helpBlockfirstName='';
        this.helpBlocklastName='';
        this.helpBlocktype='';
      }
      onGetPostFail(jqXhr)
      {
      toastr.error(jqXhr.responseJSON.message);
      }


}
export default alt.createStore(AddPostStore);