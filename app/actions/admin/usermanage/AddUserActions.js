import alt from '../../../alt';

class AddUserActions {
  constructor() {
    this.generateActions(
      'addUserSuccess',
      'addUserFail',
      'updateuserName',
      'updatepassword',
      'updaterepassword',
      'updatefirstName',
      'updatelastName',
      'updateType',
      'updateAvatarpreview',      
      'updateAvatarfile',      
      'invaliduserName',
      'invalidpassword',
      'invalidrepassword',
      'invalidfirstName',
      'invalidlastName',
      'invalidType',
      'passwordNotSame',      
      'resetAll',
      'getUserSuccess',
      'getUserFail',
      'uploadSuccess',
      'uploadFail'
      );
  }    

  uploadImage(imgfile)
  {   
    $.ajax({
      type:'POST',
      url:'/api/imageupload',
      data:{file:imgfile}     
    })
    .done((data) => {
      this.actions.uploadSuccess(data);
    })
    .fail((jqXhr) =>{
      this.actions.uploadFail(jqXhr.responseJSON.message);
    });
  }


  getById(userId) {
    $.ajax({
      url: '/api/user/'+userId})
      .done((data) => {
        this.actions.getUserSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getUserFail(jqXhr.responseJSON.message);
      });
  }
  addUser(payload)
  {
    $.ajax({
      type:'POST',
      url:'/api/user',
      data:{id:payload.id,
            userName:payload.userName,
            password:payload.pass,
            firstName:payload.firstName,
            lastName:payload.lastName,
            barcode:payload.barcode,
            type:payload.type}
    })
    .done((data) => {
      this.actions.addUserSuccess(data.message);
    })
    .fail((jqXhr) =>{
      this.actions.addUserFail(jqXhr.responseJSON.message);
    });
  }

}

export default alt.createActions(AddUserActions);