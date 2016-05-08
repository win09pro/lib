import alt from '../../../alt';

class RegisterActions {
  constructor() {
    this.generateActions(
       'setOpenRegisterModal',
       'updateusername',
       'updatepassword',
       'updaterepassword',
       'updatefname',
       'updatelname',
        'invaliduserName',
        'invalidpassword',
        'invalidrepassword',
        'invalidfirstName',
        'invalidlastName',     
        'passwordNotSame',
        'addUserSuccess',
        'addUserFail',
        'alreadyHaduser',
        'usernameok'

       
    );
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
     // console.log(jqXhr.responseText.message);
      this.actions.usernameok();
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
  openRegisterModal()
  {
 	this.actions.setOpenRegisterModal(true);
  }
  closeRegisterModal()
  {
  	 this.actions.setOpenRegisterModal(false);
  }     

}

export default alt.createActions(RegisterActions);
     
  