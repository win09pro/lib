import alt from '../../../alt';
import AddPostActions from '../../../actions/admin/post/AddPostActions';
import moment from 'moment';

class AddPostStore {
  constructor() {
       this.bindActions(AddPostActions);
      this.id='';
      this.content ='<div><span style="color: rgb(255, 153, 0);">&nbsp;<b>abace</b>  123123</span></div>';
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
      console.log(this.dateStart);
      this.dateStartvalidationState ='';
      this.helpBlockDateStart ='';             
    }
    onUpdateContent(value)
    {
      this.content = value[0];     
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
}
export default alt.createStore(AddPostStore);