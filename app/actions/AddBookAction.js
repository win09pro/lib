import alt from '../alt';
import UploadAction from './uploadimage/uploadAction';
class AddBookAction {
  constructor() {
    this.generateActions(
      'addBookSuccess',
      'addBookFail',

      'updateName',
      'updateDirector',
      'updateCode',
      'updateBarcode',
      'updateImageUrl',
      'updateCate',

      
      'invalidName',
      'invalidDirector',
      'invalidCode',
      'invalidBarcode',
      'invalidImageUrl',
      'invalidCate',
      
      'getBookSuccess',
      'getBookFail',
      'getCategoryListSuccess',
      'getCategoryListFail',
      'resetState'
     
    );
  }
   getById(bookid) {
    $.ajax({
      url: '/api/book/'+bookid})
      .done((data) => {
        this.actions.getBookSuccess(data);
        UploadAction.updateImagepreview(data.imageUrl);
        UploadAction.updateImagefile(data.imageUrl);
      })
      .fail((jqXhr) => {
        this.actions.getBookFail(jqXhr.responseJSON.message);
      });
  }

  getListCateRef() {
    $.ajax({ 
      type: 'GET',   
      url: '/api/category'      
    })
      .done((data) => {
        this.actions.getCategoryListSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getCategoryListFail(jqXhr.responseJSON.message);
      });
  }

  addBook(id , name, director ,code , borrowBarcode , imageUrl ,cateId ,cateName) {
    $.ajax({
      type: 'POST',
      url: '/api/book',
      data: {id:id, name: name, director: director ,code :code , borrowBarcode: borrowBarcode , imageUrl :imageUrl , cateId : cateId, cateName}
    })
      .done((data) => {
        this.actions.addBookSuccess(data.message);
      })
      .fail((jqXhr) => {
        this.actions.addBookFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(AddBookAction);