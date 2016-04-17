import alt from '../../../alt';
import FormData from 'form-data';


class AddPostActions{
  constructor() {
    this.generateActions(
     'updateContent',
     'updateTitle',
     'updateIntroduce',
     'updateDateStart',
     'updatepictureURL',
     'updatePostCate',
     'updateLink',

     'invalidTitle',
     'invalidIntroduce',
     'invalidDateStart',
     'invalidContent',
     'invalidPictureURL',
     'invalidpostCate',
     'invalidlink',

     'addPostSuccess',
     'addPostFail',
     'getPostSuccess',
     'getPostFail',
     'getPostViewSuccess',

     'resetAll',
     'clearAll'




      );
  }

  addPost(payload)
  {
    $.ajax({
      type:'POST',
      url:'/api/post',
      data:{id:payload.id,
            title:payload.title,
            introduce:payload.introduce,
            dateStart:payload.dateStart,
            pictureURL:payload.pictureURL,
            content:payload.content,
            link:payload.link,
            postCategory:payload.postCategory
    }
    })
    .done((data) => {
      this.actions.addPostSuccess(data.message);
    })
    .fail((jqXhr) =>{
      this.actions.addPostFail(jqXhr.responseJSON.message);
    });
  }
  getById(postId) {
    $.ajax({
      url: '/api/post/'+postId})
      .done((data) => {
        this.actions.getPostSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getPostFail(jqXhr.responseJSON.message);
      });
  }
  getByIdView(postId) {
    $.ajax({
      url: '/api/post/'+postId})
      .done((data) => {
        this.actions.getPostViewSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getPostFail(jqXhr.responseJSON.message);
      });
  }

}

export default alt.createActions(AddPostActions);
