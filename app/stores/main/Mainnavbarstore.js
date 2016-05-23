import alt from '../../alt';
import MainnavbarActions from '../../actions/main/MainnavbarActions';

class Mainnavbarstore {
  constructor() {
    this.bindActions(MainnavbarActions);
    this.IntroduceCate=[];
    this.listPostService=[];
    this.HelpCate =[];
    this.modalIsOpen=true;
    this.modalRegisterIsOpen=false;
    this.update="";
    
  }  
  onUpdatenavbar()
  {
    this.update="updated";   
  }
  onGetIntroCateSuccess(data)
  {
      this.IntroduceCate=data;
     
    //  this.IntroduceCate = data;
     // console.log('1');
   
  }
  onGetServiceCateSuccess(data)
  {
    this.listPostService=data;
  }
  onGetHelpCateSuccess(data)
  {
    this.HelpCate=data;
  }
 
}
export default alt.createStore(Mainnavbarstore);