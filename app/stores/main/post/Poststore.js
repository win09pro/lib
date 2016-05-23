import alt from '../../../alt';
import PostActions from '../../../actions/main/post/PostActions';

class Poststore {
  constructor() {
    this.bindActions(PostActions);
    this.posts = [];
    this.detailpost ={};
    this.detailpostCategory={}; 
    this.relativeposts=[];
    this.allposts=[];

    this.numpostview=5;
    this.numpage=0;
    this.currentpage=1;
    this.numpost=0;

  }
  onPreviouspage(){
      if (this.currentpage>1)
     this.currentpage--;   
  }

  onNextpage()
  {
    if (this.currentpage<this.numpage)
     this.currentpage++;   
  }
  onUpdatenumpostView(e)
  {
    this.numpostview=e.target.value;   
    this.currentpage=1;
    this.numpage=Math.ceil(this.numpost/Number(this.numpostview)); 
   
  }
  onGetAllPostsuccess(data)
  {
    this.allposts = data;    
    this.numpost=data.length;
    this.numpage=Math.ceil(this.numpost/Number(this.numpostview));   
  }
   onGetAllPostfail(jqXhr) {
    toastr.error(jqXhr.responseJSON.message);
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