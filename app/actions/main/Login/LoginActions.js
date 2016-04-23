import alt from '../../../alt';

class LoginActions {
  constructor() {
    this.generateActions(
       'openLoginModal',
      'closeLoginModal'
    );
  } 

}

export default alt.createActions(LoginActions);
     
  