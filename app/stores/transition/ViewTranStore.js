import alt from '../../alt';
import ViewTranAction from '../../actions/transition/ViewTranAction';
function getDateString(date){

  var time,date1,month,year;
  time = new Date(date);
  date1=time.getDate();
  month =time.getMonth()+1;
  if(month<10) month ='0'+month;
  year =time.getFullYear();

  return year+'-'+month+'-'+date1;

}

class ViewTranStore {
  constructor() {
    this.bindActions(ViewTranAction);
    this.tran ={};
    this.helpMessage = '';   
  }
  onGetTranSuccess(data)
  {
    
    data.dateBorrow = getDateString(data.dateBorrow);
    data.dateReturn = getDateString(data.dateReturn);

    this.tran =data;
    this.helpMessage = '';  
  }
  onGetTranFail(jqXhr)
  {
    toastr.error(jqXhr.responseJSON.message);
  }     
}
export default alt.createStore(ViewTranStore);