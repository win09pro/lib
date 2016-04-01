import React from 'react';
import ReactDOM from 'react-dom';
import AddPostStore from '../../../stores/admin/post/AddPostStore';
import AddPostActions from '../../../actions/admin/post/AddPostActions';
import ImgUpload from '../../../shared/ImgUpload';
import moment from 'moment';
import Datetime from 'react-datetime';
import HtmlToReact from 'html-to-react';


class AddUser extends React.Component {
  constructor(props)
  {
  	super(props);
  	this.state = AddPostStore.getState();
  	this.onChange = this.onChange.bind(this);
  }
   componentDidMount() {
  AddPostStore.listen(this.onChange);
  CKEDITOR.replace( 'ckedit', {
  allowedContent : true,
  pasteFromWordRemoveFontStyles : false,
  pasteFromWordRemoveStyles : false
  });
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

  handleSubmitPost(event)
   {
    for ( var instance in CKEDITOR.instances )
        CKEDITOR.instances[instance].updateElement();
    console.log(CKEDITOR.instances.ckedit._.data);
    var id = this.state.id;
    var title = this.state.title.trim();
    var introduce = this.state.introduce.trim();
    var dateStart = this.state.dateStart;
    var pictureURL =this.state.pictureURL;
    var content = ReactDOM.findDOMNode(this.refs.body).value;
    if (!content)
    {
      AddPostActions.invalidContent();
    }
    if(!pictureURL)
    {
      AddPostActions.invalidPictureURL();
      this.refs.pictureField.focus();
    }
    if (!dateStart) {
      AddPostActions.invalidDateStart();
    }

    if (!introduce) {
      AddPostActions.invalidIntroduce();
      this.refs.introduceField.focus();
    }
    if (!title) {
      AddPostActions.invalidTitle();
      this.refs.titleField.focus();
    }
    if (title && dateStart && introduce && content)
     {
          AddPostActions.addPost({
             id:id,
             title:title,
             introduce:introduce,
             dateStart:moment(dateStart).format('x'),
             pictureURL:pictureURL,
             content:content
           });
    }
     event.preventDefault();
  }
  render() {
     return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='panel panel-danger'>
              <div className='panel-heading'><strong>Thêm tin tức</strong></div>
              <div className='panel-body'>
                <form onSubmit={this.handleSubmitPost.bind(this)} className= "form-horizontal" enctype="multipart/form-data">
                  <div className={'form-group ' + this.state.titleValidationState }>
                    <label className='col-sm-2 control-label'>Chủ đề</label>
                    <div  className ='col-sm-10 right-inner-addon'>
                      <i className="fa fa-newspaper-o"></i>
                      <input type='text' className='form-control' ref='titleField' value={this.state.title}
                      onChange={AddPostActions.updateTitle} autoFocus/>
                      <span className='help-block'>{this.state.helpBlockTitle}</span>
                    </div>
                  </div>
                   <div className={'form-group ' + this.state.introduceValidationState}>
                    <label className='col-sm-2 control-label'>Giới thiệu</label>
                   <div className ='col-sm-10 right-inner-addon'>
                     <i className="fa fa-paint-brush"></i>
                      <input type='text' className='form-control' ref='introduceField' value={this.state.introduce}
                      onChange={AddPostActions.updateIntroduce}  />
                      <span className='help-block'>{ this.state.helpBlockIntroduce}</span>
                    </div>
                  </div>
                  <div className={'form-group ' + this.state.dateStartvalidationState}>
                    <label className='col-sm-2 control-label'>Thời gian bắt đầu</label>
                    <div  className ='col-sm-10'>
                      <Datetime value ={this.state.dateStart} onChange={AddPostActions.updateDateStart}/>
                      <span className='help-block'>{this.state.helpBlockDateStart}</span>
                    </div>
                  </div>
                  <div className={'form-group ' + this.state.pictureURLvalidationState}>
                   <label className='col-sm-2 control-label'>Link hình ảnh</label>
                  <div className ='col-sm-10 right-inner-addon'>
                    <i className="fa fa-paint-brush"></i>
                     <input type='text' className='form-control' ref='pictureField' value={this.state.pictureURL}
                     onChange={AddPostActions.updatepictureURL}  />
                     <span className='help-block'>{ this.state.helpBlockPictureURL}</span>
                   </div>
                 </div>
                    <div className={'form-group ' + this.state.contentValidationState}>
                    <label className='col-sm-2 control-label'>Nội dung</label>
                      <div  className ='col-sm-10'>
                      <textarea id ='ckedit' value ={this.state.content} ref ='body' ></textarea>
                      <span className='help-block'>{this.state.helpBlockContent}</span>
                    </div>
                  </div>
                  <input type="button" className='btn btn-warning' onClick = {AddPostActions.clearAll} value ='Reset'/>
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
