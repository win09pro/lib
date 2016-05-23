import alt from '../../../alt';
import FormData from 'form-data';

class UserprofilleActions {
  constructor() {
    this.generateActions(
      'addUserSuccess',
      'addUserFail',
      'updateuserName',
      'updateoldpassword',
      'updatepassword',
      'updaterepassword',
      'updatefirstName',
      'updatelastName',
      'updateType',

      'updateImagepreview',
      'updateImagefile',
      'invaliduserName',
      'invalidpassword',
      'invalidrepassword',
      'invalidfirstName',
      'invalidlastName',
      'invalidType',
      'invalidOldpassword',      
      'passwordNotSame',
      'oldpasswordCorrect',
      'oldpasswordUncorrect',


      'resetAll',
      'clearAll',
      'getUserSuccess',
      'getUserFail',
      'uploadSuccess',
      'uploadFail',
      'handleUpload',
      'alreadyHaduser',
      'usernameok',
      'updatepasswordUserSuccess'


      );
  }
  updatepasswordUser(payload){
    $.ajax({
      type:'POST',
      url:'/api/updatepassuser',
      data:{id:payload.id,
            password:payload.password,           
          }
    })
    .done((data) => {
      this.actions.updatepasswordUserSuccess(data.message);     
    })
    .fail((jqXhr) =>{
      this.actions.addUserFail(jqXhr.responseJSON.message);
    });
  }
  checkOldpassword(username,oldpassword){   
    $.ajax({
      type:'POST',
      url:'/api/login/user',
      data:{username:username,
            password:oldpassword,           
          }
    })
    .done((data) => {
      this.actions.oldpasswordCorrect();
    })
    .fail((jqXhr) =>{    
      this.actions.oldpasswordUncorrect();
    });
  }
  checkUserName(uName)
  {
     $.ajax({
      type:'POST',
      url:'/api/checkusername',
      data:{
        userName:uName
          }
    })
    .done((data) => {
      this.actions.alreadyHaduser(data.message);
    })
    .fail((jqXhr) =>{      
      console.log(jqXhr.responseText.message);
      this.actions.usernameok();
    });
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


  getUserById(userId) {
    $.ajax({
      url: '/api/user/'+userId})
      .done((data) => {
        this.actions.getUserSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getUserFail(jqXhr.responseJSON.message);
      });
  }
  updateimformationUser(payload)
  {

    $.ajax({
      type:'POST',
      url:'/api/updateinfouser',
      data:{id:payload.id,
            userName:payload.userName,           
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

export default alt.createActions(UserprofilleActions);
