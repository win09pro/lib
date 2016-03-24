import alt from '../../../alt';
import FormData from 'form-data';

class AddPostActions{
  constructor() {
    this.generateActions(
     'updateContent',
     'updateTitle',
     'updateIntroduce'

      );
  }
  getPost(id) {
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