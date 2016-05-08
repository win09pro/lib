import alt from '../../../alt';

class LoginActions {
  constructor() {
    this.generateActions(
       'setOpenModal',
       'updateuser',
       'updatepassword',
       'loginSuccess',
       'loginUserFail',
       'logout'
    );   
  } 

  login(payload)
  {
    $.ajax({
      type:'POST',
      url:'/api/login/user',
      data:{username:payload.username,
            password:payload.password,           
          }
    })
    .done((data) => {
      this.actions.loginSuccess(data);
    })
    .fail((jqXhr) =>{    
      this.actions.loginUserFail('Tên truy cập hoặc mật khẩu không đúng');
    });
  }

  openLoginModal()
    {
    	this.actions.setOpenModal(true);
    }
    closeLoginModal()
    {
    	this.actions.setOpenModal(false);
    }
}

export default alt.createActions(LoginActions);
     
  