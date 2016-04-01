import alt from '../../../alt';

class listUsersActions {
  constructor() {
    this.generateActions(
      'getUsersuccess',
      'getUserfail', 
      'deletesuccess',
      'deletefail',

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
      url: '/api/deleteuser',
      data: { id: id}
    })
      .done((data) => {
        this.actions.deletesuccess(data.message);
      })
      .fail((jqXhr) => {
        this.actions.deletefail(jqXhr.responseJSON.message);
      });
  }
  get(){
    $.ajax({    
      url: '/api/user'      
    })
      .done((data) => {
        this.actions.getUsersuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getUserfail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(listUsersActions);