import alt from '../../../alt';

class LoginActions {
  constructor() {
    this.generateActions(
       'setOpenModal'
    );   
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
     
  