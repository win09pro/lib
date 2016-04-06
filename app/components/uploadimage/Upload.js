import React from 'react';
import Dropzone from 'react-dropzone';
import FormData from 'form-data';
import ReactDOM from 'react-dom';
import UploadStore from '../../stores/uploadimage/uploadStore';
import UploadAction from '../../actions/uploadimage/uploadAction';
import ImgUpload from '../../shared/ImgUpload';



class Upload extends React.Component {
  constructor(props)
  {
  	super(props);
  	this.state = UploadStore.getState();
  	this.onChange = this.onChange.bind(this);
  }
   componentDidMount() {    
    UploadStore.listen(this.onChange);
  }

  componentWillUnmount() {
    UploadStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }
  reset()
  {
    UploadAction.resetAll();   
    //console.log(this.state.userNameValidationState);
  }
  upload(event)
  {
      var imgfile = this.state.fileAvatar;
      var imgURL = this.state.imagePreviewUrl;
      UploadAction.uploadImage(imgfile);     
      console.log(this.state.imageUrl);
  }
   detele(event)
  {
    
    console.log(this.state.imageUrl);
  }
 
  render() {  
  var styles = {
      '.quill': {
          'border': '1px solid #d5d5d5'
      },
      '.ql-toolbar': {
          'box-shadow': '0 1px 10px rgba(0, 0, 0, .1)'
      },
      '.quill-contents ': {
          'height': '250px'
      }
  }; 
    return (            
      <div className='container'>
            <div className='panel panel-danger'>
              <div className='panel-heading'><strong>ADD IMAGE DATA BOOK</strong></div>
              <div className='panel-body'>
                <form> 
                  <div className='form-group has-success'>
                   <label className='control-label'>Select Image</label>
                   <div className ="clear-both"></div>
                    <div className="avatar-photo">
                      <ImgUpload actions ={UploadAction} />
                      <div className="avatar-edit">                     
                      <i className="fa fa-camera"></i>
                      </div>
                      <img src ={this.state.imagePreviewUrl} height ="200px" width="200px" alt = "avatar"/>                     
                    </div>   
                    <div>
                     <button type='button' className = 'btn btn-success'onClick = {this.upload.bind(this)} >Upload</button>                               
                     <button type='button' className = 'btn btn-danger' onClick = {this.detele.bind(this)} >Abort</button>         
                    </div>
                  </div> 
                   <div className ="clear-both"></div>                                
                </form>                    
              </div>
            </div>            
               
        
      </div>        
    );
  }
}


export default Upload;