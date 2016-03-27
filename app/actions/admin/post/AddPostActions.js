import alt from '../../../alt';
import FormData from 'form-data';


class AddPostActions{
  constructor() {
    this.generateActions(
     'updateContent',
     'updateTitle',
     'updateIntroduce',
     'updateDateStart',

     'invalidTitle',
     'invalidIntroduce',
     'invalidDateStart',
     'invalidContent',

     'addPostSuccess',
     'addPostFail',
     'getPostSuccess',
     'getPostFail'



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
            content:payload.content         
    }
    })
    .done((data) => {
      this.actions.addPostSuccess(data.message);
    })
    .fail((jqXhr) =>{
      this.actions.addPostFail(jqXhr.responseJSON.message);
    });
  }
  getById(bookid) {
    $.ajax({
      url: '/api/Post/'+bookid})
      .done((data) => {
        this.actions.getPostSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getPostFail(jqXhr.responseJSON.message);
      });
  }
  
}

export default alt.createActions(AddPostActions);