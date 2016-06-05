import alt from '../../../alt';
// import UploadAction from './uploadimage/uploadAction';
class AddBookAction {
  constructor() {
    this.generateActions(
      'addBookSuccess',
      'addBookFail',

      'updateName',
      'updateAuthor',
      'updatePublisher',
      'updateCode',
      'updateStatus',
      'updateDescription',
      'updateCate',
      'updateTagSearch',

      'updateImagepreview',
      'updateImagefile',
      
      'invalidName',
      'invalidAuthor',
      'invalidPublisher',
      'invalidBarcode',
      'invalidStatus',
      'invalidDescription',
      'invalidCate',
      'invalidImageUrl',
      
      
      'getBookSuccess',
      'getBookFail',
      'resetState',

      'uploadImageSuccess',
      'uploadImageFail',
      'handleUpload'
     
    );
  }
   getById(bookid) {
    $.ajax({
      url: '/api/book/'+bookid})
      .done((data) => {
        this.actions.getBookSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getBookFail(jqXhr.responseJSON.message);
      });
  }

  uploadImage(imgfile)
  {
     var fd = new FormData();
    fd.append( 'file', imgfile);
    $.ajax({
        url: '/api/imageupload',
        data: fd,
        processData: false,
        contentType: false,
        type: 'POST'
    })
    .done((data) => {
      this.actions.uploadImageSuccess(data.link);

    })
    .fail((jqXhr) =>{
      this.actions.uploadImageFail(jqXhr.responseJSON.message);
    });
  }

  addBook(payload) {
    console.log(name);
    $.ajax({
      type: 'POST',
      url: '/api/book',
      data: {id:payload.id, name: payload.name, author: payload.author,
       publisher:payload.publisher ,code :payload.code , status: payload.status, description:payload.description,
        _cateId : payload._cateId, imageUrl :payload.imageUrl, tagSearch:payload.tagSearch }
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