import alt from '../../alt';
import MainnavbarActions from '../../actions/main/MainnavbarActions';

class Mainnavbarstore {
  constructor() {
    this.bindActions(MainnavbarActions);
    this.IntroduceCate=[];
    this.ServiceCate=[];
    this.HelpCate =[];
    
  }  
  onGetIntroCateSuccess(data)
  {
      this.IntroduceCate=data;
     
    //  this.IntroduceCate = data;
     // console.log('1');
   
  }
  onGetServiceCateSuccess(data)
  {
    this.ServiceCate=data;
  }
  onGetHelpCateSuccess(data)
  {
    this.HelpCate=data;
  }
 
}
export default alt.createStore(Mainnavbarstore);