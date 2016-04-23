import alt from '../../../alt';

class listPostsCateActions {
  constructor() {
    this.generateActions(
      'getPostCatesuccess',
      'getPostCatefail', 
      'deletesuccess',
      'deletefail',

      'getCountPostCatesuccess',
      'getCountPostCatefail',

      'updateArrayId',
      'removeArrayId',

      'openModal',
      'closeModal'   
    );
  }
  get(){  
    $.ajax({    
      url: '/api/postCategory'      
    })
      .done((data) => {           
        this.actions.getPostCatesuccess(data);

      })
      .fail((jqXhr) => {
        this.actions.getPostCatefail(jqXhr.responseJSON.message);
      });
  }
  delete(id)
 {
    $.ajax({
      type: 'POST',
      url: '/api/deletepostCategory',
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
      url: '/api/postCategory/count'      
    })
      .done((data) => {           
        this.actions.getCountPostCatesuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getCountPostCatefail(jqXhr.responseJSON.message);
      });
  }

}

export default alt.createActions(listPostsCateActions);