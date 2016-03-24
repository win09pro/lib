import React from 'react';
import ReactDOM from 'react-dom';
import AddPostStore from '../../../stores/admin/post/AddPostStore';
import AddPostActions from '../../../actions/admin/post/AddPostActions';
import ImgUpload from '../../../shared/ImgUpload';
import ReactQuill  from 'react-quill';


class AddUser extends React.Component {
  constructor(props)
  {
  	super(props);   
  	this.state = AddPostStore.getState();
  	this.onChange = this.onChange.bind(this);
  }
   componentDidMount() {    
  AddPostStore.listen(this.onChange);
  }

  componentWillUnmount() {
   AddPostStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }
  // reset()
  // {
  //   AddPostActions.resetAll();   
  //   //console.log(this.state.userNameValidationState);
  // }
  // upload(event)
  // {
  //     var imgfile = this.state.fileAvatar;
  //        var imgURL = this.state.imagePreviewUrl;
  //         AddPostActions.uploadImage(imgfile);     
  //          console.log(this.state.imageUrl);
  // }
   detele(event)
  {
    
           console.log(this.state.imageUrl);
  }
  handleSubmitUser(event)
  { 

  } 
  render() {   
    let stylesquill ={}
    return (            
      <div className='container'>
        <div className='row flipInX animated'>
          <div className='col-sm-8'>
            <div className='panel panel-danger'>
              <div className='panel-heading'><strong>Thêm người dùng</strong></div>
              <div className='panel-body'>
                <form onSubmit={this.handleSubmitUser.bind(this)} className= "form-horizontal" enctype="multipart/form-data"> 
                  <div className={'form-group ' }>
                    <label className='col-sm-2 control-label'>Chủ đề</label> 
                    <div  className ='col-sm-10'>                   
                      <input type='text' className='form-control' ref='titleField' value={this.state.title} 
                      onChange={AddPostActions.updateTitle} autoFocus/>                    
                      <span className='help-block'>{}</span>
                    </div>
                  </div>
                   <div className={'form-group ' }>
                    <label className='col-sm-2 control-label'>Giới thiệu</label> 
                    <div  className ='col-sm-10'>                   
                      <input type='text' className='form-control' ref='titleField' value={this.state.introduce}
                      onChange={AddPostActions.updateIntroduce}   autoFocus/>                    
                      <span className='help-block'>{}</span>
                    </div>
                  </div>

                   <div className={'form-group ' }>
                    <label className='col-sm-2 control-label'>Nội dung</label> 
                    <div  className ='col-sm-10'>                   
                      <ReactQuill
                       theme="snow"
                           styles={{                           
          
      }}
                      value={this.state.text}
                      onChange={AddPostActions.updateContent} />        
                    </div>
                  </div>

                  <p>{this.state.text}</p>
                  <button type='submit' className='btn btn-primary'>Submit</button>                 
                </form>                        
                         


              </div>              
            </div>            
          </div>          
        </div>
      </div>        
    );
  }
}


export default AddUser;