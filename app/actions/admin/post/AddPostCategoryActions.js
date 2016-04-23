import alt from '../../../alt';

class AddPostCategoryActions{
  constructor() {
    this.generateActions(
     'updateNameCate',
     'updateType',
    
     'invalidnameCate',
     'invalidType',     

     'addPostCateSuccess',
     'addPostCateFail',
     'getPostCateSuccess',
     'getPostCateFail',    

     'resetAll',
     'clearAll'
      );
  }

  addPostCate(payload)
  {
    $.ajax({
      type:'POST',
      url:'/api/postCategory',
      data:{id:payload.id,
            nameCate:payload.nameCate,
            Type:payload.Type
    }
    })
    .done((data) => {
      this.actions.addPostCateSuccess(data.message);
    })
    .fail((jqXhr) =>{
      this.actions.addPostCateFail(jqXhr.responseJSON.message);
    });
  }
  getById(postCateId) {   
    $.ajax({
      url: '/api/postCategory/'+postCateId})
      .done((data) => {
        this.actions.getPostCateSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getPostCateFail(jqXhr.responseJSON.message);
      });
  } 

}

export default alt.createActions(AddPostCategoryActions);
