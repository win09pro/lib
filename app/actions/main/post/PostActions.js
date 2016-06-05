import alt from '../../../alt';

class PostActions {
  constructor() {
    this.generateActions(
      'getPostsuccess',
      'getPostfail',

      'getViewdetailPostSuccess',
      'getViewdetailPostFail' ,    

      'getRelativePostsuccess',
      'getRelativePostfail',

      'getAllPostsuccess',
      'getAllPostfail',

      'updatenumpostView',
      'nextpage',
      'previouspage'   

     
    );
  } 
  getpostbyLink(link) {
    $.ajax({
      url: '/api/detailpost/'+link})
      .done((data) => {
        this.actions.getViewdetailPostSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getViewdetailPostFail(jqXhr.responseJSON.message);
      });
  }
  get(){
    $.ajax({    
      url: '/api/mainpost'      
    })
      .done((data) => {           
        this.actions.getPostsuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getPostfail(jqXhr.responseJSON.message);
      });
  }  
    getAllposts(nameCate){
    $.ajax({    
      url: '/api/allposts/'+nameCate       
    })
      .done((data) => {           
        this.actions.getAllPostsuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getAllPostfail(jqXhr.responseJSON.message);
      });
  }

  getrelativepost(idcurentpost,idrelative,num){

    $.ajax({  
      type:'POST',  
      url: '/api/relativepost',
      data:{
            idcurentpost:idcurentpost,
            id:idrelative,
            numpost:num
    }
    })
      .done((data) => {           
        this.actions.getRelativePostsuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getRelativePostfail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(PostActions);