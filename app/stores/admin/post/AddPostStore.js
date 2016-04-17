import alt from '../../../alt';
import AddPostActions from '../../../actions/admin/post/AddPostActions';
import listPostsActions from '../../../actions/admin/post/listPostsActions';
import moment from 'moment';

class AddPostStore {
  constructor() {
      this.bindActions(AddPostActions);
      this.id='';
      this.content ='<div></div>';
      this.link ='http://localhost:3000/';
      this.postCategoryid ='';
      this.title ='';
      this.introduce='';
      this.dateStart =new Date();
      this.pictureURL='';

      this.helpBlockTitle='';
      this.helpBlockIntroduce='';
      this.helpBlockContent='';
      this.helpBlockDateStart='';
      this.helpBlockPictureURL='';
      this.helpBlockpostCate='';
      this.helpBlockLink='';

      this.linkpostValidationState='';
      this.categoryValidationState='';
      this.titleValidationState ='';
      this.contentValidationState='';
      this.introduceValidationState='';
      this.dateStartvalidationState='';
      this.pictureURLvalidationState='';
     // this.DateEnd = moment(this.DateStart).add(7, 'days');
    }
    onUpdateDateStart(date)
    {
      this.dateStart = date._d;
      this.dateStartvalidationState ='';
      this.helpBlockDateStart ='';
    }
    onUpdateContent(event)
    {

      this.content = event.target.value;
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
    onUpdatepictureURL(event)
    {
      this.pictureURL =event.target.value;
      this.pictureURLvalidationState='';
      this.helpBlockPictureURL='';
    }
    onUpdatePostCate(event)
    {
      this.postCategoryid=event.target.value;
      this.categoryValidationState='';
      this.helpBlockpostCate='';
      console.log(this.postCategoryid);
    }
    onUpdateLink(event)
    {
      this.link = event.target.value;
      if(this.link =='') this.link ='http://localhost:3000/';
      this.linkpostValidationState ='';
      this.helpBlockLink='';
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
    onInvalidPictureURL()
    {
      this.pictureURLvalidationState ='has-error';
      this.helpBlockPictureURL ='Chưa cập nhập hình ảnh giới thiệu';
    }
    onInvalidpostCate()
    {
      this.categoryValidationState='has-error';
      this.helpBlockpostCate ='Chưa chọn danh mục tin tức';
    }
    onInvalidlink()
    {
      this.helpBlockLink='Chưa nhập đường dẫn tin tức';
      this.linkpostValidationState='has-error';
    }
    onAddPostSuccess(SuccessMessage)
      {
        this.titleValidationState ='has-success';
        this.contentValidationState='has-success';
        this.introduceValidationState='has-success';
        this.dateStartvalidationState='has-success';
        this.pictureURLvalidationState='has-success';
        this.categoryValidationState='has-success';
        this.helpBlockLink='has-success';
        this.id='';
        this.content = '';
        this.title ='';
        this.introduce='';
        this.dateStart =new Date();
        this.pictureURL='';
        CKEDITOR.instances.ckedit.setData('Nhập nội dung bài viết tại đây!');

        this.helpBlockpostCate='';
        this.helpBlockLink='';
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
        this.pictureURL='';
        CKEDITOR.instances.ckedit.setData('Nhập nội dung bài viết tại đây!');

        this.titleValidationState ='has-error';
        this.contentValidationState='has-error';
        this.introduceValidationState='has-error';
        this.dateStartvalidationState='has-error';
        this.pictureURLvalidationState='has-error';
      }
      onGetPostViewSuccess(data)
      {
        this.id=data._id;
        this.content = data.content;
        this.title= data.title;
        this.introduce= data.introduce;
        this.dateStart=new Date(data.dateStart);
        this.pictureURL = data.pictureURL;
        this.postCategoryid =data.postCategory;
        this.link = data.link;

        this.helpBlockTitle='';
        this.helpBlockIntroduce='';
        this.helpBlockContent='';
        this.helpBlockDateStart='';
        this.helpBlockPictureURL='';
        this.helpBlockpostCate='';
        this.helpBlockLink='';

        this.linkpostValidationState='';
        this.categoryValidationState='';
        this.titleValidationState ='';
        this.contentValidationState='';
        this.introduceValidationState='';
        this.dateStartvalidationState='';
        this.pictureURLvalidationState='';
      }
      onGetPostSuccess(data)
      {      
        this.id=data._id;
        this.content = data.content;
        this.title= data.title;
        this.introduce= data.introduce;
        this.dateStart=new Date(data.dateStart);
        CKEDITOR.instances.ckedit.setData(this.content);
        this.pictureURL=data.pictureURL; 
        this.postCategoryid =data.postCategory;
        this.link = data.link;

        this.helpBlockTitle='';
        this.helpBlockIntroduce='';
        this.helpBlockContent='';
        this.helpBlockDateStart='';
        this.helpBlockPictureURL='';
        this.helpBlockpostCate='';
        this.helpBlockLink='';

        this.linkpostValidationState='';
        this.categoryValidationState='';
        this.titleValidationState ='';
        this.contentValidationState='';
        this.introduceValidationState='';
        this.dateStartvalidationState='';
        this.pictureURLvalidationState='';
      }
      onGetPostFail(jqXhr)
      {
      toastr.error(jqXhr.responseJSON.message);
      }
      onResetAll()
      {
      this.id='';
      this.content ='<div></div>';
      this.title ='';
      this.introduce='';
      this.dateStart =new Date();
      this.pictureURL='';
      CKEDITOR.instances.ckedit.setData('Nhập nội dung bài viết tại đây!');
      this.postCategoryid ='';
      this.link ='';

      this.helpBlockTitle='';
      this.helpBlockIntroduce='';
      this.helpBlockContent='';
      this.helpBlockDateStart='';
      this.helpBlockPictureURL='';
      this.helpBlockpostCate='';
      this.helpBlockLink='';

      this.linkpostValidationState='';
      this.categoryValidationState='';
      this.titleValidationState ='';
      this.contentValidationState='';
      this.introduceValidationState='';
      this.dateStartvalidationState='';
      this.pictureURLvalidationState='';  
      }
      onClearAll()
      {
      this.content ='<div></div>';
      this.title ='';
      this.introduce='';
      this.dateStart =new Date();
      this.pictureURL='';
      CKEDITOR.instances.ckedit.setData('Nhập nội dung bài viết tại đây!');
      this.postCategoryid ='';
      this.link ='';

      this.helpBlockTitle='';
      this.helpBlockIntroduce='';
      this.helpBlockContent='';
      this.helpBlockDateStart='';
      this.helpBlockPictureURL='';
      this.helpBlockpostCate='';
      this.helpBlockLink='';

      this.linkpostValidationState='';
      this.categoryValidationState='';
      this.titleValidationState ='';
      this.contentValidationState='';
      this.introduceValidationState='';
      this.dateStartvalidationState='';
      this.pictureURLvalidationState='';  
      }


}
export default alt.createStore(AddPostStore);
