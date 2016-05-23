import React from 'react';
import ReactDOM from 'react-dom';
import AddPostStore from '../../../stores/admin/post/AddPostStore';
import AddPostActions from '../../../actions/admin/post/AddPostActions';
import listPostCatesStore from '../../../stores/admin/post/listPostCatesStore';
import listPostsCateActions from '../../../actions/admin/post/listPostsCateActions';
import ImgUpload from '../../../shared/ImgUpload';
import moment from 'moment';
import Datetime from 'react-datetime';
import HtmlToReact from 'html-to-react';


class AddPost extends React.Component {
  constructor(props)
  {
  	super(props);
  	this.state ={state1:AddPostStore.getState(),state2:listPostCatesStore.getState()};
  	this.onChange = this.onChange.bind(this);
  }
   componentDidMount() {
  AddPostStore.listen(this.onChange);
  listPostCatesStore.listen(this.onChange);
  listPostsCateActions.get();
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
    this.setState({state1:AddPostStore.getState(),state2:listPostCatesStore.getState()});  
  }

  // reset()
  // {
  //   AddPostActions.resetAll();
  //   //console.log(this.state.state1.userNameValidationState);
  // }
  // upload(event)
  // {
  //     var imgfile = this.state.state1.fileAvatar;
  //        var imgURL = this.state.state1.imagePreviewUrl;
  //         AddPostActions.uploadImage(imgfile);
  //          console.log(this.state.state1.imageUrl);
  // }

  handleSubmitPost(event)
   {
    for ( var instance in CKEDITOR.instances )
        CKEDITOR.instances[instance].updateElement();
    console.log(CKEDITOR.instances.ckedit._.data);
    var id = this.state.state1.id;
    var title = this.state.state1.title.trim();
    var introduce = this.state.state1.introduce.trim();
    var dateStart = this.state.state1.dateStart;
    var pictureURL =this.state.state1.pictureURL;
    var content = ReactDOM.findDOMNode(this.refs.body).value;
    var link =this.state.state1.link;
    var postCategoryid = this.state.state1.postCategoryid;
    if (!content)
    {
      AddPostActions.invalidContent();
    }
    if (!postCategoryid)
    {
      AddPostActions.invalidpostCate();
      this.refs.categorySelectField.focus();
    }
    if(!link)
     {
       AddPostActions.invalidlink();
       this.refs.linkField.focus();
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
    if (title && dateStart && introduce && content &&link &&pictureURL)
     {

          AddPostActions.addPost({
             id:id,
             title:title,
             introduce:introduce,
             dateStart:moment(dateStart).format('x'),
             pictureURL:pictureURL,
             content:content,
             link:link.substr(21),
             postCategory:postCategoryid
           });
    }
     event.preventDefault();
  }
  render() {
     let postCateList = this.state.state2.postCates.map((postCate, index) => {
      // if(this.state.state1._documenttype == documentType._id){
      // return (
        
      //     <option value={documentType._id} key ={index+1} selected>
      //       {documentType.name}
      //     </option>
      //     );
      //   
      //   }
      //   else{
          return (
          <option value={postCate._id} key ={index+1}>
              {postCate.nameCate}
          </option>
          );
       // }
      
    });
     return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='panel panel-danger'>
              <div className='panel-heading'><strong>Thêm tin tức</strong></div>
              <div className='panel-body'>
                <form onSubmit={this.handleSubmitPost.bind(this)} className= "form-horizontal" enctype="multipart/form-data">
                  <div className={'form-group ' + this.state.state1.titleValidationState }>
                    <label className='col-sm-2 control-label'>Chủ đề</label>
                    <div  className ='col-sm-10 right-inner-addon'>
                      <i className="fa fa-newspaper-o"></i>
                      <input type='text' className='form-control' ref='titleField' value={this.state.state1.title}
                      onChange={AddPostActions.updateTitle} autoFocus/>
                      <span className='help-block'>{this.state.state1.helpBlockTitle}</span>
                    </div>
                  </div>                  

                   <div className={'form-group ' + this.state.state1.categoryValidationState}>
                    <label className='col-sm-2 control-label'>Danh mục</label>
                    <div  className ='col-sm-10 left-inner-addon'>
                    <select className='form-control' ref='categorySelectField' value={this.state.state1.postCategoryid} onChange={AddPostActions.updatePostCate}>
                      <option value=''>--Chọn danh mục tin tức--</option>
                      {postCateList}
                    </select>
                    <span className='help-block'>{this.state.state1.helpBlockpostCate}</span>
                    </div>
                  </div>

                  <div className={'form-group ' + this.state.state1.linkpostValidationState}>
                    <label className='col-sm-2 control-label'>Đương dẫn trang chủ</label>
                    <div  className ='col-sm-10 right-inner-addon'>                     
                     <input type='text' className='form-control' ref='linkField' value={this.state.state1.link}
                      onChange={AddPostActions.updateLink} autoFocus/>
                    <span className='help-block'>{this.state.state1.helpBlockLink}</span>
                    </div>
                  </div>

                   <div className={'form-group ' + this.state.state1.introduceValidationState}>
                    <label className='col-sm-2 control-label'>Giới thiệu</label>
                   <div className ='col-sm-10 right-inner-addon'>
                     <i className="fa fa-paint-brush"></i>
                      <input type='text' className='form-control' ref='introduceField' value={this.state.state1.introduce}
                      onChange={AddPostActions.updateIntroduce}  />
                      <span className='help-block'>{ this.state.state1.helpBlockIntroduce}</span>
                    </div>
                  </div>
                  <div className={'form-group ' + this.state.state1.dateStartvalidationState}>
                    <label className='col-sm-2 control-label'>Thời gian bắt đầu</label>
                    <div  className ='col-sm-10'>
                      <Datetime value ={this.state.state1.dateStart} onChange={AddPostActions.updateDateStart}/>
                      <span className='help-block'>{this.state.state1.helpBlockDateStart}</span>
                    </div>
                  </div>
                  <div className={'form-group ' + this.state.state1.pictureURLvalidationState}>
                   <label className='col-sm-2 control-label'>Link hình ảnh</label>
                  <div className ='col-sm-10 right-inner-addon'>
                    <i className="fa fa-paint-brush"></i>
                     <input type='text' className='form-control' ref='pictureField' value={this.state.state1.pictureURL}
                     onChange={AddPostActions.updatepictureURL}  />
                     <span className='help-block'>{ this.state.state1.helpBlockPictureURL}</span>
                   </div>
                 </div>
                    <div className={'form-group ' + this.state.state1.contentValidationState}>
                    <label className='col-sm-2 control-label'>Nội dung</label>
                      <div  className ='col-sm-10'>
                      <textarea id ='ckedit' value ={this.state.state1.content} ref ='body' ></textarea>
                      <span className='help-block'>{this.state.state1.helpBlockContent}</span>
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


export default AddPost;
