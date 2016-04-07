import alt from '../../alt';
import UploadAction from '../../actions/uploadimage/uploadAction';
class UploadStore {
  constructor() {
      this.bindActions(UploadAction);
     
      this.fileAvatar ={};
      this.imagePreviewUrl='/uploads/avatar.jpg';
      this.imageUrl='/uploads/avatar.jpg';
      }                 
  onUpdateImagepreview(imgURL)
  {          
        this.imagePreviewUrl = imgURL;           
  }
  onUpdateImagefile(file)
  {
        this.fileAvatar = file;           
  }

  onResetAll()
  {
    this.fileAvatar={};
    this.imagePreviewUrl='/uploads/avatar.jpg';
    this.imageUrl='/uploads/avatar.jpg';
  }
  onUploadSuccess(link)
  {            
      this.imageUrl = link;
      console.log(this.imageUrl);
  }
  onUploadFail(jqXhr)
  {
   toastr.error(jqXhr.responseJSON.message);
  }
}
export default alt.createStore(UploadStore);