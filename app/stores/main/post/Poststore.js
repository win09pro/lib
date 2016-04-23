import alt from '../../../alt';
import PostActions from '../../../actions/main/post/PostActions';

class Poststore {
  constructor() {
    this.bindActions(PostActions);
    this.posts = [];
    this.detailpost ={};
    this.detailpostCategory={}; 
    this.relativeposts=[];
  }
  onGetViewdetailPostSuccess(data)
  {
    this.detailpost = data;  
    this.detailpostCategory=data.postCategory;
    PostActions.getrelativepost(data._id,data.postCategory._id,4);
    
  }
  onGetViewdetailPostFail(jqXhr)
  {
    this.detailpost ={
      title:'Không tìm thấy trang theo yêu cầu',
      introduce:'<a href="http://localhost:3000/">Trở về trang chủ</a>',
      content:''
    }; 
  }    
  onGetPostsuccess(data)
  {   
  	this.posts = data;    
 
  }
  onGetPostfail(jqXhr) {
    toastr.error(jqXhr.responseJSON.message);
  }
    onGetRelativePostsuccess(data)
  {
    this.relativeposts = data;  
    
  }
  onGetRelativePostfail(jqXhr)
  {
     toastr.error(jqXhr.responseJSON.message);
  }    

}
export default alt.createStore(Poststore);