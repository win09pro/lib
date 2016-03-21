import alt from '../../../alt';
import FormData from 'form-data';

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
     var fd = new FormData();    
    fd.append( 'file', imgfile);
    $.ajax({
        url: '/api/imageupload',
        data: fd,
        processData: false,
        contentType: false,
        type: 'POST'       
    })
    .done((data) => {
      this.actions.uploadSuccess(data.link);     
      
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
            type:payload.type,
            avatar :payload.avatar
          }
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