import alt from '../../../alt';
import RegisterActions from '../../../actions/main/Register/RegisterActions';

class RegisterStore {
  constructor() {
    this.bindActions(RegisterActions);
    this.RegisterModalisOpen=false;
    
  }  
  onSetOpenRegisterModal(boolean)
  {
  
    this.RegisterModalisOpen = boolean;
   
  }
}
export default alt.createStore(RegisterStore);