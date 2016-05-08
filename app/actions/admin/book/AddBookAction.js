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
        UploadAction.updateImagepreview(data.imageUrl);
        UploadAction.updateImagefile(data.imageUrl);
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
      this.actions.uploadSuccess(data.link);

    })
    .fail((jqXhr) =>{
      this.actions.uploadFail(jqXhr.responseJSON.message);
    });
  }

  addBook(id , name, author, publisher ,code , status , description , imageUrl , _cateId) {
    $.ajax({
      type: 'POST',
      url: '/api/book',
      data: {id:id, name: name, author: author, publisher:publisher ,code :code , status: status, description:description , imageUrl :imageUrl , _cateId : _cateId }
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