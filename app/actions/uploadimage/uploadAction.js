import alt from '../../alt';
import FormData from 'form-data';
import AddBookAction from '../AddBookAction';

class UploadAction {
  constructor() {
    this.generateActions(
      'updateImagepreview',      
      'updateImagefile',      
      'resetAll',
      'uploadSuccess',
      'uploadFail'

      );
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
      AddBookAction.updateImageUrl(data.link);
    })
    .fail((jqXhr) =>{
      this.actions.uploadFail(jqXhr.responseJSON.message);
    });
  }

}

export default alt.createActions(UploadAction);