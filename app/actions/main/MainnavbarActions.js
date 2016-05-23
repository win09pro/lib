import alt from '../../alt';
class MainnavbarActions {
  constructor() {
    this.generateActions(
      'getIntroCateSuccess',
      'GetIntroCateFail',
      'getServiceCateSuccess',
      'GetServiceCateFail',
      'getHelpCateSuccess',
      'getHelpCateFail',
      'updatenavbar'
    );
  }
  getIntroduceCategory()
  {
    $.ajax({
      type:'POST',
      url:'/api/getCategory',
      data:{type:1}
    })
    .done((data) => {
      this.actions.getIntroCateSuccess(data);
    })
    .fail((jqXhr) =>{
      this.actions.GetIntroCateFail(jqXhr.responseJSON.message);
    });
  }
  getServiceCategory()
  {
     $.ajax({
      type:'POST',
      url:'/api/getCategory',
      data:{type:2}
    })
    .done((data) => {
      this.actions.getServiceCateSuccess(data);
    })
    .fail((jqXhr) =>{
      this.actions.GetServiceCateFail(jqXhr.responseJSON.message);
    });
  }
   getHelpCategory()
  {
     $.ajax({
      type:'POST',
      url:'/api/getCategory',
      data:{type:3}
    })
    .done((data) => {
      this.actions.getHelpCateSuccess(data);
    })
    .fail((jqXhr) =>{
      this.actions.getHelpCateFail(jqXhr.responseJSON.message);
    });
  }
}

export default alt.createActions(MainnavbarActions);