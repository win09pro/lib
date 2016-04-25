import alt from '../../../alt';

class RegisterActions {
  constructor() {
    this.generateActions(
       'setOpenRegisterModal'
       
    );
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
     
  