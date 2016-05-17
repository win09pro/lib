import alt from '../../../alt';

class AdminloginActions {
  constructor() {
    this.generateActions(     
       'updateadminusername',
       'updateadminpassword',
       'adminloginSuccess',
       'adminloginFail',
       'invalidpass',
       'invalidusername',
       'adminLogout'
    );   
  } 

  adminlogin(payload)
  {
    $.ajax({
      type:'POST',
      url:'/api/login/user',
      data:{username:payload.username,
            password:payload.password,           
          }
    })
    .done((data) => {
      this.actions.adminloginSuccess(data);
    })
    .fail((jqXhr) =>{    
      this.actions.adminloginFail('Tên truy cập hoặc mật khẩu không đúng');
    });
  } 
}

export default alt.createActions(AdminloginActions);
     
  