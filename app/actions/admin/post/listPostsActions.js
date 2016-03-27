import alt from '../../../alt';

class listPostsActions {
  constructor() {
    this.generateActions(
      'getPostsuccess',
      'getPostfail', 
      'deletesuccess',
      'deletefail',

      'getCountPostsuccess',
      'getCountPostfail',

      'updateArrayId',
      'removeArrayId',

      'openModal',
      'closeModal'   
    );
  }
  delete(id)
 {
    $.ajax({
      type: 'POST',
      url: '/api/deletepost',
      data: { id: id}
    })
      .done((data) => {
        this.actions.deletesuccess(data.message);
      })
      .fail((jqXhr) => {
        this.actions.deletefail(jqXhr.responseJSON.message);
      });
  }
  getCountpost()
  {
      $.ajax({    
      url: '/api/post/count'      
    })
      .done((data) => {           
        this.actions.getCountPostsuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getCountPostfail(jqXhr.responseJSON.message);
      });
  }
  get(){
    $.ajax({    
      url: '/api/post'      
    })
      .done((data) => {           
        this.actions.getPostsuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getPostfail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(listPostsActions);